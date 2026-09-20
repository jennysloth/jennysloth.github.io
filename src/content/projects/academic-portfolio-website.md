---
title: "Academic Portfolio Website"
description: "將原本以備審為主的靜態網站，重新設計成兼顧專業與生活的個人網站。"
summary: "This project transforms a graduate-application-oriented static website into a maintainable personal journal and portfolio. It brings together editorial design, structured content, accessible interaction, and a foundation for privacy-conscious galleries and protected application materials."
category: "Technical"
published: 2026-09-20
status: "published"
tools: ["Astro", "TypeScript", "Cloudflare"]
---

## Overview

這個專案重新整理 Jennysloth 的網站定位與技術架構。網站不再只服務研究所備審，而是成為能長期保存生活、音樂、學習與專案成果的個人空間。

## Background

舊版網站由 al-folio 產生，現有倉庫主要保存編譯完成的 HTML，因此內容維護、版面調整與功能擴充都較困難。新版以可維護的內容來源和一致的設計系統重新開始，同時保留既有文章與重要網址。

## Goals

- 平衡個人生活與專業形象。
- 建立適合中文長文、英文摘要與技術內容的閱讀系統。
- 讓 Writing、Projects、Notes、Music 和 Gallery 擁有清楚的內容邊界。
- 為私人相簿和申請資料建立安全的伺服器端保護基礎。
- 保留無障礙、低動態與隱私友善的使用體驗。

## Process

專案先透過逐題訪談確認內容、語言、分類、隱私與視覺方向，再以線框逐頁驗證資訊架構。公開網站採用 Astro，內容以 Markdown 管理；未來的相簿資料與驗證則規劃由 Cloudflare Workers、D1、R2 與 KV 負責。

## Results

第一階段建立新的公開網站、遷移既有文章、整合搜尋與 RSS，並為後續相簿和受保護內容留下清楚的擴充位置。

## Reflection

這次重建不只是更換外觀，而是重新思考網站應該如何陪伴長期成長。比起一次展示所有內容，更重要的是讓每一篇文章、筆記和專案都能在整理完成後，以適合自己的方式被保存。
