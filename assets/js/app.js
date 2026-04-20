/* File: assets/css/styles.css */

:root {
  --font-ui: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-mono: "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace;

  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-sm: 12px;
  --radius-pill: 999px;

  --shadow-soft: 0 16px 40px rgba(20, 24, 33, 0.06);
  --shadow-hover: 0 12px 30px rgba(20, 24, 33, 0.09);
  --transition-fast: 140ms ease;
}

html[data-theme="palette-a"] {
  --bg-top: #eaf1fb;
  --bg: #f5f8fc;
  --surface: #ffffff;
  --surface-alt: #f8fbff;
  --surface-muted: #eef4ff;
  --text: #1e293b;
  --text-soft: #475569;
  --border: #dce6f2;
  --border-strong: #c7d6e8;
  --accent: #2563eb;
  --accent-strong: #1d4ed8;
  --accent-soft: #e9f1ff;
  --chip-bg: #eaf1f8;
  --code-bg: #eef4ff;
  --success-soft: #e9f7ef;
  --success-text: #1f6a42;
  --danger-soft: #fef0f0;
  --danger-text: #9c2d2d;
  --focus-ring: rgba(37, 99, 235, 0.16);
}

html[data-theme="palette-b"],
html:not([data-theme]) {
  --bg-top: #ede8df;
  --bg: #f7f5f0;
  --surface: #fffdf9;
  --surface-alt: #f4efe6;
  --surface-muted: #efebe3;
  --text: #2b211a;
  --text-soft: #5a5148;
  --border: #dcd7cc;
  --border-strong: #c9c2b5;
  --accent: #8b938c;
  --accent-strong: #6f786f;
  --accent-soft: #ebe8e0;
  --chip-bg: #f0ece4;
  --code-bg: #f3efe7;
  --success-soft: #edf4ee;
  --success-text: #4d6d55;
  --danger-soft: #f7ece9;
  --danger-text: #8e3c36;
  --focus-ring: rgba(139, 147, 140, 0.18);
}

html[data-theme="palette-c"] {
  --bg-top: #eef1f4;
  --bg: #f8f8f6;
  --surface: #ffffff;
  --surface-alt: #f4f6f7;
  --surface-muted: #eef1f5;
  --text: #22252b;
  --text-soft: #5c6270;
  --border: #d8dde6;
  --border-strong: #c7ced9;
  --accent: #7c8da6;
  --accent-strong: #5f718c;
  --accent-soft: #edf1f5;
  --chip-bg: #eef1f5;
  --code-bg: #f4f6f9;
  --success-soft: #edf3f1;
  --success-text: #456262;
  --danger-soft: #f6efef;
  --danger-text: #924848;
  --focus-ring: rgba(124, 141, 166, 0.18);
}

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  color: var(--text);
  background: linear-gradient(180deg, var(--bg-top) 0%, var(--bg) 220px);
  font-family: var(--font-ui);
  text-rendering: optimizeLegibility;
}

button,
input,
select,
textarea {
  font: inherit;
}

.site-shell {
  width: min(1380px, calc(100% - 32px));
  margin: 0 auto;
  padding: 30px 0 56px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 420px);
  gap: 24px;
  align-items: stretch;
  margin-bottom: 26px;
}

.hero-copy-block {
  min-width: 0;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.eyebrow--muted {
  margin-bottom: 8px;
  color: var(--text-soft);
}

.hero h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.7rem, 5vw, 4.5rem);
  line-height: 0.96;
  letter-spacing: -0.02em;
  max-width: 10.5ch;
}

.hero-copy {
  margin: 18px 0 0;
  max-width: 68ch;
  color: var(--text-soft);
  font-size: 1.02rem;
  line-height: 1.76;
}

.hero-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.hero-chip {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  background: var(--chip-bg);
  color: var(--text-soft);
  font-size: 0.84rem;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: end;
  margin-top: 22px;
}

.palette-switcher {
  display: grid;
  gap: 7px;
  min-width: 260px;
}

.palette-switcher label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-soft);
  letter-spacing: 0.02em;
}

.palette-switcher select {
  min-height: 48px;
  width: 100%;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  padding: 0 16px;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.palette-switcher select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--focus-ring);
}

.hero-note {
  margin: 0;
  max-width: 40ch;
  color: var(--text-soft);
  font-size: 0.92rem;
  line-height: 1.55;
}

.hero-card,
.panel,
.info-card {
  background: color-mix(in srgb, var(--surface) 92%, white 8%);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
}

.hero-card {
  align-self: start;
  padding: 24px;
  min-width: 0;
}

.hero-card__eyebrow {
  margin: 0 0 10px;
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-card h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.02;
}

.hero-card__copy {
  margin: 14px 0 0;
  color: var(--text-soft);
  line-height: 1.72;
}

.hero-card__meta {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 18px;
}

.hero-card__meta-item {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-alt);
}

.hero-card__meta-item span {
  color: var(--text-soft);
  font-size: 0.85rem;
  font-weight: 600;
}

.hero-card__meta-item strong {
  font-size: 0.92rem;
}

.hero-card__footer {
  margin: 16px 0 0;
  color: var(--text-soft);
  font-size: 0.92rem;
  line-height: 1.6;
}

