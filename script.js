const translations = {
  pl: {
    appTitle: 'Prompt Factory',
    languageLabel: 'Język UI',
    tagline: 'Fabryka system promptów dla asystentów AI',
    profileSection: 'Profil asystenta',
    assistantName: 'Nazwa asystenta',
    assistantPurpose: 'Główny cel / przeznaczenie',
    targetAudience: 'Docelowy użytkownik / grupa docelowa',
    specialization: 'Krótki opis specjalizacji',
    taskSection: 'Główne zadanie',
    taskHint: 'Pamiętaj: jeden asystent = jedno wyraźnie określone zadanie.',
    mainTask: 'Opis głównego zadania',
    taskDetails: 'Doprecyzowanie / typ danych',
    taskConstraints: 'Ograniczenia',
    creativitySection: 'Kreatywność i szczegółowość',
    creativityHint: 'Niższe wartości = raport analityczny, wyższe = burza mózgów.',
    pdfSection: 'Dokumenty PDF i RAG',
    usePdf: 'Użyj dokumentów PDF jako bazy wiedzy (RAG)',
    pdfUpload: 'Wgraj pliki PDF',
    pdfDescription: 'Opisz te dokumenty',
    extractPdf: 'Wyciągnij tekst z PDF i wykorzystaj w promptach',
    externalSources: 'Inne zewnętrzne źródła wiedzy',
    styleSection: 'Dodatkowe wymagania stylistyczne i formatowanie',
    desiredTone: 'Pożądany ton',
    responseLanguages: 'Języki odpowiedzi',
    responseFormat: 'Preferowany format odpowiedzi',
    styleConstraints: 'Specjalne ograniczenia',
    providerSection: 'Dostawca modelu i tryb pracy',
    providerLabel: 'Wybierz dostawcę',
    providerOpenAI: 'OpenAI',
    providerGemini: 'Gemini',
    providerAnthropic: 'Anthropic',
    modeLabel: 'Tryb pracy',
    modeThinking: 'Thinking',
    modeFast: 'Fast',
    modelName: 'Nazwa modelu',
    apiSection: 'Klucze API',
    openaiKeyLabel: 'Klucz OpenAI',
    geminiKeyLabel: 'Klucz Gemini',
    anthropicKeyLabel: 'Klucz Anthropic',
    keyInfo: 'Klucz nie jest zapisywany – używany tylko podczas wywołania.',
    useThisKey: 'Użyj tego klucza przy wywołaniach API',
    promptLanguageSection: 'Język system promptu i format',
    systemLanguage: 'Język system promptu',
    outputFormat: 'Format wyjściowy',
    storageSection: 'Pamięć przeglądarki',
    saveToStorage: 'Zapisuj konfigurację i historię w pamięci przeglądarki',
    productionLine: 'Linia produkcyjna',
    generateBtn: 'Generuj system prompt',
    refineBtn: 'Rafinuj z instrukcją',
    copyBtn: 'Kopiuj',
    downloadBtn: 'Pobierz',
    historyTitle: 'Historia sesji',
    clearHistory: 'Wyczyść historię',
    loadBtn: 'Wczytaj',
    historyEmpty: 'Brak wpisów w historii tej sesji.',
    pdfStatusLoading: 'Ekstrakcja tekstu z PDF...',
    pdfStatusDone: 'Tekst z PDF został dodany jako kontekst.',
    pdfStatusError: 'Nie udało się odczytać plików PDF.',
    pdfLibMissing: 'Biblioteka PDF.js nie została załadowana.',
    statusReady: 'Gotowe.',
    statusLoading: 'Produkcja w toku...',
    statusError: 'Błąd produkcji – sprawdź konfigurację i klucz API.',
    statusCopied: 'Skopiowano do schowka.',
    statusDownloaded: 'Plik został pobrany.',
    providerMissingKey: 'Brak aktywnego klucza API dla wybranego dostawcy.',
    refinePlaceholder: 'np. Skróć o 30%',
    saveConfirmation: 'Konfiguracja i historia zapisane lokalnie.',
    clearedHistory: 'Historia została wyczyszczona.',
    loadFromHistory: 'Wczytaj z historii',
    pdfSizeWarning: 'Plik jest zbyt duży (maks 15 MB).',
    missingFields: 'Uzupełnij kluczowe pola (cel i główne zadanie).',
    needPromptToRefine: 'Dodaj system prompt do rafinacji.'
  },
  en: {
    appTitle: 'Prompt Factory',
    languageLabel: 'UI language',
    tagline: 'System prompt assembly line for AI assistants',
    profileSection: 'Assistant profile',
    assistantName: 'Assistant name',
    assistantPurpose: 'Main purpose / mission',
    targetAudience: 'Target user / audience',
    specialization: 'Short specialization description',
    taskSection: 'Main task',
    taskHint: 'Remember: one assistant = one clearly defined task.',
    mainTask: 'Description of the main task',
    taskDetails: 'Clarification / data types',
    taskConstraints: 'Constraints',
    creativitySection: 'Creativity & granularity',
    creativityHint: 'Lower values = analytical report, higher = brainstorming.',
    pdfSection: 'PDF documents & RAG',
    usePdf: 'Use PDF documents as a knowledge base (RAG)',
    pdfUpload: 'Upload PDF files',
    pdfDescription: 'Describe these documents',
    extractPdf: 'Extract text from PDFs and use it in prompts',
    externalSources: 'Other external knowledge sources',
    styleSection: 'Extra style and formatting requirements',
    desiredTone: 'Desired tone',
    responseLanguages: 'Response languages',
    responseFormat: 'Preferred response format',
    styleConstraints: 'Special restrictions',
    providerSection: 'Model provider & mode',
    providerLabel: 'Choose provider',
    providerOpenAI: 'OpenAI',
    providerGemini: 'Gemini',
    providerAnthropic: 'Anthropic',
    modeLabel: 'Working mode',
    modeThinking: 'Thinking',
    modeFast: 'Fast',
    modelName: 'Model name',
    apiSection: 'API keys',
    openaiKeyLabel: 'OpenAI API Key',
    geminiKeyLabel: 'Gemini API Key',
    anthropicKeyLabel: 'Anthropic API Key',
    keyInfo: 'Key is not stored – used only for the call.',
    useThisKey: 'Use this key for API calls',
    promptLanguageSection: 'System prompt language & format',
    systemLanguage: 'System prompt language',
    outputFormat: 'Output format',
    storageSection: 'Browser storage',
    saveToStorage: 'Save configuration and history in browser storage',
    productionLine: 'Production line',
    generateBtn: 'Generate system prompt',
    refineBtn: 'Refine with instruction',
    copyBtn: 'Copy',
    downloadBtn: 'Download',
    historyTitle: 'Session history',
    clearHistory: 'Clear history',
    loadBtn: 'Load',
    historyEmpty: 'No history entries yet.',
    pdfStatusLoading: 'Extracting PDF text...',
    pdfStatusDone: 'PDF text has been added as context.',
    pdfStatusError: 'Failed to read PDF files.',
    pdfLibMissing: 'PDF.js library not loaded.',
    statusReady: 'Ready.',
    statusLoading: 'Production in progress...',
    statusError: 'Production error – verify configuration and API key.',
    statusCopied: 'Copied to clipboard.',
    statusDownloaded: 'File downloaded.',
    providerMissingKey: 'Missing active API key for the selected provider.',
    refinePlaceholder: 'e.g. Shorten by 30%',
    saveConfirmation: 'Configuration and history saved locally.',
    clearedHistory: 'History cleared.',
    loadFromHistory: 'Load from history',
    pdfSizeWarning: 'File is too large (max 15 MB).',
    missingFields: 'Fill in the key fields (purpose and main task).',
    needPromptToRefine: 'Add a system prompt to refine first.'
  }
};

