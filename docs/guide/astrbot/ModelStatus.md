---
icon: heart-pulse
date: 2026-08-06
category:
  - Bot
  - 插件
tag:
  - AstrBot
  - LLM
  - 模型状态查询
---

# ModelStatus —— 模型状态查询插件

[astrbot_plugin_model_status](https://github.com/XTsat/astrbot_plugin_model_status) 是一个 AstrBot 模型可用性检测插件，支持在 WebUI 中以卡片形式展示所有已配置模型提供器的健康状态，并支持定时持续检测。

<img alt="ModelStatus" src="../../photo/Astrbot/ModelStatus.png" width="400" />

## 功能特性

- **WebUI 面板**：以卡片形式展示全部模型提供器，按提供商分组
- **一键全部检测**：并发检测所有提供器，SSE 实时刷新状态与耗时
- **单项检测**：对单个提供器单独发起可用性检测
- **多能力覆盖**：支持聊天对话、STT、TTS、Embedding、Rerank 五类提供器
- **持续检测**：定时检测（1~60 分钟可配），自动记录并展示 24h/7d 可用率

## 快速开始

1. 要求 AstrBot >= 4.5.7
2. 在 AstrBot WebUI 插件市场通过仓库地址安装
3. 在插件列表中启用即可

## 使用说明

在 WebUI 插件详情页打开「模型状态检测」页面：

- 点击「全部检测」并发检测所有提供器
- 点击单个模型行的「检测」按钮单独检测
- 状态徽章：灰色未检测 / 蓝色检测中 / 绿色正常 / 红色失败

持续检测页面可开启定时检测，支持全局状态、24h/7d 可用率和 7 天时间线。

## 注意事项

- 检测复用提供器内置的健康检查方法
- 页面显示「没有已加载的模型提供器」时，请先在 WebUI 添加并启用提供器后重载插件
