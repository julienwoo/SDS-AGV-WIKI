# VisionNav AGV Customer Support Wiki

A lightweight, searchable, on-site troubleshooting and operations guide for AGV/AMR customer projects — built as a static site so it can be deployed with **GitHub Pages** and updated by editing **Markdown files only** (no HTML editing required).

Live goal: a customer operator can find the right troubleshooting procedure for what they're seeing on the floor in about 30 seconds.

---

## 1. What's in this repository

```
visionnav-agv-customer-wiki/
├── index.html              # Single-page app shell (do not edit content here)
├── 404.html                # Friendly not-found page
├── assets/
│   ├── logo.svg
│   ├── css/style.css       # Styling
│   ├── js/app.js           # Routing, search, rendering
│   ├── js/markdown.js      # Small built-in Markdown renderer (no CDN dependency)
│   ├── images/
│   └── icons/
├── content/
│   ├── en/                 # English content tree
│   │   ├── manifest.json   # Registry of every article + search keywords
│   │   ├── troubleshooting/    # One .md file per fault
│   │   ├── operations/         # One .md file per daily procedure
│   │   ├── system-knowledge/   # Architecture, workflows, diagnosis
│   │   └── reference/          # Alarm codes, status, lights, best practices
│   └── zh/                 # Chinese content tree — mirrors content/en/ exactly
│       ├── manifest.json
│       ├── troubleshooting/
│       ├── operations/
│       ├── system-knowledge/
│       └── reference/
└── .github/workflows/pages.yml   # Auto build & deploy on every push
```

The site is a small single-page app: `index.html` loads `content/<lang>/manifest.json` (where `<lang>` is `en` or `zh`, chosen by the language toggle button in the header and remembered per-browser), then fetches and renders the relevant Markdown file for whichever article the visitor opens. **Engineers only ever need to touch files under `content/`** for day-to-day updates.

### Bilingual content — keep `en/` and `zh/` in sync

The site ships in English and Chinese, switched with the 中文 / English button in the top-right of the header. This only works cleanly if both trees stay structurally identical:

