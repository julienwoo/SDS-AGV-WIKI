# VisionNav AGV Customer Wiki

GitHub Pages starter repository for a customer-facing AGV operation and troubleshooting wiki.

## Deploy

1. Create a GitHub repository, for example `visionnav-agv-customer-wiki`.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push to `main`. The included workflow publishes the site automatically.

## Maintain content

Customer-facing articles are Markdown files under `content/`.

- `content/troubleshooting/` — fault diagnosis and recovery
- `content/operations/` — daily operations
- `content/reference/` — FAQ and reference information

The website navigation and search are driven by `content/articles.json`. When adding/removing/renaming an article, update that JSON file; `index.html` does not need to be edited.

## Security

Do not put customer-confidential information, credentials, passwords, private network information or sensitive production data in a public repository.
