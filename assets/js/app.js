/*
 * VisionNav AGV Customer Support Wiki — app shell
 * Hash-based routing so the site works as static files on GitHub Pages
 * with no server-side rewrites needed.
 *
 * Routes:
 *   #/                                  -> home
 *   #/category/:categoryId              -> category listing
 *   #/page/:pageId                      -> article
 *
 * Bilingual support:
 *   LANG ("en" | "zh") picks which content/<lang>/ tree is fetched and
 *   which UI strings (STRINGS below) are shown. The language choice is
 *   persisted in localStorage so it sticks across visits.
 */
(function () {
  function getStoredLang() {
    try {
      const v = window.localStorage.getItem("vn_lang");
      if (v === "en" || v === "zh") return v;
    } catch (e) {}
    return "en";
  }
  function storeLang(lang) {
    try { window.localStorage.setItem("vn_lang", lang); } catch (e) {}
  }

  let LANG = getStoredLang();
  let MANIFEST = null;

  function contentBase() {
    return "content/" + LANG + "/";
  }

  const STRINGS = {
    en: {
      headerSearchPlaceholder: "Search... (press Enter)",
      homeSearchPlaceholder: "What do you need help with? e.g. AGV not moving, laser alarm, charging...",
      homeLink: "🏠 Home",
      breadcrumbHome: "Home",
      loading: "Loading…",
      noResults: 'No results. Try different words, or check the current <a href="#/category/troubleshooting">Troubleshooting</a> list.',
      helpBannerTitle: "🆘 Still have a problem?",
      helpBannerBody: "If none of the above solved it, record the alarm code and AGV ID and hand off per your site's escalation process.",
      notFoundTitle: "Page not found",
      returnHome: "Return home",
      couldNotLoad: "Could not load this article.",
      menuBtnLabel: "Open menu",
      langBtnLabel: "中文",
      langBtnTitle: "切换到中文",
    },
    zh: {
      headerSearchPlaceholder: "搜索...(按回车)",
      homeSearchPlaceholder: "需要什么帮助?例如:AGV 不动、激光报警、充电...",
      homeLink: "🏠 首页",
      breadcrumbHome: "首页",
      loading: "加载中…",
      noResults: '未找到结果。请尝试其他关键词,或查看当前的<a href="#/category/troubleshooting">故障排查</a>列表。',
      helpBannerTitle: "🆘 问题仍未解决?",
      helpBannerBody: "如果以上内容都无法解决问题,请记录报警代码和 AGV 编号,并按现场升级流程上报。",
      notFoundTitle: "页面未找到",
      returnHome: "返回首页",
      couldNotLoad: "无法加载该文章。",
      menuBtnLabel: "打开菜单",
      langBtnLabel: "English",
      langBtnTitle: "Switch to English",
    },
  };

  function t(key) {
    return (STRINGS[LANG] && STRINGS[LANG][key]) || (STRINGS.en[key] || "");
  }

  const app = document.getElementById("app");

  function severityLabel(sev) {
    if (LANG === "zh") {
      return { red: "🔴 严重", yellow: "🟡 需注意", green: "🟢 正常" }[sev] || sev;
    }
    return { red: "🔴 Critical", yellow: "🟡 Attention", green: "🟢 Normal" }[sev] || sev;
  }

  function levelLabel(lvl) {
    const n = String(lvl);
    if (LANG === "zh") {
      return {
        "1": "🟢 操作员 – 1 级",
        "2": "🟡 主管 – 2 级",
        "3": "🔴 VisionNav 服务 – 3 级",
      }[n] || "级别 " + n;
    }
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
    const res = await fetch(contentBase() + "manifest.json", { cache: "no-cache" });
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
    let html = '<a href="#/" class="vn-home-link">' + t("homeLink") + "</a>";
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
    let html = '<a href="#/">' + t("breadcrumbHome") + "</a>";
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

    function tileIcon(p) {
      if (p.category === "troubleshooting") {
        return { red: "🔴", yellow: "🟡", green: "🟢" }[p.severity] || "🔴";
      }
      return "▶";
    }

    function tile(p) {
      return '<a class="vn-tile" href="#/page/' + p.id + '">' +
        tileIcon(p) + " " + escapeHtml(p.title) +
        '<span class="vn-tile-arrow">→</span></a>';
    }

    let html = '<div class="vn-home-hero">';
    html += "<h1>" + escapeHtml(MANIFEST.site.name) + "</h1>";
    html += '<p class="vn-tagline">' + escapeHtml(MANIFEST.site.tagline) + "</p>";
    html += '<div class="vn-search-box">';
    html += '<span class="icon">🔍</span>';
    html += '<input id="home-search" type="text" placeholder="' + escapeHtml(t("homeSearchPlaceholder")) + '" autocomplete="off" />';
    html += '<div class="vn-search-results" id="home-search-results"></div>';
    html += "</div></div>";

    const notice = MANIFEST.site.notice;
    if (notice) {
      html += '<div class="vn-notice-banner">';
      html += "<h2>" + (notice.icon ? notice.icon + " " : "") + escapeHtml(notice.title || "") + "</h2>";
      html += "<p>" + escapeHtml(notice.body || "") + "</p>";
      html += "</div>";
    }

    // Category sections are driven entirely by manifest.json, so adding,
    // renaming, or reordering a category (see content/<lang>/manifest.json)
    // shows up here automatically — no code change needed.
    MANIFEST.categories.forEach((cat) => {
      const pages = pagesInCategory(cat.id);
      if (pages.length === 0) return;
      html += '<div class="vn-home-section"><h2>' + cat.icon + " " + escapeHtml(cat.label) + "</h2>";
      if (cat.description) html += '<p class="vn-section-desc">' + escapeHtml(cat.description) + "</p>";
      html += '<div class="vn-tile-grid">';
      pages.forEach((p) => (html += tile(p)));
      html += "</div></div>";
    });

    html += '<div class="vn-help-banner"><h2>' + t("helpBannerTitle") + "</h2>";
    html += "<p>" + t("helpBannerBody") + "</p>";
    html += "</div>";

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
      resultsEl.innerHTML = '<div class="vn-search-empty">' + t("noResults") + "</div>";
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

    app.innerHTML = '<div class="vn-loading">' + t("loading") + "</div>";

    try {
      const res = await fetch(contentBase() + page.file, { cache: "no-cache" });
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

      app.innerHTML = html;
      // fix relative links from markdown (../operations/x.md etc.) into hash routes
      app.querySelectorAll(".vn-article-body a[href$='.md'], .vn-article-body a[href*='.md#']").forEach((a) => {
        const href = a.getAttribute("href");
        const clean = resolveContentLink(page.file, href);
        if (clean) a.setAttribute("href", clean);
      });
    } catch (err) {
      app.innerHTML = '<div class="vn-error">' + t("couldNotLoad") + ' <a href="#/">' + t("returnHome") + "</a>.</div>";
    }
  }

  function resolveContentLink(currentFile, href) {
    // href examples: "../operations/auto-manual-mode.md", "reset.md", "rcs-ui-basics.md#4-task-and-order-states"
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
    app.innerHTML = '<div class="vn-error"><h1>' + t("notFoundTitle") + '</h1><p><a href="#/">' + t("returnHome") + "</a></p></div>";
  }

  // ---------- Router ----------
  function parseRoute() {
    let hash = location.hash.replace(/^#/, "") || "/";
    // A route can carry a same-page anchor after a second literal "#"
    // (e.g. "#/page/site-workflows#to-reject-position") — location.hash
    // includes everything from the first "#" onward, so split it off here.
    let anchor = null;
    const hashIdx = hash.indexOf("#");
    if (hashIdx !== -1) {
      anchor = hash.slice(hashIdx + 1);
      hash = hash.slice(0, hashIdx);
    }
    const segments = hash.split("/").filter(Boolean);
    if (segments.length === 0) return { name: "home" };
    if (segments[0] === "category" && segments[1]) return { name: "category", id: segments[1] };
    if (segments[0] === "page" && segments[1]) return { name: "page", id: segments[1], anchor: anchor };
    return { name: "home" };
  }

  async function route() {
    await loadManifest();
    closeMobileSidebar();
    const r = parseRoute();
    if (r.name === "home") { window.scrollTo(0, 0); return renderHome(); }
    if (r.name === "category") { window.scrollTo(0, 0); return renderCategory(r.id); }
    if (r.name === "page") {
      await renderArticle(r.id);
      if (r.anchor) {
        const el = document.getElementById(r.anchor);
        if (el) el.scrollIntoView();
        else window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }
    window.scrollTo(0, 0);
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

  // ---------- Static UI text (header/footer chrome outside the router) ----------
  function applyStaticStrings() {
    document.documentElement.lang = LANG === "zh" ? "zh-CN" : "en";
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) menuBtn.setAttribute("aria-label", t("menuBtnLabel"));
    const headerInput = document.getElementById("header-search-input");
    if (headerInput) headerInput.setAttribute("placeholder", t("headerSearchPlaceholder"));
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
      langBtn.textContent = t("langBtnLabel");
      langBtn.setAttribute("title", t("langBtnTitle"));
      langBtn.setAttribute("aria-label", t("langBtnTitle"));
    }
  }

  // ---------- Language toggle ----------
  function toggleLang() {
    LANG = LANG === "zh" ? "en" : "zh";
    storeLang(LANG);
    MANIFEST = null;
    applyStaticStrings();
    route();
  }

  function setupLangToggle() {
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) langBtn.addEventListener("click", toggleLang);
  }

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu-btn").addEventListener("click", toggleMobileSidebar);
    document.getElementById("sidebar-overlay").addEventListener("click", closeMobileSidebar);
    setupHeaderSearch();
    setupLangToggle();
    applyStaticStrings();
    route();
  });
})();
