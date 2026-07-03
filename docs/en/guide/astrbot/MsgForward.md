---
icon: paper-plane
date: 2026-07-03
category:
  - Plugins
tag:
  - AstrBot
  - Message Forwarding
  - Cross-platform
---

# MsgForward — Cross-platform Message Forwarding Plugin

[astrbot_plugin_msg_forward_cc](https://github.com/XTsat/astrbot_plugin_msg_forward_cc) is a clean, robust, and extensible AstrBot cross-platform message forwarding plugin, forked from [Siaospeed/astrbot_plugin_msg_transfer](https://github.com/Siaospeed/astrbot_plugin_msg_transfer).

## Features

- **Multi-platform Support**: Works with any AstrBot platform adapter (QQ, WeChat, Telegram, Discord, etc.)
- **Message Source Labeling**: Automatically adds source information before messages with customizable templates
- **Persistent Storage**: Forwarding rules are automatically saved and persist across restarts
- **WebUI Configuration**: Visual configuration through AstrBot WebUI
- **Command-based Binding**: `mf bindraw` for direct forwarding rule creation without WebUI
- **Source Info Control**: Toggle source information display status for individual rules
- **Message Filtering**: Blacklist/whitelist modes with regex support

## Quick Start

1. Download from AstrBot plugin marketplace or download `.zip` from Release
2. Install via "Install from file" in AstrBot WebUI plugin page
3. Restart AstrBot

## Commands

| Command | Description |
|---|---|
| `mf add` | Create a forwarding binding request |
| `mf bind` | Accept a forwarding binding request |
| `mf bindraw` | Create forwarding binding directly |
| `mf del` | Delete a forwarding rule |
| `mf list` | List related forwarding rules |
| `mf hide` | Toggle source info display status |
| `mf filter` | View filter configuration |

## Examples

```
#mf bindraw qq 654321 wx 123456  # QQ Group 654321 → WeChat 123456
#mf bindraw qq 114514 wxs 123456 # QQ Group 114514 → WeChat DM 123456
```
