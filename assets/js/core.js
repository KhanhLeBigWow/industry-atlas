/* ============================================================
   Industry Atlas - core engine
   Registry, chrome (header/footer/search), lenses, progress,
   quiz engine, formatting. Pages declare:
     <html data-page="industry|home|graph|map|library" data-root=".">
   Data files must load BEFORE this script.
   ============================================================ */
(function () {
  "use strict";

  var docEl = document.documentElement;
  var PAGE = docEl.getAttribute("data-page") || "home";
  var ROOT = docEl.getAttribute("data-root") || ".";

  /* ---------- store ---------- */
  var TAX = window.ATLAS_TAXONOMY || { sectors: [], industries: [] };
  var MODULES = window.ATLAS_INDUSTRIES || {};
  var GRAPH = window.ATLAS_GRAPH || { nodes: [], edges: [] };
  var KPIS = window.ATLAS_KPIS || [];
  var COUNTRIES = window.ATLAS_COUNTRIES || [];
  var COMPANIES = window.ATLAS_COMPANIES || {};

  /* the manifest carries status/size/geo for every profiled industry so pages
     can stay light and load only the module they actually need */
  var MANIFEST = (window.ATLAS_MANIFEST || { industries: {} }).industries || {};

  var store = {
    sectors: TAX.sectors,
    industries: TAX.industries.map(function (t) {
      var mod = MODULES[t.id] || null;
      var man = MANIFEST[t.id] || null;
      return Object.assign({}, t, {
        module: mod,
        manifest: man,
        status: mod ? (mod.meta.status || "profile") : (man ? man.status : "stub"),
        marketSize: mod ? mod.meta.marketSize : (man ? man.marketSize : null)
      });
    }),
    modules: MODULES, graph: GRAPH, kpis: KPIS, countries: COUNTRIES,
    companies: COMPANIES
  };
  store.industryById = {};
  store.industries.forEach(function (i) { store.industryById[i.id] = i; });
  store.sectorById = {};
  store.sectors.forEach(function (s) { store.sectorById[s.id] = s; });
  store.kpiById = {};
  KPIS.forEach(function (k) { store.kpiById[k.id] = k; });

  /* edges touching an industry */
  function edgesFor(id) {
    return GRAPH.edges.filter(function (e) { return e.from === id || e.to === id; });
  }

  /* ---------- formatting ---------- */
  function round(n, d) { var p = Math.pow(10, d == null ? 1 : d); return Math.round(n * p) / p; }
  function paren(s, neg) { return neg ? "(" + s + ")" : s; }
  var fmt = {
    num: function (n, d) { var neg = n < 0; return paren(Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: d || 0, minimumFractionDigits: d || 0 }), neg); },
    money: function (n, d) { var neg = n < 0; return paren("$" + Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: d || 0 }), neg); },
    big: function (n, unit) { return "$" + n.toLocaleString("en-US") + (unit || "B"); },
    pct: function (n, d) { var neg = n < 0; return paren(round(Math.abs(n), d == null ? 1 : d) + "%", neg); },
    mult: function (n, d) { var neg = n < 0; return paren(round(Math.abs(n), d == null ? 1 : d).toFixed(d == null ? 1 : d) + "x", neg); }
  };

  /* ---------- DOM helpers ---------- */
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function href(p) { return ROOT + "/" + p; }
  function indLink(id, label) {
    var ind = store.industryById[id];
    var name = label || (ind ? ind.name : id);
    return '<a href="' + href("industry.html?id=" + id) + '">' + esc(name) + "</a>";
  }
  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function bind(id, format) {
    var input = document.getElementById(id);
    if (!input) return { get value() { return 0; } };
    var row = input.closest(".slider-row");
    var out = row ? row.querySelector("output") : null;
    function refresh() { if (out) out.textContent = format ? format(parseFloat(input.value)) : input.value; }
    input.addEventListener("input", refresh); refresh();
    return { get value() { return parseFloat(input.value); }, set value(v) { input.value = v; refresh(); }, el: input };
  }
  function onInput(ids, handler) {
    ids.forEach(function (id) {
      var n = document.getElementById(id);
      if (!n) return;
      n.addEventListener("input", handler);
      if (n.tagName === "SELECT") n.addEventListener("change", handler);
    });
    handler();
  }

  /* ---------- edge type colors ---------- */
  var EDGE_TYPES = {
    supply: { color: "var(--viz-1)", raw: "#3987e5", label: "Supply" },
    demand: { color: "var(--viz-2)", raw: "#199e70", label: "Demand" },
    capital: { color: "var(--viz-3)", raw: "#c98500", label: "Capital" },
    data: { color: "var(--viz-5)", raw: "#9085e9", label: "Data" },
    risk: { color: "var(--viz-6)", raw: "#e66767", label: "Risk" },
    talent: { color: "var(--viz-7)", raw: "#d55181", label: "Talent" },
    geo: { color: "var(--viz-8)", raw: "#d95926", label: "Geopolitics" },
    tech: { color: "var(--viz-4)", raw: "#008300", label: "Technology" }
  };

  /* ---------- search ---------- */
  var searchIndex = null;
  function buildIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    store.industries.forEach(function (i) {
      searchIndex.push({ kind: "Industry", name: i.name, sub: store.sectorById[i.sector] ? store.sectorById[i.sector].name : "", url: href("industry.html?id=" + i.id), hay: (i.name + " " + (i.aliases || []).join(" ") + " " + (i.blurb || "")).toLowerCase() });
    });
    KPIS.forEach(function (k) {
      searchIndex.push({ kind: "KPI", name: k.name, sub: (k.industries || []).join(", "), url: href("library.html#" + k.id), hay: (k.name + " " + k.definition).toLowerCase() });
    });
    COUNTRIES.forEach(function (c) {
      searchIndex.push({ kind: "Country", name: c.name, sub: "world map", url: href("map.html#" + c.code), hay: (c.name + " " + (c.industries || []).join(" ")).toLowerCase() });
    });
    Object.keys(COMPANIES).forEach(function (k) {
      var co = COMPANIES[k];
      searchIndex.push({ kind: "Company", name: co.name, sub: co.role, url: href("company.html?id=" + k), hay: (co.name + " " + co.full + " " + co.role).toLowerCase() });
    });
    store.sectors.forEach(function (s) {
      searchIndex.push({ kind: "Sector", name: s.name, sub: "sector", url: href("index.html#" + s.id), hay: s.name.toLowerCase() });
    });
    return searchIndex;
  }
  function search(q, limit) {
    q = (q || "").trim().toLowerCase();
    if (!q) return [];
    var idx = buildIndex();
    var scored = [];
    idx.forEach(function (item) {
      var nl = item.name.toLowerCase();
      var s = -1;
      if (nl === q) s = 100;
      else if (nl.indexOf(q) === 0) s = 80;
      else if (nl.indexOf(q) !== -1) s = 60;
      else if (item.hay.indexOf(q) !== -1) s = 30;
      if (s > 0) scored.push({ item: item, s: s });
    });
    scored.sort(function (a, b) { return b.s - a.s || a.item.name.localeCompare(b.item.name); });
    return scored.slice(0, limit || 8).map(function (x) { return x.item; });
  }
  function wireSearch(input, resultsBox) {
    function render() {
      var hits = search(input.value, 9);
      if (!hits.length) { resultsBox.classList.remove("open"); resultsBox.innerHTML = ""; return; }
      resultsBox.innerHTML = hits.map(function (h) {
        return '<a class="hs-item" href="' + h.url + '"><span class="hs-kind">' + h.kind + "</span><span>" + esc(h.name) + '</span><span class="sub">' + esc(h.sub) + "</span></a>";
      }).join("");
      resultsBox.classList.add("open");
    }
    input.addEventListener("input", render);
    input.addEventListener("focus", render);
    document.addEventListener("click", function (e) {
      if (!resultsBox.contains(e.target) && e.target !== input) resultsBox.classList.remove("open");
    });
  }

  /* ---------- lenses ---------- */
  var LENSES = ["Student", "Executive", "Investor", "Operator", "Consultant"];
  function getLens() { try { return localStorage.getItem("atlas2-lens") || "Student"; } catch (e) { return "Student"; } }
  function setLens(l) {
    try { localStorage.setItem("atlas2-lens", l); } catch (e) {}
    document.querySelectorAll(".lens[data-lens]").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lens") === l); });
    document.dispatchEvent(new CustomEvent("atlas:lens", { detail: l }));
  }

  /* ---------- progress ---------- */
  var PKEY = "industry-atlas-progress-v1";
  function loadP() { try { return JSON.parse(localStorage.getItem(PKEY)) || {}; } catch (e) { return {}; } }
  var pdata = loadP();
  function saveP() { try { localStorage.setItem(PKEY, JSON.stringify(pdata)); } catch (e) {} }
  var progress = {
    markSeen: function (id, sec, total) { var m = pdata[id] = pdata[id] || { seen: {}, total: 0, quiz: null }; m.seen[sec] = true; m.total = total; saveP(); },
    setQuiz: function (id, score, total) { var m = pdata[id] = pdata[id] || { seen: {}, total: 0, quiz: null }; if (!m.quiz || score > m.quiz.score) m.quiz = { score: score, total: total }; saveP(); },
    pct: function (id) {
      var m = pdata[id]; if (!m) return 0;
      var sp = m.total ? Math.min(1, Object.keys(m.seen).length / m.total) : 0;
      var qp = m.quiz && m.quiz.total ? m.quiz.score / m.quiz.total : 0;
      return Math.round(70 * sp + 30 * qp);
    }
  };

  /* ---------- quiz engine ---------- */
  function quiz(selector, questions, industryId) {
    var root = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!root || !questions || !questions.length) return;
    var i = 0, score = 0, answered = false;
    root.classList.add("quiz");
    function renderQ() {
      answered = false;
      var q = questions[i];
      root.innerHTML = "";
      root.appendChild(el("div", { class: "quiz-progress", text: "Knowledge check · " + (i + 1) + " of " + questions.length }));
      root.appendChild(el("div", { class: "quiz-q", text: q.q }));
      var choices = el("div", { class: "quiz-choices" });
      q.choices.forEach(function (c, ci) {
        var b = el("button", { class: "quiz-choice", type: "button", text: c });
        b.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          if (ci === q.answer) { b.classList.add("correct"); score++; }
          else { b.classList.add("incorrect"); choices.children[q.answer].classList.add("correct"); }
          Array.prototype.forEach.call(choices.children, function (x) { x.disabled = true; });
          if (q.explain) choices.parentNode.insertBefore(el("div", { class: "quiz-explain", text: q.explain }), actions);
          next.style.display = "";
        });
        choices.appendChild(b);
      });
      root.appendChild(choices);
      var actions = el("div", { class: "quiz-actions" });
      var next = el("button", { class: "btn btn-primary btn-sm", type: "button", text: i === questions.length - 1 ? "See results" : "Next" });
      next.style.display = "none";
      next.addEventListener("click", function () { i++; i >= questions.length ? renderR() : renderQ(); });
      actions.appendChild(next);
      root.appendChild(actions);
    }
    function renderR() {
      if (industryId) progress.setQuiz(industryId, score, questions.length);
      root.innerHTML = "";
      var r = el("div", { class: "quiz-result" });
      r.appendChild(el("div", { class: "quiz-progress", text: "Complete" }));
      r.appendChild(el("div", { class: "big", text: score + " / " + questions.length }));
      r.appendChild(el("p", { class: "muted", text: score === questions.length ? "Perfect. You own this material." : score >= questions.length * 0.7 ? "Strong. Review what you missed." : "Worth another pass through the sections above." }));
      var retry = el("button", { class: "btn btn-sm", type: "button", text: "Retake" });
      retry.addEventListener("click", function () { i = 0; score = 0; renderQ(); });
      r.appendChild(retry);
      root.appendChild(r);
    }
    renderQ();
  }

  /* ---------- chrome ---------- */
  function buildHeader() {
    var header = el("header", { class: "site-header" });
    var brand = el("a", { class: "brand", href: href("index.html") });
    brand.appendChild(el("span", { class: "brand-mark", text: "IA" }));
    brand.appendChild(el("span", { text: "Industry Atlas" }));
    header.appendChild(brand);

    var hs = el("div", { class: "hsearch" });
    hs.appendChild(el("span", { class: "hs-icon", text: "⌕" }));
    var input = el("input", { type: "search", placeholder: "Search the atlas…  (Ctrl K)", "aria-label": "Search" });
    var results = el("div", { class: "hs-results" });
    hs.appendChild(input); hs.appendChild(results);
    header.appendChild(hs);
    wireSearch(input, results);

    /* keyboard: Ctrl/Cmd+K or "/" jumps to search from anywhere */
    document.addEventListener("keydown", function (e) {
      var typing = /input|textarea|select/i.test((document.activeElement || {}).tagName || "");
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault(); input.focus(); input.select();
      } else if (e.key === "/" && !typing) {
        e.preventDefault(); input.focus();
      }
    });

    var LINKS = [
      { t: "Industries", h: "index.html#industries", k: "home" },
      { t: "Markets", h: "markets.html", k: "markets" },
      { t: "Terminal", h: "news.html", k: "news" },
      { t: "Graph", h: "graph.html", k: "graph" },
      { t: "Map", h: "map.html", k: "map" },
      { t: "Library", h: "library.html", k: "library" },
      { t: "Finance School", h: "school/index.html", k: "school" }
    ];
    var nav = el("nav", { class: "header-nav" });
    LINKS.forEach(function (l) {
      var a = el("a", { href: href(l.h), text: l.t });
      if (l.k === PAGE) a.className = "active";
      nav.appendChild(a);
    });

    /* mobile menu (burger shows <= 720px where nav links are hidden) */
    var burger = el("button", { class: "icon-btn nav-burger keep", "aria-label": "Open menu", html: "&#9776;" });
    var mm = el("div", { class: "mobile-menu" });
    LINKS.forEach(function (l) {
      mm.appendChild(el("a", { href: href(l.h), text: l.t }));
    });
    burger.addEventListener("click", function () { document.body.classList.toggle("mm-open"); });
    mm.addEventListener("click", function (e) { if (e.target.closest("a")) document.body.classList.remove("mm-open"); });
    var theme = el("button", { class: "theme-toggle keep", "aria-label": "Switch between light and dark mode", title: "Switch light / dark mode" });
    function ic() {
      var dark = docEl.getAttribute("data-theme") !== "light";
      theme.innerHTML = '<span class="dot"></span><span class="tt-label">' + (dark ? "&#9728; Light mode" : "&#9790; Dark mode") + "</span>";
    }
    theme.addEventListener("click", function () {
      var next = docEl.getAttribute("data-theme") === "light" ? "dark" : "light";
      docEl.setAttribute("data-theme", next);
      try { localStorage.setItem("atlas2-theme", next); } catch (e) {}
      ic();
      document.dispatchEvent(new CustomEvent("atlas:theme"));
    });
    ic();
    nav.appendChild(theme);
    nav.appendChild(burger);
    header.appendChild(nav);
    header.appendChild(mm);
    document.body.insertBefore(header, document.body.firstChild);
  }
  function buildFooter() {
    var built = store.industries.filter(function (i) { return i.status !== "stub"; }).length;
    var cos = Object.keys(window.ATLAS_COMPANIES || {}).length;
    function links(list) {
      return list.map(function (l) {
        return '<a href="' + (l[1].indexOf("http") === 0 ? l[1] : href(l[1])) + '"' + (l[1].indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + ">" + esc(l[0]) + "</a>";
      }).join("");
    }
    var f = el("footer", { class: "site-footer" });
    f.innerHTML =
      '<div class="wrap sf-grid">' +
        '<div class="sf-brand"><span class="brand-mark">IA</span>' +
          "<p><b>Industry Atlas</b><br>The connected map of the global economy: " + store.industries.length +
          " industries (" + built + " profiled in depth), " + cos + " companies, 44 economies, one knowledge graph. All free.</p>" +
          '<p class="sf-fine">Educational reference. Figures are estimates unless sourced; nothing here is investment advice.</p></div>' +
        '<div class="sf-col"><div class="sf-h">Explore</div>' + links([
          ["The market map", "markets.html"], ["The terminal", "news.html"], ["Knowledge graph", "graph.html"],
          ["World map", "map.html"], ["KPI library", "library.html"], ["All industries", "index.html#industries"], ["All companies", "index.html#companies"]
        ]) + "</div>" +
        '<div class="sf-col"><div class="sf-h">Sectors</div>' + links(store.sectors.slice(0, 7).map(function (s) {
          return [(s.icon || "") + " " + s.name.split(",")[0], "index.html#" + s.id];
        })) + "</div>" +
        '<div class="sf-col"><div class="sf-h">Learn & build</div>' + links([
          ["Finance School", "school/index.html"], ["Interview prep", "school/interview-prep.html"],
          ["The lateral guide", "school/lateral.html"], ["Firms & groups", "school/groups.html"],
          ["The toolkit (calculators)", "school/toolkit.html"],
          ["Live market heat setup", "markets.html#heat"], ["Architecture notes", "https://github.com/KhanhLeBigWow/industry-atlas/blob/main/docs/ARCHITECTURE.md"],
          ["Source on GitHub", "https://github.com/KhanhLeBigWow/industry-atlas"]
        ]) + "</div>" +
      "</div>";
    document.body.appendChild(f);
  }

  /* ---------- structured docs sidebar (the library rail) ----------
     Called by content pages AFTER they render their sections. Wraps the
     page in a docs layout: sticky left rail with on-page sections plus the
     whole atlas tree, so every section is one click away, always. */
  function buildDocSide(opts) {
    opts = opts || {};
    var main = document.getElementById("main") || document.querySelector("main");
    var blocks = Array.prototype.slice.call(document.querySelectorAll("section.block[id]"));
    if (!main || main.classList.contains("doc-layout")) return;

    var side = el("aside", { class: "doc-side", "aria-label": "Document navigation" });

    if (blocks.length) {
      side.appendChild(el("div", { class: "ds-label", text: "On this page" }));
      blocks.forEach(function (b) {
        var h = b.querySelector("h2");
        var t = h ? h.textContent.replace(/^[\d.b]+\s*/, "").trim() : b.id;
        side.appendChild(el("a", { href: "#" + b.id, "data-sec": b.id, text: t }));
      });
    }

    side.appendChild(el("div", { class: "ds-label", text: "The atlas" }));
    [["Market map", "markets.html"], ["Terminal (news)", "news.html"], ["Knowledge graph", "graph.html"],
     ["World map", "map.html"], ["KPI library", "library.html"], ["Finance School", "school/index.html"]]
      .forEach(function (l) { side.appendChild(el("a", { href: href(l[1]), text: l[0] })); });

    var tree = el("div", { class: "ds-tree" });
    tree.appendChild(el("div", { class: "ds-label", text: "Profiled industries" }));
    store.sectors.forEach(function (s) {
      var built = store.industries.filter(function (i) { return i.sector === s.id && i.status !== "stub"; });
      if (!built.length) return;
      tree.appendChild(el("div", { class: "ds-sec", text: (s.icon || "") + " " + s.name }));
      built.forEach(function (i) {
        var a = el("a", { href: href("industry.html?id=" + i.id) });
        a.innerHTML = esc(i.name) + ' <span class="badge-status badge-' + i.status + '">' + (i.status === "full" ? "F" : "P") + "</span>";
        if (opts.currentId === i.id) a.classList.add("active");
        tree.appendChild(a);
      });
    });
    side.appendChild(tree);

    /* wrap: main becomes the grid, existing content moves into .doc-main */
    var mainInner = el("div", { class: "doc-main" });
    while (main.firstChild) mainInner.appendChild(main.firstChild);
    main.classList.add("doc-layout");
    main.appendChild(side);
    main.appendChild(mainInner);
    document.body.classList.add("has-docside");
  }

  /* ---------- section spy (industry pages) ---------- */
  function spy(industryId) {
    var blocks = Array.prototype.slice.call(document.querySelectorAll("section.block[id]"));
    if (!blocks.length) return;
    var total = blocks.length;
    function setActive(id) {
      document.querySelectorAll(".section-nav a, .doc-side a[data-sec]").forEach(function (a) {
        var target = a.getAttribute("data-sec") || (a.getAttribute("href") || "").replace("#", "");
        a.classList.toggle("active", target === id);
      });
    }
    if ("IntersectionObserver" in window) {
      var ob = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (en.isIntersecting) {
            setActive(en.target.id);
            if (industryId) progress.markSeen(industryId, en.target.id, total);
          }
        });
      }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
      blocks.forEach(function (b) { ob.observe(b); });
    }
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    document.dispatchEvent(new CustomEvent("atlas:ready"));
  });

  /* ---------- public API ---------- */
  window.Atlas = {
    store: store, page: PAGE, root: ROOT,
    edgesFor: edgesFor, EDGE_TYPES: EDGE_TYPES,
    fmt: fmt, el: el, esc: esc, href: href, indLink: indLink, param: param,
    bind: bind, onInput: onInput,
    search: search, wireSearch: wireSearch,
    LENSES: LENSES, getLens: getLens, setLens: setLens,
    progress: progress, quiz: quiz, spy: spy, buildDocSide: buildDocSide
  };
})();
