---
icon: coins
date: 2026-08-15
category:
  - Plugins
tag:
  - AstrBot
  - Help Panel
  - Typst
---

# HelpPanelTypst — Help Panel Plugin

[astrbot_plugin_help_panel_typst](https://github.com/XTsat/astrbot_plugin_help_panel_typst) is a Typst-rendered help panel plugin for AstrBot, forked from [bylkuse/astrbot_plugin_help_typst](https://github.com/bylkuse/astrbot_plugin_help_typst). It renders the plugin menu, event listeners, and filter lists into card-based, friendly interfaces.

## Features

- **Card-based Help Panel**: `/helps` displays all plugins in a two-column category layout, with a themed color card per category
- **Detailed Help Mode**: `/helpss` shows all command label groups (including aliases and argument placeholders) under each plugin entry
- **Keyword Search**: `/helps s <keyword>` searches plugins, commands, and descriptions with highlighting
- **Plugin Detail Page**: `/helps <number>` shows a plugin's author, version, admin/normal commands, and event listeners
- **Events & Filters**: `/events` and `/filters` display event listener and filter details respectively
- **Themes & Customization**: 5 built-in themes switchable in one click, plus custom fonts, background images, and a Hero banner
- **Typst Rendering Engine**: Lightweight and flexible — build your own rendering templates with Typst syntax

## Quick Start

1. Install via the repository URL in the AstrBot WebUI plugin marketplace, or download the `.zip` and install from file
2. Enable the plugin and use `/helps` to view the help panel

## FAQ

- **Background image**: Put images in the default directory `.../data/plugin_data/astrbot_plugin_help_typst/backgrounds` to show the Hero banner on top
- **Custom fonts**: Supports `.ttf/.otf/.woff2` — drop fonts into the font directory and reload the panel or run `/typst font`
