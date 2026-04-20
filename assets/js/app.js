// app.js
const themeData = [
  {
    id: 'redemption',
    name: 'Redemption After Ruin',
    shortDescription: 'Recovery, repair, moral return, and spiritual endurance after collapse.',
    promptNotes: 'Keep the emotional arc serious, layered, and hard-won rather than sentimental.'
  },
  {
    id: 'solitude',
    name: 'Urban Solitude',
    shortDescription: 'Interior thought, distance, crowded isolation, and quiet self-examination.',
    promptNotes: 'Use city textures, restrained movement, and a contemplative social backdrop.'
  },
  {
    id: 'wisdom',
    name: 'Wisdom and Discipline',
    shortDescription: 'Study, judgment, patience, inward regulation, and earned understanding.',
    promptNotes: 'Favor measured language, reflective transitions, and intellectual clarity.'
  },
  {
    id: 'lament',
    name: 'Sacred Lament',
    shortDescription: 'Petition, grief, trust under pressure, and reverent address.',
    promptNotes: 'Balance sorrow with disciplined hope and controlled devotional language.'
  }
];

const authorshipData = [
  {
    id: 'shakespeare',
    name: 'William Shakespeare',
    styleLabel: 'Elizabethan dramatic and lyrical register',
    eraLabel: 'Early modern',
    description: 'Controlled rhetoric, balanced clauses, dramatic turn, metaphor-rich movement.',
    workIds: ['hamlet', 'sonnets']
  },
  {
    id: 'milton',
    name: 'John Milton',
    styleLabel: 'High formal meditative verse',
    eraLabel: 'Seventeenth century',
    description: 'Long syntactic movement, elevated argument, theological and philosophical density.',
    workIds: ['paradise-lost', 'lycidas']
  },
  {
    id: 'dickinson',
    name: 'Emily Dickinson',
    styleLabel: 'Compressed interior lyric',
    eraLabel: 'Nineteenth century',
    description: 'Compression, tensile pause, spiritual inquiry, sharp image logic.',
    workIds: ['hope-feathers', 'after-great-pain']
  },
  {
    id: 'psalmic',
    name: 'Psalmic / Biblical Cadence',
    styleLabel: 'Devotional parallelism and petition structure',
    eraLabel: 'Scriptural resonance',
    description: 'Parallel lines, direct address, lament-to-confidence movement, covenantal vocabulary.',
    workIds: ['psalm-13', 'psalm-42']
  }
];

const workData = [
  {
    id: 'hamlet',
    authorshipId: 'shakespeare',
    name: 'Hamlet',
    description: 'Reflective conflict, moral delay, inward argument, death-conscious introspection.',
    promptNotes: 'Favor interior debate and sharpen the tension between thought and action.'
  },
  {
    id: 'sonnets',
    authorshipId: 'shakespeare',
    name: 'Sonnets',
    description: 'Argumentative lyric movement, compact turns, image-driven emotional logic.',
    promptNotes: 'Use a clear rhetorical turn and compact thematic progression.'
  },
  {
    id: 'paradise-lost',
    authorshipId: 'milton',
    name: 'Paradise Lost',
    description: 'Epic scale, theological reasoning, dignified sentence flow, cosmic framing.',
    promptNotes: 'Use sustained formal cadence and elevated meditative momentum.'
  },
  {
    id: 'lycidas',
    authorshipId: 'milton',
    name: 'Lycidas',
    description: 'Elegiac movement, grief shaped by classical and spiritual reflection.',
    promptNotes: 'Keep the lament serious and rhetorically polished.'
  },
  {
    id: 'hope-feathers',
    authorshipId: 'dickinson',
    name: '“Hope” is the thing with feathers',
    description: 'Compression, image precision, inward force, slight but piercing architecture.',
    promptNotes: 'Prefer distilled imagery over extended explanation.'
  },
  {
    id: 'after-great-pain',
    authorshipId: 'dickinson',
    name: 'After great pain, a formal feeling comes',
    description: 'Psychological aftermath, interior stillness, measured shock, exact phrasing.',
    promptNotes: 'Keep tension tight and avoid ornamental excess.'
  },
  {
    id: 'psalm-13',
    authorshipId: 'psalmic',
    name: 'Psalm 13 cadence',
    description: 'Complaint, petition, trust, and compressed devotional reversal.',
    promptNotes: 'Use direct address, urgency, and a final motion toward trust.'
  },
  {
    id: 'psalm-42',
    authorshipId: 'psalmic',
    name: 'Psalm 42 cadence',
    description: 'Longing, remembered worship, thirst, self-address, refrain structure.',
    promptNotes: 'Let the poem move through memory, longing, and disciplined hope.'
  }
];

