# Jennysloth 網站完整維護手冊

本手冊適用於目前的 Astro 個人網站。網站原始碼位於 GitHub repository 根目錄，正式分支固定使用 `main`。

## 1. 網站架構

主要技術：

- Astro：產生靜態網站。
- TypeScript：內容結構與頁面邏輯。
- Markdown：Writing 與 Projects 的內容來源。
- GitHub Actions：每次推送 `main` 後自動建置。
- GitHub Pages：目前的正式託管方式。
- `jennysloth.com`：自訂網域，由 `public/CNAME` 保留。

重要目錄：

```text
.
├─ public/                 靜態圖片、robots.txt、CNAME
│  └─ images/             網站圖片
├─ src/
│  ├─ components/         Header、Footer、搜尋、Coming Soon
│  ├─ content/
│  │  ├─ writing/         文章 Markdown
│  │  └─ projects/        專案 Markdown
│  ├─ data/site.ts        導覽、分類、社群連結
│  ├─ layouts/            全站 HTML、SEO、主題與共用外框
│  ├─ pages/              網址與頁面
│  └─ styles/global.css   全站視覺系統與響應式版面
├─ .github/workflows/     GitHub Pages 自動部署
├─ astro.config.mjs       網域、sitemap、舊網址轉址
└─ package.json           指令與依賴
```

## 2. 本機啟動

第一次使用或 `package-lock.json` 更新後：

```powershell
cd C:\Users\linch\Documents\jennysloth.com
npm install
npm run dev
```

瀏覽器開啟 `http://localhost:4321`。停止前景伺服器可在終端機按 `Ctrl+C`；若 Astro 以背景模式執行則使用：

```powershell
npx astro dev stop
```

## 3. 建置與檢查

每次準備提交前執行：

```powershell
npm run build
```

這個指令會先執行 Astro 型別與內容檢查，再產生正式網站到 `dist/`。`dist/`、`node_modules/`、`.astro/` 與 `.env` 不可提交。

若 4321 port 已被占用：

```powershell
npm run dev -- --port 4322
```

## 4. 修改全站文字與連結

導覽、分類、Email、GitHub、Instagram、RSS 與 Privacy 連結位於 `src/data/site.ts`。

首頁內容位於 `src/pages/index.astro`。About、Music、Gallery、Resume 與 Privacy 等頁面分別位於 `src/pages/` 下的對應資料夾。

修改年份時，需同時檢查：

- `src/components/Footer.astro`
- 首頁 Now 的更新月份
- 演出日期與課程學期
- 內容 frontmatter 的發布日期

## 5. 新增 Writing 文章

在 `src/content/writing/` 新增小寫英文檔名，例如 `summer-in-the-uk-2026.md`。

```markdown
---
title: "文章標題"
description: "一到兩句摘要。"
published: 2026-09-21
category: "Travel"
tags: ["Travel", "Photography"]
language: "中文"
featured: false
draft: false
---

文章正文從這裡開始。
```

規則：

- 檔名會成為網址，例如 `summer-in-the-uk-2026.md` 對應 `/writing/summer-in-the-uk-2026/`。
- 日期使用 `YYYY-MM-DD`。
- 尚未完成時設定 `draft: true`，完成後才改成 `false`。
- `description` 會用於文章列表、搜尋、RSS 與 SEO。
- 文章以中文為主時使用 `language: "中文"`。
- 圖片先放入 `public/images/`，正文使用 `/images/file-name.webp`。
- 圖片必須提供有意義的替代文字。

範例：

```markdown
![York 的街景](/images/york-street.webp)
```

## 6. 新增 Project

在 `src/content/projects/` 新增 Markdown：

```markdown
---
title: "Project Title"
description: "中文專案摘要。"
summary: "A two-to-four-sentence English summary."
category: "Technical"
published: 2026-09-21
status: "published"
tools: ["Python", "SQL"]
---

## Overview

## Background

## Goals

## Process

## Results

## Reflection
```

`category` 只能使用 `Academic`、`Technical` 或 `Personal`。未完成時使用 `status: "draft"`，網站不會公開草稿。

## 7. Notes 與 Coursework

目前 Notes 與 Coursework 為固定 Astro 頁面：

- `src/pages/notes/index.astro`
- `src/pages/notes/coursework/index.astro`

尚未完成的項目應保留 Coming Soon，不可放入假日期、假內容或空白下載。未來筆記數量增加時，可比照 Writing 建立獨立 content collection。

專業內容規則：

- 中文正文為主。
- 頁首附 2 到 4 句英式英文摘要。
- 只發布整理完成的內容。
- 長篇內容使用清楚的 `h2`、`h3` 層級。
- 公式、程式碼與參考資料需附足夠上下文。

## 8. Music

Music 頁面位於 `src/pages/music/index.astro`。更新演出時應同步檢查首頁的 Music Journal 與 Now 區塊。

Repertoire、Practice Journal、Recordings & Photos 在有完整內容前維持 Coming Soon。

## 9. Gallery 與圖片

