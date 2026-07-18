/* ============================================================
   Industry Atlas - AI research assistant (optional)
   Bring-your-own Anthropic API key, stored ONLY in localStorage.
   Calls the Messages API directly from the browser; no server.
   The whole platform works without this; it adds conversational
   research grounded on the current page's data module.
   ============================================================ */
(function () {
  "use strict";
  var KEY_NAME = "atlas2-anthropic-key";
  var MODEL = "claude-sonnet-5";
  var history = [];

  function getKey() { try { return localStorage.getItem(KEY_NAME) || ""; } catch (e) { return ""; } }
  function setKey(k) { try { k ? localStorage.setItem(KEY_NAME, k) : localStorage.removeItem(KEY_NAME); } catch (e) {} }

  function pageContext() {
    var ctx = "You are the research assistant inside Industry Atlas, a free educational platform mapping every major industry and their connections. Be concise, structured, and honest about uncertainty. Use plain American English, digits, % signs, $4.5B style, negatives in parentheses, and never use em dashes. You are not giving investment advice.";
    try {
      var id = Atlas.param("id");
      if (id && Atlas.store.modules[id]) {
        var m = JSON.parse(JSON.stringify(Atlas.store.modules[id]));
        delete m.quiz;
        var s = JSON.stringify(m);
        if (s.length > 24000) s = s.slice(0, 24000) + "…(truncated)";
        ctx += "\n\nThe user is currently reading the " + m.meta.name + " industry page. Ground your answers on this data module (figures are estimates with asOf years):\n" + s;
        ctx += "\n\nIts graph connections: " + JSON.stringify(Atlas.edgesFor(id));
      } else {
        var inds = Atlas.store.industries.map(function (i) { return i.id; }).join(", ");
        ctx += "\n\nIndustries in the atlas: " + inds + ".";
      }
      ctx += "\nThe user's selected lens is: " + Atlas.getLens() + ". Calibrate depth and framing to that audience.";
    } catch (e) {}
    return ctx;
  }

  var TEMPLATES = [
    { t: "Explain simply", p: "Explain this industry to me at my selected level, in under 300 words, with one concrete example." },
    { t: "Investment memo", p: "Draft a 1-page investment memo skeleton for this industry: thesis, key drivers, KPIs to watch, valuation approach, top 3 risks, what would change your mind." },
    { t: "Trace a shock", p: "Suppose demand in this industry drops 20% next year. Trace the transmission through its upstream and downstream connections in the atlas graph, step by step." },
    { t: "Compare", p: "Compare this industry's economics (margins, capital intensity, cyclicality, pricing power) with the closest adjacent industry in the atlas. Use a table." },
    { t: "Consultant view", p: "As a strategy consultant, what are the 5 questions you would ask a CEO in this industry this year, and why?" }
  ];

  function build() {
    var fab = document.createElement("button");
    fab.className = "ai-fab"; fab.title = "AI research assistant"; fab.innerHTML = "✦";
    var panel = document.createElement("aside");
    panel.className = "ai-panel";
    panel.innerHTML =
      '<div class="ai-head"><h3>Research assistant</h3><span class="pill pill-amber">your API key</span>' +
      '<button class="icon-btn" id="ai-close" style="margin-left:auto">×</button></div>' +
      '<div class="ai-body" id="ai-body"></div>' +
      '<div class="ai-foot"><textarea id="ai-input" placeholder="Ask about this industry, its KPIs, its connections…"></textarea>' +
      '<button class="btn btn-primary" id="ai-send">Send</button></div>';
    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var body = panel.querySelector("#ai-body");
    var input = panel.querySelector("#ai-input");

    function renderIntro() {
      var key = getKey();
      var html = "";
      if (!key) {
        html += '<div class="ai-msg bot">This assistant runs on <b>your own Anthropic API key</b>, pay-per-use, stored only in this browser. Everything else on Industry Atlas is free and works without it.<br><br>Get a key at console.anthropic.com, then paste it below.</div>' +
          '<div class="ai-key"><input id="ai-key-input" type="password" placeholder="sk-ant-…"><br><br><button class="btn btn-sm btn-primary" id="ai-key-save">Save key locally</button></div>';
      } else {
        html += '<div class="ai-msg bot">Key loaded (local only). I can see the page you are reading and its graph connections. Try a template or ask anything.<br><br><button class="btn btn-sm" id="ai-key-clear">Forget key</button></div>';
        html += '<div class="ai-templates">' + TEMPLATES.map(function (t, i) {
          return '<button class="lens" data-tpl="' + i + '">' + t.t + "</button>";
        }).join("") + "</div>";
      }
      body.innerHTML = html;
      var save = body.querySelector("#ai-key-save");
      if (save) save.addEventListener("click", function () {
        var v = body.querySelector("#ai-key-input").value.trim();
        if (v) { setKey(v); renderIntro(); }
      });
      var clear = body.querySelector("#ai-key-clear");
      if (clear) clear.addEventListener("click", function () { setKey(""); history = []; renderIntro(); });
      body.querySelectorAll("[data-tpl]").forEach(function (b) {
        b.addEventListener("click", function () {
          input.value = TEMPLATES[parseInt(b.getAttribute("data-tpl"), 10)].p;
          input.focus();
        });
      });
    }

    function addMsg(role, text) {
      var d = document.createElement("div");
      d.className = "ai-msg " + (role === "user" ? "user" : "bot");
      d.textContent = text;
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
      return d;
    }

    function send() {
      var text = input.value.trim();
      if (!text) return;
      var key = getKey();
      if (!key) { renderIntro(); return; }
      input.value = "";
      addMsg("user", text);
      history.push({ role: "user", content: text });
      var thinking = addMsg("bot", "…");
      fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 1200,
          system: pageContext(),
          messages: history.slice(-12)
        })
      }).then(function (r) {
        if (!r.ok) return r.json().then(function (e) { throw new Error((e.error && e.error.message) || ("HTTP " + r.status)); });
        return r.json();
      }).then(function (data) {
        var out = (data.content || []).map(function (c) { return c.text || ""; }).join("");
        thinking.textContent = out || "(empty response)";
        history.push({ role: "assistant", content: out });
      }).catch(function (err) {
        thinking.textContent = "Error: " + err.message + (String(err.message).indexOf("401") !== -1 ? " (check your API key)" : "");
      });
    }

    fab.addEventListener("click", function () { panel.classList.toggle("open"); if (!body.childNodes.length) renderIntro(); });
    panel.querySelector("#ai-close").addEventListener("click", function () { panel.classList.remove("open"); });
    panel.querySelector("#ai-send").addEventListener("click", send);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
  }

  document.addEventListener("atlas:ready", build);
})();
