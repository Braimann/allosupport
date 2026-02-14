---
name: "excel-export"
description: "Exports supporting data to Excel-compatible CSV. Invoke when the user requests tabular SEO data or matrices suitable for Excel."
---

# Excel-Compatible Export

This skill defines how to produce an Excel-compatible CSV containing supporting audit data:
- Per-page SEO checks (URL, title/description, H1 count, schema types, alt tags, canonical, internal links).
- Impact/Effort recommendations matrix.
- Timeline items with deadlines.

## When to invoke
- The user wants an Excel or spreadsheet deliverable.
- We need structured tables usable in reporting or sharing.

## Output
- `reports/seo-audit-data.csv`

## Notes
- Use UTF-8 and comma-separated values.
- Keep headers clear and short.