目前公開 Gallery 是第一階段頁面，位置為 `src/pages/gallery/index.astro`。`Summer in the UK, 2026` 尚未加入實際照片。

公開圖片發布前：

1. 移除 GPS 與不必要的 EXIF metadata。
2. 僅顯示大致地點。
3. 修正旋轉方向與色彩。
4. 建議輸出 WebP 或 AVIF，長邊通常不超過 2400px。
5. 檔名使用小寫英文與連字號。
6. 每張圖片填寫替代文字。

私人相簿、個別密碼、R2 原圖保護、下載設定與 Email OTP 管理介面尚未實作。私人照片不可先放入 `public/`，因為其中檔案可被任何知道網址的人直接讀取。

## 10. 搜尋

搜尋元件位於 `src/components/SearchDialog.astro`。目前是小型靜態索引；新增重要公開頁面後，要同步將標題、網址與摘要加入 `entries`。

搜尋不可加入草稿、Coming Soon、私人相簿、申請資料、管理頁面或受保護文件。

## 11. SEO、RSS、sitemap 與轉址

SEO 與社群分享 metadata 位於 `src/layouts/BaseLayout.astro`。

RSS 位於 `src/pages/rss.xml.js`，目前包含公開 Writing 與已發布 Projects。

Sitemap 由 `@astrojs/sitemap` 建置。舊網址轉址位於 `astro.config.mjs`。移動既有頁面時，應保留舊網址並新增 redirect，避免既有連結失效。

`public/robots.txt` 指向正式 sitemap。受保護與草稿頁面不可加入 sitemap。

## 12. 色彩、字體與版面

全站設計位於 `src/styles/global.css`：

- 白色與薰衣草紫為主要色彩。
- 墨色與鼠尾草綠作為輔助。
- 標題使用 Newsreader。
- 正文使用 DM Sans。
- 手機版 breakpoint 主要為 880px 與 580px。
- 首次進入預設淺色；使用者可手動切換並記住選擇。
- Header 不固定，捲動後自然離開畫面。

修改 CSS 後至少檢查首頁、長文章、About、Projects，以及 580px 以下的手機畫面。避免文字溢出、圖片變形與導覽重疊。

## 13. 自動部署

推送至 `main` 後，`.github/workflows/deploy.yml` 會執行：

1. Checkout repository。
2. 安裝 Node.js 22。
3. 使用 `npm ci` 安裝鎖定版本。
4. 執行 `npm run build`。
5. 上傳 `dist/`。
6. 部署到 GitHub Pages。

GitHub repository 的 Pages 設定必須選擇 `GitHub Actions` 作為 Source。第一次切換後，之後每次推送 `main` 都會自動部署。

一般發布流程：

```powershell
git status
npm run build
git add .
git commit -m "Update website content"
git push origin main
```

推送前務必確認沒有 `.env`、密碼、OTP、私人照片或申請文件被加入 Git。

## 14. 網域

`public/CNAME` 必須保持：

```text
jennysloth.com
```

若 GitHub Pages 部署後網域失效，依序檢查：

1. `public/CNAME` 是否存在。
2. GitHub Pages 的 Custom domain 是否為 `jennysloth.com`。
3. DNS A／AAAA／CNAME 設定是否仍指向 GitHub Pages。
4. Enforce HTTPS 是否啟用。

## 15. 備份與復原

舊 al-folio 網站已從目前工作目錄刪除，但仍保留在 Git 歷史中。不要使用 `git reset --hard` 處理一般錯誤。

查看歷史版本：

```powershell
git log --oneline
git show <commit>:index.html
```

若正式部署出錯，優先建立修正 commit，或在 GitHub Actions 使用 Re-run jobs。需要回復整個版本時，先確認目標 commit，再使用 `git revert` 建立可追蹤的反向 commit。

## 16. 尚未完成的第二階段

以下項目仍在規劃中，不能視為現有功能：

- Cloudflare Pages／Workers 遷移。
- D1 相簿 metadata 與密碼雜湊。
- R2 公開與私人圖片儲存。
- KV session、OTP 與 rate limit。
- `private.jennysloth.com` 私人相簿。
- 單一管理員 Email OTP。
- 相簿個別密碼與下載設定。
- 申請專區內部頁面；目前依決定暫緩。
- 無 Cookie 分析服務；尚未選定或加入追蹤碼。

實作受保護功能時，密碼、金鑰與管理員信箱必須放入平台 secrets，不可寫入 repository。

## 17. 發布前檢查清單

- `npm run build` 為 0 errors、0 warnings。
- 首頁 Hero 圖片與文字在桌面、手機都清楚。
- Header、搜尋、明暗模式和手機選單可操作。
- 新文章的日期、分類、摘要與圖片替代文字正確。
- 沒有草稿、私人照片或敏感資料被提交。
- Coming Soon 沒有假內容或假統計。
- 舊網址有 redirect。
- RSS 與 sitemap 能正常產生。
- `public/CNAME` 與 `robots.txt` 正確。
- GitHub Actions 建置成功後，再檢查正式網域。
