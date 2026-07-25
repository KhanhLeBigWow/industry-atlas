/* ============================================================
   Industry Atlas - News Desk
   Free, keyless, client-side news via the GDELT 2.0 DOC API
   (CORS-open, global coverage, updates every 15 minutes).
   Results cached in localStorage for 30 minutes per query.
   No server, no key, no cost - the Bloomberg-terminal feel on
   a static site.
   ============================================================ */
(function () {
  "use strict";
  var CACHE_PREFIX = "atlas2-news-";
  var CACHE_TTL = 30 * 60 * 1000; /* 30 min */

  function cacheGet(key) {
    try {
      var raw = localStorage.getItem(CACHE_PREFIX + key);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (new Date().getTime() - obj.t > CACHE_TTL) return null;
      return obj.d;
    } catch (e) { return null; }
  }
  function cacheSet(key, data) {
    try {
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ t: new Date().getTime(), d: data }));
    } catch (e) { /* storage full: fine, just uncached */ }
  }

  /* Daily snapshot fallback: a GitHub Action saves the desk headlines to
     assets/data/news-snapshot.json once a day, so the Terminal still shows
     the last daily sweep when GDELT is slow, rate-limited, or blocked. */
  var snapPromise = null;
  function loadSnapshot() {
    if (!snapPromise) {
      snapPromise = fetch("assets/data/news-snapshot.json").then(function (r) {
        if (!r.ok) throw new Error("no snapshot");
        return r.json();
      }).catch(function () { return null; });
    }
    return snapPromise;
  }

  /* build a GDELT query for an industry or company */
  function queryFor(entity) {
    if (entity.newsQuery) return entity.newsQuery;
    var terms = ['"' + entity.name.replace(/&/g, "") + '"'];
    (entity.aliases || []).slice(0, 2).forEach(function (a) {
      if (a.length > 3) terms.push('"' + a + '"');
    });
    return terms.length > 1 ? "(" + terms.join(" OR ") + ")" : terms[0];
  }

  function fmtDate(seendate) {
    /* GDELT format: 20260725T143000Z */
    if (!seendate || seendate.length < 8) return "";
    var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return m[parseInt(seendate.slice(4, 6), 10) - 1] + " " + parseInt(seendate.slice(6, 8), 10) +
      " · " + seendate.slice(9, 11) + ":" + seendate.slice(11, 13) + "z";
  }

  /* GDELT politely rate-limits rapid consecutive queries from one IP, so all
     network fetches flow through a queue with ~4.5s spacing, and each request
     gets one delayed retry. Cached queries skip the queue entirely. */
  var queue = Promise.resolve();
  var lastFetch = 0;
  function throttledFetch(url) {
    var run = function () {
      var wait = Math.max(0, 4500 - (new Date().getTime() - lastFetch));
      return new Promise(function (res) { setTimeout(res, wait); }).then(function () {
        lastFetch = new Date().getTime();
        return fetch(url);
      });
    };
    var attempt = queue.then(run).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r;
    }).catch(function () {
      /* one retry after a courtesy pause */
      return new Promise(function (res) { setTimeout(res, 6000); }).then(function () {
        lastFetch = new Date().getTime();
        return fetch(url);
      });
    });
    queue = attempt.catch(function () {});   /* keep the chain alive on failure */
    return attempt;
  }

  function fetchNews(query, opts) {
    opts = opts || {};
    /* GDELT accepts 1d/3d/1w style timespans but rejects hour-forms like
       "24h" with a CORS-less error page; normalize defensively */
    if (opts.timespan === "24h") opts.timespan = "1d";
    var key = query + "|" + (opts.timespan || "3d");
    var cached = cacheGet(key);
    if (cached) return Promise.resolve(cached);
    var url = "https://api.gdeltproject.org/api/v2/doc/doc?query=" +
      encodeURIComponent(query + " sourcelang:eng") +
      "&mode=ArtList&maxrecords=" + (opts.max || 12) +
      "&timespan=" + (opts.timespan || "3d") +
      "&sort=hybridrel&format=json";
    return throttledFetch(url).then(function (r) {
      if (!r.ok) throw new Error("news feed HTTP " + r.status);
      return r.json();
    }).then(function (data) {
      var seen = {};
      var arts = (data.articles || []).filter(function (a) {
        var t = (a.title || "").toLowerCase().slice(0, 60);
        if (!a.title || seen[t]) return false;
        seen[t] = true;
        return true;
      }).map(function (a) {
        return { title: a.title, url: a.url, domain: a.domain, when: fmtDate(a.seendate) };
      });
      cacheSet(key, arts);
      return arts;
    }).catch(function (err) {
      /* live wire failed: fall back to the committed daily snapshot */
      return loadSnapshot().then(function (snap) {
        var arts = snap && snap.queries && snap.queries[query];
        if (arts && arts.length) {
          var copy = arts.slice(0, opts.max || 12);
          copy.snapshot = snap.generated || "earlier today";
          return copy;
        }
        throw err;
      });
    });
  }

  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  /* render a headline list into a container */
  function render(container, query, opts) {
    opts = opts || {};
    container.innerHTML = '<div class="news-list"><div class="news-skel">Scanning the wires…</div></div>';
    fetchNews(query, opts).then(function (arts) {
      if (!arts.length) {
        container.innerHTML = '<div class="news-list"><div class="news-skel">No fresh coverage found for this query in the last ' + (opts.timespan || "3d").replace("d", " days") + ". The wire updates every 15 minutes; try again later.</div></div>";
        return;
      }
      var snapStamp = arts.snapshot;
      container.innerHTML =
        '<div class="news-list">' + arts.slice(0, opts.max || 10).map(function (a) {
          return '<a class="news-item" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
            '<span class="news-when">' + esc(a.when) + '</span>' +
            '<span><span class="news-title">' + esc(a.title) + '</span><br><span class="news-src">' + esc(a.domain) + "</span></span></a>";
        }).join("") + "</div>" +
        '<div class="news-note"><span>' + (snapStamp
          ? "From the daily snapshot (" + esc(snapStamp) + ") · the live wire was unreachable · headlines link to the original source"
          : "Live from the GDELT global news index · headlines link to the original source · refreshed on load (30 min cache)") + "</span>" +
        '<span>Coverage ≠ endorsement; verify before trading on anything.</span></div>';
    }).catch(function (err) {
      container.innerHTML = '<div class="news-list"><div class="news-skel">News feed unavailable right now (' + esc(err.message) + "). The rest of the atlas works offline; headlines need a connection.</div></div>";
    });
  }

  window.AtlasNews = { queryFor: queryFor, fetch: fetchNews, render: render };
})();