const lengthPresets = {
  short: {
    stanzaCount: 4,
    lineRange: '4–6',
    paragraphDensity: 'minimal',
    guidance: 'Keep the piece concise and sharply focused.'
  },
  medium: {
    stanzaCount: 8,
    lineRange: '6–10',
    paragraphDensity: 'balanced',
    guidance: 'Provide a complete thematic arc with enough depth for development.'
  },
  long: {
    stanzaCount: 12,
    lineRange: '8–12',
    paragraphDensity: 'expanded',
    guidance: 'Allow multiple transitions and a fuller emotional or intellectual progression.'
  },
  extended: {
    stanzaCount: 16,
    lineRange: '10–14',
    paragraphDensity: 'long-paragraphs',
    guidance: 'Develop a substantial multi-part composition with layered movement.'
  },
  developer: {
    stanzaCount: 18,
    lineRange: '12–16',
    paragraphDensity: 'long-paragraphs',
    guidance: 'Generate a materially longer output suitable for deeper literary development and extended paragraph treatment.'
  }
};

const elements = {
  form: document.getElementById('prompt-form'),
  alert: document.getElementById('form-alert'),
  themeSelect: document.getElementById('themeSelect'),
  authorshipSelect: document.getElementById('authorshipSelect'),
  workSelect: document.getElementById('workSelect'),
  contentTypeSelect: document.getElementById('contentTypeSelect'),
  toneSelect: document.getElementById('toneSelect'),
  languageStyleSelect: document.getElementById('languageStyleSelect'),
  subjectInput: document.getElementById('subjectInput'),
  lengthPresetSelect: document.getElementById('lengthPresetSelect'),
  stanzaCountInput: document.getElementById('stanzaCountInput'),
  lineRangeInput: document.getElementById('lineRangeInput'),
  paragraphDensitySelect: document.getElementById('paragraphDensitySelect'),
  philosophyToggle: document.getElementById('philosophyToggle'),
  scriptureToggle: document.getElementById('scriptureToggle'),
  imageryToggle: document.getElementById('imageryToggle'),
  rhetoricToggle: document.getElementById('rhetoricToggle'),
  notesInput: document.getElementById('notesInput'),
  themeHelp: document.getElementById('themeHelp'),
  authorshipHelp: document.getElementById('authorshipHelp'),
  workHelp: document.getElementById('workHelp'),
  promptOutput: document.getElementById('promptOutput'),
  summaryTheme: document.getElementById('summaryTheme'),
  summaryAuthorship: document.getElementById('summaryAuthorship'),
  summaryWork: document.getElementById('summaryWork'),
  wordCountBadge: document.getElementById('wordCountBadge'),
  copyButton: document.getElementById('copyButton'),
  downloadButton: document.getElementById('downloadButton'),
  generateButton: document.getElementById('generateButton')
};

function populateThemes() {
  const options = themeData
    .map((theme) => `<option value="${theme.id}">${theme.name}</option>`)
    .join('');

  elements.themeSelect.innerHTML = options;
}

function populateAuthorships() {
  const options = authorshipData
    .map((author) => `<option value="${author.id}">${author.name}</option>`)
    .join('');

  elements.authorshipSelect.innerHTML = options;
}

function populateWorks(authorshipId) {
  const matchingWorks = workData.filter((work) => work.authorshipId === authorshipId);
  elements.workSelect.innerHTML = matchingWorks
    .map((work) => `<option value="${work.id}">${work.name}</option>`)
    .join('');
}

function getThemeById(themeId) {
  return themeData.find((theme) => theme.id === themeId) || themeData[0];
}

function getAuthorshipById(authorshipId) {
  return authorshipData.find((author) => author.id === authorshipId) || authorshipData[0];
}

function getWorkById(workId) {
  return workData.find((work) => work.id === workId) || workData[0];
}

function syncLengthPreset() {
  const preset = lengthPresets[elements.lengthPresetSelect.value];
  if (!preset) return;

  elements.stanzaCountInput.value = preset.stanzaCount;
  elements.lineRangeInput.value = preset.lineRange;
  elements.paragraphDensitySelect.value = preset.paragraphDensity;
}

