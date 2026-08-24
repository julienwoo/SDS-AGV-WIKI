/*
 * VisionNav AGV Customer Support Wiki — app shell
 * Hash-based routing so the site works as static files on GitHub Pages
 * with no server-side rewrites needed.
 *
 * Routes:
 *   #/                                  -> home
 *   #/category/:categoryId              -> category listing
 *   #/page/:pageId                      -> article
 */
(function () {
  const CONTENT_BASE = "content/";
  let MANIFEST = null;

  const app = document.getElementById("app");

  function severityLabel(sev) {
    return { red: "🔴 Critical", yellow: "🟡 Attention", green: "🟢 Normal" }[sev] || sev;
  }

  function levelLabel(lvl) {
    const n = String(lvl);
    return {
      "1": "🟢 Operator – Level 1",
      "2": "🟡 Supervisor – Level 2",
      "3": "🔴 VisionNav Service – Level 3",
    }[n] || "Level " + n;
  }

  function levelClass(lvl) {
    return "level-" + lvl;
  }

  async function loadManifest() {
    if (MANIFEST) return MANIFEST;
    const res = await fetch(CONTENT_BASE + "manifest.json", { cache: "no-cache" });
    MANIFEST = await res.json();
    return MANIFEST;
  }

  function pageById(id) {
    return MANIFEST.pages.find((p) => p.id === id);
  }

  function categoryById(id) {
    return MANIFEST.categories.find((c) => c.id === id);
  }

  function pagesInCategory(catId) {
    return MANIFEST.pages.filter((p) => p.category === catId);
  }

  // ---------- Sidebar ----------
  function renderSidebar(activePageId) {
    const sidebar = document.getElementById("sidebar");
    let html = '<a href="#/" class="vn-home-link">🏠 Home</a>';
    MANIFEST.categories.forEach((cat) => {
      html += "<h3>" + cat.icon + " " + cat.label + "</h3>";
      pagesInCategory(cat.id).forEach((p) => {
        const active = p.id === activePageId ? " active" : "";
        const dot = p.category === "troubleshooting"
          ? '<span class="vn-badge-dot ' + p.severity + '"></span>'
          : "";
        html += '<a class="vn-nav-link' + active + '" href="#/page/' + p.id + '">' + dot + escapeHtml(p.title) + "</a>";
      });
    });
    sidebar.innerHTML = html;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ---------- Breadcrumb ----------
  function renderBreadcrumb(parts) {
    // parts: [{label, href}] last one has no href (current)
    let html = '<a href="#/">Home</a>';
    parts.forEach((p, idx) => {
      html += '<span class="sep">&rsaquo;</span>';
      if (p.href && idx !== parts.length - 1) {
        html += '<a href="' + p.href + '">' + escapeHtml(p.label) + "</a>";
      } else {
        html += '<span class="current">' + escapeHtml(p.label) + "</span>";
      }
    });
    return '<div class="vn-breadcrumb">' + html + "</div>";
  }

  // ---------- Home ----------
  function renderHome() {
    document.title = MANIFEST.site.name;
    renderSidebar(null);
    const ts = pagesInCategory("troubleshooting");
    const ops = pagesInCategory("operations");
    const ref = pagesInCategory("reference");

    function tile(p, icon) {
      return '<a class="vn-tile" href="#/page/' + p.id + '">' +
        (icon || "") + " " + escapeHtml(p.title) +
        '<span class="vn-tile-arrow">→</span></a>';
    }

    let html = '<div class="vn-home-hero">';
    html += "<h1>" + escapeHtml(MANIFEST.site.name) + "</h1>";
    html += '<p class="vn-tagline">' + escapeHtml(MANIFEST.site.tagline) + "</p>";
    html += '<div class="vn-search-box">';
    html += '<span class="icon">🔍</span>';
    html += '<input id="home-search" type="text" placeholder="What do you need help with? e.g. AGV not moving, laser alarm, charging..." autocomplete="off" />';
    html += '<div class="vn-search-results" id="home-search-results"></div>';
    html += "</div></div>";

    html += '<div class="vn-home-section"><h2>🚨 Troubleshooting</h2><div class="vn-tile-grid">';
    ts.forEach((p) => (html += tile(p, "🔴")));
    html += "</div></div>";

    html += '<div class="vn-home-section"><h2>⚙️ Daily Operations</h2><div class="vn-tile-grid">';
    ops.forEach((p) => (html += tile(p, "▶")));
    html += "</div></div>";

    html += '<div class="vn-home-section"><h2>📖 Reference</h2><div class="vn-tile-grid">';
    ref.forEach((p) => (html += tile(p, "📄")));
    html += "</div></div>";

    html += '<div class="vn-help-banner"><h2>🆘 Still have a problem?</h2>';
    html += "<p>If none of the above solved it, contact VisionNav Service with your AGV ID, alarm code, and a screenshot.</p>";
    html += '<a class="vn-btn" href="#/page/faq">Contact VisionNav Service</a></div>';

    app.innerHTML = html;

    const input = document.getElementById("home-search");
    const results = document.getElementById("home-search-results");
    input.addEventListener("input", () => runSearch(input.value, results));
    input.addEventListener("focus", () => runSearch(input.value, results));
    document.addEventListener("click", function onDocClick(e) {
      if (!results.contains(e.target) && e.target !== input) {
        results.classList.remove("open");
      }
    });
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return MANIFEST.pages
      .map((p) => {
        const haystack = [p.title, p.symptom, p.id].concat(p.keywords || []).join(" ").toLowerCase();
        let score = 0;
        if (p.title.toLowerCase().includes(q)) score += 3;
        if (haystack.includes(q)) score += 1;
        (p.keywords || []).forEach((k) => {
          if (k.toLowerCase() === q) score += 5;
          else if (k.toLowerCase().includes(q)) score += 2;
        });
        return { page: p, score: score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.page);
  }

  function runSearch(query, resultsEl) {
    if (!query || !query.trim()) {
      resultsEl.classList.remove("open");
      resultsEl.innerHTML = "";
      return;
    }
    const matches = search(query).slice(0, 8);
    if (matches.length === 0) {
      resultsEl.innerHTML = '<div class="vn-search-empty">No results. Try different words, or <a href="#/page/faq">contact VisionNav Service</a>.</div>';
    } else {
      resultsEl.innerHTML = matches
        .map((p) => {
          const cat = categoryById(p.category);
          return '<a href="#/page/' + p.id + '">' + escapeHtml(p.title) +
            '<span class="vn-result-cat">' + (cat ? cat.label : p.category) + "</span></a>";
        })
        .join("");
    }
    resultsEl.classList.add("open");
  }

  // ---------- Category listing ----------
  function renderCategory(catId) {
    const cat = categoryById(catId);
    if (!cat) return renderNotFound();
    document.title = cat.label + " · " + MANIFEST.site.name;
    renderSidebar(null);
    let html = renderBreadcrumb([{ label: cat.label }]);
    html += "<div class='vn-article-header'><h1>" + cat.icon + " " + escapeHtml(cat.label) + "</h1>";
    html += "<p>" + escapeHtml(cat.description) + "</p></div>";
    html += '<div class="vn-tile-grid">';
    pagesInCategory(catId).forEach((p) => {
      html += '<a class="vn-tile" href="#/page/' + p.id + '">' + escapeHtml(p.title) + '<span class="vn-tile-arrow">→</span></a>';
    });
    html += "</div>";
    app.innerHTML = html;
  }

  // ---------- Article ----------
  async function renderArticle(pageId) {
    const page = pageById(pageId);
    if (!page) return renderNotFound();
    document.title = page.title + " · " + MANIFEST.site.name;
    renderSidebar(pageId);
    const cat = categoryById(page.category);

    app.innerHTML = '<div class="vn-loading">Loading…</div>';

    try {
      const res = await fetch(CONTENT_BASE + page.file, { cache: "no-cache" });
      if (!res.ok) throw new Error("Not found");
      const raw = await res.text();
      const { meta, body } = window.VNMarkdown.parseFrontmatter(raw);
      const bodyHtml = window.VNMarkdown.render(body);

      let html = renderBreadcrumb([
        { label: cat ? cat.label : page.category, href: "#/category/" + page.category },
        { label: page.title },
      ]);

      html += '<div class="vn-article-header">';
      html += "<h1>" + escapeHtml(meta.title || page.title) + "</h1>";
      html += '<div class="vn-meta-row">';
      const sev = meta.severity || page.severity;
      if (sev) html += '<span class="vn-pill severity-' + sev + '">' + severityLabel(sev) + "</span>";
      const lvl = meta.accessLevel || page.accessLevel;
      if (lvl) html += '<span class="vn-pill ' + levelClass(lvl) + '">' + levelLabel(lvl) + "</span>";
      const alarm = meta.alarmCode || page.alarmCode;
      if (alarm && alarm !== "N/A") html += '<span class="vn-pill alarm">⚠ ' + escapeHtml(alarm) + "</span>";
      html += "</div></div>";

      html += '<div class="vn-article-body">' + bodyHtml + "</div>";

      html += '<div class="vn-article-footer">';
      html += '<p>Didn\'t solve it? <a href="#/page/faq">Contact VisionNav Service</a> with your AGV ID, alarm code, and a screenshot.</p>';
      html += "</div>";

      app.innerHTML = html;
      // fix relative links from markdown (../operations/x.md etc.) into hash routes
      app.querySelectorAll(".vn-article-body a[href$='.md'], .vn-article-body a[href*='.md#']").forEach((a) => {
        const href = a.getAttribute("href");
        const clean = resolveContentLink(page.file, href);
        if (clean) a.setAttribute("href", clean);
      });
    } catch (err) {
      app.innerHTML = '<div class="vn-error">Could not load this article. <a href="#/">Return home</a>.</div>';
    }
  }

  function resolveContentLink(currentFile, href) {
    // href examples: "../operations/auto-manual-mode.md", "charging.md", "agv-status.md#contact-visionnav-service"
    const [pathPart, hash] = href.split("#");
    const currentDir = currentFile.split("/").slice(0, -1); // e.g. ["troubleshooting"]
    const parts = currentDir.concat(pathPart.split("/"));
    const stack = [];
    parts.forEach((part) => {
      if (part === "..") stack.pop();
      else if (part === "." || part === "") {}
      else stack.push(part);
    });
    const targetFile = stack.join("/").replace(/\.md$/, "");
    const targetId = targetFile.split("/").pop();
    // Prefer an exact file-path match (handles same-basename files in
    // different folders, e.g. troubleshooting/charging.md vs.
    // operations/charging.md) before falling back to an id-only match.
    const page =
      MANIFEST.pages.find((p) => p.file.replace(/\.md$/, "") === targetFile) ||
      MANIFEST.pages.find((p) => p.id === targetId);
    if (!page) return null;
    return "#/page/" + page.id + (hash ? "#" + hash : "");
  }

  function renderNotFound() {
    app.innerHTML = '<div class="vn-error"><h1>Page not found</h1><p><a href="#/">Return home</a></p></div>';
  }

  // ---------- Router ----------
  function parseRoute() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const segments = hash.split("/").filter(Boolean);
    if (segments.length === 0) return { name: "home" };
    if (segments[0] === "category" && segments[1]) return { name: "category", id: segments[1] };
    if (segments[0] === "page" && segments[1]) return { name: "page", id: segments[1] };
    return { name: "home" };
  }

  async function route() {
    await loadManifest();
    closeMobileSidebar();
    const r = parseRoute();
    window.scrollTo(0, 0);
    if (r.name === "home") return renderHome();
    if (r.name === "category") return renderCategory(r.id);
    if (r.name === "page") return renderArticle(r.id);
    return renderNotFound();
  }

  // ---------- Mobile sidebar ----------
  function closeMobileSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebar-overlay").classList.remove("open");
  }
  function toggleMobileSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebar-overlay").classList.toggle("open");
  }

  // ---------- Header search ----------
  function setupHeaderSearch() {
    const input = document.getElementById("header-search-input");
    if (!input) return;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const matches = search(input.value);
        if (matches.length > 0) location.hash = "#/page/" + matches[0].id;
      }
    });
  }

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu-btn").addEventListener("click", toggleMobileSidebar);
    document.getElementById("sidebar-overlay").addEventListener("click", closeMobileSidebar);
    setupHeaderSearch();
    route();
  });
})();
