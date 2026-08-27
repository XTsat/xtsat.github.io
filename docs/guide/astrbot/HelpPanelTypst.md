---
icon: help
date: 2026-08-15
category:
  - Bot
  - 插件
tag:
  - AstrBot
  - 帮助面板
  - Typst
---

# HelpPanelTypst —— 帮助面板插件

[astrbot_plugin_help_panel_typst](https://github.com/XTsat/astrbot_plugin_help_panel_typst) 是一个基于 Typst 渲染的 AstrBot 帮助面板插件，Fork 自 [bylkuse/astrbot_plugin_help_typst](https://github.com/bylkuse/astrbot_plugin_help_typst)，将插件菜单、事件监听、过滤器列表渲染成卡片式友好界面。

<img alt="HelpPanelTypst" src="../../photo/Astrbot/HelpPanelTypst.png" width="400" />

## 功能特性

- **卡片式帮助面板**：`/helps` 以双栏分类卡片展示所有插件，每个分类一张主题色卡片
- **详细帮助模式**：`/helpss` 在插件条目下展示全部指令标签组（含别名、参数占位符）
- **关键词搜索**：`/helps s <关键词>` 搜索插件、指令及描述，支持高亮
- **插件详情页**：`/helps <编号>` 查看单插件的作者、版本、管理员/普通指令与事件监听
- **事件与过滤器**：`/events`、`/filters` 分别展示事件监听列表与过滤器详情
- **主题与自定义**：5 套内置主题一键切换，支持自定义字体、背景图与 Hero 品牌横幅
- **Typst 渲染引擎**：轻量灵活，可使用 typst 语法构建自己的渲染模板

## 快速开始

1. 在 AstrBot WebUI 插件市场通过仓库地址安装，或下载 `.zip` 后「从文件安装」
2. 启用插件后即可使用 `/helps` 查看帮助面板

## 常见问题

- **背景图**：放入默认目录 `.../data/plugin_data/astrbot_plugin_help_typst/backgrounds` 即可在顶部显示 Hero 横幅
- **自定义字体**：支持 `.ttf/.otf/.woff2`，放入字体目录后经面板重载或 `/typst font` 生效
