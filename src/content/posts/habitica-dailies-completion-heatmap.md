---
title: Habitica Daily 完成度热力图
title_en: Habitica Dailies Completion Heatmap
pubDate: 2025-04-21
tags: ['Habitica', 'Heatmap', '数据可视化', '习惯追踪']
description: '介绍 Habitica Dailies 完成度热力图项目，通过可视化图表展示日常任务完成情况，帮助用户追踪习惯连续性，并支持自动化部署流程。'
draft: false
---


我是 Habitica 的用户，一度希望直观地追踪我的日常任务（Dailies）完成情况。在 AI 的帮助下，书写了项目 **Habitica Dailies Heatmap**，并部署在我的 [routine 网页](https://routine.nanjiang.online/)上。

<img src="https://raw.githubusercontent.com/4nanjiang/Habitica_Heatmap/refs/heads/main/habitica_heatmap.png" alt="habitica_heatmap" width="50%">

### 项目核心特性总结

* **可视化每日完成度:** 以图表形式清晰展示您在过去一段时间内（通常是一年）每日完成日常任务的状态。
* **追踪连续性与习惯:** 便于用户追踪习惯、查看连续性并回顾完成历史。
* **安全性:** API 凭据仅在受控环境下使用，不暴露给客户端浏览器。
* **自动化:** 支持通过 GitHub Actions 实现数据获取、更新和部署流程的自动化。


### 如何使用

本项目是开源的。如果您希望部署自己的 Habitica Dailies Heatmap, 可以 Fork [项目代码](https://github.com/4nanjiang/Habitica_Heatmap)仓库。根据项目 README 文档的指引，安全地配置您的 Habitica API 凭据（用户 ID 和 API Token）以及用于 GitHub Actions 自动推送的 GitHub Personal Access Token (PAT) 作为环境变量或 Secrets。