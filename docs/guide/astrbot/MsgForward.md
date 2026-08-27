---
icon: paper-plane
date: 2026-06-17
category:
  - Bot
  - 插件
tag:
  - AstrBot
  - 消息转发
  - 跨平台
---

# MsgForward —— 跨平台消息转发插件

[astrbot_plugin_msg_forward_cc](https://github.com/XTsat/astrbot_plugin_msg_forward_cc) 是一个简洁、稳健、可扩展的 AstrBot 跨平台消息转发插件，Fork 自 [Siaospeed/astrbot_plugin_msg_transfer](https://github.com/Siaospeed/astrbot_plugin_msg_transfer)。

<img alt="MsgForward" src="../../photo/Astrbot/MsgForward.png" width="400" />

## 功能特性

- **多平台互通**：支持 AstrBot 的任意平台适配器（QQ、微信、Telegram、Discord 等）
- **消息来源标注**：自动在消息前增加来源信息，支持自定义显示模板
- **可持久化存储**：自动保存转发规则，不会因重启丢失
- **WebUI配置**：支持通过 AstrBot WebUI 进行可视化配置
- **单命令配置**：支持 `mf bindraw` 直接创建转发绑定，无需 WebUI
- **来源信息控制**：支持对转发规则设置来源信息显示状态
- **消息过滤**：支持黑名单/白名单模式，支持正则表达式过滤

## 快速开始

1. 通过 AstrBot 插件市场下载，或从 Release 下载 `.zip` 文件
2. 在 AstrBot WebUI 插件页面选择「从文件安装」
3. 重启 AstrBot

## 指令列表

| 指令 | 说明 |
| --- | --- |
| `mf add` | 创建消息转发绑定请求 |
| `mf bind` | 接受消息转发绑定请求 |
| `mf bindraw` | 直接创建转发绑定 |
| `mf del` | 删除转发规则 |
| `mf list` | 列出相关转发规则 |
| `mf hide` | 切换来源信息显示状态 |
| `mf filter` | 查看过滤配置 |

## 使用示例

```
#mf bindraw qq 654321 wx 123456  # QQ群 654321 → 微信 123456
#mf bindraw qq 114514 wxs 123456 # QQ群 114514 → 微信私聊 123456
```