function updateContextHelp() {
  const theme = getThemeById(elements.themeSelect.value);
  const author = getAuthorshipById(elements.authorshipSelect.value);
  const work = getWorkById(elements.workSelect.value);

  elements.themeHelp.textContent = `${theme.shortDescription} ${theme.promptNotes}`;
  elements.authorshipHelp.textContent = `${author.styleLabel} — ${author.description}`;
  elements.workHelp.textContent = `${work.description} ${work.promptNotes}`;

  elements.summaryTheme.textContent = theme.name;
  elements.summaryAuthorship.textContent = author.name;
  elements.summaryWork.textContent = work.name;
}

function collectFormValues() {
  return {
    theme: getThemeById(elements.themeSelect.value),
    authorship: getAuthorshipById(elements.authorshipSelect.value),
    work: getWorkById(elements.workSelect.value),
    contentType: elements.contentTypeSelect.value,
    tone: elements.toneSelect.value,
    languageStyle: elements.languageStyleSelect.value,
    subject: elements.subjectInput.value.trim(),
    lengthPreset: elements.lengthPresetSelect.value,
    stanzaCount: Number(elements.stanzaCountInput.value || 0),
    lineRange: elements.lineRangeInput.value.trim(),
    paragraphDensity: elements.paragraphDensitySelect.value,
    philosophy: elements.philosophyToggle.checked,
    scripture: elements.scriptureToggle.checked,
    imagery: elements.imageryToggle.checked,
    rhetoric: elements.rhetoricToggle.checked,
    notes: elements.notesInput.value.trim()
  };
}

function validateForm(values) {
  const errors = [];

  if (!values.subject) {
    errors.push('Subject / Focus is required.');
  }

  if (!values.stanzaCount || values.stanzaCount < 1) {
    errors.push('Stanza / Section Count must be at least 1.');
  }

  if (!values.lineRange) {
    errors.push('Approx. Lines Per Section is required.');
  }

  return errors;
}

function showAlert(message, variant) {
  elements.alert.textContent = message;
  elements.alert.className = `alert alert--${variant}`;
}

function hideAlert() {
  elements.alert.textContent = '';
  elements.alert.className = 'alert is-hidden';
}

function humanizeContentType(contentType) {
  const labels = {
    poem: 'poem',
    'lyric-essay': 'lyric essay',
    'dramatic-monologue': 'dramatic monologue',
    'verse-sequence': 'verse sequence',
    'hybrid-meditation': 'hybrid meditation'
  };

  return labels[contentType] || contentType;
}

function humanizeParagraphDensity(density) {
  const labels = {
    minimal: 'minimal paragraph framing',
    balanced: 'balanced stanza and paragraph treatment',
    expanded: 'expanded compositional treatment',
    'long-paragraphs': 'long-paragraph development where appropriate'
  };

  return labels[density] || density;
}

function buildOptionalInstructionLines(values) {
  const lines = [];

  if (values.philosophy) {
    lines.push('Blend philosophical reflection into the composition so the poem carries intellectual depth and sustained contemplation.');
  }

  if (values.scripture) {
    lines.push('Allow biblical cadence and scriptural resonance, but avoid direct quotation unless explicitly necessary.');
  }

  if (values.imagery) {
    lines.push('Use dense imagery, sensory language, and visual precision rather than generic abstraction.');
  }

  if (values.rhetoric) {
    lines.push('Use controlled rhetorical development, including disciplined repetition, structural echo, and measured intensification.');
  }

  return lines;
}

function buildPrompt(values) {
  const preset = lengthPresets[values.lengthPreset] || lengthPresets.medium;
  const optionalLines = buildOptionalInstructionLines(values);

  const sections = [
    `Write a ${humanizeContentType(values.contentType)} on the subject of ${values.subject}.`,
    `Base the stylistic approach on ${values.authorship.name}, drawing specifically from the tonal and structural guidance associated with ${values.work.name}.`,
    `Use ${values.languageStyle} with a ${values.tone} tonal register.`,
    `The selected theme is ${values.theme.name}: ${values.theme.shortDescription}`,
    `Develop the composition in approximately ${values.stanzaCount} sections or stanzas, with about ${values.lineRange} lines per section, using ${humanizeParagraphDensity(values.paragraphDensity)}.`,
    preset.guidance,
    `Authorship notes: ${values.authorship.description}`,
    `Work notes: ${values.work.description}`,
    `Theme notes: ${values.theme.promptNotes}`
  ];

  if (optionalLines.length) {
    sections.push('Additional literary priorities:');
    optionalLines.forEach((line, index) => {
      sections.push(`${index + 1}. ${line}`);
    });
  }

  sections.push(
    'Do not produce a thin or abbreviated result. Build a complete literary structure with a clear opening movement, interior development, and a purposeful closing section.'
  );

  sections.push(
    'Avoid cliché, shallow sentiment, and generic inspirational language. Keep the diction purposeful and texturally distinct.'
  );

  if (values.notes) {
    sections.push(`Additional instructions from the editor: ${values.notes}`);
  }

  sections.push(
    'Output only the finished literary work unless a title is naturally appropriate; if a title is used, keep it concise and relevant.'
  );

  return sections.join('\n\n');
}