- **`content/en/` and `content/zh/` must contain the exact same set of files, at the exact same paths.** If you add, rename, or remove a file in one tree, do the same in the other in the same change.
- **`content/en/manifest.json` and `content/zh/manifest.json` must have the exact same `pages` entries (same `id`, `category`, `file`, `alarmCode`, `severity`, `accessLevel`, `keywords`)** — only the human-readable `title`/`symptom` text (and `site.name`/`site.tagline`/`site.notice`, and each category's `label`/`description`) should differ between the two files. Adding a page to one manifest without the other will make that page appear in only one language.
- **A handful of headings are load-bearing for cross-page links and must stay in English, verbatim, in both languages:** `## To Reject Position`, `## 3. Mujin Robot Cell → Inbound Rack Area`, `## 5. Aranco Conveyor → Inbound Rack Area`, and `## 6. Outbound VAS buffer → VAS Conveyor` (all in `system-knowledge/site-workflows.md`), `## Task progress (from the site's RCS/WMS task flow)` (in `reference/agv-status.md`), and `## 3. Vehicle and StorageBin Lock / Unlock` / `## 5. StorageBin Occupancy and Usage Status` (in `reference/rcs-ui-basics.md`). These headings become the anchor IDs that `#page#anchor`-style links jump to, and the site's slug generator strips non-English characters — translating them would silently break every link pointing at that section. When translating a page, leave these specific heading lines untouched (translate the rest of the page normally) and copy any `.md#anchor-slug` links across as-is.
- **Practical rule of thumb: never finish an update in only one language.** Whenever you edit, add, or remove something in `content/en/`, make the matching edit in `content/zh/` (and vice versa) before treating that round of changes as done.

---

## 2. Deploy this site (first time, ~5 minutes)

1. **Create a new GitHub repository** (public or private — Pages works with both on paid plans; public repos get Pages free).
2. **Upload the contents of this ZIP** into the repository — either:
   - Drag-and-drop all files/folders through the GitHub web UI ("Add file" → "Upload files"), or
   - Clone the empty repo locally, copy these files in, then:
     ```bash
     git add .
     git commit -m "Initial VisionNav AGV wiki"
     git push
     ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push to the `main` branch (or re-run the workflow from the **Actions** tab) — this triggers `.github/workflows/pages.yml`, which builds and deploys automatically.
6. Once the workflow finishes (green check in the **Actions** tab), your site is live at:
   ```
   https://<your-github-username>.github.io/<repository-name>/
   ```
   For example: `https://visionnav.github.io/visionnav-agv-customer-wiki/`

7. **(Optional) Custom domain** — in **Settings → Pages → Custom domain**, enter something like `wiki.visionnav.com` and follow GitHub's DNS instructions (a `CNAME` record pointing at `<username>.github.io`). GitHub will add a `CNAME` file to the repo automatically.

No server, database, or manual upload step is needed after this — every future `git push` to `main` redeploys the site automatically.

---

## 3. Updating content (day-to-day workflow)

**You should never need to edit `index.html`, `style.css`, or `app.js` to add or change an article.**

### To edit an existing article

1. Open the relevant file under `content/en/troubleshooting/`, `content/en/operations/`, `content/en/system-knowledge/`, or `content/en/reference/` — **and** its counterpart at the same path under `content/zh/`.
2. Edit the Markdown text in both files (headings, steps, tables — standard Markdown). See "Bilingual content" above for the headings that must stay in English in both files.
3. Commit and push both files together:
   ```bash
   git add content/en/troubleshooting/safety-laser.md content/zh/troubleshooting/safety-laser.md
   git commit -m "Update safety laser troubleshooting steps (EN + ZH)"
   git push
   ```
4. GitHub Actions redeploys automatically within a minute or two.

### To add a brand-new article

1. Create a new Markdown file in the right folder **in both language trees**, e.g. `content/en/troubleshooting/new-fault.md` and `content/zh/troubleshooting/new-fault.md` (same filename, same folder, under each language root). Use this template (matches the structure used throughout the wiki):

   ```markdown
   ---
   title: My New Fault
   severity: yellow
   accessLevel: 1
   alarmCode: XYZ-000
   ---

   ## Symptom
   ...

   ## Alarm Code
   ...

   ## Severity
   ...

   ## Access Level
   ...

   ## Possible Causes
   ...

   ## Step-by-Step Troubleshooting
   1. ...

   ## Expected Result
   ...

   ## If Not Solved
   ...

   ## Escalation
   ...

   ## Information Required
   - AGV ID
   - Alarm Code
   - Screenshot
   - Location
   - Task ID
   - Time of occurrence
   ```

2. Register the page in **both `content/en/manifest.json` and `content/zh/manifest.json`** by adding a matching entry to each file's `pages` array — same `id`, `category`, `file`, `alarmCode`, `severity`, `accessLevel`, and `keywords`, but with `title`/`symptom` in the matching language:

   ```json
   // content/en/manifest.json
   {
     "id": "new-fault",
     "category": "troubleshooting",
     "file": "troubleshooting/new-fault.md",
     "title": "My New Fault",
     "symptom": "Short description shown in search results.",
     "alarmCode": "XYZ-000",
     "severity": "yellow",
     "accessLevel": 1,
     "keywords": ["new fault", "plain language operators would type", "中文关键词"]
   }
   ```

   ```json
   // content/zh/manifest.json — same id/category/file/alarmCode/severity/accessLevel/keywords, translated title/symptom
   {
     "id": "new-fault",
     "category": "troubleshooting",
     "file": "troubleshooting/new-fault.md",
     "title": "我的新故障",
     "symptom": "搜索结果中显示的简短描述。",
     "alarmCode": "XYZ-000",
     "severity": "yellow",
     "accessLevel": 1,
     "keywords": ["new fault", "plain language operators would type", "中文关键词"]
   }
   ```

   The `keywords` array is what makes search work for operators typing plain-language symptoms (English or Chinese) instead of formal alarm codes — keep it identical across both manifests and add as many synonyms as you expect operators to use.

3. Commit and push both language versions together. The new article automatically appears in the sidebar, the relevant category page, and search, in whichever language the visitor has selected — no other file needs to change.

### `severity` values
`red` (critical/stopped), `yellow` (degraded/attention), `green` (informational/normal procedure).

### `accessLevel` values
`1` = Operator, `2` = Supervisor, `3` = VisionNav Service only (should not be edited by the customer — used to flag map, navigation parameters, safety parameters, RCS configuration, network configuration, and software/database items).

---

## 4. Local preview before pushing

Because the app fetches Markdown files with `fetch()`, opening `index.html` directly from disk (`file://`) will not work in most browsers. Serve it locally instead:

```bash
cd visionnav-agv-customer-wiki
python3 -m http.server 8080
# then open http://localhost:8080 in a browser
```

---

## 5. Design notes / roadmap

This is a **V1**: static HTML/CSS/JS + Markdown, deployed via GitHub Pages + GitHub Actions, with no database, CMS, or server. That keeps cost and maintenance overhead at zero.

Planned upgrade paths (not built yet, kept here for context):

- **V2:** stronger full-text search, a guided troubleshooting decision tree, embedded images/video per article, a larger structured alarm-code database, per-project/customer-specific content, deeper mobile UX polish, version history. (English/Chinese language toggle shipped — see "Bilingual content" above.)
- **V3:** live integration with RCS (Robot Control System) data — alarms, events, AGV/task status — feeding a knowledge layer that could support an AI troubleshooting assistant, e.g. an operator asking "AGV-03 is stopped at Station 5 showing a Safety Laser Alarm, what do I do?" and getting an answer informed by both live RCS state and this wiki's content.
- **Templating:** this repository is designed to be forked/copied per customer project (e.g. `VN25447-Samsung-Wiki`), keeping shared UI/navigation/search/templates consistent while swapping in project-specific AGV models, alarm codes, images, SOPs, map details, and contact information.
- **Multi-customer isolation:** if this evolves into a shared platform serving many customers, plan for either path-based (`wiki.visionnav.com/customer-a`) or subdomain-based (`customer-a.wiki.visionnav.com`) separation, and add login/access control before publishing anything containing customer IP addresses, maps, internal network details, or RCS configuration.

---

## 6. Customizing for a new project

To reuse this repository as a template for a new customer:

1. Update `site.name` and `site.tagline` in **both** `content/en/manifest.json` and `content/zh/manifest.json`. (This template currently ships with no support-contact banner; add one back in the reference section and the home page if/when the project stands up an official support channel.)
2. Replace `assets/logo.svg` if a different brand mark is needed.
3. Update alarm codes in `content/en/reference/alarm-codes.md` and `content/zh/reference/alarm-codes.md`, and the matching entries in both `manifest.json` files, to match the project's actual AGV fleet.
4. Add/replace troubleshooting and operations articles to match the project's SOPs and AGV model(s) — in both `content/en/` and `content/zh/`.
5. Push — the workflow deploys the customized site automatically.
