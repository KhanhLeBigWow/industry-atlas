/* ============================================================
   Industry Atlas - Quotes (the finviz heat layer)
   Live prices via a bring-your-own FREE Finnhub API key
   (finnhub.io: free tier, 60 calls/min, CORS-enabled).
   Key stored ONLY in this browser; 5-minute quote cache.
   The whole platform works without it - this adds live heat.
   ============================================================ */
(function () {
  "use strict";
  var KEY_NAME = "atlas2-finnhub-key";
  var CACHE_TTL = 5 * 60 * 1000;
  var mem = {};

  function getKey() { try { return localStorage.getItem(KEY_NAME) || ""; } catch (e) { return ""; } }
  function setKey(k) { try { k ? localStorage.setItem(KEY_NAME, k) : localStorage.removeItem(KEY_NAME); } catch (e) {} }

  function fetchQuote(sym) {
    if (!sym) return Promise.resolve(null);
    var key = getKey();
    if (!key) return Promise.resolve(null);
    var hit = mem[sym];
    if (hit && (new Date().getTime() - hit.t) < CACHE_TTL) return Promise.resolve(hit.d);
    return fetch("https://finnhub.io/api/v1/quote?symbol=" + encodeURIComponent(sym) + "&token=" + encodeURIComponent(key))
      .then(function (r) {
        if (r.status === 401 || r.status === 403) throw new Error("key rejected");
        if (r.status === 429) throw new Error("rate limited");
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (q) {
        if (!q || !q.c) return null;                      /* unknown symbol on free tier */
        var d = { price: q.c, chg: q.d, pct: q.dp };
        mem[sym] = { t: new Date().getTime(), d: d };
        return d;
      })
      .catch(function (e) { if (e.message === "key rejected") setKey(""); return null; });
  }

  function heatColor(pct) {
    if (pct == null) return "var(--surface-3)";
    var capped = Math.max(-4, Math.min(4, pct)) / 4;      /* finviz-style +/-4% saturation */
    var strength = Math.round(Math.abs(capped) * 62) + 14;
    return "color-mix(in srgb, " + (capped >= 0 ? "var(--status-good)" : "var(--status-critical)") + " " + strength + "%, var(--surface-2))";
  }

  function fmtPct(p) { return p == null ? "" : (p >= 0 ? "+" : "(") + Math.abs(p).toFixed(2) + "%" + (p >= 0 ? "" : ")"); }

  /* small key-setup card */
  function keyCard(container, onSaved) {
    container.innerHTML =
      '<div class="card" style="max-width:560px"><h4>⚡ Enable live market heat (free)</h4>' +
      '<p class="small muted">Prices come from your own free Finnhub key (finnhub.io → sign up → copy the API key; the free tier is plenty). The key is stored only in this browser, like the AI assistant\'s. Without it, everything else works normally.</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap"><input id="fh-key" type="password" placeholder="Finnhub API key" style="flex:1;min-width:200px;padding:9px 12px;border-radius:9px;border:1px solid var(--hairline);background:var(--surface-2);color:var(--ink);font-family:var(--font-mono);font-size:.8rem">' +
      '<button class="btn btn-sm btn-primary" id="fh-save">Save locally</button></div></div>';
    container.querySelector("#fh-save").addEventListener("click", function () {
      var v = container.querySelector("#fh-key").value.trim();
      if (v) { setKey(v); if (onSaved) onSaved(); }
    });
  }

  /* the finviz strip: company tiles colored by daily % move */
  function renderHeatStrip(container) {
    var companies = Object.keys(window.ATLAS_COMPANIES || {})
      .map(function (k) { return window.ATLAS_COMPANIES[k]; })
      .filter(function (c) { return c.ticker; });
    if (!getKey()) { keyCard(container, function () { renderHeatStrip(container); }); return; }
    container.innerHTML = '<div class="heat-strip">' + companies.map(function (c) {
      return '<a class="heat-tile" id="ht-' + c.id + '" href="company.html?id=' + c.id + '" title="' + c.name + '">' +
        '<b>' + c.ticker + "</b><span>…</span></a>";
    }).join("") + "</div>" +
      '<p class="figure-note">Daily % change · your free Finnhub key, stored locally · 5-minute cache · green/red saturates at ±4% (finviz convention). <a href="#" id="fh-forget">Forget key</a></p>';
    container.querySelector("#fh-forget").addEventListener("click", function (e) {
      e.preventDefault(); setKey(""); renderHeatStrip(container);
    });
    companies.forEach(function (c, i) {
      setTimeout(function () {
        fetchQuote(c.ticker).then(function (q) {
          var t = document.getElementById("ht-" + c.id);
          if (!t) return;
          if (!q) { t.querySelector("span").textContent = "n/a"; return; }
          t.style.background = heatColor(q.pct);
          t.querySelector("span").textContent = fmtPct(q.pct);
        });
      }, i * 250);                                        /* stay far under 60/min */
    });
  }

  /* live price pill for a company page hero */
  function renderPricePill(container, ticker) {
    if (!ticker) return;
    if (!getKey()) {
      container.innerHTML = '<a href="markets.html#heat" class="pill" title="Enable live quotes on the Market Map page">⚡ enable live quote</a>';
      return;
    }
    fetchQuote(ticker).then(function (q) {
      if (!q) { container.innerHTML = '<span class="pill">' + ticker + " · n/a</span>"; return; }
      var up = q.pct >= 0;
      container.innerHTML = '<span class="pill" style="border-color:' + (up ? "var(--status-good)" : "var(--status-critical)") + ';color:' + (up ? "var(--pos)" : "var(--neg)") + '">' +
        ticker + " $" + q.price.toFixed(2) + " · " + fmtPct(q.pct) + "</span>";
    });
  }

  window.AtlasQuotes = { getKey: getKey, fetchQuote: fetchQuote, renderHeatStrip: renderHeatStrip, renderPricePill: renderPricePill };
})();
