/*
 * Minimal, self-contained Markdown -> HTML renderer.
 * No external dependencies (works fully offline, no CDN required).
 * Supports the subset of Markdown used by this wiki's content:
 * headings (## / ###), paragraphs, bold/italic, inline code,
 * links, unordered/ordered lists, tables, blockquotes, hr.
 */
(function (global) {
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function inline(text) {
    let out = escapeHtml(text);
    // inline code
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    // bold
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // italic (single asterisk or underscore, avoid touching bold markers already consumed)
    out = out.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
    // links [text](url)
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (m, t, u) {
      const external = /^https?:\/\//.test(u);
      return '<a href="' + u + '"' + (external ? ' target="_blank" rel="noopener"' : "") + ">" + t + "</a>";
    });
    return out;
  }

  function parseTableBlock(lines, startIdx) {
    // lines[startIdx] is header row, lines[startIdx+1] is separator row (---|---)
    const headerCells = lines[startIdx].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    let i = startIdx + 2;
    const rows = [];
    while (i < lines.length && /^\s*\|?.*\|.*\|?\s*$/.test(lines[i]) && lines[i].trim() !== "") {
      const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      rows.push(cells);
      i++;
    }
    let html = "<table><thead><tr>";
    headerCells.forEach((c) => (html += "<th>" + inline(c) + "</th>"));
    html += "</tr></thead><tbody>";
    rows.forEach((r) => {
      html += "<tr>";
      r.forEach((c) => (html += "<td>" + inline(c) + "</td>"));
      html += "</tr>";
    });
    html += "</tbody></table>";
    return { html: html, nextIdx: i };
  }

  function render(md) {
    const lines = md.replace(/\r\n/g, "\n").split("\n");
    let html = "";
    let i = 0;
    let inUl = false;
    let inOl = false;

    function closeLists() {
      if (inUl) { html += "</ul>"; inUl = false; }
      if (inOl) { html += "</ol>"; inOl = false; }
    }

    while (i < lines.length) {
      const line = lines[i];

      if (line.trim() === "") { closeLists(); i++; continue; }

      if (/^---+$/.test(line.trim())) { closeLists(); html += "<hr/>"; i++; continue; }

      const h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) {
        closeLists();
        const level = h[1].length + 1; // ## -> h3 within article body (h1 is page title)
        const clamped = Math.min(level, 6);
        html += "<h" + clamped + ">" + inline(h[2]) + "</h" + clamped + ">";
        i++;
        continue;
      }

      // table
      if (/^\s*\|?.+\|.+\|?\s*$/.test(line) && lines[i + 1] && /^\s*\|?[\s:|-]+\|[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
        closeLists();
        const res = parseTableBlock(lines, i);
        html += res.html;
        i = res.nextIdx;
        continue;
      }

      // blockquote
      if (/^>\s?/.test(line)) {
        closeLists();
        const quoteLines = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          quoteLines.push(lines[i].replace(/^>\s?/, ""));
          i++;
        }
        html += "<blockquote><p>" + inline(quoteLines.join(" ")) + "</p></blockquote>";
        continue;
      }

      // ordered list
      const ol = line.match(/^\s*\d+\.\s+(.*)$/);
      if (ol) {
        if (!inOl) { closeLists(); html += "<ol>"; inOl = true; }
        html += "<li>" + inline(ol[1]) + "</li>";
        i++;
        continue;
      }

      // unordered list
      const ul = line.match(/^\s*[-*]\s+(.*)$/);
      if (ul) {
        if (!inUl) { closeLists(); html += "<ul>"; inUl = true; }
        html += "<li>" + inline(ul[1]) + "</li>";
        i++;
        continue;
      }

      // paragraph (collect contiguous non-empty, non-special lines)
      closeLists();
      const paraLines = [line];
      i++;
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !/^(#{1,4})\s+/.test(lines[i]) &&
        !/^\s*[-*]\s+/.test(lines[i]) &&
        !/^\s*\d+\.\s+/.test(lines[i]) &&
        !/^>\s?/.test(lines[i]) &&
        !/^---+$/.test(lines[i].trim())
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      html += "<p>" + paraLines.map(inline).join("<br/>") + "</p>";
    }
    closeLists();
    return html;
  }

  function parseFrontmatter(raw) {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    let meta = {};
    let body = raw;
    if (match) {
      body = raw.slice(match[0].length);
      match[1].split("\n").forEach((line) => {
        const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
        if (kv) meta[kv[1]] = kv[2].trim();
      });
    }
    return { meta: meta, body: body };
  }

  global.VNMarkdown = { render: render, parseFrontmatter: parseFrontmatter };
})(window);