.workspace {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(360px, 0.82fr);
  gap: 22px;
  align-items: start;
}

.panel {
  padding: 24px;
}

.panel--preview {
  position: sticky;
  top: 20px;
}

.panel__header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 18px;
}

.panel__header h2,
.info-card h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.02;
}

.panel__subcopy {
  margin: 8px 0 0;
  color: var(--text-soft);
  line-height: 1.6;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  border-radius: var(--radius-pill);
  padding: 0 12px;
  background: var(--success-soft);
  color: var(--success-text);
  font-size: 0.8rem;
  font-weight: 800;
  white-space: nowrap;
}

.status-pill--accent {
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.builder-form {
  display: grid;
  gap: 18px;
}

.form-section {
  border: 1px solid var(--border);
  background: var(--surface-alt);
  border-radius: var(--radius-lg);
  padding: 18px;
}

.section-heading {
  margin-bottom: 14px;
}

.section-heading h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.01em;
}

.section-heading p {
  margin: 7px 0 0;
  color: var(--text-soft);
  line-height: 1.55;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.field--span-2 {
  grid-column: span 2;
}

.field label,
.preview-label {
  font-size: 0.94rem;
  font-weight: 700;
}

.field input,
.field select,
.field textarea,
.prompt-output {
  width: 100%;
  min-width: 0;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--text);
  padding: 12px 14px;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
}

.field input,
.field select {
  min-height: 48px;
}

.field textarea,
.prompt-output {
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: color-mix(in srgb, var(--text-soft) 70%, white 30%);
}

.field input:focus,
.field select:focus,
.field textarea:focus,
.prompt-output:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px var(--focus-ring);
}

.field-help {
  margin: 0;
  min-height: 1.2em;
  color: var(--text-soft);
  font-size: 0.86rem;
  line-height: 1.5;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.check-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
}

.check-card:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
}

.check-card input {
  margin-top: 3px;
  width: 18px;
  height: 18px;
  accent-color: var(--accent-strong);
}

.check-card strong {
  display: block;
  margin-bottom: 4px;
}

.check-card small {
  display: block;
  color: var(--text-soft);
  line-height: 1.45;
}

.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button {
  appearance: none;
  min-height: 46px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-pill);
  background: var(--surface);
  color: var(--text);
  padding: 0 18px;
  font-weight: 700;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-hover);
}

.button--primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #ffffff;
}

.button--primary:hover {
  background: var(--accent-strong);
  border-color: var(--accent-strong);
}

.button--ghost {
  background: transparent;
}

.preview-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface-alt);
}

.preview-meta > div {
  min-width: 0;
}

.meta-label {
  display: block;
  margin-bottom: 6px;
  color: var(--text-soft);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.preview-meta strong {
  display: block;
  overflow-wrap: anywhere;
  line-height: 1.45;
}

.prompt-output {
  min-height: 560px;
  background: var(--code-bg);
  font-family: var(--font-mono);
  font-size: 0.94rem;
  line-height: 1.72;
}

.alert {
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-weight: 600;
  line-height: 1.45;
}

.alert--danger {
  background: var(--danger-soft);
  border-color: color-mix(in srgb, var(--danger-text) 22%, white 78%);
  color: var(--danger-text);
}

.alert--success {
  background: var(--success-soft);
  border-color: color-mix(in srgb, var(--success-text) 22%, white 78%);
  color: var(--success-text);
}

.is-hidden {
  display: none;
}

.info-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 22px;
  margin-top: 22px;
}

.info-card {
  padding: 24px;
}

.info-card p {
  margin: 0 0 14px;
  color: var(--text-soft);
  line-height: 1.72;
}

.info-card p:last-child {
  margin-bottom: 0;
}

.info-card--code {
  background: var(--surface);
}

.code-card__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
}

.code-card__header h2 {
  font-size: 1.9rem;
}

.code-badge {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 0 11px;
  border-radius: var(--radius-pill);
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.code-block {
  overflow-x: auto;
  margin: 0;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--code-bg);
}

.code-block code {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text);
}

.code-note {
  margin-top: 14px;
  font-size: 0.9rem;
  color: var(--text-soft);
}

@media (max-width: 1120px) {
  .hero,
  .workspace,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .panel--preview {
    position: static;
    top: auto;
  }

  .hero h1 {
    max-width: 13ch;
  }
}

@media (max-width: 760px) {
  .site-shell {
    width: min(100% - 20px, 1380px);
    padding-top: 18px;
  }

  .panel,
  .hero-card,
  .info-card {
    padding: 18px;
  }

  .field-grid,
  .checkbox-grid,
  .preview-meta {
    grid-template-columns: 1fr;
  }

  .field--span-2 {
    grid-column: span 1;
  }

  .panel__header,
  .code-card__header,
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .button-row {
    flex-direction: column;
  }

  .button,
  .palette-switcher {
    width: 100%;
  }

  .prompt-output {
    min-height: 420px;
  }

  .hero h1,
  .panel__header h2,
  .info-card h2,
  .code-card__header h2,
  .hero-card h2 {
    max-width: none;
  }
}
