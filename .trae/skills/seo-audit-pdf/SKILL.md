---
name: "seo-audit-pdf"
description: "Generates a professional SEO audit PDF. Invoke when the user requests a formal SEO report in PDF or executive summary deliverable."
---

# SEO Audit PDF

This skill standardizes how we generate a professional, client-ready SEO audit PDF using project data and jsPDF. It should be invoked when a formal PDF deliverable is required.

## What it does
- Structures an SEO audit into sections: Executive Summary, Technical Audit, Content Audit, Link Architecture, Schema, Performance, Recommendations, Impact/Effort matrix, Timeline.
- Uses jsPDF to render headings, body text, tables, and simple visuals (bar-table style).
- Saves to `reports/seo-audit.pdf`.

## When to invoke
- The user asks for a PDF audit/report deliverable.
- We finish a comprehensive analysis and need to export a formatted document.

## Usage guidelines
- Keep content concise and scannable.
- Include page list, issues, and prioritized recommendations.
- If Core Web Vitals lab data is unavailable, note “field data required” and include action plan.

## Data inputs
- Static analysis of the codebase (routes, metadata, JSON-LD).
- Optional production fetch summaries if available.
- Known service slugs: depannage-pc-mac, suppression-virus, installation-config, recuperation-donnees.

## Output
- `reports/seo-audit.pdf`
