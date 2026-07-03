---
icon: coins
date: 2026-07-03
category:
  - Plugins
tag:
  - AstrBot
  - LLM
  - Balance
---

# LLM Balance — Multi-platform Balance Query Plugin

[astrbot_plugin_llm_balance](https://github.com/XTsat/astrbot_plugin_llm_balance) is a multi-platform LLM balance query plugin for AstrBot, supporting balance/usage queries across multiple providers.

## Supported Platforms

| Platform | Aliases |
|---|---|
| DeepSeek | `ds` / `deepseek` |
| Silicon Flow | `硅基` / `siliconflow` |
| Moonshot (Kimi) | `kimi` / `moonshot` |
| OpenAI | `gpt` / `openai` |
| ChatAnywhere | `ca` / `chatanywhere` |
| NEW API | `中转` / `newapi` |

## Features

- **Multi-platform Support**: 6+ major LLM providers
- **Concurrent Query**: Auto-concurrent when querying all balances
- **Custom Templates**: Fully customizable output format
- **Admin Control**: Admin-only mode support
- **Direct Query**: Query with API key directly in command

## Usage

```
/余额 当前    # Query balance of current session model
/余额 所有    # Query balances of all configured models
/余额 ds      # Query DeepSeek balance
/余额 kimi sk-xxx  # Query Kimi balance with direct API key
```

## Configuration

- `admin_only`: Whether only admins can use this plugin
- `request_timeout`: API request timeout in seconds
- `newapi_base_url`: NEW API relay addresses (multiple supported)
- `show_unsupported`: Whether to show unsupported platforms

## Security Note

Queries containing API keys should be used in private chats to avoid exposing keys in group chats.
