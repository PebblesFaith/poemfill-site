// File: assets/js/app.js

(function () {
  'use strict';

  if (window.__POEMFILL_APP_SCRIPT_LOADED__) {
    return;
  }

  window.__POEMFILL_APP_SCRIPT_LOADED__ = true;

  var themeData = [
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

  var authorshipData = [
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

  var workData = [
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

  var lengthPresets = {
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

  var DEFAULT_LENGTH_PRESET = 'medium';
  var DEFAULT_THEME_ID = themeData.length ? themeData[0].id : '';
  var DEFAULT_AUTHORSHIP_ID = authorshipData.length ? authorshipData[0].id : '';

  var DEFAULT_TOGGLE_STATE = {
    philosophy: true,
    scripture: false,
    imagery: true,
    rhetoric: false
  };

  var elements = {};

  function byId(id) {
    return document.getElementById(id);
  }

  function getElements() {
    return {
      form: byId('prompt-form'),
      alert: byId('form-alert'),
      themeSelect: byId('themeSelect'),
      authorshipSelect: byId('authorshipSelect'),
      workSelect: byId('workSelect'),
      contentTypeSelect: byId('contentTypeSelect'),
      toneSelect: byId('toneSelect'),
      languageStyleSelect: byId('languageStyleSelect'),
      subjectInput: byId('subjectInput'),
      lengthPresetSelect: byId('lengthPresetSelect'),
      stanzaCountInput: byId('stanzaCountInput'),
      lineRangeInput: byId('lineRangeInput'),
      paragraphDensitySelect: byId('paragraphDensitySelect'),
      philosophyToggle: byId('philosophyToggle'),
      scriptureToggle: byId('scriptureToggle'),
      imageryToggle: byId('imageryToggle'),
      rhetoricToggle: byId('rhetoricToggle'),
      notesInput: byId('notesInput'),
      themeHelp: byId('themeHelp'),
      authorshipHelp: byId('authorshipHelp'),
      workHelp: byId('workHelp'),
      promptOutput: byId('promptOutput'),
      summaryTheme: byId('summaryTheme'),
      summaryAuthorship: byId('summaryAuthorship'),
      summaryWork: byId('summaryWork'),
      wordCountBadge: byId('wordCountBadge'),
      copyButton: byId('copyButton'),
      downloadButton: byId('downloadButton'),
      generateButton: byId('generateButton')
    };
  }

  function hasRequiredElements() {
    var requiredKeys = [
      'form',
      'themeSelect',
      'authorshipSelect',
      'workSelect',
      'contentTypeSelect',
      'toneSelect',
      'languageStyleSelect',
      'subjectInput',
      'lengthPresetSelect',
      'stanzaCountInput',
      'lineRangeInput',
      'paragraphDensitySelect',
      'philosophyToggle',
      'scriptureToggle',
      'imageryToggle',
      'rhetoricToggle',
      'notesInput',
      'promptOutput',
      'summaryTheme',
      'summaryAuthorship',
      'summaryWork',
      'wordCountBadge',
      'copyButton',
      'downloadButton',
      'generateButton'
    ];

    var missingKeys = [];

    requiredKeys.forEach(function (key) {
      if (!elements[key]) {
        missingKeys.push(key);
      }
    });

    if (missingKeys.length) {
      console.error('PoemFill.dev initialization stopped because required DOM elements were not found:', missingKeys);
      return false;
    }

    return true;
  }

  function clearSelect(selectElement) {
    while (selectElement.firstChild) {
      selectElement.removeChild(selectElement.firstChild);
    }
  }

  function appendOption(selectElement, value, label) {
    var option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    selectElement.appendChild(option);
  }

  function setSelectOptions(selectElement, items, selectedValue, emptyLabel) {
    var firstValue = '';

    if (!selectElement) {
      return;
    }

    clearSelect(selectElement);

    if (!items || !items.length) {
      appendOption(selectElement, '', emptyLabel || 'No options available');
      return;
    }

    items.forEach(function (item, index) {
      if (index === 0) {
        firstValue = item.id;
      }

      appendOption(selectElement, item.id, item.name);
    });

    if (selectedValue && items.some(function (item) { return item.id === selectedValue; })) {
      selectElement.value = selectedValue;
    } else {
      selectElement.value = firstValue;
    }
  }

  function populateThemes(selectedThemeId) {
    setSelectOptions(elements.themeSelect, themeData, selectedThemeId || DEFAULT_THEME_ID, 'No themes available');
  }

  function populateAuthorships(selectedAuthorshipId) {
    setSelectOptions(elements.authorshipSelect, authorshipData, selectedAuthorshipId || DEFAULT_AUTHORSHIP_ID, 'No authorships available');
  }

  function getWorksByAuthorshipId(authorshipId) {
    return workData.filter(function (work) {
      return work.authorshipId === authorshipId;
    });
  }

  function populateWorks(authorshipId, selectedWorkId) {
    var matchingWorks = getWorksByAuthorshipId(authorshipId);

    setSelectOptions(
      elements.workSelect,
      matchingWorks,
      selectedWorkId || '',
      'No works available for this authorship'
    );
  }

  function getThemeById(themeId) {
    return themeData.find(function (theme) {
      return theme.id === themeId;
    }) || themeData[0] || null;
  }

  function getAuthorshipById(authorshipId) {
    return authorshipData.find(function (author) {
      return author.id === authorshipId;
    }) || authorshipData[0] || null;
  }

  function getWorkById(workId, authorshipId) {
    var directMatch = workData.find(function (work) {
      return work.id === workId;
    });

    if (directMatch) {
      return directMatch;
    }

    var matchingWorks = getWorksByAuthorshipId(authorshipId || '');
    return matchingWorks[0] || workData[0] || null;
  }

  function getPreset(lengthPreset) {
    return lengthPresets[lengthPreset] || lengthPresets[DEFAULT_LENGTH_PRESET];
  }

  function syncLengthPreset() {
    var preset = getPreset(elements.lengthPresetSelect.value);

    if (!preset) {
      return;
    }

    elements.stanzaCountInput.value = preset.stanzaCount;
    elements.lineRangeInput.value = preset.lineRange;
    elements.paragraphDensitySelect.value = preset.paragraphDensity;
  }

  function buildFallbackSubject(values) {
    var themeName = values.theme ? values.theme.name : 'the selected theme';
    var workName = values.work ? values.work.name : 'the selected work';
    var authorshipName = values.authorship ? values.authorship.name : 'the selected authorship';

    return themeName + ', shaped by ' + workName + ' in the style of ' + authorshipName;
  }

  function normalizeStanzaCount(rawValue, lengthPreset) {
    var preset = getPreset(lengthPreset);
    var numericValue = Number(rawValue);

    if (Number.isFinite(numericValue) && numericValue >= 1) {
      return Math.floor(numericValue);
    }

    return preset.stanzaCount;
  }

  function normalizeLineRange(rawValue, lengthPreset) {
    var preset = getPreset(lengthPreset);
    var trimmed = String(rawValue || '').trim();

    return trimmed || preset.lineRange;
  }

  function normalizeParagraphDensity(rawValue, lengthPreset) {
    var preset = getPreset(lengthPreset);
    var allowedValues = ['minimal', 'balanced', 'expanded', 'long-paragraphs'];

    if (allowedValues.indexOf(rawValue) !== -1) {
      return rawValue;
    }

    return preset.paragraphDensity;
  }

  function collectFormValues() {
    var selectedTheme = getThemeById(elements.themeSelect.value);
    var selectedAuthorship = getAuthorshipById(elements.authorshipSelect.value);
    var selectedAuthorshipId = selectedAuthorship ? selectedAuthorship.id : '';
    var selectedWork = getWorkById(elements.workSelect.value, selectedAuthorshipId);
    var rawSubject = elements.subjectInput.value.trim();
    var lengthPreset = elements.lengthPresetSelect.value || DEFAULT_LENGTH_PRESET;

    var values = {
      theme: selectedTheme,
      authorship: selectedAuthorship,
      work: selectedWork,
      contentType: elements.contentTypeSelect.value,
      tone: elements.toneSelect.value,
      languageStyle: elements.languageStyleSelect.value,
      rawSubject: rawSubject,
      lengthPreset: lengthPreset,
      stanzaCount: normalizeStanzaCount(elements.stanzaCountInput.value, lengthPreset),
      lineRange: normalizeLineRange(elements.lineRangeInput.value, lengthPreset),
      paragraphDensity: normalizeParagraphDensity(elements.paragraphDensitySelect.value, lengthPreset),
      philosophy: elements.philosophyToggle.checked,
      scripture: elements.scriptureToggle.checked,
      imagery: elements.imageryToggle.checked,
      rhetoric: elements.rhetoricToggle.checked,
      notes: elements.notesInput.value.trim()
    };

    values.subject = rawSubject || buildFallbackSubject(values);

    return values;
  }

  function validateForm(values) {
    var errors = [];

    if (!values.theme) {
      errors.push('A theme selection is required.');
    }

    if (!values.authorship) {
      errors.push('An authorship selection is required.');
    }

    if (!values.work) {
      errors.push('A work selection is required.');
    }

    if (!values.contentType) {
      errors.push('A content type selection is required.');
    }

    if (!values.tone) {
      errors.push('A tone selection is required.');
    }

    if (!values.languageStyle) {
      errors.push('A language style selection is required.');
    }

    return errors;
  }

  function showAlert(message, variant) {
    if (!elements.alert) {
      return;
    }

    elements.alert.textContent = message;
    elements.alert.className = 'alert alert--' + variant;
  }

  function hideAlert() {
    if (!elements.alert) {
      return;
    }

    elements.alert.textContent = '';
    elements.alert.className = 'alert is-hidden';
  }

  function humanizeContentType(contentType) {
    var labels = {
      poem: 'poem',
      'lyric-essay': 'lyric essay',
      'dramatic-monologue': 'dramatic monologue',
      'verse-sequence': 'verse sequence',
      'hybrid-meditation': 'hybrid meditation'
    };

    return labels[contentType] || contentType || 'poem';
  }

  function humanizeTone(tone) {
    var labels = {
      reflective: 'reflective',
      solemn: 'solemn',
      searching: 'searching',
      visionary: 'visionary',
      devotional: 'devotional',
      analytical: 'analytical'
    };

    return labels[tone] || tone || 'reflective';
  }

  function humanizeLanguageStyle(languageStyle) {
    var labels = {
      'elevated-modern': 'elevated modern English',
      'classical-leaning': 'classical-leaning English',
      'plain-literary': 'plain literary English',
      ornate: 'ornate literary English'
    };

    return labels[languageStyle] || languageStyle || 'elevated modern English';
  }

  function humanizeParagraphDensity(density) {
    var labels = {
      minimal: 'minimal paragraph framing',
      balanced: 'balanced stanza and paragraph treatment',
      expanded: 'expanded compositional treatment',
      'long-paragraphs': 'long-paragraph development where appropriate'
    };

    return labels[density] || density || 'balanced stanza and paragraph treatment';
  }

  function buildOptionalInstructionLines(values) {
    var lines = [];

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

  function setText(element, value) {
    if (element) {
      element.textContent = value;
    }
  }

  function updateContextHelp(values) {
    var themeHelpText = values.theme
      ? values.theme.shortDescription + ' ' + values.theme.promptNotes
      : '';

    var authorshipHelpText = values.authorship
      ? values.authorship.styleLabel + ' — ' + values.authorship.description
      : '';

    var workHelpText = values.work
      ? values.work.description + ' ' + values.work.promptNotes
      : '';

    setText(elements.themeHelp, themeHelpText);
    setText(elements.authorshipHelp, authorshipHelpText);
    setText(elements.workHelp, workHelpText);

    setText(elements.summaryTheme, values.theme ? values.theme.name : '—');
    setText(elements.summaryAuthorship, values.authorship ? values.authorship.name : '—');
    setText(elements.summaryWork, values.work ? values.work.name : '—');
  }

  function buildPrompt(values) {
    var preset = getPreset(values.lengthPreset);
    var optionalLines = buildOptionalInstructionLines(values);

    var sections = [
      'Write a ' + humanizeContentType(values.contentType) + ' centered on ' + values.subject + '.',
      'Primary theme: ' + values.theme.name + '. ' + values.theme.shortDescription,
      'Base the stylistic approach on ' + values.authorship.name + ', drawing specifically from the tonal, structural, and conceptual guidance associated with ' + values.work.name + '.',
      'Use ' + humanizeLanguageStyle(values.languageStyle) + ' with a ' + humanizeTone(values.tone) + ' tonal register.',
      'Develop the composition in approximately ' + values.stanzaCount + ' sections or stanzas, with about ' + values.lineRange + ' lines per section, using ' + humanizeParagraphDensity(values.paragraphDensity) + '.',
      preset.guidance,
      'Authorship notes: ' + values.authorship.description,
      'Work notes: ' + values.work.description,
      'Work emphasis: ' + values.work.promptNotes,
      'Theme emphasis: ' + values.theme.promptNotes
    ];

    if (optionalLines.length) {
      sections.push('Additional literary priorities:');

      optionalLines.forEach(function (line, index) {
        sections.push(String(index + 1) + '. ' + line);
      });
    }

    sections.push(
      'Do not produce a thin or abbreviated result. Build a complete literary structure with a clear opening movement, interior development, and a purposeful closing section.'
    );

    sections.push(
      'Avoid cliché, shallow sentiment, and generic inspirational language. Keep the diction purposeful and texturally distinct.'
    );

    if (values.notes) {
      sections.push('Additional instructions from the editor: ' + values.notes);
    }

    sections.push(
      'Output only the finished literary work unless a title is naturally appropriate; if a title is used, keep it concise and relevant.'
    );

    return sections.join('\n\n');
  }

  function getWordCount(text) {
    var normalized = String(text || '').trim();

    if (!normalized) {
      return 0;
    }

    return normalized.split(/\s+/).length;
  }

  function updatePromptPreview() {
    var values = collectFormValues();
    var errors = validateForm(values);
    var prompt = '';

    updateContextHelp(values);

    if (errors.length) {
      showAlert(errors[0], 'danger');
      elements.promptOutput.value = '';
      elements.wordCountBadge.textContent = '0 words';
      return;
    }

    hideAlert();

    prompt = buildPrompt(values);
    elements.promptOutput.value = prompt;
    elements.wordCountBadge.textContent = String(getWordCount(prompt)) + ' words';
  }

  function fallbackCopyToClipboard(text) {
    var temporaryTextarea = document.createElement('textarea');

    temporaryTextarea.value = text;
    temporaryTextarea.setAttribute('readonly', 'readonly');
    temporaryTextarea.style.position = 'fixed';
    temporaryTextarea.style.left = '-9999px';
    temporaryTextarea.style.top = '0';

    document.body.appendChild(temporaryTextarea);
    temporaryTextarea.focus();
    temporaryTextarea.select();

    try {
      document.execCommand('copy');
      showAlert('Prompt copied to clipboard.', 'success');
    } catch (error) {
      showAlert('Clipboard copy failed in this browser session.', 'danger');
    }

    document.body.removeChild(temporaryTextarea);
  }

  function copyPromptToClipboard() {
    var text = elements.promptOutput.value.trim();

    if (!text) {
      showAlert('There is no prompt to copy yet.', 'danger');
      return;
    }

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text)
        .then(function () {
          showAlert('Prompt copied to clipboard.', 'success');
        })
        .catch(function () {
          fallbackCopyToClipboard(text);
        });

      return;
    }

    fallbackCopyToClipboard(text);
  }

  function downloadPromptText() {
    var text = elements.promptOutput.value.trim();
    var blob = null;
    var url = '';
    var anchor = null;
    var safeTheme = elements.themeSelect.value || 'prompt';
    var safeAuthorship = elements.authorshipSelect.value || 'author';

    if (!text) {
      showAlert('There is no prompt to download yet.', 'danger');
      return;
    }

    blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    url = URL.createObjectURL(blob);
    anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = 'poemfill-' + safeTheme + '-' + safeAuthorship + '.txt';

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 0);

    showAlert('Prompt text file downloaded.', 'success');
  }

  function handleAuthorshipChange() {
    var selectedAuthorshipId = elements.authorshipSelect.value;

    populateWorks(selectedAuthorshipId, '');
    updatePromptPreview();
  }

  function restoreDefaultFormState() {
    populateThemes(DEFAULT_THEME_ID);
    populateAuthorships(DEFAULT_AUTHORSHIP_ID);
    populateWorks(DEFAULT_AUTHORSHIP_ID, '');

    elements.themeSelect.value = DEFAULT_THEME_ID;
    elements.authorshipSelect.value = DEFAULT_AUTHORSHIP_ID;
    elements.lengthPresetSelect.value = DEFAULT_LENGTH_PRESET;

    elements.philosophyToggle.checked = DEFAULT_TOGGLE_STATE.philosophy;
    elements.scriptureToggle.checked = DEFAULT_TOGGLE_STATE.scripture;
    elements.imageryToggle.checked = DEFAULT_TOGGLE_STATE.imagery;
    elements.rhetoricToggle.checked = DEFAULT_TOGGLE_STATE.rhetoric;

    syncLengthPreset();
    hideAlert();
    updatePromptPreview();
  }

  function setupStickyNavState() {
    var nav = document.querySelector('.site-nav');

    if (!nav) {
      return;
    }

    function updateNavState() {
      if (window.scrollY > 24) {
        document.body.classList.add('nav-is-stuck');
      } else {
        document.body.classList.remove('nav-is-stuck');
      }
    }

    updateNavState();
    window.addEventListener('scroll', updateNavState, { passive: true });
  }

  function addEvent(element, eventName, handler) {
    if (element) {
      element.addEventListener(eventName, handler);
    }
  }

  function bindEvents() {
    addEvent(elements.form, 'submit', function (event) {
      event.preventDefault();
      updatePromptPreview();
    });

    addEvent(elements.authorshipSelect, 'change', handleAuthorshipChange);
    addEvent(elements.themeSelect, 'change', updatePromptPreview);
    addEvent(elements.workSelect, 'change', updatePromptPreview);
    addEvent(elements.contentTypeSelect, 'change', updatePromptPreview);
    addEvent(elements.toneSelect, 'change', updatePromptPreview);
    addEvent(elements.languageStyleSelect, 'change', updatePromptPreview);
    addEvent(elements.subjectInput, 'input', updatePromptPreview);
    addEvent(elements.stanzaCountInput, 'input', updatePromptPreview);
    addEvent(elements.lineRangeInput, 'input', updatePromptPreview);
    addEvent(elements.paragraphDensitySelect, 'change', updatePromptPreview);
    addEvent(elements.philosophyToggle, 'change', updatePromptPreview);
    addEvent(elements.scriptureToggle, 'change', updatePromptPreview);
    addEvent(elements.imageryToggle, 'change', updatePromptPreview);
    addEvent(elements.rhetoricToggle, 'change', updatePromptPreview);
    addEvent(elements.notesInput, 'input', updatePromptPreview);

    addEvent(elements.lengthPresetSelect, 'change', function () {
      syncLengthPreset();
      updatePromptPreview();
    });

    addEvent(elements.copyButton, 'click', function (event) {
      event.preventDefault();
      copyPromptToClipboard();
    });

    addEvent(elements.downloadButton, 'click', function (event) {
      event.preventDefault();
      downloadPromptText();
    });

    addEvent(elements.generateButton, 'click', function (event) {
      event.preventDefault();
      updatePromptPreview();
    });

    addEvent(elements.form, 'reset', function () {
      window.setTimeout(function () {
        restoreDefaultFormState();
      }, 0);
    });
  }

  function initializeForm() {
    populateThemes(DEFAULT_THEME_ID);
    populateAuthorships(DEFAULT_AUTHORSHIP_ID);
    populateWorks(DEFAULT_AUTHORSHIP_ID, '');

    elements.themeSelect.value = DEFAULT_THEME_ID;
    elements.authorshipSelect.value = DEFAULT_AUTHORSHIP_ID;

    if (!elements.lengthPresetSelect.value) {
      elements.lengthPresetSelect.value = DEFAULT_LENGTH_PRESET;
    }

    syncLengthPreset();
    updatePromptPreview();
  }

  function initializeApp() {
    if (window.__POEMFILL_APP_INITIALIZED__) {
      return;
    }

    elements = getElements();

    if (!hasRequiredElements()) {
      return;
    }

    window.__POEMFILL_APP_INITIALIZED__ = true;

    setupStickyNavState();
    initializeForm();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }
}());