function updatePromptPreview() {
  const values = collectFormValues();
  const errors = validateForm(values);

  updateContextHelp();

  if (errors.length) {
    showAlert(errors[0], 'danger');
    elements.promptOutput.value = '';
    elements.wordCountBadge.textContent = '0 words';
    return;
  }

  hideAlert();

  const prompt = buildPrompt(values);
  elements.promptOutput.value = prompt;

  const wordCount = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;
  elements.wordCountBadge.textContent = `${wordCount} words`;
}

async function copyPromptToClipboard() {
  if (!elements.promptOutput.value.trim()) {
    showAlert('There is no prompt to copy yet.', 'danger');
    return;
  }

  try {
    await navigator.clipboard.writeText(elements.promptOutput.value);
    showAlert('Prompt copied to clipboard.', 'success');
  } catch (error) {
    showAlert('Clipboard copy failed in this browser session.', 'danger');
  }
}

function downloadPromptText() {
  const text = elements.promptOutput.value.trim();
  if (!text) {
    showAlert('There is no prompt to download yet.', 'danger');
    return;
  }

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  const safeTheme = elements.themeSelect.value || 'prompt';
  const safeAuthorship = elements.authorshipSelect.value || 'author';

  anchor.href = url;
  anchor.download = `poemfill-${safeTheme}-${safeAuthorship}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);

  showAlert('Prompt text file downloaded.', 'success');
}

function handleAuthorshipChange() {
  populateWorks(elements.authorshipSelect.value);
  updatePromptPreview();
}

function bindEvents() {
  elements.authorshipSelect.addEventListener('change', handleAuthorshipChange);
  elements.themeSelect.addEventListener('change', updatePromptPreview);
  elements.workSelect.addEventListener('change', updatePromptPreview);
  elements.contentTypeSelect.addEventListener('change', updatePromptPreview);
  elements.toneSelect.addEventListener('change', updatePromptPreview);
  elements.languageStyleSelect.addEventListener('change', updatePromptPreview);
  elements.subjectInput.addEventListener('input', updatePromptPreview);
  elements.stanzaCountInput.addEventListener('input', updatePromptPreview);
  elements.lineRangeInput.addEventListener('input', updatePromptPreview);
  elements.paragraphDensitySelect.addEventListener('change', updatePromptPreview);
  elements.philosophyToggle.addEventListener('change', updatePromptPreview);
  elements.scriptureToggle.addEventListener('change', updatePromptPreview);
  elements.imageryToggle.addEventListener('change', updatePromptPreview);
  elements.rhetoricToggle.addEventListener('change', updatePromptPreview);
  elements.notesInput.addEventListener('input', updatePromptPreview);

  elements.lengthPresetSelect.addEventListener('change', () => {
    syncLengthPreset();
    updatePromptPreview();
  });

  elements.copyButton.addEventListener('click', copyPromptToClipboard);
  elements.downloadButton.addEventListener('click', downloadPromptText);
  elements.generateButton.addEventListener('click', updatePromptPreview);

  elements.form.addEventListener('reset', () => {
    window.setTimeout(() => {
      elements.lengthPresetSelect.value = 'medium';
      elements.philosophyToggle.checked = true;
      elements.scriptureToggle.checked = false;
      elements.imageryToggle.checked = true;
      elements.rhetoricToggle.checked = false;
      populateThemes();
      populateAuthorships();
      elements.authorshipSelect.value = authorshipData[0].id;
      populateWorks(authorshipData[0].id);
      syncLengthPreset();
      hideAlert();
      updatePromptPreview();
    }, 0);
  });
}

function initializeForm() {
  populateThemes();
  populateAuthorships();
  elements.themeSelect.value = themeData[0].id;
  elements.authorshipSelect.value = authorshipData[0].id;
  populateWorks(authorshipData[0].id);
  syncLengthPreset();
  updatePromptPreview();
}

function initializeApp() {
  initializeForm();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', initializeApp);
