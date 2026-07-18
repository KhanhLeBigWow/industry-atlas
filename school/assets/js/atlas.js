/* ============================================================
   Capital Atlas - app shell
   Builds page chrome (header, sidebar, footer, prev/next) from
   the curriculum manifest, tracks progress in localStorage,
   and provides the quiz engine + interactive helpers.
   Pages declare:  <html data-module="valuation" data-root="..">
   ============================================================ */
(function () {
  "use strict";

  var CUR = window.ATLAS_CURRICULUM || { modules: [], paths: [], siteName: "Capital Atlas" };
  var docEl = document.documentElement;
  var MODULE_ID = docEl.getAttribute("data-module") || "home";
  var ROOT = docEl.getAttribute("data-root") || ".";
  var MOD = CUR.modules.find(function (m) { return m.id === MODULE_ID; }) || null;
  var STORE_KEY = "atlas-progress-v1";

  /* ---------- storage ---------- */
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore(s) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) { /* private mode */ }
  }
  var store = loadStore();

  var progress = {
    data: store,
    get: function (id) { return store[id] || { seen: {}, total: 0, quiz: null }; },
    markSeen: function (id, secId, total) {
      var m = store[id] = store[id] || { seen: {}, total: 0, quiz: null };
      m.seen[secId] = true; m.total = total; saveStore(store);
    },
    setQuiz: function (id, score, total) {
      var m = store[id] = store[id] || { seen: {}, total: 0, quiz: null };
      if (!m.quiz || score > m.quiz.score) m.quiz = { score: score, total: total };
      saveStore(store);
    },
    pct: function (id) {
      var m = store[id]; if (!m) return 0;
      var seenN = Object.keys(m.seen || {}).length;
      var secPart = m.total ? Math.min(1, seenN / m.total) : 0;
      var quizPart = m.quiz && m.quiz.total ? m.quiz.score / m.quiz.total : 0;
      return Math.round(70 * secPart + 30 * quizPart);
    },
    done: function (id) { return progress.pct(id) >= 95; }
  };

  /* ---------- formatting helpers ---------- */
  function round(n, d) { var p = Math.pow(10, d == null ? 1 : d); return Math.round(n * p) / p; }
  function paren(s, neg) { return neg ? "(" + s + ")" : s; }
  var fmt = {
    num: function (n, d) {
      var neg = n < 0; var v = Math.abs(n);
      var s = v.toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
      return paren(s, neg);
    },
    money: function (n, d) {
      var neg = n < 0; var v = Math.abs(n);
      var s = "$" + v.toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
      return paren(s, neg);
    },
    moneyM: function (n, d) {   /* n in $M */
      var neg = n < 0; var v = Math.abs(n); var s;
      if (v >= 1000) s = "$" + round(v / 1000, d == null ? 1 : d).toLocaleString("en-US") + "B";
      else s = "$" + round(v, d == null ? 0 : d).toLocaleString("en-US") + "M";
      return paren(s, neg);
    },
    pct: function (n, d) {
      var neg = n < 0; var v = Math.abs(n);
      return paren(round(v, d == null ? 1 : d) + "%", neg);
    },
    mult: function (n, d) {
      var neg = n < 0; var v = Math.abs(n);
      return paren(round(v, d == null ? 1 : d).toFixed(d == null ? 1 : d) + "x", neg);
    }
  };

  /* ---------- finance math ---------- */
  function npv(rate, flows) {  /* flows[0] at t=0 */
    var s = 0;
    for (var t = 0; t < flows.length; t++) s += flows[t] / Math.pow(1 + rate, t);
    return s;
  }
  function irr(flows) {        /* bisection on [-0.95, 10] */
    var lo = -0.95, hi = 10, mid, v;
    var fLo = npv(lo, flows);
    var fHi = npv(hi, flows);
    if (isNaN(fLo) || isNaN(fHi) || fLo * fHi > 0) return NaN;
    for (var i = 0; i < 200; i++) {
      mid = (lo + hi) / 2; v = npv(mid, flows);
      if (Math.abs(v) < 1e-7) break;
      if (v * fLo > 0) { lo = mid; fLo = v; } else { hi = mid; }
    }
    return mid;
  }

  /* ---------- DOM helpers ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }
  function href(path) { return ROOT + "/" + path; }

  /* bind a range input: wires the <output> inside its .slider-row label,
     returns getter. Atlas.onInput(ids, handler) attaches + fires once. */
  function bind(id, format) {
    var input = document.getElementById(id);
    if (!input) return { get value() { return 0; } };
    var row = input.closest(".slider-row");
    var out = row ? row.querySelector("output") : null;
    function refresh() { if (out) out.textContent = format ? format(parseFloat(input.value)) : input.value; }
    input.addEventListener("input", refresh);
    refresh();
    return {
      get value() { return parseFloat(input.value); },
      set value(v) { input.value = v; refresh(); },
      el: input
    };
  }
  function onInput(ids, handler) {
    ids.forEach(function (id) {
      var n = document.getElementById(id);
      if (n) n.addEventListener("input", handler);
      if (n && n.tagName === "SELECT") n.addEventListener("change", handler);
    });
    handler();
  }

  /* ---------- header ---------- */
  function buildHeader() {
    var header = el("header", { class: "site-header" });

    var burger = el("button", { class: "icon-btn", id: "nav-toggle", "aria-label": "Toggle navigation", html: "&#9776;" });
    burger.addEventListener("click", function () { document.body.classList.toggle("nav-open"); });

    var brand = el("a", { class: "brand", href: href("index.html") });
    brand.appendChild(el("span", { class: "brand-mark", text: "CA" }));
    brand.appendChild(el("span", { text: CUR.siteName }));

    var nav = el("nav", { class: "header-nav" });
    var links = [
      { t: "Curriculum", h: "index.html#curriculum" },
      { t: "Learning paths", h: "index.html#paths" },
      { t: "Glossary", h: "glossary.html", id: "glossary" },
      { t: "Industry Atlas ↗", h: "../index.html" }
    ];
    links.forEach(function (l) {
      var a = el("a", { href: href(l.h), text: l.t });
      if (l.id === MODULE_ID) a.className = "active";
      nav.appendChild(a);
    });

    var theme = el("button", { class: "icon-btn keep", "aria-label": "Toggle dark mode", title: "Toggle dark mode" });
    function themeIcon() { theme.innerHTML = docEl.getAttribute("data-theme") === "dark" ? "&#9788;" : "&#9789;"; }
    theme.addEventListener("click", function () {
      var next = docEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      docEl.setAttribute("data-theme", next);
      try { localStorage.setItem("atlas-theme", next); } catch (e) {}
      themeIcon();
    });
    themeIcon();
    nav.appendChild(theme);

    if (MOD || MODULE_ID === "glossary") header.appendChild(burger);
    header.appendChild(brand);
    header.appendChild(nav);
    document.body.insertBefore(header, document.body.firstChild);
  }

  /* ---------- sidebar (module pages + glossary) ---------- */
  function buildSidebar() {
    var main = document.querySelector("main");
    if (!main) return;

    var shell = el("div", { class: "shell" });
    var sidebar = el("aside", { class: "sidebar" });

    /* module list */
    sidebar.appendChild(el("div", { class: "side-label", text: "Curriculum" }));
    CUR.modules.forEach(function (m) {
      var a = el("a", { class: "mod-link" + (m.id === MODULE_ID ? " current" : "") + (progress.done(m.id) ? " done" : ""), href: href(m.file), "data-mod": m.id });
      a.appendChild(el("span", { class: "mod-num", text: m.num }));
      a.appendChild(el("span", { text: m.short }));
      a.appendChild(el("span", { class: "tick", text: "✓" }));
      sidebar.appendChild(a);
    });
    var g = el("a", { class: "mod-link" + (MODULE_ID === "glossary" ? " current" : ""), href: href("glossary.html") });
    g.appendChild(el("span", { class: "mod-num", text: "•" }));
    g.appendChild(el("span", { text: "Glossary" }));
    sidebar.appendChild(g);

    /* on-page TOC */
    var sections = Array.prototype.slice.call(document.querySelectorAll("section.lesson[id]"));
    if (sections.length) {
      sidebar.appendChild(el("div", { class: "side-label", text: "On this page" }));
      var toc = el("nav", { class: "toc" });
      sections.forEach(function (s) {
        var h = s.querySelector("h2");
        var t = h ? h.textContent.replace(/^\s*[\d.]+\s*/, "") : s.id;
        toc.appendChild(el("a", { href: "#" + s.id, "data-sec": s.id, text: t }));
      });
      sidebar.appendChild(toc);
    }

    /* wrap main */
    var parent = main.parentNode;
    parent.insertBefore(shell, main);
    shell.appendChild(sidebar);
    var contentWrap = el("div", { class: "content" });
    var inner = el("div", { class: "content-inner" });
    shell.appendChild(contentWrap);
    contentWrap.appendChild(inner);
    inner.appendChild(main);

    /* close drawer when a link is chosen (mobile) */
    sidebar.addEventListener("click", function (e) {
      if (e.target.closest("a")) document.body.classList.remove("nav-open");
    });

    return sections;
  }

  /* ---------- section tracking (scroll spy + progress) ---------- */
  function trackSections(sections) {
    if (!sections || !sections.length || !MOD) return;
    var total = sections.length;
    var saved = progress.get(MODULE_ID).seen || {};

    sections.forEach(function (s) {
      if (saved[s.id]) markToc(s.id, "seen");
    });

    function markToc(id, cls) {
      var a = document.querySelector('.toc a[data-sec="' + id + '"]');
      if (a) a.classList.add(cls);
    }
    function setActive(id) {
      document.querySelectorAll(".toc a").forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("data-sec") === id);
      });
    }

    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            setActive(en.target.id);
            progress.markSeen(MODULE_ID, en.target.id, total);
            markToc(en.target.id, "seen");
            refreshModTicks();
          }
        });
      }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }
  function refreshModTicks() {
    document.querySelectorAll(".mod-link[data-mod]").forEach(function (a) {
      a.classList.toggle("done", progress.done(a.getAttribute("data-mod")));
    });
  }

  /* ---------- module hero meta + accent ---------- */
  function decorateModule() {
    if (!MOD) return;
    docEl.style.setProperty("--mod-accent", MOD.accent);
    var meta = document.querySelector(".hero-meta");
    if (meta && !meta.getAttribute("data-manual")) {
      var lv = el("span", { class: "pill pill-" + MOD.level.toLowerCase(), text: MOD.level });
      var mins = el("span", { class: "pill", text: "≈ " + MOD.minutes + " min" });
      var idx = el("span", { class: "pill", text: "Module " + MOD.num + " of " + String(CUR.modules.length).padStart(2, "0") });
      meta.insertBefore(mins, meta.firstChild);
      meta.insertBefore(lv, meta.firstChild);
      meta.appendChild(idx);
    }
  }

  /* ---------- prev / next ---------- */
  function buildPrevNext() {
    if (!MOD) return;
    var i = CUR.modules.indexOf(MOD);
    var prev = CUR.modules[i - 1], next = CUR.modules[i + 1];
    var wrap = el("nav", { class: "prevnext" });
    if (prev) {
      var a = el("a", { class: "pn-card prev", href: href(prev.file) });
      a.appendChild(el("div", { class: "pn-dir", text: "← Previous" }));
      a.appendChild(el("div", { class: "pn-title", text: prev.num + " · " + prev.title }));
      wrap.appendChild(a);
    } else wrap.appendChild(el("span"));
    if (next) {
      var b = el("a", { class: "pn-card next", href: href(next.file) });
      b.appendChild(el("div", { class: "pn-dir", text: "Next →" }));
      b.appendChild(el("div", { class: "pn-title", text: next.num + " · " + next.title }));
      wrap.appendChild(b);
    } else wrap.appendChild(el("span"));
    var main = document.querySelector("main");
    if (main) main.appendChild(wrap);
  }

  /* ---------- footer ---------- */
  function buildFooter() {
    var f = el("footer", { class: "site-footer" });
    f.appendChild(el("span", { text: CUR.siteName + " · an interactive atlas of the finance industry" }));
    f.appendChild(el("span", { text: "Educational content only. Nothing here is investment, legal, or tax advice." }));
    document.body.appendChild(f);
  }

  /* ---------- tabs ---------- */
  function wireTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (root) {
      var tabs = root.querySelectorAll(".tab");
      var panels = root.querySelectorAll(".tab-panel");
      tabs.forEach(function (t) {
        t.addEventListener("click", function () {
          var id = t.getAttribute("data-tab");
          tabs.forEach(function (x) { x.classList.toggle("active", x === t); });
          panels.forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === id); });
        });
      });
    });
  }

  /* ---------- quiz engine ----------
     Atlas.quiz("#quiz-root", [{q, choices:[...], answer: 1, explain}]) */
  function quiz(selector, questions) {
    var root = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!root || !questions || !questions.length) return;
    var i = 0, score = 0, answered = false;
    root.classList.add("quiz");

    function renderQ() {
      answered = false;
      var q = questions[i];
      root.innerHTML = "";
      root.appendChild(el("div", { class: "quiz-progress", text: "Knowledge check · Question " + (i + 1) + " of " + questions.length }));
      root.appendChild(el("div", { class: "quiz-q", text: q.q }));
      var choices = el("div", { class: "quiz-choices" });
      q.choices.forEach(function (c, ci) {
        var b = el("button", { class: "quiz-choice", type: "button", text: c });
        b.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          if (ci === q.answer) { b.classList.add("correct"); score++; }
          else {
            b.classList.add("incorrect");
            choices.children[q.answer].classList.add("correct");
          }
          Array.prototype.forEach.call(choices.children, function (x) { x.disabled = true; });
          if (q.explain) {
            var ex = el("div", { class: "quiz-explain", text: q.explain });
            choices.parentNode.insertBefore(ex, actions);
          }
          nextBtn.style.display = "";
        });
        choices.appendChild(b);
      });
      root.appendChild(choices);
      var actions = el("div", { class: "quiz-actions" });
      var nextBtn = el("button", { class: "btn btn-primary", type: "button", text: i === questions.length - 1 ? "See results" : "Next question" });
      nextBtn.style.display = "none";
      nextBtn.addEventListener("click", function () {
        i++;
        if (i >= questions.length) renderResult(); else renderQ();
        root.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
      actions.appendChild(nextBtn);
      root.appendChild(actions);
    }

    function renderResult() {
      progress.setQuiz(MODULE_ID, score, questions.length);
      refreshModTicks();
      root.innerHTML = "";
      var res = el("div", { class: "quiz-result" });
      res.appendChild(el("div", { class: "quiz-progress", text: "Knowledge check complete" }));
      res.appendChild(el("div", { class: "big", text: score + " / " + questions.length }));
      var verdict = score === questions.length ? "Perfect score. You own this module."
        : score >= questions.length * 0.7 ? "Strong. Review the ones you missed and move on."
        : "Worth a second pass through the sections above.";
      res.appendChild(el("p", { class: "muted", text: verdict }));
      var actions = el("div", { class: "quiz-actions", style: "justify-content:center" });
      var retry = el("button", { class: "btn", type: "button", text: "Retake quiz" });
      retry.addEventListener("click", function () { i = 0; score = 0; renderQ(); });
      actions.appendChild(retry);
      res.appendChild(actions);
      root.appendChild(res);
    }
    renderQ();
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    if (MODULE_ID !== "home") {
      var sections = buildSidebar();
      decorateModule();
      trackSections(sections);
      buildPrevNext();
    }
    buildFooter();
    wireTabs();
    refreshModTicks();
    document.dispatchEvent(new CustomEvent("atlas:ready"));
  });

  /* ---------- public API ---------- */
  window.Atlas = {
    curriculum: CUR,
    progress: progress,
    fmt: fmt,
    npv: npv,
    irr: irr,
    el: el,
    bind: bind,
    onInput: onInput,
    quiz: quiz
  };
})();
