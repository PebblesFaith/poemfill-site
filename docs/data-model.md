# PoemFill.dev Future Data Model

## Goals

- Move prompt-control data away from hardcoded arrays in `assets/js/app.js`.
- Prepare a future portal where owner edits can manage content safely.
- Preserve relationships between authorships, works, themes, presets, and sponsor slots.
- Plan for owner signup and login before protected records can be edited.

## Proposed files

- `assets/data/prompt-controls.json`
- `assets/data/themes.json`
- `assets/data/authorships.json`
- `assets/data/works.json`
- `assets/data/composition-presets.json`
- `assets/data/sponsor-slots.json`
- `assets/data/quotes.json`
- `assets/data/admin-users.json`

## Relationship rules

- One Authorship can have many Work References.
- One Work Reference belongs to one Authorship.
- Themes can suggest tones, content types, and enrichment layers.
- Length presets should influence stanza count, paragraph density, section count, and line range.
- Prompt instructions should vary based on the selected content type.
- Long sectional quotes can relate to themes, authorships, works, and prompt-note collections.

## Output-structure alignment

- `poem`: stanza count + lines per stanza
- `lyric-essay`: paragraph count + paragraph density
- `dramatic-monologue`: scene or section count
- `verse-sequence`: sequence-part count
- `hybrid-meditation`: section count + paragraph density

## Sponsor-slot planning

Each sponsor slot should eventually support:

- Sponsor name
- Image or logo
- Destination URL
- Placement type
- Start date
- End date
- Status
- Click tracking
- Impression tracking
- Internal notes
- Pricing tier

## Owner access planning

- Admin signup should be explicit and preferably invite-only or owner-approved.
- Login should protect prompt-control editing, sponsor records, and quote management pages.
- Audit trails should eventually record who changed public records and when.

## Quote register planning

Each long sectional quote should eventually support:

- Quote title
- Source author
- Source work
- Section label or excerpt segment
- Excerpt text
- Rights / public-domain notes
- Visibility status
- Related themes
- Related prompt notes

## Backend options to evaluate

- Node.js / Express admin backend
- GitHub-backed content editing workflow
- Static JSON with controlled commits
- Lightweight CMS
- Serverless functions
- Cloudflare Pages Functions
- Supabase or Firebase