const creativityDescriptions = {
  pl: [
    { min: 0, max: 10, text: 'T-800 – zero fantazji, maksymalna precyzja' },
    { min: 20, max: 30, text: 'Księgowy-kontroler – konserwatywny i bardzo dokładny' },
    { min: 40, max: 60, text: 'Inżynier-praktyk – zrównoważona kreatywność i konkret' },
    { min: 70, max: 80, text: 'Kreatywny strateg – dużo pomysłów, ale w ramach zasad' },
    { min: 90, max: 100, text: 'Salvador Dalí na LSD – czysta abstrakcja i szalona kreatywność' }
  ],
  en: [
    { min: 0, max: 10, text: 'T-800 – zero fantasy, maximum precision' },
    { min: 20, max: 30, text: 'Controller-accountant – conservative and very precise' },
    { min: 40, max: 60, text: 'Pragmatic engineer – balanced creativity and concreteness' },
    { min: 70, max: 80, text: 'Creative strategist – many ideas but still within rules' },
    { min: 90, max: 100, text: 'Salvador Dalí on LSD – pure abstraction and wild creativity' }
  ]
};

const defaultModels = {
  openai: {
    thinking: 'gpt-4.1',
    fast: 'gpt-4.1-mini'
  },
  gemini: {
    thinking: 'gemini-2.0-pro',
    fast: 'gemini-2.0-flash'
  },
  anthropic: {
    thinking: 'claude-3.5-sonnet',
    fast: 'claude-3.5-haiku'
  }
};

