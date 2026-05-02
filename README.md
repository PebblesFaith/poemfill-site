# poemfill-site

PoemFill.dev is a static sponsor-ready literary prompt builder that helps users compose structured prompt instructions across themes, authorships, work references, content types, tones, language styles, and composition presets. The current production site is intentionally lightweight for GitHub Pages, while this repository now also includes a concept-exploration branch for future UI, data-model, and portal planning.

## Project purpose

- Provide a public-facing literary prompt builder with live prompt generation.
- Reserve clearly labeled sponsor inventory for future commercial placements.
- Prepare the project for a future owner portal that can manage prompt controls without manual edits to `assets/js/app.js`.

## File structure

```text
index.html
privacy.html
terms.html
admin.html
assets/
  css/styles.css
  js/app.js
  data/prompt-controls.json
concepts/
  index.html
  concept-01/
    index.html
    assets/css/styles.css
    assets/js/app.js
  concept-02/
  concept-03/
  concept-04/
  concept-05/
docs/
  roadmap.md
  data-model.md
```

## Local development

Recommended command:

```bash
python3 -m http.server 5500
```

Suggested local test URL:

```text
http://localhost:5500
```

## GitHub Desktop workflow

1. Open the `poemfill-site` repository in GitHub Desktop.
2. Confirm the target branch before you begin editing.
3. Review changed files in the `Changes` panel.
4. Commit only the intended site or concept files.
5. Click `Push origin` to publish the latest branch state to GitHub.

## Custom domain

The repository includes a `CNAME` file for:

```text
poemfill.dev
```

GitHub Pages may take a few minutes to reflect pushed changes because of publish latency and browser/CDN cache.

## Current MVP status

- Static GitHub Pages site
- Client-side prompt generation
- Sponsor placeholder surfaces
- Legal pages
- No persistent admin backend yet

## Sponsor placement roadmap

Future sponsor management should support:

- Top banner
- Right rail
- Footer banner
- In-content sponsor block
- Future builder-adjacent sponsor card

Planned metadata includes sponsor name, logo, destination URL, placement type, status, schedule, analytics hooks, internal notes, and pricing tier.

## Future admin portal roadmap

See:

- `admin.html`
- `docs/roadmap.md`
- `docs/data-model.md`
- `assets/data/prompt-controls.json`

The future portal is planned to manage:

- Themes
- Content types
- Tones
- Language styles
- Authorships
- Work references
- Length presets
- Stanza / section / paragraph presets
- Enrichment categories
- Prompt notes
- Sponsor slots and placement metadata

## UI concept exploration

This repository now includes five alternate UI directions under `concepts/`:

- Concept 01: Editorial Atelier
- Concept 02: Minimal Monograph
- Concept 03: Sponsor Studio
- Concept 04: Creator Console
- Concept 05: Archive Room

The five concept folders remain available in `concepts/` as design exploration references on this branch.
