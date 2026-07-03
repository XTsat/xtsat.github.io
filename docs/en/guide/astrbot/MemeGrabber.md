---
icon: face-smile
date: 2026-07-03
category:
  - Plugins
tag:
  - AstrBot
  - Meme
  - Extraction
---

# MemeGrabber — Meme Extraction Plugin

[astrbot_plugin_meme_grabber](https://github.com/XTsat/astrbot_plugin_meme_grabber) is a meme extraction plugin designed specifically for AstrBot, forked from [Yangyuwuhan/astrbot_plugin_meme_grabber](https://github.com/Yangyuwuhan/astrbot_plugin_meme_grabber).

## Features

- **Multiple Formats**: JPG, PNG, GIF, etc.
- **Batch Extraction**: Extract multiple memes at once
- **Custom Naming**: Supports date, timestamp, UUID placeholders
- **Group Access Control**: Blacklist/whitelist modes for group permissions
- **Command Aliases**: `/meme` and `/提取` both work

## Quick Start

1. Download the `.zip` package
2. Install via "Install from file" in AstrBot plugin configuration

## Usage

```
/meme           # Extract meme from replied message
/memes add      # Add current group to list
/memes del      # Remove current group from list
/memes mode w   # Switch to whitelist mode
/memes mode b   # Switch to blacklist mode
/memes list     # View current list status
```

## File Naming Rules

Supported placeholders:

| Placeholder | Description | Example |
|---|---|---|
| `{DATE}` | Date | `20260630` |
| `{TIME}` | Time | `143005` |
| `{TIMESTAMP}` | Millisecond timestamp | `1719734400000` |
| `{UUID}` | 8-character random ID | `a1b2c3d4` |

## Notes

- This plugin only supports QQ platform (aiocqhttp)
- The default extension is used when the plugin cannot identify the meme format