const state = {
  language: 'pl',
  history: [],
  saveToStorage: false,
  pdfTexts: [],
  pdfMeta: [],
  pdfExtracting: false
};

const apiKeys = {
  openai: '',
  gemini: '',
  anthropic: ''
};

const storageKey = 'prompt-factory-state';

const elements = {};

document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  setupEventListeners();
  applyLanguage(state.language);
  loadFromStorage();
  updateCreativityLabel();
  updateModelName();
  setRefinePlaceholder();
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.worker.min.js';
  }
});

function cacheElements() {
  elements.languageSelect = document.getElementById('language-select');
  elements.creativityRange = document.getElementById('creativity');
  elements.creativityLabel = document.getElementById('creativity-label');
  elements.usePdf = document.getElementById('use-pdf');
  elements.pdfOptions = document.getElementById('pdf-options');
  elements.pdfFiles = document.getElementById('pdf-files');
  elements.pdfDescription = document.getElementById('pdf-description');
  elements.extractPdf = document.getElementById('extract-pdf-text');
  elements.pdfStatus = document.getElementById('pdf-status');
  elements.useExternal = document.getElementById('use-external-sources');
  elements.externalPanel = document.getElementById('external-sources-panel');
  elements.useStyle = document.getElementById('use-style');
  elements.stylePanel = document.getElementById('style-panel');
  elements.modelName = document.getElementById('model-name');
  elements.providerRadios = document.querySelectorAll('input[name="provider"]');
  elements.modeRadios = document.querySelectorAll('input[name="mode"]');
  elements.promptLanguage = document.getElementById('prompt-language');
  elements.outputFormat = document.getElementById('output-format');
  elements.generateBtn = document.getElementById('generate-btn');
  elements.refineBtn = document.getElementById('refine-btn');
  elements.copyBtn = document.getElementById('copy-btn');
  elements.downloadBtn = document.getElementById('download-btn');
  elements.systemPrompt = document.getElementById('system-prompt');
  elements.refineInstruction = document.getElementById('refine-instruction');
  elements.status = document.getElementById('status');
  elements.historyList = document.getElementById('history-list');
  elements.clearHistory = document.getElementById('clear-history');
  elements.saveBrowser = document.getElementById('save-browser');
  elements.generateForm = document.getElementById('config-form');
}

