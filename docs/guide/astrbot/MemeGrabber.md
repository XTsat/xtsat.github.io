---
icon: face-smile
date: 2026-06-30
category:
  - Bot
  - 插件
tag:
  - AstrBot
  - 表情包
  - 提取
---

# MemeGrabber —— 表情包提取插件

[astrbot_plugin_meme_grabber](https://github.com/XTsat/astrbot_plugin_meme_grabber) 是一个专为 AstrBot 设计的表情包提取插件，Fork 自 [Yangyuwuhan/astrbot_plugin_meme_grabber](https://github.com/Yangyuwuhan/astrbot_plugin_meme_grabber)。

<img src="../../posts/photo/Astrbot/MemeGrabber.png" width="400" />

## 功能特性

- **支持多种格式**：JPG、PNG、GIF 等
- **批量提取**：一次性提取多张表情包
- **自定义命名**：支持日期、时间戳、UUID 等占位符
- **群名单控制**：支持黑名单/白名单模式管理群聊权限
- **命令别名**：支持 `/meme` 和 `/提取` 两种指令

## 快速开始

1. 下载 `.zip` 压缩包
2. 在 AstrBot 插件配置中选择从文件安装

## 使用说明

```
/meme           # 提取当前回复的表情包
/memes add      # 将当前群加入名单
/memes del      # 将当前群移出名单
/memes mode w   # 切换为白名单模式
/memes mode b   # 切换为黑名单模式
/memes list     # 查看当前名单状态
```

## 文件命名规则

支持以下占位符：

| 占位符 | 说明 | 示例 |
|---|---|---|
| `{DATE}` | 日期 | `20260630` |
| `{TIME}` | 时间 | `143005` |
| `{TIMESTAMP}` | 毫秒时间戳 | `1719734400000` |
| `{UUID}` | 8位随机ID | `a1b2c3d4` |

## 注意事项

- 该插件仅支持 QQ 平台（aiocqhttp）
- 默认提取扩展名指当插件无法识别表情包格式时使用的扩展名
