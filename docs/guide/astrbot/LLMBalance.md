---
icon: coins
date: 2026-07-03
category:
  - Bot
  - 插件
tag:
  - AstrBot
  - LLM
  - 余额查询
---

# LLM Balance —— 多平台余额查询插件

[astrbot_plugin_llm_balance](https://github.com/XTsat/astrbot_plugin_llm_balance) 是一个 AstrBot 多平台 LLM 余额查询插件，支持查询多个服务商的余额/用量。

<img alt="LLMBalance" src="../../photo/Astrbot/LLMBalance.png" width="400" />

## 支持平台

| 平台 | 简写 |
| --- | --- |
| DeepSeek | `ds` / `deepseek` |
| 硅基流动 | `硅基` / `siliconflow` |
| Moonshot (Kimi) | `kimi` / `moonshot` |
| OpenAI | `gpt` / `openai` |
| ChatAnywhere | `ca` / `chatanywhere` |
| NEW API | `中转` / `newapi` |

## 功能特性

- **多平台支持**：支持 6+ 主流 LLM 服务商
- **并发查询**：查询所有余额时自动并发，速度快
- **自定义模板**：完全可自定义的输出格式
- **管理员权限**：支持仅管理员可用模式
- **直接查询**：支持在命令后直接传入 API Key 查询

## 使用方法

```
/余额 当前    # 查询当前会话使用的模型余额
/余额 所有    # 查询所有已配置模型的余额
/余额 ds      # 查询 DeepSeek 余额
/余额 kimi sk-xxx  # 直接用密钥查询 Kimi 余额
```

## 配置项

- `admin_only`：是否仅管理员可用
- `request_timeout`：API 请求超时时间
- `newapi_base_url`：NEW API 中转站地址（支持多个）
- `show_unsupported`：是否显示未适配的平台

## 安全提醒

包含 API 密钥的查询建议私聊使用，避免在群聊中泄露。