function setupEventListeners() {
  elements.languageSelect.addEventListener('change', (e) => {
    state.language = e.target.value;
    applyLanguage(state.language);
    updateCreativityLabel();
    renderHistory();
    setRefinePlaceholder();
  });

  elements.creativityRange.addEventListener('input', updateCreativityLabel);

  elements.usePdf.addEventListener('change', () => {
    elements.pdfOptions.classList.toggle('hidden', !elements.usePdf.checked);
    if (!elements.usePdf.checked) {
      elements.pdfFiles.value = '';
      elements.pdfDescription.value = '';
      elements.extractPdf.checked = false;
      state.pdfTexts = [];
      state.pdfMeta = [];
      elements.pdfStatus.textContent = '';
    }
  });

  elements.extractPdf.addEventListener('change', () => {
    if (elements.extractPdf.checked) {
      handlePdfExtraction();
    } else {
      state.pdfTexts = [];
      elements.pdfStatus.textContent = '';
    }
  });

  elements.pdfFiles.addEventListener('change', () => {
    handlePdfExtraction();
  });

  elements.useExternal.addEventListener('change', () => {
    elements.externalPanel.classList.toggle('hidden', !elements.useExternal.checked);
  });

  elements.useStyle.addEventListener('change', () => {
    elements.stylePanel.classList.toggle('hidden', !elements.useStyle.checked);
  });

  elements.providerRadios.forEach((radio) => radio.addEventListener('change', () => {
    updateModelName();
  }));

  elements.modeRadios.forEach((radio) => radio.addEventListener('change', () => {
    updateModelName();
  }));

  document.getElementById('openai-key').addEventListener('input', (e) => {
    apiKeys.openai = e.target.value;
  });
  document.getElementById('gemini-key').addEventListener('input', (e) => {
    apiKeys.gemini = e.target.value;
  });
  document.getElementById('anthropic-key').addEventListener('input', (e) => {
    apiKeys.anthropic = e.target.value;
  });

  elements.generateBtn.addEventListener('click', () => handleGeneration('generate'));
  elements.refineBtn.addEventListener('click', () => handleGeneration('refine'));
  elements.copyBtn.addEventListener('click', copyPrompt);
  elements.downloadBtn.addEventListener('click', downloadPrompt);
  elements.clearHistory.addEventListener('click', clearHistory);
  elements.saveBrowser.addEventListener('change', () => {
    state.saveToStorage = elements.saveBrowser.checked;
    if (state.saveToStorage) {
      saveToStorage();
      setStatus(translations[state.language].saveConfirmation, 'success');
    } else {
      localStorage.removeItem(storageKey);
    }
  });

  elements.generateForm.addEventListener('input', () => {
    if (state.saveToStorage) {
      saveToStorage();
    }
  });
}

