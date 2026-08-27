---
icon: heart-pulse
date: 2026-08-06
category:
  - Plugins
tag:
  - AstrBot
  - LLM
  - Model Status
---

# ModelStatus — Model Status Query Plugin

[astrbot_plugin_model_status](https://github.com/XTsat/astrbot_plugin_model_status) is an AstrBot model availability detection plugin that displays the health status of all configured model providers as cards in the WebUI, with scheduled continuous monitoring.

## Features

- **WebUI Panel**: Displays all model providers as cards, grouped by provider
- **One-click Full Check**: Concurrently checks all providers with SSE real-time status and latency refresh
- **Individual Check**: Run an availability check on a single provider
- **Multi-capability Coverage**: Supports chat, STT, TTS, Embedding, and Rerank provider types
- **Continuous Monitoring**: Scheduled checks (configurable 1–60 minutes) with 24h/7d availability tracking

## Quick Start

1. Requires AstrBot >= 4.5.7
2. Install via the repository URL in the AstrBot WebUI plugin marketplace
3. Enable it in the plugin list

## Usage

Open the "Model Status" page from the plugin detail page in the WebUI:

- Click "Check All" to concurrently check all providers
- Click the "Check" button on a single model row to check it individually
- Status badges: gray = not checked / blue = checking / green = healthy / red = failed

The continuous monitoring page supports scheduled checks, global status, 24h/7d availability, and a 7-day timeline.

## Notes

- Checks reuse the provider's built-in health check methods
- If the page shows "No model providers loaded", add and enable a provider in the WebUI first, then reload the plugin
