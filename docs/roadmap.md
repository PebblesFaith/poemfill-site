# PoemFill.dev Roadmap

## Current direction

PoemFill.dev is a static prompt-builder MVP with sponsor-ready placement surfaces and live prompt generation. The next planning phase focuses on making prompt controls configurable, improving prompt-structure alignment, and preparing an eventual owner portal.

## P1 priorities

- Plan a future Admin Portal or protected owner workspace.
- Support add, edit, disable, and ordering flows for prompt controls.
- Design a structured data model for themes, authorships, works, presets, enrichments, and sponsor slots.
- Align prompt generation so output wording follows the selected content type structure.

## P2 priorities

- Move runtime prompt data out of `assets/js/app.js` into structured data files.
- Prototype `admin.html` or `portal.html` as a static planning surface.
- Evaluate backend or managed-service options for actual save behavior.
- Extend sponsor-slot modeling with scheduling, status, analytics hooks, and pricing metadata.
- Improve sponsor compliance language and future Terms / Privacy alignment.

## P3 priorities

- Update `README.md` with workflow, file structure, roadmap, and local development guidance.
- Capture screenshots for the hero, sponsor surfaces, builder, preview, and footer ad placeholder.
- Run a future accessibility review covering focus states, keyboard flow, label accuracy, contrast, sponsor aria-label clarity, and heading order.

## Local development

Recommended command:

```bash
python3 -m http.server 5500
```

Suggested URL:

```text
http://localhost:5500
```