function setRefinePlaceholder() {
  elements.refineInstruction.placeholder = translations[state.language].refinePlaceholder;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function updateCreativityLabel() {
  const value = Number(elements.creativityRange.value);
  const descriptions = creativityDescriptions[state.language];
  let match = descriptions[0].text;
  descriptions.forEach((desc) => {
    if (value >= desc.min && value <= desc.max) {
      match = desc.text;
    }
  });
  elements.creativityLabel.textContent = `${value}/100 – ${match}`;
}

function updateModelName() {
  const provider = getSelectedRadio(elements.providerRadios);
  const mode = getSelectedRadio(elements.modeRadios);
  elements.modelName.value = defaultModels[provider][mode];
}

function getSelectedRadio(nodeList) {
  const item = Array.from(nodeList).find((radio) => radio.checked);
  return item ? item.value : '';
}

async function handlePdfExtraction() {
  if (!elements.usePdf.checked) return;
  const files = Array.from(elements.pdfFiles.files || []);
  state.pdfMeta = files.map((file) => ({ name: file.name, size: file.size }));
  if (!files.length) {
    state.pdfTexts = [];
    elements.pdfStatus.textContent = '';
    return;
  }
  if (!elements.extractPdf.checked) {
    state.pdfTexts = [];
    elements.pdfStatus.textContent = '';
    return;
  }
  if (!window.pdfjsLib) {
    elements.pdfStatus.textContent = translations[state.language].pdfLibMissing;
    return;
  }
  state.pdfExtracting = true;
  elements.pdfStatus.textContent = translations[state.language].pdfStatusLoading;
  try {
    const texts = await Promise.all(files.map(readPdfFile));
    state.pdfTexts = texts.filter(Boolean);
    elements.pdfStatus.textContent = translations[state.language].pdfStatusDone;
  } catch (err) {
    console.error(err);
    elements.pdfStatus.textContent = translations[state.language].pdfStatusError;
  } finally {
    state.pdfExtracting = false;
  }
}

async function readPdfFile(file) {
  if (file.size > 15 * 1024 * 1024) {
    setStatus(translations[state.language].pdfSizeWarning, 'error');
    return '';
  }
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const maxPages = Math.min(pdf.numPages, 3);
  let text = '';
  for (let i = 1; i <= maxPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(' ');
    text += pageText + '\n';
    if (text.length > 10000) break;
  }
  return text.slice(0, 10000);
}

function collectConfiguration() {
  const assistantPurpose = document.getElementById('assistant-purpose').value.trim();
  const mainTask = document.getElementById('main-task').value.trim();
  return {
    assistantName: document.getElementById('assistant-name').value.trim(),
    assistantPurpose,
    targetAudience: document.getElementById('target-audience').value.trim(),
    specialization: document.getElementById('specialization').value.trim(),
    mainTask,
    taskDetails: document.getElementById('task-details').value.trim(),
    taskConstraints: document.getElementById('task-constraints').value.trim(),
    creativity: {
      value: Number(elements.creativityRange.value),
      label: elements.creativityLabel.textContent
    },
    pdf: {
      enabled: elements.usePdf.checked,
      description: elements.pdfDescription.value.trim(),
      files: state.pdfMeta,
      extractedTexts: state.pdfTexts,
      extractionEnabled: elements.extractPdf.checked
    },
    externalSources: elements.useExternal.checked ? document.getElementById('external-sources').value.trim() : '',
    style: elements.useStyle.checked
      ? {
          tone: document.getElementById('desired-tone').value.trim(),
          languages: document.getElementById('response-languages').value.trim(),
          format: document.getElementById('response-format').value.trim(),
          constraints: document.getElementById('style-constraints').value.trim()
        }
      : null,
    provider: getSelectedRadio(elements.providerRadios),
    mode: getSelectedRadio(elements.modeRadios),
    model: elements.modelName.value.trim(),
    promptLanguage: elements.promptLanguage.value,
    outputFormat: elements.outputFormat.value,
    timestamp: Date.now(),
    philosophy: 'One assistant = one main task.'
  };
}

function validateConfig(config, action) {
  if (!config.assistantPurpose || !config.mainTask) {
    setStatus(translations[state.language].missingFields, 'error');
    return false;
  }
  if (action === 'refine' && !elements.systemPrompt.value.trim()) {
    setStatus(translations[state.language].needPromptToRefine, 'error');
    return false;
  }
  if (state.pdfExtracting) {
    setStatus(translations[state.language].pdfStatusLoading, 'info');
    return false;
  }
  return true;
}

function buildUserMessage(config, action, refineInstruction, currentPrompt) {
  const lines = [];
  lines.push('Create a precise system prompt for a specialized AI assistant. Philosophy: one assistant = one main task.');
  lines.push(`System prompt language: ${config.promptLanguage.toUpperCase()}. Output format: ${config.outputFormat}.`);
  lines.push('Assistant profile:');
  lines.push(`- Name: ${config.assistantName || 'N/A'}`);
  lines.push(`- Purpose: ${config.assistantPurpose}`);
  lines.push(`- Target audience: ${config.targetAudience || 'N/A'}`);
  lines.push(`- Specialization: ${config.specialization || 'N/A'}`);
  lines.push('Main task:');
  lines.push(`- Core task: ${config.mainTask}`);
  if (config.taskDetails) lines.push(`- Details: ${config.taskDetails}`);
  if (config.taskConstraints) lines.push(`- Constraints: ${config.taskConstraints}`);
  lines.push(`Creativity slider: ${config.creativity.value}/100 -> ${config.creativity.label}`);
  if (config.pdf.enabled) {
    lines.push('Knowledge base: PDF documents via RAG.');
    if (config.pdf.description) lines.push(`PDF description: ${config.pdf.description}`);
    if (config.pdf.files.length) {
      const fileNames = config.pdf.files.map((f) => f.name).join(', ');
      lines.push(`PDF files: ${fileNames}`);
    }
    if (config.pdf.extractedTexts.length) {
      const excerpts = config.pdf.extractedTexts
        .map((text, idx) => `PDF ${idx + 1} excerpt: ${text.slice(0, 1000)}`)
        .join('\n');
      lines.push(excerpts);
    }
  }
  if (config.externalSources) {
    lines.push(`External sources instructions: ${config.externalSources}`);
  }
  if (config.style) {
    lines.push('Style & formatting directives:');
    if (config.style.tone) lines.push(`- Tone: ${config.style.tone}`);
    if (config.style.languages) lines.push(`- Response languages: ${config.style.languages}`);
    if (config.style.format) lines.push(`- Preferred format: ${config.style.format}`);
    if (config.style.constraints) lines.push(`- Restrictions: ${config.style.constraints}`);
  }
  if (action === 'refine') {
    lines.push('Existing system prompt to refine:');
    lines.push(currentPrompt || '');
    lines.push(`Refine instruction: ${refineInstruction || 'Improve clarity and constraints.'}`);
    lines.push('Return only the refined system prompt in the same requested language and format.');
  } else {
    lines.push('Generate a single cohesive system prompt ready to be used directly.');
  }
  return lines.join('\n');
}

function buildSystemInstruction(config) {
  return `You are a senior AI architect inside a prompt factory. Craft the final system prompt only. Always keep the "one assistant = one main task" philosophy. Respond strictly in ${config.promptLanguage.toUpperCase()} and format the answer as ${config.outputFormat}. Do not add explanations, headers or commentary beyond the system prompt.`;
}

async function handleGeneration(action) {
  const config = collectConfiguration();
  if (!validateConfig(config, action)) return;
  const provider = config.provider;
  const selectedKey = getProviderKey(provider);
  if (!selectedKey) {
    setStatus(translations[state.language].providerMissingKey, 'error');
    return;
  }
  setLoading(true);
  const systemMessage = buildSystemInstruction(config);
  const userMessage = buildUserMessage(
    config,
    action,
    elements.refineInstruction.value.trim(),
    elements.systemPrompt.value.trim()
  );
  try {
    let result = '';
    if (provider === 'openai') {
      result = await callOpenAI(systemMessage, userMessage, config.model, selectedKey);
    } else if (provider === 'gemini') {
      result = await callGemini(systemMessage, userMessage, config.model, selectedKey);
    } else {
      result = await callAnthropic(systemMessage, userMessage, config.model, selectedKey);
    }
    if (result) {
      elements.systemPrompt.value = result.trim();
      addHistoryEntry(config, result.trim());
      saveToStorage();
      setStatus(translations[state.language].statusReady, 'success');
    }
  } catch (error) {
    console.error(error);
    setStatus(translations[state.language].statusError, 'error');
  } finally {
    setLoading(false);
  }
}

function getProviderKey(provider) {
  const useMap = {
    openai: document.getElementById('use-openai-key').checked,
    gemini: document.getElementById('use-gemini-key').checked,
    anthropic: document.getElementById('use-anthropic-key').checked
  };
  if (!useMap[provider]) return '';
  return apiKeys[provider];
}

async function callOpenAI(systemInstruction, userMessage, model, key) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: userMessage }
      ]
    })
  });
  if (!response.ok) throw new Error('OpenAI error');
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

