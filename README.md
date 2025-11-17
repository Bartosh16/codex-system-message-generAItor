# Prompt Factory

Prompt Factory is a single-page “production line” for crafting precise system prompts for AI assistants. It guides you through defining an assistant’s role, knowledge sources, style, and target users, then talks to OpenAI, Gemini, or Anthropic models to assemble the final system prompt in your preferred language and format.

## Features
- **Factory-themed SPA** built with vanilla HTML, CSS, and JavaScript—no backend required.
- **Structured assistant configuration** covering mission, target audience, constraints, creativity range, style rules, PDF/RAG context, and optional external sources.
- **Provider-aware API integration** with OpenAI, Gemini, and Anthropic, including thinking/fast modes and editable model names.
- **Secure API key handling** (kept only in-memory, never stored or logged) plus optional local persistence for non-sensitive configuration/history.
- **Production line controls** for generating prompts, refining them with natural-language instructions, copying, and downloading outputs.
- **Session history** with timestamped entries that can be reloaded into the editor during the current session or from browser storage if enabled.
- **Internationalized UI** with Polish/English toggle, matching creativity slider descriptions in both languages.

## Getting Started
1. Clone or download this repository.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari). No build step is required.
3. Optional: ensure you have internet access so the app can fetch PDF.js from the CDN and call the selected model provider’s API endpoints.

## Syncing with GitHub
If you need to merge updates from the upstream GitHub repository (`Bartosh16/codex-system-message-generAItor`), run:

```bash
./sync_with_github.sh
```

The helper script:

- Adds the `github` remote pointing at `https://github.com/Bartosh16/codex-system-message-generAItor.git` if it is missing.
- Fetches from that remote and merges the specified branch (defaults to `main`) into your current branch.
- Supports overrides via environment variables (`REMOTE_NAME`, `REMOTE_URL`, `REMOTE_BRANCH`) when you need to point at a fork or a different default branch.

> **Note:** The execution environment used to produce this update cannot reach github.com over HTTPS (proxy returns HTTP 403), so the actual fetch/merge step could not be completed here. Running the script from a network that can reach GitHub will perform the merge as intended.

## Using the App
1. **Configure the assistant** in the left panel, filling in the profile, main task, and any optional sections you need.
2. **Set provider, mode, and model name**, then supply the relevant API key(s) in the secure fields (checkboxes decide which key to use).
3. **Choose the system prompt language and output format** (plain text, Markdown, JSON, or XML).
4. Click **“Generate system prompt”** to produce a fresh prompt or use **“Refine with instruction”** to iterate on the one in the editor.
5. Copy or download the result, and optionally enable browser storage to keep your configuration and prompt history (API keys are never saved).

## PDF / RAG Support
- Enable “Use PDF documents as a knowledge base (RAG)” to upload reference PDFs and describe them.
- Turn on “Extract text from PDFs…” to let the app pull short excerpts (via PDF.js) for additional context before contacting the model.
- Extraction happens entirely in the browser; no document data leaves your machine except what you explicitly include in prompts sent to the model APIs.

## Security Notes
- API keys live only in memory while the page is open; they are neither logged nor stored in any browser storage.
- All API calls go directly from the browser to the official HTTPS endpoints of the chosen provider.
- User-generated text is injected using safe DOM APIs (`textContent`, `value`) to minimize XSS risk.

## Limitations
- Because everything runs in the browser, CORS or browser/network restrictions might affect API calls.
- PDF text extraction uses client-side PDF.js and is limited to the first few pages and ~10k characters per file to keep prompts manageable.
- There is no backend persistence; enabling the “save in browser” checkbox only stores non-sensitive form data/history in `localStorage` for the current browser/profile.

## License
This project is provided as-is for demonstration purposes. Adapt and extend it to fit your prompt-engineering workflows.
