// File: assets/js/archive-room-app.js
// Cache-busted mirror of app.js for Concept 05 preview loading.

(function () {
  'use strict';

  if (window.__POEMFILL_APP_SCRIPT_LOADED__) {
    return;
  }

  window.__POEMFILL_APP_SCRIPT_LOADED__ = true;

  var sourceCollectionData = [
    {
      id: 'public-poems',
      name: 'Public Poems',
      description: 'Public-domain poetry collections, lyric traditions, and dramatic verse sources.'
    },
    {
      id: 'kjv-references',
      name: 'King James Bible References',
      description: 'Biblical cadence, public scriptural reference patterns, and psalmic structures.'
    },
    {
      id: 'philosophy-meditations',
      name: 'Philosophy and Meditations',
      description: 'Public-domain philosophical thought, reflective meditations, and moral inquiry.'
    },
    {
      id: 'editorial-oratory',
      name: 'Editorial and Oratorical Texts',
      description: 'Public speeches, civic prose, and elevated editorial rhetoric suited for formal prompt guidance.'
    }
  ];

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
      collectionId: 'public-poems',
      name: 'William Shakespeare',
      styleLabel: 'Elizabethan dramatic and lyrical register',
      eraLabel: 'Early modern',
      description: 'Controlled rhetoric, balanced clauses, dramatic turn, metaphor-rich movement.',
      workIds: ['hamlet', 'sonnets']
    },
    {
      id: 'milton',
      collectionId: 'public-poems',
      name: 'John Milton',
      styleLabel: 'High formal meditative verse',
      eraLabel: 'Seventeenth century',
      description: 'Long syntactic movement, elevated argument, theological and philosophical density.',
      workIds: ['paradise-lost', 'lycidas']
    },
    {
      id: 'dickinson',
      collectionId: 'public-poems',
      name: 'Emily Dickinson',
      styleLabel: 'Compressed interior lyric',
      eraLabel: 'Nineteenth century',
      description: 'Compression, tensile pause, spiritual inquiry, sharp image logic.',
      workIds: ['hope-feathers', 'after-great-pain']
    },
    {
      id: 'psalmic',
      collectionId: 'kjv-references',
      name: 'Psalmic / KJV Cadence',
      styleLabel: 'Devotional parallelism and petition structure',
      eraLabel: 'Scriptural resonance',
      description: 'Parallel lines, direct address, lament-to-confidence movement, covenantal vocabulary.',
      workIds: ['psalm-13', 'psalm-42']
    },
    {
      id: 'aurelius',
      collectionId: 'philosophy-meditations',
      name: 'Marcus Aurelius',
      styleLabel: 'Stoic reflection and ethical self-command',
      eraLabel: 'Classical meditation',
      description: 'Measured introspection, disciplined reason, ethical urgency, and inward examination.',
      workIds: ['meditations-book-2', 'meditations-book-4']
    },
    {
      id: 'lincoln',
      collectionId: 'editorial-oratory',
      name: 'Abraham Lincoln',
      styleLabel: 'Public moral rhetoric and civic gravity',
      eraLabel: 'Nineteenth-century oratory',
      description: 'Moral compression, civic sorrow, clear argument, and restrained public elevation.',
      workIds: ['second-inaugural', 'gettysburg']
    }
  ];

  var workData = [
    {
      id: 'hamlet',
      authorshipId: 'shakespeare',
      name: 'Hamlet',
      description: 'Reflective conflict, moral delay, inward argument, death-conscious introspection.',
      promptNotes: 'Favor interior debate and sharpen the tension between thought and action.',
      themeIds: ['solitude', 'redemption', 'lament']
    },
    {
      id: 'sonnets',
      authorshipId: 'shakespeare',
      name: 'Sonnets',
      description: 'Argumentative lyric movement, compact turns, image-driven emotional logic.',
      promptNotes: 'Use a clear rhetorical turn and compact thematic progression.',
      themeIds: ['redemption', 'solitude', 'wisdom']
    },
    {
      id: 'paradise-lost',
      authorshipId: 'milton',
      name: 'Paradise Lost',
      description: 'Epic scale, theological reasoning, dignified sentence flow, cosmic framing.',
      promptNotes: 'Use sustained formal cadence and elevated meditative momentum.',
      themeIds: ['redemption', 'wisdom', 'lament']
    },
    {
      id: 'lycidas',
      authorshipId: 'milton',
      name: 'Lycidas',
      description: 'Elegiac movement, grief shaped by classical and spiritual reflection.',
      promptNotes: 'Keep the lament serious and rhetorically polished.',
      themeIds: ['lament', 'wisdom', 'redemption']
    },
    {
      id: 'hope-feathers',
      authorshipId: 'dickinson',
      name: '“Hope” is the thing with feathers',
      description: 'Compression, image precision, inward force, slight but piercing architecture.',
      promptNotes: 'Prefer distilled imagery over extended explanation.',
      themeIds: ['redemption', 'solitude', 'wisdom']
    },
    {
      id: 'after-great-pain',
      authorshipId: 'dickinson',
      name: 'After great pain, a formal feeling comes',
      description: 'Psychological aftermath, interior stillness, measured shock, exact phrasing.',
      promptNotes: 'Keep tension tight and avoid ornamental excess.',
      themeIds: ['lament', 'solitude', 'wisdom']
    },
    {
      id: 'psalm-13',
      authorshipId: 'psalmic',
      name: 'Psalm 13 cadence',
      description: 'Complaint, petition, trust, and compressed devotional reversal.',
      promptNotes: 'Use direct address, urgency, and a final motion toward trust.',
      themeIds: ['lament', 'redemption', 'wisdom']
    },
    {
      id: 'psalm-42',
      authorshipId: 'psalmic',
      name: 'Psalm 42 cadence',
      description: 'Longing, remembered worship, thirst, self-address, refrain structure.',
      promptNotes: 'Let the poem move through memory, longing, and disciplined hope.',
      themeIds: ['lament', 'redemption', 'solitude']
    },
    {
      id: 'meditations-book-2',
      authorshipId: 'aurelius',
      name: 'Meditations, Book II',
      description: 'Stoic self-government, mortality awareness, and practical inward correction.',
      promptNotes: 'Favor moral clarity, inward scrutiny, and disciplined self-address.',
      themeIds: ['wisdom', 'solitude', 'redemption']
    },
    {
      id: 'meditations-book-4',
      authorshipId: 'aurelius',
      name: 'Meditations, Book IV',
      description: 'Inner order, restraint, civic duty, and philosophical endurance.',
      promptNotes: 'Keep the language calm, governing, and exact rather than ornamental.',
      themeIds: ['wisdom', 'redemption', 'solitude']
    },
    {
      id: 'second-inaugural',
      authorshipId: 'lincoln',
      name: 'Second Inaugural Address',
      description: 'National sorrow, measured accountability, public gravity, and restrained moral force.',
      promptNotes: 'Use compression, balance, and civic moral seriousness.',
      themeIds: ['lament', 'redemption', 'wisdom']
    },
    {
      id: 'gettysburg',
      authorshipId: 'lincoln',
      name: 'Gettysburg Address',
      description: 'Commemorative compression, civic duty, and elevated public resolve.',
      promptNotes: 'Keep the cadence spare, memorable, and purposeful.',
      themeIds: ['redemption', 'wisdom', 'lament']
    }
  ];

  var storedContextData = [
    {
      id: 'shakespeare-one-sentence',
      collectionId: 'public-poems',
      authorshipId: 'shakespeare',
      type: 'one-sentence',
      name: 'Shakespeare reference sentence',
      citationLabel: 'Public-domain dramatic reference',
      text: 'A solitary speaker studies moral fracture while language turns inward before it resolves outward.',
      usageNotes: 'Best used when the prompt needs introspection, rhetorical tension, or dramatic self-address.',
      themeIds: ['solitude', 'redemption', 'lament']
    },
    {
      id: 'shakespeare-two-three',
      collectionId: 'public-poems',
      authorshipId: 'shakespeare',
      type: 'two-to-three-sentences',
      name: 'Shakespeare reflective passage',
      citationLabel: 'Public-domain dramatic reference',
      text: 'The source context carries a dramatic inwardness shaped by hesitation, judgment, and self-interrogation. It suggests a speaker who weighs action against conscience before any outward declaration settles. The movement should feel poised between argument and feeling.',
      usageNotes: 'Use when the prompt should inherit dramatic momentum and a strong rhetorical turn.',
      themeIds: ['solitude', 'redemption', 'wisdom']
    },
    {
      id: 'shakespeare-one-paragraph',
      collectionId: 'public-poems',
      authorshipId: 'shakespeare',
      type: 'one-paragraph',
      name: 'Shakespeare archive paragraph',
      citationLabel: 'Public-domain dramatic reference',
      text: 'This stored public context emphasizes a speaker caught between moral insight and delayed action, with the language tightening around interior conflict before opening toward consequence. The emotional shape is not sentimental; it is analytic, pressured, and aware of mortality. Use it when the prompt should feel theatrically poised, intellectually alert, and verbally controlled.',
      usageNotes: 'Use when paragraph-based or monologic outputs need deeper dramatic grounding.',
      themeIds: ['solitude', 'lament', 'redemption']
    },
    {
      id: 'shakespeare-multi-paragraph',
      collectionId: 'public-poems',
      authorshipId: 'shakespeare',
      type: 'multiple-paragraphs',
      name: 'Shakespeare long-form context block',
      citationLabel: 'Public-domain dramatic reference',
      text: 'The source material here is best understood as a dramatic archive of inward thought, rhetorical counterpoint, and emotionally pressurized reasoning.\n\nIts value for prompt construction lies in the way reflection becomes action’s rival, not its absence. The speaker returns again and again to judgment, mortality, memory, and consequence, which gives the final writing prompt a high degree of conceptual tension.\n\nUse this longer public context block when the goal is to generate a literary output that feels self-aware, theatrically alive, and structured by intellectual turn rather than decorative sentiment.',
      usageNotes: 'Use when the user wants long contextual framing before generation begins.',
      themeIds: ['solitude', 'redemption', 'lament']
    },
    {
      id: 'milton-one-sentence',
      collectionId: 'public-poems',
      authorshipId: 'milton',
      type: 'one-sentence',
      name: 'Milton reference sentence',
      citationLabel: 'Public-domain epic reference',
      text: 'The source context rises through formal gravity, theological scale, and disciplined meditative force.',
      usageNotes: 'Best used when the prompt should feel elevated, large-framed, and serious.',
      themeIds: ['redemption', 'wisdom', 'lament']
    },
    {
      id: 'milton-two-three',
      collectionId: 'public-poems',
      authorshipId: 'milton',
      type: 'two-to-three-sentences',
      name: 'Milton reflective passage',
      citationLabel: 'Public-domain epic reference',
      text: 'The stored passage emphasizes scale, order, and argument rather than quick emotional release. It moves with theological seriousness and long-form compositional patience. Use it when the prompt should sound elevated without losing moral clarity.',
      usageNotes: 'Strong for extended poems, meditations, and high-form lyric essays.',
      themeIds: ['redemption', 'wisdom', 'lament']
    },
    {
      id: 'milton-one-paragraph',
      collectionId: 'public-poems',
      authorshipId: 'milton',
      type: 'one-paragraph',
      name: 'Milton archive paragraph',
      citationLabel: 'Public-domain epic reference',
      text: 'This public context block supports compositions that require sustained argument, grave diction, and a large spiritual or philosophical frame. Instead of momentary feeling alone, it favors ordered development, conceptual layering, and formal dignity. Use it when the prompt should invite a writer to move with patient elevation and disciplined inner force.',
      usageNotes: 'Useful when the builder needs larger thematic scale and formal seriousness.',
      themeIds: ['redemption', 'wisdom', 'lament']
    },
    {
      id: 'milton-multi-paragraph',
      collectionId: 'public-poems',
      authorshipId: 'milton',
      type: 'multiple-paragraphs',
      name: 'Milton long-form context block',
      citationLabel: 'Public-domain epic reference',
      text: 'The longer public-domain context here is intended to establish seriousness of scale before the literary output begins.\n\nIt supports prompts that should carry an atmosphere of theological or philosophical breadth, with transitions that feel deliberate rather than abrupt. The diction can rise, but it should never become empty ornament.\n\nUse this record when a generated piece needs sustained structure, layered reflection, and a sense of dignified consequence.',
      usageNotes: 'Strong for long-form meditations, sequence work, and elevated monologues.',
      themeIds: ['redemption', 'wisdom', 'lament']
    },
    {
      id: 'dickinson-one-sentence',
      collectionId: 'public-poems',
      authorshipId: 'dickinson',
      type: 'one-sentence',
      name: 'Dickinson reference sentence',
      citationLabel: 'Public-domain lyric reference',
      text: 'The source context compresses thought until image, silence, and inward pressure do most of the work.',
      usageNotes: 'Use when the output should feel spare, exact, and piercing.',
      themeIds: ['solitude', 'wisdom', 'lament']
    },
    {
      id: 'dickinson-two-three',
      collectionId: 'public-poems',
      authorshipId: 'dickinson',
      type: 'two-to-three-sentences',
      name: 'Dickinson reflective passage',
      citationLabel: 'Public-domain lyric reference',
      text: 'This stored public context favors brevity with force rather than explanation with ease. Images should arrive precisely, pauses should matter, and inward realization should carry the emotional charge. Use it when the prompt should feel crystalline rather than expansive.',
      usageNotes: 'Useful for compact poems, lyric essays, and terse hybrid meditations.',
      themeIds: ['solitude', 'lament', 'wisdom']
    },
    {
      id: 'dickinson-one-paragraph',
      collectionId: 'public-poems',
      authorshipId: 'dickinson',
      type: 'one-paragraph',
      name: 'Dickinson archive paragraph',
      citationLabel: 'Public-domain lyric reference',
      text: 'The public source block here supports a literary output built from exact inward pressure, sudden image logic, and emotional concentration rather than discursiveness. It is especially useful when the builder should produce something concise but psychologically resonant. Use it when the prompt needs to suggest spiritual or emotional force without overexplaining it.',
      usageNotes: 'Helpful when the user wants sharp lyric concentration and conceptual compression.',
      themeIds: ['solitude', 'lament', 'wisdom']
    },
    {
      id: 'dickinson-multi-paragraph',
      collectionId: 'public-poems',
      authorshipId: 'dickinson',
      type: 'multiple-paragraphs',
      name: 'Dickinson long-form context block',
      citationLabel: 'Public-domain lyric reference',
      text: 'This longer context record does not ask for literal imitation; it establishes the pressure, exactness, and spiritual inwardness associated with compressed lyric writing.\n\nIts best use is to steer the prompt toward image-driven realization, sudden tonal shift, and carefully measured surprise rather than broad discursive ease.\n\nUse this when the archive should front-load psychological exactness before the generated output takes shape.',
      usageNotes: 'Works well for hybrid forms that still need lyric sharpness.',
      themeIds: ['solitude', 'wisdom', 'lament']
    },
    {
      id: 'psalmic-one-sentence',
      collectionId: 'kjv-references',
      authorshipId: 'psalmic',
      type: 'one-sentence',
      name: 'KJV cadence sentence',
      citationLabel: 'Public-domain biblical cadence reference',
      text: 'The source context speaks through petition, refrain, longing, and a disciplined turn toward trust.',
      usageNotes: 'Best used when the prompt needs devotional cadence without direct quotation.',
      themeIds: ['lament', 'redemption', 'wisdom']
    },
    {
      id: 'psalmic-two-three',
      collectionId: 'kjv-references',
      authorshipId: 'psalmic',
      type: 'two-to-three-sentences',
      name: 'KJV reflective passage',
      citationLabel: 'Public-domain biblical cadence reference',
      text: 'This public reference block carries complaint, memory, and reverent appeal in close relation. It should guide the prompt toward direct address, spiritual seriousness, and a carefully controlled emotional reversal. Use it when the source influence should be biblical in cadence rather than derivative in quotation.',
      usageNotes: 'Useful for lament structures, meditations, and dramatic address.',
      themeIds: ['lament', 'redemption', 'wisdom']
    },
    {
      id: 'psalmic-one-paragraph',
      collectionId: 'kjv-references',
      authorshipId: 'psalmic',
      type: 'one-paragraph',
      name: 'KJV archive paragraph',
      citationLabel: 'Public-domain biblical cadence reference',
      text: 'The public source context here is meant to guide tone, movement, and prayer-like structure rather than reproduce scripture directly. It supports a voice that can complain, remember, petition, and return toward hope with formal control. Use it when the prompt should feel biblically resonant, emotionally disciplined, and citation-safe.',
      usageNotes: 'Useful when you want KJV resonance framed as lawful public-domain influence.',
      themeIds: ['lament', 'redemption', 'wisdom']
    },
    {
      id: 'psalmic-multi-paragraph',
      collectionId: 'kjv-references',
      authorshipId: 'psalmic',
      type: 'multiple-paragraphs',
      name: 'KJV long-form context block',
      citationLabel: 'Public-domain biblical cadence reference',
      text: 'This longer public context block is intended to hold devotional movement before the final generated piece begins.\n\nIt establishes longing, self-address, repeated appeal, and a shaped movement toward trust or endurance. The effect should be scriptural in resonance but not dependent on long direct quotation.\n\nUse this source record when the prompt must feel biblically textured while still remaining clean for public-domain design and writing workflows.',
      usageNotes: 'Useful for paragraph-based meditations and structured laments.',
      themeIds: ['lament', 'redemption', 'wisdom']
    },
    {
      id: 'aurelius-one-sentence',
      collectionId: 'philosophy-meditations',
      authorshipId: 'aurelius',
      type: 'one-sentence',
      name: 'Meditative philosophy sentence',
      citationLabel: 'Public-domain philosophical reference',
      text: 'The stored context steadies the mind through moral self-command, practical inward scrutiny, and calm restraint.',
      usageNotes: 'Best used when the prompt needs stoic reflection or disciplined inward argument.',
      themeIds: ['wisdom', 'solitude', 'redemption']
    },
    {
      id: 'aurelius-two-three',
      collectionId: 'philosophy-meditations',
      authorshipId: 'aurelius',
      type: 'two-to-three-sentences',
      name: 'Meditative philosophy passage',
      citationLabel: 'Public-domain philosophical reference',
      text: 'This public context turns the reader back toward self-governance, proportion, and inward correction. It encourages a literary prompt that thinks before it performs and clarifies before it embellishes. Use it when the output should feel morally exact and mentally composed.',
      usageNotes: 'Useful for essay, meditation, and disciplined monologue structures.',
      themeIds: ['wisdom', 'solitude', 'redemption']
    },
    {
      id: 'aurelius-one-paragraph',
      collectionId: 'philosophy-meditations',
      authorshipId: 'aurelius',
      type: 'one-paragraph',
      name: 'Meditative philosophy paragraph',
      citationLabel: 'Public-domain philosophical reference',
      text: 'The public source block here is structured to guide reflective writing toward order, composure, and ethical seriousness. Rather than encourage decorative abstraction, it asks for measured thought, self-command, and clear inward accounting. Use it when the prompt should support a philosophy-forward output with real compositional discipline.',
      usageNotes: 'Strong when the user wants an essayistic or reflective architecture.',
      themeIds: ['wisdom', 'solitude', 'redemption']
    },
    {
      id: 'aurelius-multi-paragraph',
      collectionId: 'philosophy-meditations',
      authorshipId: 'aurelius',
      type: 'multiple-paragraphs',
      name: 'Meditative philosophy long-form block',
      citationLabel: 'Public-domain philosophical reference',
      text: 'This longer public-domain context is meant to establish inward steadiness before the prompt asks for final output.\n\nIts strongest uses involve moral reasoning, compositional calm, civic or personal duty, and the refusal of rhetorical excess. The writing that follows should feel examined, not merely expressive.\n\nUse this context block when the builder should support paragraph-based meditation, essay movement, or reasoned monologue.',
      usageNotes: 'Useful for larger reflective forms that need conceptual ballast.',
      themeIds: ['wisdom', 'solitude', 'redemption']
    },
    {
      id: 'lincoln-one-sentence',
      collectionId: 'editorial-oratory',
      authorshipId: 'lincoln',
      type: 'one-sentence',
      name: 'Civic rhetoric sentence',
      citationLabel: 'Public-domain oratorical reference',
      text: 'The stored context compresses public sorrow, moral accountability, and national resolve into restrained formal language.',
      usageNotes: 'Best used when the prompt should feel civic, grave, and memorable.',
      themeIds: ['redemption', 'lament', 'wisdom']
    },
    {
      id: 'lincoln-two-three',
      collectionId: 'editorial-oratory',
      authorshipId: 'lincoln',
      type: 'two-to-three-sentences',
      name: 'Civic rhetoric passage',
      citationLabel: 'Public-domain oratorical reference',
      text: 'This public source block favors compression, solemnity, and moral consequence over ornament. It asks for speech or prose that is elevated, brief, and responsible to public feeling. Use it when the output should sound civic rather than merely personal.',
      usageNotes: 'Useful for monologues, editorial meditations, and public-facing verse structures.',
      themeIds: ['redemption', 'lament', 'wisdom']
    },
    {
      id: 'lincoln-one-paragraph',
      collectionId: 'editorial-oratory',
      authorshipId: 'lincoln',
      type: 'one-paragraph',
      name: 'Civic rhetoric paragraph',
      citationLabel: 'Public-domain oratorical reference',
      text: 'The public-domain context here supports literary output that must sound morally serious, compressed, and answerable to a collective horizon. It can sustain grief, memory, and civic duty without collapsing into general uplift. Use it when the prompt should feel editorially composed and publicly resonant.',
      usageNotes: 'Helpful for prompts that balance public sorrow with disciplined resolve.',
      themeIds: ['redemption', 'lament', 'wisdom']
    },
    {
      id: 'lincoln-multi-paragraph',
      collectionId: 'editorial-oratory',
      authorshipId: 'lincoln',
      type: 'multiple-paragraphs',
      name: 'Civic rhetoric long-form block',
      citationLabel: 'Public-domain oratorical reference',
      text: 'This longer public source block lays down an atmosphere of civic gravity before the final generated piece begins.\n\nIt is especially useful when the writing should sound public, measured, and morally consequential rather than private and unbounded. The diction can be elevated, but it should remain disciplined and memorable.\n\nUse this record when the prompt should support speeches, editorial meditations, or public-minded sequence work.',
      usageNotes: 'Useful for larger structures that need public rhetorical force.',
      themeIds: ['redemption', 'lament', 'wisdom']
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

  var DEFAULT_SOURCE_COLLECTION_ID = sourceCollectionData.length ? sourceCollectionData[0].id : '';
  var DEFAULT_LENGTH_PRESET = 'medium';
  var DEFAULT_CONTEXT_TYPE = 'one-sentence';
  var DEFAULT_CONTEXT_USAGE_MODE = 'thematic-inspiration';

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
      sourceCollectionSelect: byId('sourceCollectionSelect'),
      authorshipSelect: byId('authorshipSelect'),
      workSelect: byId('workSelect'),
      storedContextTypeSelect: byId('storedContextTypeSelect'),
      storedContextSelect: byId('storedContextSelect'),
      contextUsageModeSelect: byId('contextUsageModeSelect'),
      themeSelect: byId('themeSelect'),
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
      sourceCollectionHelp: byId('sourceCollectionHelp'),
      themeHelp: byId('themeHelp'),
      authorshipHelp: byId('authorshipHelp'),
      workHelp: byId('workHelp'),
      storedContextHelp: byId('storedContextHelp'),
      promptOutput: byId('promptOutput'),
      summaryCollection: byId('summaryCollection'),
      summaryTheme: byId('summaryTheme'),
      summaryAuthorship: byId('summaryAuthorship'),
      summaryWork: byId('summaryWork'),
      summaryContextType: byId('summaryContextType'),
      summaryUsageMode: byId('summaryUsageMode'),
      contextEntryTitle: byId('contextEntryTitle'),
      contextEntryCitation: byId('contextEntryCitation'),
      contextEntryText: byId('contextEntryText'),
      structureSummaryTitle: byId('structureSummaryTitle'),
      structureSummaryBody: byId('structureSummaryBody'),
      enrichmentSummary: byId('enrichmentSummary'),
      structureCountField: byId('structureCountField'),
      structureCountLabel: byId('structureCountLabel'),
      lineRangeField: byId('lineRangeField'),
      lineRangeLabel: byId('lineRangeLabel'),
      paragraphDensityField: byId('paragraphDensityField'),
      wordCountBadge: byId('wordCountBadge'),
      copyButton: byId('copyButton'),
      downloadButton: byId('downloadButton'),
      generateButton: byId('generateButton')
    };
  }

  function hasRequiredElements() {
    var requiredKeys = [
      'form',
      'sourceCollectionSelect',
      'authorshipSelect',
      'workSelect',
      'storedContextTypeSelect',
      'storedContextSelect',
      'contextUsageModeSelect',
      'themeSelect',
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
      'summaryCollection',
      'summaryTheme',
      'summaryAuthorship',
      'summaryWork',
      'summaryContextType',
      'summaryUsageMode',
      'contextEntryTitle',
      'contextEntryCitation',
      'contextEntryText',
      'structureSummaryTitle',
      'structureSummaryBody',
      'enrichmentSummary',
      'structureCountField',
      'structureCountLabel',
      'lineRangeField',
      'lineRangeLabel',
      'paragraphDensityField',
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

  function getSourceCollectionById(collectionId) {
    return sourceCollectionData.find(function (collection) {
      return collection.id === collectionId;
    }) || sourceCollectionData[0] || null;
  }

  function populateSourceCollections(selectedCollectionId) {
    setSelectOptions(
      elements.sourceCollectionSelect,
      sourceCollectionData,
      selectedCollectionId || DEFAULT_SOURCE_COLLECTION_ID,
      'No source collections available'
    );
  }

  function getAuthorshipsByCollectionId(collectionId) {
    return authorshipData.filter(function (author) {
      return author.collectionId === collectionId;
    });
  }

  function populateAuthorships(collectionId, selectedAuthorshipId) {
    setSelectOptions(
      elements.authorshipSelect,
      getAuthorshipsByCollectionId(collectionId),
      selectedAuthorshipId || '',
      'No authorships available for this collection'
    );
  }

  function getWorksByAuthorshipId(authorshipId) {
    return workData.filter(function (work) {
      return work.authorshipId === authorshipId;
    });
  }

  function populateWorks(authorshipId, selectedWorkId) {
    setSelectOptions(
      elements.workSelect,
      getWorksByAuthorshipId(authorshipId),
      selectedWorkId || '',
      'No works available for this authorship'
    );
  }

  function getStoredContexts(collectionId, authorshipId, workId, contextType) {
    var contextTypeAliases = getContextTypeAliases(contextType);
    var exactMatches = storedContextData.filter(function (entry) {
      return entry.collectionId === collectionId &&
        entry.authorshipId === authorshipId &&
        entry.workId === workId &&
        contextTypeAliases.indexOf(entry.type) !== -1;
    });

    if (exactMatches.length) {
      return exactMatches;
    }

    var authorshipMatches = storedContextData.filter(function (entry) {
      return entry.collectionId === collectionId &&
        entry.authorshipId === authorshipId &&
        !entry.workId &&
        contextTypeAliases.indexOf(entry.type) !== -1;
    });

    if (authorshipMatches.length) {
      return authorshipMatches;
    }

    return storedContextData.filter(function (entry) {
      return entry.collectionId === collectionId &&
        !entry.authorshipId &&
        contextTypeAliases.indexOf(entry.type) !== -1;
    });
  }

  function getContextTypeAliases(contextType) {
    var aliasMap = {
      'one-sentence': ['one-sentence'],
      'two-sentences': ['two-sentences', 'two-to-three-sentences'],
      'one-paragraph': ['one-paragraph'],
      'two-paragraphs': ['two-paragraphs', 'multiple-paragraphs'],
      'three-paragraphs': ['three-paragraphs', 'multiple-paragraphs']
    };

    return aliasMap[contextType] || [contextType];
  }

  function populateStoredContexts(collectionId, authorshipId, workId, contextType, selectedContextId) {
    setSelectOptions(
      elements.storedContextSelect,
      getStoredContexts(collectionId, authorshipId, workId, contextType),
      selectedContextId || '',
      'No source context available for this selection'
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
    }) || null;
  }

  function getWorkById(workId, authorshipId) {
    var directMatch = workData.find(function (work) {
      return work.id === workId;
    });

    if (directMatch) {
      return directMatch;
    }

    return getWorksByAuthorshipId(authorshipId || '')[0] || null;
  }

  function getStoredContextById(contextId, collectionId, authorshipId, workId, contextType) {
    var directMatch = storedContextData.find(function (entry) {
      return entry.id === contextId;
    });

    if (directMatch) {
      return directMatch;
    }

    return getStoredContexts(collectionId, authorshipId, workId, contextType)[0] || null;
  }

  function getCollectionThemeIds(collectionId) {
    var map = {
      'public-poems': ['redemption', 'solitude', 'lament'],
      'kjv-references': ['lament', 'redemption', 'wisdom'],
      'philosophy-meditations': ['wisdom', 'solitude', 'redemption'],
      'editorial-oratory': ['redemption', 'lament', 'wisdom']
    };

    return map[collectionId] || themeData.map(function (theme) {
      return theme.id;
    });
  }

  function getThemesForSelection(collectionId, authorship, work, storedContext) {
    var themeIds = [];

    if (storedContext && storedContext.themeIds) {
      themeIds = themeIds.concat(storedContext.themeIds);
    }

    if (work && work.themeIds) {
      themeIds = themeIds.concat(work.themeIds);
    }

    if (!themeIds.length) {
      themeIds = getCollectionThemeIds(collectionId);
    }

    return themeData.filter(function (theme) {
      return themeIds.indexOf(theme.id) !== -1;
    });
  }

  function populateThemes(collectionId, authorship, work, storedContext, selectedThemeId) {
    setSelectOptions(
      elements.themeSelect,
      getThemesForSelection(collectionId, authorship, work, storedContext),
      selectedThemeId || '',
      'No themes available'
    );
  }

  function getPreset(lengthPreset) {
    return lengthPresets[lengthPreset] || lengthPresets[DEFAULT_LENGTH_PRESET];
  }

  function getParagraphCountForLength(lengthPreset) {
    var map = {
      short: 3,
      medium: 5,
      long: 7,
      extended: 9,
      developer: 11
    };

    return map[lengthPreset] || map[DEFAULT_LENGTH_PRESET];
  }

  function getSequencePartCountForLength(lengthPreset) {
    var map = {
      short: 3,
      medium: 5,
      long: 7,
      extended: 9,
      developer: 10
    };

    return map[lengthPreset] || map[DEFAULT_LENGTH_PRESET];
  }

  function getStructureConfig(contentType) {
    var configMap = {
      poem: {
        countLabel: 'Stanza Count',
        lineRangeLabel: 'Approx. Lines Per Stanza',
        showLineRange: true,
        showParagraphDensity: false,
        summaryTitle: 'Poem structure'
      },
      'lyric-essay': {
        countLabel: 'Paragraph Count',
        lineRangeLabel: 'Approx. Lines Per Paragraph',
        showLineRange: false,
        showParagraphDensity: true,
        summaryTitle: 'Lyric essay structure'
      },
      'dramatic-monologue': {
        countLabel: 'Scene / Section Count',
        lineRangeLabel: 'Approx. Speaking Units Per Scene',
        showLineRange: true,
        showParagraphDensity: false,
        summaryTitle: 'Dramatic monologue structure'
      },
      'verse-sequence': {
        countLabel: 'Sequence Part Count',
        lineRangeLabel: 'Approx. Lines Per Part',
        showLineRange: true,
        showParagraphDensity: false,
        summaryTitle: 'Verse sequence structure'
      },
      'hybrid-meditation': {
        countLabel: 'Section Count',
        lineRangeLabel: 'Approx. Lines Per Section',
        showLineRange: false,
        showParagraphDensity: true,
        summaryTitle: 'Hybrid meditation structure'
      }
    };

    return configMap[contentType] || configMap.poem;
  }

  function updateStructureFieldState() {
    var config = getStructureConfig(elements.contentTypeSelect.value);

    elements.structureCountLabel.textContent = config.countLabel;
    elements.lineRangeLabel.textContent = config.lineRangeLabel;
    elements.lineRangeField.hidden = !config.showLineRange;
    elements.paragraphDensityField.hidden = !config.showParagraphDensity;
  }

  function syncLengthPreset() {
    var preset = getPreset(elements.lengthPresetSelect.value);
    var contentType = elements.contentTypeSelect.value;

    if (!preset) {
      return;
    }

    if (contentType === 'lyric-essay') {
      elements.stanzaCountInput.value = getParagraphCountForLength(elements.lengthPresetSelect.value);
    } else if (contentType === 'verse-sequence') {
      elements.stanzaCountInput.value = getSequencePartCountForLength(elements.lengthPresetSelect.value);
    } else {
      elements.stanzaCountInput.value = preset.stanzaCount;
    }

    elements.lineRangeInput.value = preset.lineRange;
    elements.paragraphDensitySelect.value = preset.paragraphDensity;
  }

  function buildFallbackSubject(values) {
    var themeName = values.theme ? values.theme.name : 'the selected theme';
    var workName = values.work ? values.work.name : 'the selected work';
    var authorshipName = values.authorship ? values.authorship.name : 'the selected authorship';

    return themeName + ', shaped by ' + workName + ' in the style of ' + authorshipName;
  }

  function normalizeCount(rawValue, lengthPreset, contentType) {
    var preset = getPreset(lengthPreset);
    var numericValue = Number(rawValue);

    if (Number.isFinite(numericValue) && numericValue >= 1) {
      return Math.floor(numericValue);
    }

    if (contentType === 'lyric-essay') {
      return getParagraphCountForLength(lengthPreset);
    }

    if (contentType === 'verse-sequence') {
      return getSequencePartCountForLength(lengthPreset);
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
    var selectedCollection = getSourceCollectionById(elements.sourceCollectionSelect.value);
    var selectedAuthorship = getAuthorshipById(elements.authorshipSelect.value);
    var selectedAuthorshipId = selectedAuthorship ? selectedAuthorship.id : '';
    var selectedWork = getWorkById(elements.workSelect.value, selectedAuthorshipId);
    var selectedStoredContext = getStoredContextById(
      elements.storedContextSelect.value,
      selectedCollection ? selectedCollection.id : '',
      selectedAuthorshipId,
      selectedWork ? selectedWork.id : '',
      elements.storedContextTypeSelect.value
    );
    var selectedTheme = getThemeById(elements.themeSelect.value);
    var rawSubject = elements.subjectInput.value.trim();
    var lengthPreset = elements.lengthPresetSelect.value || DEFAULT_LENGTH_PRESET;
    var contentType = elements.contentTypeSelect.value;

    var values = {
      sourceCollection: selectedCollection,
      authorship: selectedAuthorship,
      work: selectedWork,
      storedContextType: elements.storedContextTypeSelect.value,
      storedContext: selectedStoredContext,
      contextUsageMode: elements.contextUsageModeSelect.value,
      theme: selectedTheme,
      contentType: contentType,
      tone: elements.toneSelect.value,
      languageStyle: elements.languageStyleSelect.value,
      rawSubject: rawSubject,
      lengthPreset: lengthPreset,
      stanzaCount: normalizeCount(elements.stanzaCountInput.value, lengthPreset, contentType),
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

    if (!values.sourceCollection) {
      errors.push('A source collection selection is required.');
    }

    if (!values.authorship) {
      errors.push('An authorship selection is required.');
    }

    if (!values.work) {
      errors.push('A work selection is required.');
    }

    if (!values.storedContextType) {
      errors.push('A stored context type selection is required.');
    }

    if (!values.storedContext) {
      errors.push('A stored context entry is required.');
    }

    if (!values.theme) {
      errors.push('A theme selection is required.');
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
      balanced: 'balanced paragraph development',
      expanded: 'expanded paragraph development',
      'long-paragraphs': 'long paragraph development'
    };

    return labels[density] || density || 'balanced paragraph development';
  }

  function humanizeContextType(type) {
    var labels = {
      'one-sentence': '1 sentence',
      'two-sentences': '2 sentences',
      'one-paragraph': '1 paragraph',
      'two-paragraphs': '2 paragraphs',
      'three-paragraphs': '3 paragraphs'
    };

    return labels[type] || type || 'Source context length';
  }

  function humanizeUsageMode(mode) {
    var labels = {
      'thematic-inspiration': 'thematic inspiration',
      'structural-influence': 'structural influence',
      'tonal-reference': 'tonal reference',
      'background-only': 'background only'
    };

    return labels[mode] || mode || 'thematic inspiration';
  }

  function getStructureInstruction(values) {
    if (values.contentType === 'lyric-essay') {
      return 'Develop the lyric essay in approximately ' + values.stanzaCount + ' paragraphs, using ' + humanizeParagraphDensity(values.paragraphDensity) + ' and enough connective movement to sustain a coherent reflective arc.';
    }

    if (values.contentType === 'dramatic-monologue') {
      return 'Shape the dramatic monologue into approximately ' + values.stanzaCount + ' scenes or formal speech sections, giving each section a distinct rhetorical movement and about ' + values.lineRange + ' lines or speaking units where helpful.';
    }

    if (values.contentType === 'verse-sequence') {
      return 'Organize the verse sequence into approximately ' + values.stanzaCount + ' linked parts, with about ' + values.lineRange + ' lines per part and enough variation for each segment to feel distinct but connected.';
    }

    if (values.contentType === 'hybrid-meditation') {
      return 'Build the hybrid meditation in approximately ' + values.stanzaCount + ' sections, combining paragraph-based reflection with lyrical passagework and using ' + humanizeParagraphDensity(values.paragraphDensity) + ' to guide the prose-weight of each section.';
    }

    return 'Develop the poem in approximately ' + values.stanzaCount + ' stanzas, with about ' + values.lineRange + ' lines per stanza and a clearly shaped poetic progression.';
  }

  function getCompletionInstruction(values) {
    if (values.contentType === 'lyric-essay') {
      return 'Do not produce a thin or abbreviated result. Build a complete essay structure with a clear opening movement, interior development, and a purposeful closing paragraph.';
    }

    if (values.contentType === 'dramatic-monologue') {
      return 'Do not produce a thin or abbreviated result. Build a complete dramatic structure with a clear opening address, interior escalation, and a purposeful closing movement.';
    }

    if (values.contentType === 'verse-sequence') {
      return 'Do not produce a thin or abbreviated result. Build a complete sequence with a clear opening part, interior development across linked sections, and a purposeful closing part.';
    }

    if (values.contentType === 'hybrid-meditation') {
      return 'Do not produce a thin or abbreviated result. Build a complete hybrid structure with a clear opening movement, layered interior development, and a purposeful closing section.';
    }

    return 'Do not produce a thin or abbreviated result. Build a complete poetic structure with a clear opening movement, interior development, and a purposeful closing stanza.';
  }

  function buildOptionalInstructionLines(values) {
    var lines = [];

    if (values.philosophy) {
      lines.push('Blend philosophical reflection into the composition so the work carries intellectual depth and sustained contemplation.');
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

  function buildStructureSummary(values) {
    if (values.contentType === 'lyric-essay') {
      return 'Approximately ' + values.stanzaCount + ' paragraphs with ' + humanizeParagraphDensity(values.paragraphDensity) + '.';
    }

    if (values.contentType === 'dramatic-monologue') {
      return 'Approximately ' + values.stanzaCount + ' scenes or speech sections with about ' + values.lineRange + ' speaking units each where useful.';
    }

    if (values.contentType === 'verse-sequence') {
      return 'Approximately ' + values.stanzaCount + ' linked sequence parts with about ' + values.lineRange + ' lines per part.';
    }

    if (values.contentType === 'hybrid-meditation') {
      return 'Approximately ' + values.stanzaCount + ' sections with ' + humanizeParagraphDensity(values.paragraphDensity) + ' guiding the prose-weight of each section.';
    }

    return 'Approximately ' + values.stanzaCount + ' stanzas with about ' + values.lineRange + ' lines per stanza.';
  }

  function buildEnrichmentSummary(values) {
    var items = [];

    if (values.philosophy) {
      items.push('Philosophical reflection');
    }

    if (values.scripture) {
      items.push('Biblical cadence');
    }

    if (values.imagery) {
      items.push('Dense imagery');
    }

    if (values.rhetoric) {
      items.push('Formal rhetoric');
    }

    if (values.notes) {
      items.push('Editor notes present');
    }

    return items.length ? items.join(' · ') : 'No supplemental enrichments selected beyond the core source records.';
  }

  function updatePreviewCards(values) {
    setText(elements.sourceCollectionHelp, values.sourceCollection ? values.sourceCollection.description : '');
    setText(elements.authorshipHelp, values.authorship ? values.authorship.styleLabel + ' — ' + values.authorship.description : '');
    setText(elements.workHelp, values.work ? values.work.description + ' ' + values.work.promptNotes : '');
    setText(elements.storedContextHelp, values.storedContext ? values.storedContext.usageNotes : '');
    setText(elements.themeHelp, values.theme ? values.theme.shortDescription + ' ' + values.theme.promptNotes : '');

    setText(elements.summaryCollection, values.sourceCollection ? values.sourceCollection.name : '—');
    setText(elements.summaryTheme, values.theme ? values.theme.name : '—');
    setText(elements.summaryAuthorship, values.authorship ? values.authorship.name : '—');
    setText(elements.summaryWork, values.work ? values.work.name : '—');
    setText(elements.summaryContextType, humanizeContextType(values.storedContextType));
    setText(elements.summaryUsageMode, humanizeUsageMode(values.contextUsageMode));

    setText(elements.contextEntryTitle, values.storedContext ? values.storedContext.name : '—');
    setText(elements.contextEntryCitation, values.storedContext ? values.storedContext.citationLabel : '—');
    setText(
      elements.contextEntryText,
      values.storedContext ? values.storedContext.text : 'Choose a stored public context entry to preview it here.'
    );

    setText(elements.structureSummaryTitle, getStructureConfig(values.contentType).summaryTitle);
    setText(elements.structureSummaryBody, buildStructureSummary(values));
    setText(elements.enrichmentSummary, buildEnrichmentSummary(values));
  }

  function buildPrompt(values) {
    var preset = getPreset(values.lengthPreset);
    var optionalLines = buildOptionalInstructionLines(values);
    var sections = [
      'Write a ' + humanizeContentType(values.contentType) + ' centered on ' + values.subject + '.',
      'Source collection: ' + values.sourceCollection.name + '.',
      'Primary theme: ' + values.theme.name + '. ' + values.theme.shortDescription,
      'Base the stylistic approach on ' + values.authorship.name + ', drawing specifically from the tonal, structural, and conceptual guidance associated with ' + values.work.name + '.',
      'Use the stored public context as ' + humanizeUsageMode(values.contextUsageMode) + '.',
      'Source context reference (' + humanizeContextType(values.storedContextType) + '): ' + values.storedContext.text,
      'Use ' + humanizeLanguageStyle(values.languageStyle) + ' with a ' + humanizeTone(values.tone) + ' tonal register.',
      getStructureInstruction(values),
      preset.guidance,
      'Source notes: ' + values.authorship.description,
      'Work notes: ' + values.work.description,
      'Work emphasis: ' + values.work.promptNotes,
      'Theme emphasis: ' + values.theme.promptNotes
    ];

    if (values.storedContext && values.storedContext.usageNotes) {
      sections.push('Stored context usage note: ' + values.storedContext.usageNotes);
    }

    if (optionalLines.length) {
      sections.push('Additional literary priorities:');

      optionalLines.forEach(function (line, index) {
        sections.push(String(index + 1) + '. ' + line);
      });
    }

    sections.push(getCompletionInstruction(values));
    sections.push('Avoid cliché, shallow sentiment, and generic inspirational language. Keep the diction purposeful and texturally distinct.');

    if (values.notes) {
      sections.push('Additional instructions from the editor: ' + values.notes);
    }

    sections.push('Output only the finished literary work unless a title is naturally appropriate; if a title is used, keep it concise and relevant.');

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

    updatePreviewCards(values);

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
    var safeCollection = elements.sourceCollectionSelect.value || 'archive';
    var safeAuthorship = elements.authorshipSelect.value || 'author';

    if (!text) {
      showAlert('There is no prompt to download yet.', 'danger');
      return;
    }

    blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    url = URL.createObjectURL(blob);
    anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = 'poemfill-' + safeCollection + '-' + safeAuthorship + '.txt';

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 0);

    showAlert('Prompt text file downloaded.', 'success');
  }

  function refreshThemeOptions(selectedThemeId) {
    var authorship = getAuthorshipById(elements.authorshipSelect.value);
    var work = getWorkById(elements.workSelect.value, authorship ? authorship.id : '');
    var storedContext = getStoredContextById(
      elements.storedContextSelect.value,
      elements.sourceCollectionSelect.value,
      authorship ? authorship.id : '',
      work ? work.id : '',
      elements.storedContextTypeSelect.value
    );

    populateThemes(elements.sourceCollectionSelect.value, authorship, work, storedContext, selectedThemeId);
  }

  function refreshStoredContextOptions(selectedContextId) {
    var authorshipId = elements.authorshipSelect.value;
    var workId = elements.workSelect.value;

    populateStoredContexts(
      elements.sourceCollectionSelect.value,
      authorshipId,
      workId,
      elements.storedContextTypeSelect.value,
      selectedContextId
    );
  }

  function handleSourceCollectionChange() {
    populateAuthorships(elements.sourceCollectionSelect.value, '');
    populateWorks(elements.authorshipSelect.value, '');
    refreshStoredContextOptions('');
    refreshThemeOptions('');
    updatePromptPreview();
  }

  function handleAuthorshipChange() {
    populateWorks(elements.authorshipSelect.value, '');
    refreshStoredContextOptions('');
    refreshThemeOptions('');
    updatePromptPreview();
  }

  function handleWorkChange() {
    refreshStoredContextOptions('');
    refreshThemeOptions('');
    updatePromptPreview();
  }

  function handleStoredContextTypeChange() {
    refreshStoredContextOptions('');
    refreshThemeOptions('');
    updatePromptPreview();
  }

  function handleStoredContextChange() {
    refreshThemeOptions(elements.themeSelect.value);
    updatePromptPreview();
  }

  function restoreDefaultFormState() {
    populateSourceCollections(DEFAULT_SOURCE_COLLECTION_ID);
    populateAuthorships(DEFAULT_SOURCE_COLLECTION_ID, '');
    populateWorks(elements.authorshipSelect.value, '');
    refreshStoredContextOptions('');
    refreshThemeOptions('');

    elements.lengthPresetSelect.value = DEFAULT_LENGTH_PRESET;
    elements.storedContextTypeSelect.value = DEFAULT_CONTEXT_TYPE;
    elements.contextUsageModeSelect.value = DEFAULT_CONTEXT_USAGE_MODE;

    elements.philosophyToggle.checked = DEFAULT_TOGGLE_STATE.philosophy;
    elements.scriptureToggle.checked = DEFAULT_TOGGLE_STATE.scripture;
    elements.imageryToggle.checked = DEFAULT_TOGGLE_STATE.imagery;
    elements.rhetoricToggle.checked = DEFAULT_TOGGLE_STATE.rhetoric;

    updateStructureFieldState();
    syncLengthPreset();
    hideAlert();
    refreshStoredContextOptions('');
    refreshThemeOptions('');
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

    addEvent(elements.sourceCollectionSelect, 'change', handleSourceCollectionChange);
    addEvent(elements.authorshipSelect, 'change', handleAuthorshipChange);
    addEvent(elements.workSelect, 'change', handleWorkChange);
    addEvent(elements.storedContextTypeSelect, 'change', handleStoredContextTypeChange);
    addEvent(elements.storedContextSelect, 'change', handleStoredContextChange);
    addEvent(elements.contextUsageModeSelect, 'change', updatePromptPreview);
    addEvent(elements.themeSelect, 'change', updatePromptPreview);
    addEvent(elements.contentTypeSelect, 'change', function () {
      updateStructureFieldState();
      syncLengthPreset();
      updatePromptPreview();
    });
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
    populateSourceCollections(DEFAULT_SOURCE_COLLECTION_ID);

    if (!elements.storedContextTypeSelect.value) {
      elements.storedContextTypeSelect.value = DEFAULT_CONTEXT_TYPE;
    }

    if (!elements.contextUsageModeSelect.value) {
      elements.contextUsageModeSelect.value = DEFAULT_CONTEXT_USAGE_MODE;
    }

    populateAuthorships(elements.sourceCollectionSelect.value, '');
    populateWorks(elements.authorshipSelect.value, '');
    refreshStoredContextOptions('');
    refreshThemeOptions('');

    if (!elements.lengthPresetSelect.value) {
      elements.lengthPresetSelect.value = DEFAULT_LENGTH_PRESET;
    }

    updateStructureFieldState();
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