async function callGemini(systemInstruction, userMessage, model, key) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      systemInstruction: {
        role: 'system',
        parts: [{ text: systemInstruction }]
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ]
    })
  });
  if (!response.ok) throw new Error('Gemini error');
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') || '';
}

async function callAnthropic(systemInstruction, userMessage, model, key) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system: systemInstruction,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: userMessage
            }
          ]
        }
      ]
    })
  });
  if (!response.ok) throw new Error('Anthropic error');
  const data = await response.json();
  const content = data.content?.[0]?.text || '';
  return content;
}

function copyPrompt() {
  const value = elements.systemPrompt.value;
  if (!value) return;
  navigator.clipboard.writeText(value).then(() => {
    setStatus(translations[state.language].statusCopied, 'success');
  });
}

function downloadPrompt() {
  const content = elements.systemPrompt.value;
  if (!content) return;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const format = elements.outputFormat.value;
  const extMap = { plain: 'txt', markdown: 'md', json: 'json', xml: 'xml' };
  a.download = `system-prompt.${extMap[format] || 'txt'}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  setStatus(translations[state.language].statusDownloaded, 'success');
}

function addHistoryEntry(config, prompt) {
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    timestamp: new Date().toLocaleTimeString(),
    label: config.assistantName || config.mainTask.slice(0, 60) || 'Asystent',
    provider: config.provider,
    model: config.model,
    prompt
  };
  state.history.unshift(entry);
  state.history = state.history.slice(0, 20);
  renderHistory();
}

function renderHistory() {
  elements.historyList.innerHTML = '';
  if (!state.history.length) {
    const empty = document.createElement('div');
    empty.textContent = translations[state.language].historyEmpty;
    elements.historyList.appendChild(empty);
    return;
  }
  state.history.forEach((entry) => {
    const container = document.createElement('div');
    container.className = 'history-entry';
    const title = document.createElement('strong');
    title.textContent = `${entry.label}`;
    const meta = document.createElement('span');
    meta.textContent = `${entry.timestamp} • ${entry.provider} / ${entry.model}`;
    const loadBtn = document.createElement('button');
    loadBtn.type = 'button';
    loadBtn.textContent = translations[state.language].loadBtn;
    loadBtn.addEventListener('click', () => {
      elements.systemPrompt.value = entry.prompt;
      setStatus(translations[state.language].loadFromHistory, 'info');
    });
    container.appendChild(title);
    container.appendChild(meta);
    container.appendChild(loadBtn);
    elements.historyList.appendChild(container);
  });
}

function clearHistory() {
  state.history = [];
  renderHistory();
  saveToStorage();
  setStatus(translations[state.language].clearedHistory, 'info');
}

function setStatus(message, type) {
  elements.status.textContent = message;
  elements.status.className = `status ${type || ''}`;
}

function setLoading(isLoading) {
  elements.generateBtn.disabled = isLoading;
  elements.refineBtn.disabled = isLoading;
  if (isLoading) {
    elements.status.textContent = translations[state.language].statusLoading;
    elements.status.className = 'status loading';
  }
}

function getFormState() {
  const formData = new FormData(elements.generateForm);
  const entries = {};
  for (const [key, value] of formData.entries()) {
    if (key.includes('key')) continue; // never store keys
    if (value instanceof File) continue;
    entries[key] = value;
  }
  entries['use-pdf'] = elements.usePdf.checked;
  entries['extract-pdf-text'] = elements.extractPdf.checked;
  entries['use-external-sources'] = elements.useExternal.checked;
  entries['use-style'] = elements.useStyle.checked;
  entries['save-browser'] = elements.saveBrowser.checked;
  return {
    form: entries,
    history: state.history,
    pdfDescription: elements.pdfDescription.value,
    externalSources: document.getElementById('external-sources').value,
    style: {
      tone: document.getElementById('desired-tone').value,
      languages: document.getElementById('response-languages').value,
      format: document.getElementById('response-format').value,
      constraints: document.getElementById('style-constraints').value
    }
  };
}

function saveToStorage() {
  if (!state.saveToStorage) return;
  const payload = getFormState();
  payload.pdfMeta = state.pdfMeta;
  payload.pdfTexts = state.pdfTexts;
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function loadFromStorage() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state.saveToStorage = Boolean(parsed.form?.['save-browser']);
    elements.saveBrowser.checked = state.saveToStorage;
    if (parsed.form) {
      Object.keys(parsed.form).forEach((key) => {
        const nodes = document.querySelectorAll(`[name="${key}"]`);
        if (!nodes.length) return;
        if (nodes[0].type === 'radio') {
          nodes.forEach((node) => {
            node.checked = node.value === parsed.form[key];
          });
        } else if (nodes[0].type === 'checkbox') {
          nodes[0].checked = Boolean(parsed.form[key]);
        } else {
          nodes[0].value = parsed.form[key];
        }
      });
    }
    if (parsed.pdfDescription) elements.pdfDescription.value = parsed.pdfDescription;
    if (parsed.externalSources) document.getElementById('external-sources').value = parsed.externalSources;
    if (parsed.style) {
      document.getElementById('desired-tone').value = parsed.style.tone || '';
      document.getElementById('response-languages').value = parsed.style.languages || '';
      document.getElementById('response-format').value = parsed.style.format || '';
      document.getElementById('style-constraints').value = parsed.style.constraints || '';
    }
    if (parsed.form?.['use-pdf']) {
      elements.usePdf.checked = true;
      elements.pdfOptions.classList.remove('hidden');
    }
    if (parsed.form?.['use-external-sources']) {
      elements.useExternal.checked = true;
      elements.externalPanel.classList.remove('hidden');
    }
    if (parsed.form?.['use-style']) {
      elements.useStyle.checked = true;
      elements.stylePanel.classList.remove('hidden');
    }
    state.history = parsed.history || [];
    state.pdfMeta = parsed.pdfMeta || [];
    state.pdfTexts = parsed.pdfTexts || [];
    renderHistory();
    updateCreativityLabel();
  } catch (error) {
    console.error('Failed to load state', error);
  }
}
