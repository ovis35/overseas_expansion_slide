# 中國企業出海展店｜曼谷 × 沖繩

> 海外品牌落地策略路線圖 — 靜態線上簡報網站

基於《曼谷沖繩零售市場調查》PDF 報告，打造的互動式簡報網站。

## 功能特色

- **16 張投影片**：完整涵蓋兩地市場分析、合規要求、成本結構與進入策略
- **3 個資料視覺化**：CRD 子市場對比表、進入決策矩陣、0→1 落地 Roadmap
- **響應式設計**：支援桌面與行動裝置
- **多種導航方式**：
  - 鍵盤快捷鍵（← → / Space / PageUp/Down）
  - 滾輪切頁（帶節流防抖）
  - 手機觸控滑動
  - 右側進度條點擊
- **深層連結（Deep-link）**：`/#slide=5` 可直接跳轉指定頁面
- **Overview 模式**：按 `O` 顯示縮圖網格
- **講者筆記**：按 `N` 顯示/隱藏

## 快速開始

### 安裝依賴

```bash
npm install
```

### 本地開發

```bash
npm run dev
```

開啟瀏覽器訪問 http://localhost:5173

### 建置生產版本

```bash
npm run build
```

產出檔案位於 `dist/` 目錄

### 預覽生產版本

```bash
npm run preview
```

## 部署

### GitHub Pages

1. 在 `vite.config.ts` 中設定 `base` 為您的 repo 名稱：
   ```ts
   base: '/your-repo-name/',
   ```

2. 建置專案：
   ```bash
   npm run build
   ```

3. 將 `dist/` 目錄部署到 GitHub Pages：
   ```bash
   # 使用 gh-pages 套件
   npm install -D gh-pages
   npx gh-pages -d dist
   ```

   或手動設定 GitHub Actions。

### Cloudflare Pages

1. 連接 GitHub repo 到 Cloudflare Pages
2. 設定建置命令：`npm run build`
3. 設定輸出目錄：`dist`
4. 完成部署

### Vercel / Netlify

直接連接 GitHub repo，預設設定即可自動部署。

## 專案結構

```
overseas-expansion-slide/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── slides/           # 各種 slide 布局元件
│   │   │   ├── CoverSlide.tsx
│   │   │   ├── TitleBulletsSlide.tsx
│   │   │   ├── TableSlide.tsx
│   │   │   ├── ComparisonSlide.tsx
│   │   │   ├── RoadmapSlide.tsx
│   │   │   ├── KPISlide.tsx
│   │   │   └── CTASlide.tsx
│   │   ├── DataRefBadge.tsx   # 資料來源標註
│   │   ├── KeyboardHint.tsx   # 鍵盤提示
│   │   ├── Overview.tsx       # 縮圖總覽
│   │   ├── ProgressBar.tsx    # 進度條
│   │   ├── SlideImage.tsx     # 圖片元件（Unsplash）
│   │   ├── SlideRenderer.tsx  # Slide 路由器
│   │   └── SpeakerNotes.tsx   # 講者筆記
│   ├── data/
│   │   └── slides.ts          # ⭐ 內容資料結構
│   ├── hooks/
│   │   └── useSlideNavigation.ts  # 導航邏輯
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 內容維護指南

### 修改投影片內容

所有內容集中在 `src/data/slides.ts`，每張投影片是一個物件：

```typescript
{
  id: 1,                          // 投影片編號
  slug: 'cover',                  // URL 識別碼
  title: '標題',
  subtitle: '副標題（可選）',
  claim: '核心主張（可選）',
  bullets: [                      // 要點列表（可選）
    { text: '要點內容', highlight: true },
    { text: '普通要點' }
  ],
  table: { ... },                 // 表格資料（可選）
  comparisonTable: { ... },       // 對比表格（可選）
  roadmap: [ ... ],               // Roadmap 階段（可選）
  dataRefs: [                     // 資料來源標註
    { id: 'D01', source: 'PDF 報告', page: 1 }
  ],
  notes: '講者筆記內容',
  layout: 'title-bullets',        // 布局類型
  theme: 'bangkok',               // 主題色（bangkok/okinawa/neutral）
  image: {                        // 背景/側邊圖片（可選）
    query: 'bangkok,skyline',     // Unsplash 搜尋關鍵字
    alt: '圖片描述',
    position: 'right'             // background/right/left
  },
  legalDisclaimer: true           // 是否顯示法務聲明
}
```

### 布局類型（Layout）

| Layout | 說明 | 適用場景 |
|--------|------|----------|
| `cover` | 封面，全螢幕背景圖 | 第一張 |
| `title-bullets` | 標題 + 要點列表 | 大部分內容頁 |
| `table` | 單一表格展示 | CRD 數據表 |
| `comparison` | 雙欄對比表格 | 曼谷 vs 沖繩 |
| `roadmap` | 時間軸/階段圖 | 落地流程 |
| `kpi` | KPI 框架表格 | 指標衡量 |
| `cta` | 行動呼籲頁面 | 最後一張 |

### 主題色（Theme）

- `bangkok`：橙金色系，用於曼谷相關頁面
- `okinawa`：青綠色系，用於沖繩相關頁面
- `neutral`：藍紫色系，用於綜合/對比頁面

### 替換 Unsplash 圖片

在 slide 的 `image.query` 中修改關鍵字：

```typescript
image: {
  query: 'bangkok,shopping,mall',  // 用逗號分隔多個關鍵字
  alt: '曼谷購物中心',
  position: 'right'
}
```

圖片會自動從 Unsplash Source 載入：
- `https://source.unsplash.com/1600x900/?{keywords}`

### 調整頁面順序

在 `slides` 陣列中調整物件順序即可。記得更新 `id` 欄位以保持連續。

### 新增投影片

1. 複製現有投影片物件
2. 修改 `id`、`slug` 和內容
3. 選擇適合的 `layout`
4. 儲存後自動生效

## 資料引用策略

本簡報遵循以下原則：

1. **所有數字來自 PDF 報告**：每個關鍵數據都有 `dataRefs` 標註來源頁碼
2. **不硬編不存在的數字**：框架性內容（如 KPI）僅提供方法論，不虛構數據
3. **標註「需補充調研」**：PDF 中未提供的資訊明確標示
4. **法務聲明**：涉及法規/稅務的頁面都有免責聲明

### 來源標註格式

頁面上的資料標註顯示為：

```
[D01 P1]  // D01 是資料點 ID，P1 是 PDF 頁碼
```

完整 Data Bank 位於 `src/data/slides.ts` 的 `dataBank` 陣列中。

## 鍵盤快捷鍵

| 按鍵 | 功能 |
|------|------|
| `→` / `↓` / `Space` / `PageDown` | 下一頁 |
| `←` / `↑` / `PageUp` | 上一頁 |
| `Home` | 跳到第一頁 |
| `End` | 跳到最後一頁 |
| `O` | 開啟/關閉 Overview |
| `N` | 開啟/關閉講者筆記 |
| `Esc` | 關閉 Overview |

## 技術棧

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Images**: Unsplash Source（無需 API Key）
- **Deployment**: 靜態站點，無後端依賴

## 效能優化

- 圖片 Lazy Loading
- 滾輪事件節流（500ms）
- 元件按需載入
- 生產版本代碼分割（vendor chunk）
- 目標 Lighthouse 90+

## License

MIT

---

**資料來源**：《曼谷與沖繩品牌零售市場進入戰略與商業環境深度調查研究報告》

**法務聲明**：本簡報內容僅為資訊整理與風險提示，涉及法規/稅務/簽證部分不構成法律意見（No legal advice）。
