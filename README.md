# 🚀 AURA Prompt Engineering Platform (APEP)

> **One prompt format. Every AI model. One ecosystem.**

![Version](https://img.shields.io/badge/version-v1.0.0--alpha-purple)
![Web4](https://img.shields.io/badge/Web4-Native-blue)
![LMLM](https://img.shields.io/badge/LMLM-Supported-success)
![GPT-5-mini](https://img.shields.io/badge/GPT--5--mini-Supported-00A67E)
![Gemini](https://img.shields.io/badge/Gemini-Compatible-4285F4)
![Claude](https://img.shields.io/badge/Claude-Compatible-D97706)
![License](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey)

The **Aura Prompt Engineering Platform (APEP)** is the official prompt engineering repository of the **Aura Ecosystem**.

It transforms prompt collections into a structured, searchable, multilingual platform that works across AI providers including **LMLM, GPT-5, GPT-5-mini, Gemini, Claude, Web4 AI Runtime**, and future Aura models.

---

## 🌌 Vision

> Prompt engineering should be portable, versioned, executable, multilingual, and searchable.

APEP introduces a universal prompt specification (`.aprompt`) together with tooling, SDKs, CLI utilities, semantic indexing, Web4 integration, and interactive documentation.

---

# ✨ Features

* 🌍 Multilingual Prompt Library.
* 🤖 Multi-AI Provider Support.
* 🧠 Semantic Search powered by KIBS.
* 🪄 Prompt Playground.
* 📚 Prompt Engineering Handbook.
* 🎨 Image / UI / Three.js / SVG prompt collections.
* 📦 SDK for JavaScript, Python, Rust, Go and Swift.
* ☁️ QUBUHUB Cloud Synchronization.
* ⚙️ GitHub Actions automation.
* 🌐 Web4 Documentation and Gallery.

---

# 📁 Repository Structure

```text
awesome-ai-prompts/
├── README.md
├── ROADMAP.md
├── AURA_PROMPT_SPEC.md
├── docs/
├── prompts/
├── promptcards/
├── translations/
├── playground/
├── sdk/
├── cli/
├── api/
├── schemas/
├── embeddings/
├── assets/
└── .github/
```

---

# 🧩 Prompt Collections

| Collection    | Description                           |
| ------------- | ------------------------------------- |
| `gemini/`     | Gemini prompt collection              |
| `gpt5/`       | GPT-5 optimized prompts               |
| `gpt5-mini/`  | Lightweight reasoning prompts         |
| `lmlm/`       | Aura native prompts                   |
| `claude/`     | Claude optimized prompts              |
| `web4/`       | Web4 application prompts              |
| `image/`      | Image generation prompts              |
| `video/`      | Video generation prompts              |
| `svg/`        | SVG / HTML prompts                    |
| `ui/`         | UI / UX prompts                       |
| `compiler/`   | APLCE compiler engineering prompts    |
| `blockchain/` | Blockchain and smart contract prompts |

---

# 📝 The `.aprompt` Specification

Every prompt is executable metadata.

```yaml
id: ui-watch-0001

title: Luxury Watch Landing Page

provider:
  - lmlm
  - gpt5-mini
  - gemini

category:
  - ui
  - threejs

difficulty: advanced

variables:
  product_name: Aura Watch
```

Prompt body follows after metadata.

---

# 🔍 KIBS Semantic Search

```scheme
(prompt-search
    :query "glassmorphism dashboard"
    :semantic true
    :provider "lmlm")
```

Searches prompts using embeddings instead of keywords.

---

# 🕹️ Aura Playground

Run prompts directly.

```bash
kubu prompt execute ui-watch-0001 --provider lmlm
```

Compare outputs between providers.

```bash
kubu prompt compare ui-watch-0001 \
  --providers lmlm,gpt5-mini,gemini
```

---

# 📦 Installation

### CLI

```bash
npm install -g @aura/prompt-cli
```

### JavaScript SDK

```bash
npm install @aura/prompts-js
```

### Python SDK

```bash
pip install aura-prompts
```

---

# 💻 JavaScript Example

```ts
import { PromptEngine } from "@aura/prompts-js";

const prompt = await PromptEngine.load("ui-watch-0001");

const result = await prompt.execute({
    provider: "lmlm",
    variables: {
        product_name: "Aura Watch"
    }
});

console.log(result.text);
```

---

# 🌍 Translation Support

Prompt translations live inside `translations/`.

```text
translations/
├── en/
├── tr/
├── zh/
├── ja/
├── ko/
├── hi/
├── fr/
├── ha/
├── yo/
└── ig/
```

---

# 🤖 AI Providers

| Provider     | Status         |
| ------------ | -------------- |
| LMLM         | ✅ Native       |
| GPT-5        | ✅ Supported    |
| GPT-5-mini   | ✅ Supported    |
| Gemini       | ✅ Supported    |
| Claude       | ✅ Supported    |
| Web4 Runtime | 🚧 Coming Soon |

---

# 📚 Documentation

Documentation includes:

* Prompt Engineering Handbook.
* Prompt Cookbook.
* Web4 Integration Guide.
* SDK Documentation.
* API Reference.
* Gallery Documentation.

---

# ⚙️ GitHub Automation

The repository automatically:

* validates prompt schemas,
* generates documentation,
* builds semantic search indexes,
* deploys Web4 documentation,
* checks translations.

---

# ☁️ Aura Ecosystem Integration

Works with:

* Web4
* LMLM
* GPT-5-mini
* KIBS
* QUBUHUB Cloud
* Aura Playground
* APLCE

---

# 🗺️ Roadmap

## Version 1.0

* Prompt Specification.
* Prompt Library.
* Translation Engine.
* Playground.
* CLI.
* SDK.

## Version 2.0

* Prompt Marketplace.
* Community Collections.
* AI Evaluation Benchmarks.
* Fine-tuning Prompt Packs.
* Web4 Cloud Execution.

---

# 🤝 Contributing

```bash
git clone https://github.com/auraecosystem/awesome-ai-prompts
cd awesome-ai-prompts
npm install
npm run validate
```

Submit prompts as `.aprompt` files.

---

# 📄 License

Community prompts preserve original attribution.

Aura additions are released under the **CC BY 4.0 License** unless otherwise specified.

---

# 🌌 Aura Ecosystem

**Build once. Execute everywhere.**
