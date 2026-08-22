/* ============================================================
   Industry Atlas - visualization library (dependency-free)
   forceGraph (canvas) · valueChain · sankey · treemap · radar
   bars · tileMap · kpiCard · timeline
   Chart rules: validated palette via CSS vars, one axis, thin
   marks, selective labels, legends for 2+ series.
   ============================================================ */
(function () {
  "use strict";

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  /* ================= force-directed graph (canvas) ================= */
  function forceGraph(canvas, cfg) {
    /* sector cluster anchors: every sector gets its own gravity well so the
       layout reads as labeled neighborhoods instead of spaghetti */
    var sectorIds = [];
    cfg.nodes.forEach(function (n) { if (n.sector && sectorIds.indexOf(n.sector) === -1) sectorIds.push(n.sector); });
    var anchors = {};
    sectorIds.forEach(function (s, i) {
      var a = (i / Math.max(1, sectorIds.length)) * Math.PI * 2 - Math.PI / 2;
      var R = cfg.clusterRadius || 290;
      anchors[s] = { x: Math.cos(a) * R, y: Math.sin(a) * R };
    });
    var nodes = cfg.nodes.map(function (n, i) {
      var anc = anchors[n.sector] || { x: 0, y: 0 };
      var a = i * 2.399963;                 /* golden-angle scatter inside the cluster */
      var r = 18 + (i % 7) * 13;
      return Object.assign({ x: anc.x + Math.cos(a) * r, y: anc.y + Math.sin(a) * r, vx: 0, vy: 0 }, n);
    });
    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = n; });
    var edges = cfg.edges.filter(function (e) { return byId[e.from] && byId[e.to]; });
    var neighbors = {};
    edges.forEach(function (e) {
      (neighbors[e.from] = neighbors[e.from] || {})[e.to] = true;
      (neighbors[e.to] = neighbors[e.to] || {})[e.from] = true;
    });

    var ctx = canvas.getContext("2d");
    var W, H, DPR;
    var cam = { x: 0, y: 0, k: 1 };
    var alpha = 1, selected = cfg.focus ? byId[cfg.focus] : null, hovered = null;
    var typeFilter = null;
    var sectorFilter = null, sectorSet = null;   /* 2 = in sector, 1 = direct neighbor */
    var dragging = null, panning = false, lastM = null, moved = 0;

    function resize() {
      DPR = window.devicePixelRatio || 1;
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * DPR; canvas.height = H * DPR;
      draw();
    }

    function tick() {
      var i, j, a, b, dx, dy, d2, d, f;
      /* repulsion */
      for (i = 0; i < nodes.length; i++) for (j = i + 1; j < nodes.length; j++) {
        a = nodes[i]; b = nodes[j];
        dx = b.x - a.x; dy = b.y - a.y; d2 = dx * dx + dy * dy;
        if (d2 < 1) d2 = 1;
        if (d2 > 250000) continue;
        f = 2600 / d2;
        d = Math.sqrt(d2);
        dx /= d; dy /= d;
        a.vx -= dx * f; a.vy -= dy * f;
        b.vx += dx * f; b.vy += dy * f;
      }
      /* springs */
      edges.forEach(function (e) {
        a = byId[e.from]; b = byId[e.to];
        dx = b.x - a.x; dy = b.y - a.y;
        d = Math.sqrt(dx * dx + dy * dy) || 1;
        var target = 150 - (e.strength || 1) * 12;
        f = (d - target) * 0.008;
        dx /= d; dy /= d;
        a.vx += dx * f; a.vy += dy * f;
        b.vx -= dx * f; b.vy -= dy * f;
      });
      /* cluster gravity + integrate (velocity capped to keep the sim stable) */
      nodes.forEach(function (n) {
        if (n === dragging) { n.vx = 0; n.vy = 0; return; }
        var anc = anchors[n.sector];
        if (anc) { n.vx += (anc.x - n.x) * 0.012; n.vy += (anc.y - n.y) * 0.012; }
        else { n.vx -= n.x * 0.004; n.vy -= n.y * 0.004; }
        n.vx *= 0.86; n.vy *= 0.86;
        var sp = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (sp > 18) { n.vx = n.vx / sp * 18; n.vy = n.vy / sp * 18; }
        n.x += n.vx * alpha; n.y += n.vy * alpha;
        if (!isFinite(n.x)) { n.x = (Math.random ? 0 : 0); n.x = 0; n.vx = 0; }
        if (!isFinite(n.y)) { n.y = 0; n.vy = 0; }
      });
      alpha = Math.max(0, alpha - 0.004);
    }

    function nodeRadius(n) { return 6 + (n.size || 1) * 3.2; }
    function toScreen(p) { return { x: W / 2 + (p.x + cam.x) * cam.k, y: H / 2 + (p.y + cam.y) * cam.k }; }
    function toWorld(sx, sy) { return { x: (sx - W / 2) / cam.k - cam.x, y: (sy - H / 2) / cam.k - cam.y }; }

    function draw() {
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.clearRect(0, 0, W, H);
      var inkMuted = cssVar("--ink-3") || "#898781";
      var surface = cssVar("--surface-1") || "#1a1a19";
      var focusSet = selected ? Object.assign({}, neighbors[selected.id] || {}, (function () { var o = {}; o[selected.id] = true; return o; })()) : null;

      edges.forEach(function (e) {
        if (typeFilter && e.type !== typeFilter) return;
        var a = toScreen(byId[e.from]), b = toScreen(byId[e.to]);
        var et = (window.Atlas && Atlas.EDGE_TYPES[e.type]) || {};
        var dimmed = focusSet && !(e.from === selected.id || e.to === selected.id);
        if (sectorSet && !(sectorSet[e.from] === 2 || sectorSet[e.to] === 2)) dimmed = true;
        ctx.strokeStyle = et.raw || inkMuted;
        ctx.globalAlpha = dimmed ? 0.08 : 0.28 + (e.strength || 1) * 0.14;
        ctx.lineWidth = 0.7 + (e.strength || 1) * 0.7;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      });
      ctx.globalAlpha = 1;

      nodes.forEach(function (n) {
        var p = toScreen(n);
        var r = nodeRadius(n) * cam.k;
        var dim = focusSet && !focusSet[n.id];
        var a1 = dim ? 0.18 : 1;
        if (sectorSet) {
          var lvl = sectorSet[n.id] || 0;
          a1 = Math.min(a1, lvl === 2 ? 1 : lvl === 1 ? 0.45 : 0.12);
          if (lvl !== 2 && !dim) dim = lvl === 0;
        }
        ctx.globalAlpha = a1;
        ctx.fillStyle = n.color || "#3987e5";
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = surface;
        ctx.stroke();
        if (n.icon && r >= 7 && a1 > 0.3) {
          ctx.font = Math.round(r * 1.15) + 'px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText(n.icon, p.x, p.y + 1);
          ctx.textBaseline = "alphabetic";
        }
        if (n === selected || n === hovered) {
          ctx.strokeStyle = cssVar("--amber-bright") || "#fab219";
          ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.arc(p.x, p.y, r + 3.5, 0, Math.PI * 2); ctx.stroke();
        }
        var showLabel = n === selected || n === hovered || (sectorSet && sectorSet[n.id] === 2) || (focusSet ? focusSet[n.id] : (n.size || 1) >= (cfg.labelMin || 2));
        if (showLabel && !dim) {
          ctx.font = (n === selected ? "600 " : "") + Math.max(10, 11 * Math.min(1.15, cam.k)) + "px Inter, sans-serif";
          ctx.fillStyle = cssVar("--ink") || "#f2f1ec";
          ctx.textAlign = "center";
          ctx.fillText(n.label, p.x, p.y - r - 6);
        }
      });
      ctx.globalAlpha = 1;
    }

    /* the sim sleeps when settled (battery + lets the page go idle);
       kick() wakes it on any interaction */
    var running = false;
    function loop() {
      if (alpha > 0.01 || dragging) {
        tick(); draw();
        requestAnimationFrame(loop);
      } else {
        draw();
        running = false;
      }
    }
    function kick() {
      if (!running) { running = true; requestAnimationFrame(loop); }
    }

    function nodeAt(sx, sy) {
      for (var i = nodes.length - 1; i >= 0; i--) {
        var p = toScreen(nodes[i]);
        var r = nodeRadius(nodes[i]) * cam.k + 4;
        var dx = sx - p.x, dy = sy - p.y;
        if (dx * dx + dy * dy <= r * r) return nodes[i];
      }
      return null;
    }
    function evPos(ev) {
      var b = canvas.getBoundingClientRect();
      var t = ev.touches ? ev.touches[0] : ev;
      return { x: t.clientX - b.left, y: t.clientY - b.top };
    }

    canvas.addEventListener("mousedown", function (ev) {
      var p = evPos(ev);
      var n = nodeAt(p.x, p.y);
      moved = 0;
      if (n) { dragging = n; alpha = Math.max(alpha, 0.3); }
      else { panning = true; }
      kick();
      lastM = p;
    });
    window.addEventListener("mousemove", function (ev) {
      var p = evPos(ev);
      if (dragging) {
        var w = toWorld(p.x, p.y);
        dragging.x = w.x; dragging.y = w.y;
        alpha = Math.max(alpha, 0.25); moved += 2; kick();
      } else if (panning && lastM) {
        cam.x += (p.x - lastM.x) / cam.k;
        cam.y += (p.y - lastM.y) / cam.k;
        moved += Math.abs(p.x - lastM.x) + Math.abs(p.y - lastM.y);
        lastM = p; kick();
      } else if (ev.target === canvas) {
        var h = nodeAt(p.x, p.y);
        if (h !== hovered) { hovered = h; canvas.style.cursor = h ? "pointer" : "grab"; kick(); }
      }
      if (panning) lastM = p;
    });
    window.addEventListener("mouseup", function (ev) {
      if ((dragging || panning) && moved < 5) {
        var p = evPos(ev);
        var n = nodeAt(p.x, p.y);
        selected = n; kick();
        if (cfg.onSelect) cfg.onSelect(n);
      }
      dragging = null; panning = false; lastM = null;
    });
    canvas.addEventListener("wheel", function (ev) {
      ev.preventDefault();
      var k = cam.k * (ev.deltaY < 0 ? 1.12 : 0.89);
      cam.k = Math.max(0.35, Math.min(3, k)); kick();
    }, { passive: false });

    /* touch support (phones): tap = select, drag node, one-finger pan,
       two-finger pinch to zoom */
    var pinchDist = null;
    function touchDist(ev) {
      var a = ev.touches[0], b = ev.touches[1];
      return Math.sqrt(Math.pow(a.clientX - b.clientX, 2) + Math.pow(a.clientY - b.clientY, 2));
    }
    canvas.addEventListener("touchstart", function (ev) {
      if (ev.touches.length === 2) { pinchDist = touchDist(ev); dragging = null; panning = false; return; }
      var p = evPos(ev);
      var n = nodeAt(p.x, p.y);
      moved = 0;
      if (n) { dragging = n; alpha = Math.max(alpha, 0.3); }
      else { panning = true; }
      lastM = p; kick();
    }, { passive: true });
    canvas.addEventListener("touchmove", function (ev) {
      if (ev.touches.length === 2 && pinchDist) {
        ev.preventDefault();
        var d = touchDist(ev);
        cam.k = Math.max(0.35, Math.min(3, cam.k * (d / pinchDist)));
        pinchDist = d; moved += 10; kick();
        return;
      }
      if (!dragging && !panning) return;
      ev.preventDefault();
      var p = evPos(ev);
      if (dragging) {
        var w = toWorld(p.x, p.y);
        dragging.x = w.x; dragging.y = w.y;
        alpha = Math.max(alpha, 0.25); moved += 2;
      } else if (lastM) {
        cam.x += (p.x - lastM.x) / cam.k;
        cam.y += (p.y - lastM.y) / cam.k;
        moved += Math.abs(p.x - lastM.x) + Math.abs(p.y - lastM.y);
      }
      lastM = p; kick();
    }, { passive: false });
    canvas.addEventListener("touchend", function () {
      if ((dragging || panning) && moved < 8 && lastM) {
        var n = dragging || nodeAt(lastM.x, lastM.y);
        selected = n || null; kick();
        if (cfg.onSelect) cfg.onSelect(selected);
      }
      dragging = null; panning = false; lastM = null; pinchDist = null;
    });

    window.addEventListener("resize", function () { resize(); kick(); });
    document.addEventListener("atlas:theme", function () { kick(); });
    resize();
    kick();

    return {
      select: function (id) { selected = byId[id] || null; alpha = Math.max(alpha, 0.15); kick(); if (cfg.onSelect) cfg.onSelect(selected); },
      filterType: function (t) { typeFilter = t; kick(); },
      filterSector: function (s) {
        sectorFilter = s;
        if (!s) { sectorSet = null; kick(); return; }
        sectorSet = {};
        nodes.forEach(function (n) { if (n.sector === s) sectorSet[n.id] = 2; });
        edges.forEach(function (e) {
          if (sectorSet[e.from] === 2 && !sectorSet[e.to]) sectorSet[e.to] = 1;
          if (sectorSet[e.to] === 2 && !sectorSet[e.from]) sectorSet[e.from] = 1;
        });
        kick();
      },
      reheat: function () { alpha = 1; kick(); }
    };
  }

  /* ================= value chain ================= */
  function valueChain(container, stages, opts) {
    opts = opts || {};
    var root = document.createElement("div");
    root.className = "vchain";
    stages.forEach(function (s, i) {
      var st = document.createElement("div");
      st.className = "vc-stage";
      st.setAttribute("data-id", s.id || i);
      var cap = "";
      for (var d = 1; d <= 5; d++) cap += '<i class="' + (d <= (s.valueCapture || 0) ? "on" : "") + '"></i>';
      var econ = s.economics || {};
      var links = (s.linksTo || []).map(function (id) {
        return window.Atlas ? Atlas.indLink(id) : esc(id);
      }).join(" ");
      st.innerHTML =
        '<div class="vc-ix">' + String(i + 1).padStart(2, "0") + "</div>" +
        '<div><div class="vc-name">' + esc(s.name) + '</div><div class="vc-what">' + esc(s.what) + "</div></div>" +
        '<div class="vc-cap" title="Share of industry profit captured (1 to 5)">' + cap + "</div>" +
        '<div class="vc-detail">' +
          (s.deeper ? "<p>" + esc(s.deeper) + "</p>" : "") +
          '<div class="vc-econ">' +
            (econ.grossMargin ? "<span>Gross margin <b>" + econ.grossMargin[0] + "% to " + econ.grossMargin[1] + "%</b></span>" : "") +
            (econ.capitalIntensity ? "<span>Capital intensity <b>" + econ.capitalIntensity + " / 5</b></span>" : "") +
            (econ.concentration ? "<span>Concentration <b>" + econ.concentration + " / 5</b></span>" : "") +
            (s.players ? "<span>Players <b>" + esc(s.players) + "</b></span>" : "") +
          "</div>" +
          (links ? '<div class="vc-links small">Connects to: ' + links + "</div>" : "") +
        "</div>";
      st.addEventListener("click", function (ev) {
        if (ev.target.closest("a")) return;
        st.classList.toggle("open");
      });
      root.appendChild(st);
      if (i < stages.length - 1) {
        var c = document.createElement("div");
        c.className = "vc-connector";
        root.appendChild(c);
      }
    });
    container.innerHTML = "";
    container.appendChild(root);
  }

  /* ================= sankey (two-column flow) ================= */
  function sankey(container, cfg) {
    var W = 720, H = cfg.height || 340, padX = 170, nodeW = 12, gap = 8;
    var left = cfg.left, right = cfg.right, flows = cfg.flows;
    function totalOf(list, side) {
      return list.map(function (n) {
        var t = 0;
        flows.forEach(function (f) { if ((side === "l" ? f.from : f.to) === n.id) t += f.value; });
        return t;
      });
    }
    var lt = totalOf(left, "l"), rt = totalOf(right, "r");
    var maxTotal = Math.max(lt.reduce(function (a, b) { return a + b; }, 0), rt.reduce(function (a, b) { return a + b; }, 0));
    var scale = (H - 30 - gap * (Math.max(left.length, right.length) - 1)) / maxTotal;
    function layout(list, totals) {
      var y = 15, out = {};
      list.forEach(function (n, i) {
        var h = Math.max(4, totals[i] * scale);
        out[n.id] = { y: y, h: h, used: 0, node: n };
        y += h + gap;
      });
      return out;
    }
    var L = layout(left, lt), R = layout(right, rt);
    var palette = ["--viz-1", "--viz-2", "--viz-3", "--viz-5", "--viz-8", "--viz-7"];
    var leftColor = {};
    left.forEach(function (n, i) { leftColor[n.id] = "var(" + palette[i % palette.length] + ")"; });

    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(cfg.label || "Flow diagram") + '">';
    flows.forEach(function (f) {
      var a = L[f.from], b = R[f.to];
      if (!a || !b) return;
      var h = Math.max(2, f.value * scale);
      var y1 = a.y + a.used + h / 2, y2 = b.y + b.used + h / 2;
      a.used += h; b.used += h;
      var x1 = padX + nodeW, x2 = W - padX - nodeW;
      var mx = (x1 + x2) / 2;
      s += '<path d="M' + x1 + " " + y1 + " C" + mx + " " + y1 + " " + mx + " " + y2 + " " + x2 + " " + y2 +
        '" stroke="' + leftColor[f.from] + '" stroke-width="' + h + '" fill="none" opacity="0.35"></path>';
    });
    Object.keys(L).forEach(function (id) {
      var n = L[id];
      s += '<rect x="' + padX + '" y="' + n.y + '" width="' + nodeW + '" height="' + n.h + '" rx="3" fill="' + leftColor[id] + '"></rect>';
      s += '<text x="' + (padX - 8) + '" y="' + (n.y + n.h / 2 + 4) + '" text-anchor="end" class="lbl" font-size="12">' + esc(n.node.label) + "</text>";
      if (n.node.note) s += '<text x="' + (padX - 8) + '" y="' + (n.y + n.h / 2 + 18) + '" text-anchor="end" class="lbl-muted">' + esc(n.node.note) + "</text>";
    });
    Object.keys(R).forEach(function (id) {
      var n = R[id];
      s += '<rect x="' + (W - padX - nodeW) + '" y="' + n.y + '" width="' + nodeW + '" height="' + n.h + '" rx="3" fill="var(--axis)"></rect>';
      s += '<text x="' + (W - padX + 8) + '" y="' + (n.y + n.h / 2 + 4) + '" class="lbl" font-size="12">' + esc(n.node.label) + "</text>";
      if (n.node.note) s += '<text x="' + (W - padX + 8) + '" y="' + (n.y + n.h / 2 + 18) + '" class="lbl-muted">' + esc(n.node.note) + "</text>";
    });
    s += "</svg>";
    container.innerHTML = s;
  }

  /* ================= treemap (slice & dice) ================= */
  function treemap(container, cfg) {
    var items = cfg.items.slice().sort(function (a, b) { return b.value - a.value; });
    var total = items.reduce(function (a, b) { return a + b.value; }, 0);
    var W = 720, H = cfg.height || 300;
    var x = 0, y = 0, w = W, h = H, horiz = true;
    var ramps = ["#0d366b", "#104281", "#184f95", "#1c5cab", "#256abf", "#2a78d6", "#3987e5", "#5598e7", "#6da7ec", "#86b6ef"];
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(cfg.label || "Treemap") + '">';
    items.forEach(function (it, i) {
      var frac = it.value / total;
      var rw, rh, rx = x, ry = y;
      var remaining = items.slice(i).reduce(function (a, b) { return a + b.value; }, 0) / total;
      var slice = frac / remaining;
      if (horiz) { rw = w * slice; rh = h; x += rw; w -= rw; }
      else { rh = h * slice; rw = w; y += rh; h -= rh; }
      horiz = !horiz;
      var fill = ramps[Math.min(ramps.length - 1, i)];
      s += '<rect x="' + (rx + 1) + '" y="' + (ry + 1) + '" width="' + Math.max(1, rw - 2) + '" height="' + Math.max(1, rh - 2) + '" rx="6" fill="' + fill + '"></rect>';
      if (rw > 90 && rh > 42) {
        s += '<text x="' + (rx + 10) + '" y="' + (ry + 22) + '" fill="#ffffff" font-size="12.5" font-weight="600">' + esc(it.label) + "</text>";
        s += '<text x="' + (rx + 10) + '" y="' + (ry + 38) + '" fill="rgba(255,255,255,0.75)" font-size="11">' + esc(it.note || Math.round(100 * it.value / total) + "%") + "</text>";
      }
    });
    s += "</svg>";
    container.innerHTML = s;
    if (cfg.smallNote) {
      var overflow = items.filter(function (it, i) { return false; });
    }
  }

  /* ================= radar (economic fingerprint) ================= */
  function radar(container, cfg) {
    var axes = cfg.axes;
    var W = 420, H = 360, cx = W / 2, cy = H / 2 + 6, R = 118;
    var n = axes.length;
    function pt(i, r) {
      var a = -Math.PI / 2 + (i / n) * Math.PI * 2;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    }
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(cfg.label || "Profile radar") + '">';
    [0.33, 0.66, 1].forEach(function (f) {
      var d = "";
      for (var i = 0; i <= n; i++) { var p = pt(i % n, R * f); d += (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }
      s += '<path d="' + d + ' Z" fill="none" class="gridline"></path>';
    });
    for (var i = 0; i < n; i++) {
      var p = pt(i, R);
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0] + '" y2="' + p[1] + '" class="gridline"></line>';
      /* one stacked text per axis (label + value on its own line): stacking
         beats radial offsets, which collided on the horizontal axes */
      var lp = pt(i, R + 24);
      s += '<text x="' + lp[0] + '" y="' + (lp[1] - 3) + '" text-anchor="middle" font-size="11" fill="var(--ink-2)">' + esc(axes[i].label) +
        '<tspan x="' + lp[0] + '" dy="12.5" font-size="9.5" fill="var(--ink-3)">' + axes[i].value + "</tspan></text>";
    }
    var d2 = "";
    axes.forEach(function (a, i) {
      var p = pt(i, R * Math.max(0.04, a.value / 100));
      d2 += (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1);
    });
    s += '<path d="' + d2 + ' Z" fill="var(--viz-1)" opacity="0.16"></path>';
    s += '<path d="' + d2 + ' Z" fill="none" stroke="var(--viz-1)" stroke-width="2" stroke-linejoin="round"></path>';
    axes.forEach(function (a, i) {
      var p = pt(i, R * Math.max(0.04, a.value / 100));
      s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="var(--viz-1)" stroke="var(--surface-1)" stroke-width="2"></circle>';
    });
    s += "</svg>";
    container.innerHTML = s;
  }

  /* ================= horizontal bars ================= */
  function bars(container, cfg) {
    var items = cfg.items;
    var W = 720, rowH = 34, padL = cfg.padL || 170, padR = 90;
    var H = items.length * rowH + 14;
    var max = Math.max.apply(null, items.map(function (i) { return Math.abs(i.value); }));
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(cfg.label || "Bar chart") + '">';
    items.forEach(function (it, i) {
      var y = 8 + i * rowH;
      var bw = Math.max(2, (W - padL - padR) * (Math.abs(it.value) / max));
      var color = it.color || "var(--viz-1)";
      s += '<text x="' + (padL - 10) + '" y="' + (y + 15) + '" text-anchor="end" font-size="12" fill="var(--ink-2)">' + esc(it.label) + "</text>";
      s += '<path d="M' + padL + " " + y + " H" + (padL + bw - 4) + " Q" + (padL + bw) + " " + y + " " + (padL + bw) + " " + (y + 4) +
           " V" + (y + 18) + " Q" + (padL + bw) + " " + (y + 22) + " " + (padL + bw - 4) + " " + (y + 22) + " H" + padL + ' Z" fill="' + color + '"></path>';
      s += '<text x="' + (padL + bw + 8) + '" y="' + (y + 15) + '" font-size="11.5" font-weight="600" fill="var(--ink)">' + esc(it.display != null ? it.display : it.value) + "</text>";
    });
    s += "</svg>";
    container.innerHTML = s;
  }

  /* ================= tile map ================= */
  function tileMap(container, countries, onSelect) {
    var T = 46, PAD = 2;
    var maxX = 0, maxY = 0;
    countries.forEach(function (c) { if (c.tx > maxX) maxX = c.tx; if (c.ty > maxY) maxY = c.ty; });
    var W = (maxX + 1) * T + 10, H = (maxY + 1) * T + 10;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("class", "tilemap");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "World map as tile grid; click a country");
    var sel = null;
    countries.forEach(function (c) {
      var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "tile");
      g.setAttribute("data-code", c.code);
      var r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      r.setAttribute("x", 5 + c.tx * T + PAD); r.setAttribute("y", 5 + c.ty * T + PAD);
      r.setAttribute("width", T - PAD * 2); r.setAttribute("height", T - PAD * 2);
      r.setAttribute("rx", 8);
      var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
      t.setAttribute("x", 5 + c.tx * T + T / 2); t.setAttribute("y", 5 + c.ty * T + T / 2 + 4);
      t.textContent = c.code;
      g.appendChild(r); g.appendChild(t);
      g.addEventListener("click", function () { api.select(c.code); });
      svg.appendChild(g);
    });
    container.innerHTML = "";
    container.appendChild(svg);
    var api = {
      select: function (code) {
        sel = code;
        svg.querySelectorAll(".tile").forEach(function (g) {
          g.classList.toggle("sel", g.getAttribute("data-code") === code);
        });
        var c = countries.find(function (x) { return x.code === code; });
        if (c && onSelect) onSelect(c);
      }
    };
    return api;
  }

  /* ================= KPI card ================= */
  function kpiCard(k) {
    var band = '<div class="kpi-band"><i class="bad"></i><i class="mid"></i><i class="good"></i></div>' +
      '<div class="kpi-range"><span>' + esc(k.warning || "") + '</span><span>' + esc(k.healthy || "") + "</span></div>";
    return '<div class="kpi-card" id="' + esc(k.id) + '">' +
      '<div class="kpi-name">' + esc(k.name) + (k.industries ? '<span class="pill">' + esc((k.industries[0] || "")) + "</span>" : "") + "</div>" +
      '<div class="kpi-def">' + esc(k.definition) + "</div>" +
      (k.formula ? '<div class="kpi-formula">' + esc(k.formula) + "</div>" : "") +
      band +
      (k.benchmark ? '<div class="kpi-lens"><b>Benchmark</b> ' + esc(k.benchmark.median + (k.benchmark.topDecile ? " · top decile " + k.benchmark.topDecile : "")) + "</div>" : "") +
      (k.investorLens ? '<div class="kpi-lens"><b>Investors</b> ' + esc(k.investorLens) + "</div>" : "") +
      (k.operatorLens ? '<div class="kpi-lens"><b>Operators</b> ' + esc(k.operatorLens) + "</div>" : "") +
      ((k.mistakes && k.mistakes.length) || k.trend ?
        '<details class="kpi-more"><summary>Common mistakes and trend</summary><div class="body">' +
        (k.mistakes || []).map(function (m) { return "• " + esc(m); }).join("<br>") +
        (k.trend ? '<br><span class="faint">Trend: ' + esc(k.trend) + "</span>" : "") +
        "</div></details>" : "") +
      "</div>";
  }

  /* ================= timeline ================= */
  function timeline(items) {
    return '<ol class="timeline">' + items.map(function (c) {
      return '<li class="' + (c.kind || "") + '"><div class="tl-when">' + esc(c.year) + '</div><div class="tl-title">' + esc(c.title) + '</div><div class="tl-body">' + esc(c.text) + "</div></li>";
    }).join("") + "</ol>";
  }

  /* ================= geographic world map (TopoJSON, no libraries) ================= */
  function geoMap(container, cfg) {
    var W = 960, H = 430, latTop = 84, latBot = -58;
    function px(lon, lat) {
      return [(lon + 180) / 360 * W, (latTop - lat) / (latTop - latBot) * H];
    }
    var byNum = {};
    (cfg.countries || []).forEach(function (c) { if (c.n) byNum[parseInt(c.n, 10)] = c; });
    var pendingSel = null;
    var api = {
      loaded: false,
      select: function (code) { pendingSel = code; }   /* replaced once loaded */
    };

    fetch(cfg.url).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }).then(function (topo) {
      /* decode delta-encoded, transformed arcs */
      var tf = topo.transform;
      var arcs = topo.arcs.map(function (arc) {
        var x = 0, y = 0;
        return arc.map(function (pt) {
          x += pt[0]; y += pt[1];
          return [x * tf.scale[0] + tf.translate[0], y * tf.scale[1] + tf.translate[1]];
        });
      });
      function ringPts(idxs) {
        var pts = [];
        idxs.forEach(function (i) {
          var a = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
          if (pts.length) a = a.slice(1);
          pts = pts.concat(a);
        });
        return pts;
      }
      var NS = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("class", "geomap");
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", "World map; highlighted countries open their profile");

      topo.objects.countries.geometries.forEach(function (g) {
        var num = parseInt(g.id, 10);
        if (num === 10) return;   /* Antarctica */
        var rings = [];
        if (g.type === "Polygon") rings = g.arcs.map(ringPts);
        else if (g.type === "MultiPolygon") g.arcs.forEach(function (p) { p.forEach(function (r) { rings.push(ringPts(r)); }); });
        var d = "";
        rings.forEach(function (r) {
          r.forEach(function (pt, i) {
            var q = px(pt[0], pt[1]);
            d += (i ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1);
          });
          d += "Z";
        });
        var path = document.createElementNS(NS, "path");
        path.setAttribute("d", d);
        path.setAttribute("fill-rule", "evenodd");
        var c = byNum[num];
        path.setAttribute("class", "land" + (c ? " profiled" : ""));
        if (c) {
          path.setAttribute("data-code", c.code);
          path.addEventListener("click", function () { api.select(c.code); });
        }
        var t = document.createElementNS(NS, "title");
        t.textContent = c ? c.name : ((g.properties && g.properties.name) || "");
        path.appendChild(t);
        svg.appendChild(path);
      });

      container.innerHTML = "";
      container.appendChild(svg);

      /* marker dots for profiled countries whose geometry is missing (Singapore
         at 110m) or too small to click comfortably */
      (cfg.countries || []).forEach(function (c) {
        if (c.lon == null) return;
        var el = svg.querySelector('path[data-code="' + c.code + '"]');
        var tiny = false;
        if (el) { var bb = el.getBBox(); tiny = (bb.width + bb.height) < 12; }
        if (!el || tiny) {
          var q = px(c.lon, c.lat);
          var dot = document.createElementNS(NS, "circle");
          dot.setAttribute("cx", q[0]); dot.setAttribute("cy", q[1]); dot.setAttribute("r", 4.5);
          dot.setAttribute("class", "land profiled");
          dot.setAttribute("data-code", c.code);
          dot.addEventListener("click", function () { api.select(c.code); });
          var tt = document.createElementNS(NS, "title");
          tt.textContent = c.name;
          dot.appendChild(tt);
          svg.appendChild(dot);
        }
      });

      api.loaded = true;
      api.select = function (code) {
        svg.querySelectorAll("[data-code]").forEach(function (el) {
          el.classList.toggle("sel", el.getAttribute("data-code") === code);
        });
        var c = (cfg.countries || []).find(function (x) { return x.code === code; });
        if (c && cfg.onSelect) cfg.onSelect(c);
      };
      if (pendingSel) api.select(pendingSel);
    }).catch(function (err) {
      if (cfg.onError) cfg.onError(err);
    });

    return api;
  }

  /* ================= system diagram (boxes + arrows) =================
     One generic renderer for "supply side -> entity -> demand side" with
     capital-in / capital-out lanes and a regulators band. Used by both
     industry and company pages. */
  function systemDiagram(container, cfg) {
    var W = 960;
    var accent = cfg.accent || "var(--amber)";
    function trunc(s, n) { s = String(s || ""); return s.length > n ? s.slice(0, n - 1) + "…" : s; }

    var left = (cfg.left && cfg.left.items || []).slice(0, 6);
    var right = (cfg.right && cfg.right.items || []).slice(0, 6);
    var subs = (cfg.center.subs || []).slice(0, 5);
    var capIn = (cfg.capIn && cfg.capIn.items || []).slice(0, 4);
    var capOut = (cfg.capOut && cfg.capOut.items || []).slice(0, 4);
    var top = cfg.top && cfg.top.items && cfg.top.items.length ? cfg.top : null;

    var topH = top ? 58 : 0;
    var itemH = 46, itemGap = 8;
    var colRows = Math.max(left.length, right.length, 1);
    var centerH = Math.max(96 + subs.length * 30, colRows * (itemH + itemGap) - itemGap);
    var rowH = Math.max(colRows * (itemH + itemGap) - itemGap, centerH);
    var rowY = topH + 34;
    var capRows = Math.max(capIn.length, capOut.length);
    var capH = capRows ? capRows * 24 + 44 : 0;
    var H = rowY + rowH + (capH ? 46 + capH : 0) + 14;

    var LX = 14, LW = 252, CX = 336, CW = 288, RX = 694, RW = 252;
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(cfg.label || "System diagram") + '">';
    s += '<defs><marker id="sd-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink-3)"></path></marker>' +
         '<marker id="sd-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--viz-2)"></path></marker>' +
         '<marker id="sd-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--viz-1)"></path></marker>' +
         '<marker id="sd-m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--viz-3)"></path></marker></defs>';

    /* regulators band */
    if (top) {
      s += '<rect x="' + CX + '" y="8" width="' + CW + '" height="40" rx="9" fill="none" stroke="var(--ink-3)" stroke-dasharray="5 4"></rect>';
      s += '<text x="' + (CX + CW / 2) + '" y="24" text-anchor="middle" font-size="9.5" fill="var(--ink-3)" font-weight="700" letter-spacing="1">' + esc(top.title || "REGULATORS") + "</text>";
      s += '<text x="' + (CX + CW / 2) + '" y="39" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">' + esc(trunc(top.items.join(" · "), 52)) + "</text>";
      s += '<line x1="' + (CX + CW / 2) + '" y1="48" x2="' + (CX + CW / 2) + '" y2="' + (rowY - 4) + '" stroke="var(--ink-3)" stroke-dasharray="4 4"></line>';
    }

    /* column headers */
    s += '<text x="' + (LX + LW / 2) + '" y="' + (rowY - 12) + '" text-anchor="middle" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="var(--viz-2)">' + esc((cfg.left && cfg.left.title) || "SUPPLY SIDE") + "</text>";
    s += '<text x="' + (RX + RW / 2) + '" y="' + (rowY - 12) + '" text-anchor="middle" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="var(--viz-1)">' + esc((cfg.right && cfg.right.title) || "DEMAND SIDE") + "</text>";

    /* item boxes */
    function itemBox(x, w, y, it) {
      var b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + itemH + '" rx="8" fill="var(--surface-2)" stroke="var(--axis)"></rect>';
      b += '<text x="' + (x + 12) + '" y="' + (y + 19) + '" font-size="12" font-weight="600" fill="var(--ink)">' + esc(trunc(it.name, 32)) + "</text>";
      if (it.note) b += '<text x="' + (x + 12) + '" y="' + (y + 35) + '" font-size="10" fill="var(--ink-3)">' + esc(trunc(it.note, 38)) + "</text>";
      return b;
    }
    left.forEach(function (it, i) {
      var y = rowY + i * (itemH + itemGap);
      s += itemBox(LX, LW, y, it);
      s += '<line x1="' + (LX + LW + 4) + '" y1="' + (y + itemH / 2) + '" x2="' + (CX - 6) + '" y2="' + (rowY + rowH / 2) + '" stroke="var(--viz-2)" stroke-width="1.6" opacity="0.7" marker-end="url(#sd-g)"></line>';
    });
    right.forEach(function (it, i) {
      var y = rowY + i * (itemH + itemGap);
      s += itemBox(RX, RW, y, it);
      s += '<line x1="' + (CX + CW + 6) + '" y1="' + (rowY + rowH / 2) + '" x2="' + (RX - 4) + '" y2="' + (y + itemH / 2) + '" stroke="var(--viz-1)" stroke-width="1.6" opacity="0.7" marker-end="url(#sd-b)"></line>';
    });
    /* flow labels */
    if (left.length) s += '<text x="' + ((LX + LW + CX) / 2) + '" y="' + (rowY + rowH / 2 - 10) + '" text-anchor="middle" font-size="10" font-style="italic" fill="var(--viz-2)">' + esc(cfg.leftArrow || "supplies") + "</text>";
    if (right.length) s += '<text x="' + ((CX + CW + RX) / 2) + '" y="' + (rowY + rowH / 2 - 10) + '" text-anchor="middle" font-size="10" font-style="italic" fill="var(--viz-1)">' + esc(cfg.rightArrow || "sells to") + "</text>";

    /* center entity */
    var cy = rowY + (rowH - centerH) / 2;
    s += '<rect x="' + CX + '" y="' + cy + '" width="' + CW + '" height="' + centerH + '" rx="14" fill="color-mix(in srgb, ' + accent + ' 12%, var(--surface-1))" stroke="' + accent + '" stroke-width="1.6"></rect>';
    s += '<text x="' + (CX + CW / 2) + '" y="' + (cy + 30) + '" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">' + esc(trunc(cfg.center.title, 26)) + "</text>";
    if (cfg.center.note) s += '<text x="' + (CX + CW / 2) + '" y="' + (cy + 48) + '" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">' + esc(trunc(cfg.center.note, 44)) + "</text>";
    subs.forEach(function (sub, i) {
      var sy = cy + 62 + i * 30;
      s += '<rect x="' + (CX + 20) + '" y="' + sy + '" width="' + (CW - 40) + '" height="24" rx="6" fill="var(--surface-1)" stroke="var(--axis)"></rect>';
      s += '<text x="' + (CX + CW / 2) + '" y="' + (sy + 16) + '" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">' + esc(trunc(sub, 40)) + "</text>";
    });

    /* capital lanes */
    if (capRows) {
      var capY = rowY + rowH + 46;
      var half = (W - 3 * LX) / 2;
      function capBox(x, title, items, colr) {
        var b = '<rect x="' + x + '" y="' + capY + '" width="' + half + '" height="' + capH + '" rx="10" fill="var(--surface-2)" stroke="' + colr + '" stroke-width="1.2"></rect>';
        b += '<text x="' + (x + 14) + '" y="' + (capY + 20) + '" font-size="9.5" font-weight="700" letter-spacing="1.2" fill="' + colr + '">' + esc(title) + "</text>";
        items.forEach(function (it, i) {
          b += '<text x="' + (x + 14) + '" y="' + (capY + 40 + i * 24) + '" font-size="11" fill="var(--ink)">' +
               '<tspan font-weight="600">' + esc(trunc(it.name, 26)) + "</tspan>" +
               (it.note ? ' <tspan fill="var(--ink-3)" font-size="10">' + esc(trunc(it.note, 40)) + "</tspan>" : "") + "</text>";
        });
        return b;
      }
      s += capBox(LX, (cfg.capIn && cfg.capIn.title) || "CAPITAL FLOWS IN", capIn, "var(--viz-3)");
      s += capBox(LX * 2 + half, (cfg.capOut && cfg.capOut.title) || "CAPITAL FLOWS OUT / RETURNS", capOut, "var(--viz-8)");
      s += '<line x1="' + (LX + half / 2) + '" y1="' + (capY - 2) + '" x2="' + (CX + CW * 0.3) + '" y2="' + (rowY + rowH + 4) + '" stroke="var(--viz-3)" stroke-width="1.6" marker-end="url(#sd-m)" opacity="0.8"></line>';
      s += '<line x1="' + (CX + CW * 0.7) + '" y1="' + (rowY + rowH + 4) + '" x2="' + (LX * 2 + half * 1.5) + '" y2="' + (capY - 2) + '" stroke="var(--viz-8)" stroke-width="1.6" marker-end="url(#sd-a)" opacity="0.8"></line>';
    }

    s += "</svg>";
    container.innerHTML = s;
    container.classList.add("sysdiagram");
  }

  /* ================= market map (finviz-style two-level squarified treemap) ================= */
  function squarify(items, x, y, w, h, out) {
    /* Bruls et al. squarified layout; items: [{value, ...}] pre-sorted desc.
       Rows are laid along the shorter side; a row is closed when adding the
       next item would worsen the row's worst tile aspect ratio. */
    if (!items.length || w <= 0 || h <= 0) return;
    var total = items.reduce(function (a, b) { return a + b.value; }, 0);
    if (total <= 0) return;
    var scale = (w * h) / total;

    function worstRatio(rowAreas, side) {
      var s = 0, minA = Infinity, maxA = 0;
      rowAreas.forEach(function (a) { s += a; if (a < minA) minA = a; if (a > maxA) maxA = a; });
      var s2 = s * s, side2 = side * side;
      return Math.max((side2 * maxA) / s2, s2 / (side2 * minA));
    }

    var i = 0;
    while (i < items.length) {
      var side = Math.min(w, h);
      var row = [items[i]];
      var areas = [items[i].value * scale];
      var j = i + 1;
      while (j < items.length) {
        var test = areas.concat([items[j].value * scale]);
        if (worstRatio(test, side) > worstRatio(areas, side)) break;
        row.push(items[j]); areas = test; j++;
      }
      var rowSum = areas.reduce(function (a, b) { return a + b; }, 0);
      var rowLen = rowSum / side;
      var off = 0;
      row.forEach(function (it, k) {
        var itLen = areas[k] / rowLen;
        if (w >= h) out.push({ item: it, x: x, y: y + off, w: rowLen, h: itLen });
        else out.push({ item: it, x: x + off, y: y, w: itLen, h: rowLen });
        off += itLen;
      });
      if (w >= h) { x += rowLen; w -= rowLen; } else { y += rowLen; h -= rowLen; }
      i = j;
    }
  }

  function marketMap(container, cfg) {
    var W = 1120, H = cfg.height || 620, GAP = 4, LABEL_H = 17;
    var groups = cfg.groups.map(function (g) {
      var items = g.items.slice().sort(function (a, b) { return b.value - a.value; });
      return { g: g, items: items, value: items.reduce(function (a, b) { return a + b.value; }, 0) };
    }).filter(function (g) { return g.value > 0; }).sort(function (a, b) { return b.value - a.value; });

    var groupRects = [];
    squarify(groups.map(function (g) { return { value: g.value, ref: g }; }), 0, 0, W, H, groupRects);

    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(cfg.label || "Market map") + '" style="display:block;width:100%;height:auto">';
    groupRects.forEach(function (gr) {
      var grp = gr.item.ref;
      var gx = gr.x + GAP / 2, gy = gr.y + GAP / 2, gw = gr.w - GAP, gh = gr.h - GAP;
      if (gw < 8 || gh < 8) return;
      s += '<rect x="' + gx + '" y="' + gy + '" width="' + gw + '" height="' + gh + '" rx="6" fill="color-mix(in srgb, ' + grp.g.color + ' 7%, var(--surface-1))" stroke="var(--hairline)"></rect>';
      var showLabel = gw > 74 && gh > 40;
      if (showLabel) s += '<text class="mm-sector-label" x="' + (gx + 7) + '" y="' + (gy + 12.5) + '" font-size="9">' + esc((grp.g.icon || "") + " " + grp.g.name.toUpperCase().slice(0, Math.floor(gw / 6.2))) + "</text>";
      var innerY = gy + (showLabel ? LABEL_H : 2), innerH = gh - (showLabel ? LABEL_H + 2 : 4);
      var tileRects = [];
      squarify(gr.item.ref.items.map(function (it) { return { value: it.value, ref: it }; }), gx + 2, innerY, gw - 4, innerH, tileRects);
      tileRects.forEach(function (tr) {
        var it = tr.item.ref;
        var tx = tr.x + 1, ty = tr.y + 1, tw = tr.w - 2, th = tr.h - 2;
        if (tw < 3 || th < 3) return;
        var mix = it.status === "full" ? 78 : it.status === "profile" ? 55 : 30;
        var fill = it.fill || "color-mix(in srgb, " + grp.g.color + " " + mix + "%, var(--surface-2))";
        s += '<g class="mm-tile" data-mm="' + esc(it.id) + '"><rect x="' + tx + '" y="' + ty + '" width="' + tw + '" height="' + th + '" rx="4" fill="' + fill + '"></rect>';
        s += "<title>" + esc(it.name) + " · " + esc(it.display || "") + (it.status !== "stub" ? " · " + it.status + " profile" : "") + "</title>";
        var chipsShown = it.chips && it.chips.length && tw > 64 && th > 58;
        if (tw > 58 && th > 26) {
          var fs = Math.min(13, Math.max(9, tw / 9));
          s += '<text x="' + (tx + tw / 2) + '" y="' + (ty + th / 2 + (th > 42 ? -3 : 3)) + '" text-anchor="middle" font-size="' + fs + '" font-weight="650" fill="var(--ink)">' + esc(it.short || it.name).slice(0, Math.floor(tw / (fs * 0.52))) + "</text>";
          /* the $-size sublabel yields when chips need the bottom edge of a short tile */
          if (th > 42 && it.display && (!chipsShown || th > 88)) s += '<text x="' + (tx + tw / 2) + '" y="' + (ty + th / 2 + 13) + '" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">' + esc(it.display) + "</text>";
        }
        /* top-company chips: small clickable boxes along the tile's bottom edge */
        if (chipsShown) {
          var cx = tx + 4, cy = ty + th - 18;
          it.chips.forEach(function (ch) {
            var cw = 10 + ch.label.length * 5.6;
            if (cx + cw > tx + tw - 4) return;
            s += '<g class="mm-chip" data-co="' + esc(ch.id) + '">' +
              '<rect x="' + cx + '" y="' + cy + '" width="' + cw + '" height="14" rx="4" fill="var(--surface-1)" stroke="var(--hairline)"></rect>' +
              '<text x="' + (cx + cw / 2) + '" y="' + (cy + 10) + '" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)" style="font-family:var(--font-mono)">' + esc(ch.label) + "</text>" +
              "<title>" + esc(ch.title || ch.label) + " · open company profile</title></g>";
            cx += cw + 4;
          });
        }
        s += "</g>";
      });
    });
    s += "</svg>";
    container.innerHTML = s;
    container.querySelectorAll(".mm-tile").forEach(function (t) {
      t.addEventListener("click", function () { if (cfg.onClick) cfg.onClick(t.getAttribute("data-mm")); });
    });
    container.querySelectorAll(".mm-chip").forEach(function (ch) {
      ch.addEventListener("click", function (e) {
        e.stopPropagation();
        if (cfg.onChipClick) cfg.onChipClick(ch.getAttribute("data-co"));
      });
    });
  }

  window.Viz = {
    forceGraph: forceGraph, valueChain: valueChain, sankey: sankey,
    treemap: treemap, radar: radar, bars: bars, tileMap: tileMap, geoMap: geoMap,
    kpiCard: kpiCard, timeline: timeline, systemDiagram: systemDiagram,
    marketMap: marketMap
  };
})();
