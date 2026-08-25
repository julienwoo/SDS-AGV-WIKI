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
│   ├── manifest.json       # Registry of every article + search keywords
│   ├── troubleshooting/    # One .md file per fault
│   ├── operations/         # One .md file per daily procedure
│   └── reference/          # Alarm codes, status, lights, FAQ
└── .github/workflows/pages.yml   # Auto build & deploy on every push
```

The site is a small single-page app: `index.html` loads `content/manifest.json`, then fetches and renders the relevant Markdown file for whichever article the visitor opens. **Engineers only ever need to touch files under `content/`** for day-to-day updates.

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

1. Open the relevant file under `content/troubleshooting/`, `content/operations/`, or `content/reference/`.
2. Edit the Markdown text (headings, steps, tables — standard Markdown).
3. Commit and push:
   ```bash
   git add content/troubleshooting/safety-laser.md
   git commit -m "Update safety laser troubleshooting steps"
   git push
   ```
4. GitHub Actions redeploys automatically within a minute or two.

### To add a brand-new article

1. Create a new Markdown file in the right folder, e.g. `content/troubleshooting/new-fault.md`. Use this template (matches the structure used throughout the wiki):

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

2. Register the page in **`content/manifest.json`** by adding an entry to the `pages` array:

   ```json
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

   The `keywords` array is what makes search work for operators typing plain-language symptoms (English or Chinese) instead of formal alarm codes — add as many synonyms as you expect operators to use.

3. Commit and push. The new article automatically appears in the sidebar, the relevant category page, and search — no other file needs to change.

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

- **V2:** stronger full-text search, a guided troubleshooting decision tree, English/Chinese language toggle, embedded images/video per article, a larger structured alarm-code database, per-project/customer-specific content, deeper mobile UX polish, version history.
- **V3:** live integration with RCS (Robot Control System) data — alarms, events, AGV/task status — feeding a knowledge layer that could support an AI troubleshooting assistant, e.g. an operator asking "AGV-03 is stopped at Station 5 showing a Safety Laser Alarm, what do I do?" and getting an answer informed by both live RCS state and this wiki's content.
- **Templating:** this repository is designed to be forked/copied per customer project (e.g. `VN25447-Samsung-Wiki`), keeping shared UI/navigation/search/templates consistent while swapping in project-specific AGV models, alarm codes, images, SOPs, map details, and contact information.
- **Multi-customer isolation:** if this evolves into a shared platform serving many customers, plan for either path-based (`wiki.visionnav.com/customer-a`) or subdomain-based (`customer-a.wiki.visionnav.com`) separation, and add login/access control before publishing anything containing customer IP addresses, maps, internal network details, or RCS configuration.

---

## 6. Customizing for a new project

To reuse this repository as a template for a new customer:

1. Update `content/manifest.json` → `site.name` and `site.tagline`. (This template currently ships with no support-contact banner; add one back in `content/reference/faq.md` and the home page if/when the project stands up an official support channel.)
2. Replace `assets/logo.svg` if a different brand mark is needed.
3. Update alarm codes in `content/reference/alarm-codes.md` and the matching `manifest.json` entries to match the project's actual AGV fleet.
4. Add/replace troubleshooting and operations articles to match the project's SOPs and AGV model(s).
5. Push — the workflow deploys the customized site automatically.
