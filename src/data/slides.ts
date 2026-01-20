export interface DataRef {
  id: string;
  source: string;
  page?: number;
}

export interface Bullet {
  text: string;
  highlight?: boolean;
  subBullets?: string[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface SlideContent {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  claim?: string;
  bullets?: Bullet[];
  table?: TableData;
  comparisonTable?: TableData;
  roadmap?: RoadmapPhase[];
  kpiTable?: TableData;
  dataRefs?: DataRef[];
  notes?: string;
  legalDisclaimer?: boolean;
  image?: {
    query: string;
    alt: string;
    position?: 'background' | 'right' | 'left';
  };
  layout: 'cover' | 'title-bullets' | 'two-column' | 'table' | 'comparison' | 'roadmap' | 'kpi' | 'cta';
  theme?: 'bangkok' | 'okinawa' | 'neutral';
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
  icon?: string;
}

export const slides: SlideContent[] = [
  // S1: Cover
  {
    id: 1,
    slug: 'cover',
    title: '中國企業出海展店',
    subtitle: '曼谷 × 沖繩',
    claim: '海外品牌落地策略路線圖',
    layout: 'cover',
    theme: 'neutral',
    image: {
      query: 'bangkok,skyline,night',
      alt: '曼谷夜景天際線',
      position: 'background'
    },
    notes: '開場：點出兩個市場的互補性。強調這是一套完整的方法論，而非單純市場報告。'
  },

  // S2: Executive Summary
  {
    id: 2,
    slug: 'executive-summary',
    title: '兩地定位差異一覽',
    claim: '曼谷是「深度消費市場」，沖繩是「戰略槓桿市場」',
    bullets: [
      {
        text: '曼谷：東南亞零售心臟，3,550 萬遊客支撐，F&B 與國際品牌需求強勁',
        highlight: true
      },
      {
        text: '沖繩：日本/亞太交會點，967 萬遊客，測試大中華與韓國市場的低風險場域',
        highlight: true
      },
      {
        text: '曼谷合規：FBA 49% 限制，需精細股權設計；沖繩特區：最高 40% 法人稅減免'
      },
      {
        text: '成本結構：曼谷人力成本低但隱形租金高；沖繩高成本高效率但稅後利潤可觀'
      },
      {
        text: '數位整合：曼谷 80%+ 線上銷售在行動端；沖繩需準備免稅制度轉型'
      },
      {
        text: '互補佈局：曼谷通往東南亞中產，沖繩通往日本與大中華旅遊客群'
      }
    ],
    dataRefs: [
      { id: 'D04', source: 'PDF 報告', page: 1 },
      { id: 'D17', source: 'PDF 報告', page: 3 },
      { id: 'D23', source: 'PDF 報告', page: 5 },
      { id: 'D24', source: 'PDF 報告', page: 5 }
    ],
    layout: 'title-bullets',
    theme: 'neutral',
    notes: '這是全簡報的核心框架。確保聽眾理解「兩個市場不是二選一，而是互補佈局」的核心論點。'
  },

  // S3: Bangkok Why Enter
  {
    id: 3,
    slug: 'bangkok-why-enter',
    title: '曼谷市場為何值得進',
    subtitle: '東南亞零售心臟的韌性與轉型',
    claim: '宏觀放緩中，零售仍是少數正向動能亮點',
    bullets: [
      { text: '總零售庫存達 800 萬平方公尺，市場體量龐大', highlight: true },
      { text: '2024 年購物中心集團收入與利潤增長約 9%' },
      { text: '3,550 萬國際遊客創造 1.8 兆泰銖收入，簽證豁免政策功不可沒' },
      { text: '高端消費與奢侈品市場依然強勁，中產零售面臨競爭壓力' },
      { text: '混合用途開發案崛起，降低對單一週末遊客依賴' }
    ],
    dataRefs: [
      { id: 'D01', source: 'PDF 報告', page: 1 },
      { id: 'D03', source: 'PDF 報告', page: 1 },
      { id: 'D04', source: 'PDF 報告', page: 1 }
    ],
    layout: 'title-bullets',
    theme: 'bangkok',
    image: {
      query: 'bangkok,shopping,mall',
      alt: '曼谷購物中心',
      position: 'right'
    },
    notes: '強調「韌性」——即使 GDP 放緩（Q3 僅 1.2%），零售仍成長。旅遊復甦是關鍵支撐。'
  },

  // S4: Bangkok CRD
  {
    id: 4,
    slug: 'bangkok-crd',
    title: '曼谷 CRD 核心零售區',
    subtitle: '三大子市場對比表',
    claim: '澎蓬區租金最高，叻差帕頌-隆齊體量最大',
    table: {
      headers: ['子市場', '庫存 (sqm)', '空置率', '月租金 (THB/sqm)'],
      rows: [
        ['暹羅 Siam', '374,884', '4.86%', '3,475'],
        ['叻差帕頌-隆齊', '421,009', '4.77%', '3,713'],
        ['澎蓬 Phrom Phong', '190,325', '5.93%', '4,050'],
        ['CRD 平均', '986,218', '5.03%', '3,746']
      ],
      caption: '資料來源：PDF 報告（P2），2025 Q4 數據'
    },
    dataRefs: [
      { id: 'D07', source: 'PDF 報告', page: 2 },
      { id: 'D08', source: 'PDF 報告', page: 2 },
      { id: 'D09', source: 'PDF 報告', page: 2 },
      { id: 'D10', source: 'PDF 報告', page: 2 }
    ],
    layout: 'table',
    theme: 'bangkok',
    notes: '視覺化 V1。強調澎蓬區是高淨值客群聚集地，租金溢價來自奢侈品商場與高端生活圈。空置率微升是部分租戶遷移至邊緣地帶，非市場萎縮。'
  },

  // S5: Bangkok Demand
  {
    id: 5,
    slug: 'bangkok-demand',
    title: '曼谷零售需求與業種',
    subtitle: '誰在租？租什麼？',
    claim: 'F&B 佔淨吸收量過半，國際品牌按季增長 50%',
    bullets: [
      { text: 'F&B 是 2025 Q3 最活躍驅動力，佔淨吸收量 50%+', highlight: true },
      { text: '家庭零售與國際品牌持續進駐' },
      { text: '國際品牌租賃活動 Q3 按季增長 50%，反映長期信心', highlight: true },
      { text: '曼谷被視為進入東南亞市場的旗艦據點' }
    ],
    dataRefs: [
      { id: 'D05', source: 'PDF 報告', page: 1 },
      { id: 'D06', source: 'PDF 報告', page: 1 }
    ],
    layout: 'title-bullets',
    theme: 'bangkok',
    image: {
      query: 'bangkok,restaurant,cafe',
      alt: '曼谷餐飲場景',
      position: 'right'
    },
    notes: 'F&B 的強勁需求反映了消費者對體驗式消費的偏好。品牌可考慮「餐飲 + 零售」的複合模式。'
  },

  // S6: Bangkok Space Transformation
  {
    id: 6,
    slug: 'bangkok-transformation',
    title: '曼谷商場空間轉型',
    subtitle: '上層樓的健康經濟紅利',
    claim: '醫療預約創造日間人流，醫美提升坪效',
    bullets: [
      { text: '商場上層轉型為醫療、健康與美容服務中心', highlight: true },
      {
        text: '三重效益：',
        subBullets: [
          '穩定日間人流（醫療預約）',
          '延長停留時間（Dwell Time）',
          '提升坪效（高利潤醫美服務）'
        ]
      },
      { text: '泰國醫療旅遊聲譽加持，開發商引進診所、抗衰老 SPA、健康咖啡廳' },
      { text: '選址含義：鄰近 Wellness Zone 的店位租金談判空間較大' },
      { text: '至 2030 年超過 63 萬 sqm 新供應，23.8% 位於 CRD' }
    ],
    dataRefs: [
      { id: 'D11', source: 'PDF 報告', page: 2 },
      { id: 'D12', source: 'PDF 報告', page: 2 }
    ],
    layout: 'title-bullets',
    theme: 'bangkok',
    notes: '這是品牌選址的重要洞察：不要只看 1F 黃金地段，上層樓鄰近 Wellness Zone 可能有更好的租金條件與客群適配度。'
  },

  // S7: Thai Consumer Behavior
  {
    id: 7,
    slug: 'thai-consumer',
    title: '泰國消費者行為',
    subtitle: '數位、健康與信仰經濟',
    claim: '70% 消費者購物決策過程超過一半在線上，數位可見度與實體同等重要',
    bullets: [
      { text: '電商市場預計 2025 年達 320 億美元', highlight: true },
      { text: '23% 交易透過行動錢包，80%+ 線上銷售在行動端' },
      { text: '穆營銷（Muketing）：信仰與數位行銷融合，增強消費者信任' },
      { text: '健康支出：40% 定期服用營養補充品（高於全球 30%），70% 避免高度加工食品', highlight: true },
      { text: '品牌需建立無縫線上線下整合體驗，而非僅租店面' }
    ],
    dataRefs: [
      { id: 'D13', source: 'PDF 報告', page: 2 },
      { id: 'D14', source: 'PDF 報告', page: 2 },
      { id: 'D15', source: 'PDF 報告', page: 2 },
      { id: 'D16', source: 'PDF 報告', page: 3 }
    ],
    layout: 'title-bullets',
    theme: 'bangkok',
    image: {
      query: 'mobile,payment,shopping',
      alt: '行動支付購物',
      position: 'right'
    },
    notes: '「穆營銷」是泰國獨特現象，國際品牌不必全面跟進，但理解並尊重這種文化底蘊能提升在地化接受度。健康導向品牌有明顯市場空位。'
  },

  // S8: Okinawa Market Position
  {
    id: 8,
    slug: 'okinawa-position',
    title: '沖繩市場定位',
    subtitle: '旅遊驅動 + 日本/亞太交會點',
    claim: '967 萬遊客，旅遊貢獻 GDP 15-20%，是低風險測試場',
    bullets: [
      { text: '2024 年遊客約 967 萬人次，預計 2025 財年突破 1,000 萬', highlight: true },
      { text: '旅遊業貢獻率 15-20%，年產出超過 1.17 兆日圓' },
      { text: '國內遊客 78%（6,830 億日圓）；國際 22%（2,160 億日圓）' },
      { text: '國際前三來源地：台灣 74.2 萬、韓國 42.4 萬、香港 31.8 萬', highlight: true },
      { text: '國際遊客人均 101,400 日圓，平均停留 4.7 晚' }
    ],
    dataRefs: [
      { id: 'D17', source: 'PDF 報告', page: 3 },
      { id: 'D18', source: 'PDF 報告', page: 4 },
      { id: 'D19', source: 'PDF 報告', page: 4 },
      { id: 'D20', source: 'PDF 報告', page: 4 }
    ],
    layout: 'title-bullets',
    theme: 'okinawa',
    image: {
      query: 'okinawa,beach,ocean',
      alt: '沖繩海灘',
      position: 'right'
    },
    notes: '關鍵洞察：沖繩不只是日本市場，更是接觸大中華區與韓國高購買力客群的窗口。這是品牌可以「低風險測試」的場域。'
  },

  // S9: Okinawa Retail Map
  {
    id: 9,
    slug: 'okinawa-retail-map',
    title: '沖繩零售地圖',
    subtitle: '核心區域與選址考量',
    claim: '國際通街邊高流量溢價，AEON 系統穩定營運成本',
    bullets: [
      {
        text: '那霸國際通（Kokusai-dori）',
        highlight: true,
        subBullets: ['首府核心觀光街', '高人流、高租金溢價']
      },
      {
        text: '北谷美濱美國村（Mihama American Village）',
        subBullets: ['特色街邊店', '美軍基地與本地人口混合']
      },
      {
        text: 'AEON Mall Okinawa Rycom',
        subBullets: ['沖繩最大購物中心', '穩定營運成本']
      },
      { text: '地方都市 1F 租金約 26,620 JPY/坪，核心旅遊地帶可維持二線城市高位' },
      { text: '權衡：街邊店高流量 vs. 購物中心穩定成本' }
    ],
    dataRefs: [
      { id: 'P4', source: 'PDF 報告', page: 4 }
    ],
    layout: 'title-bullets',
    theme: 'okinawa',
    image: {
      query: 'naha,street,japan',
      alt: '那霸國際通街景',
      position: 'right'
    },
    notes: '品牌需根據自身定位選擇：追求曝光度選國際通，追求穩定營運選 AEON，追求特色體驗選美國村。'
  },

  // S10: Okinawa Logistics Hub
  {
    id: 10,
    slug: 'okinawa-logistics',
    title: '沖繩：物流樞紐與測試場價值',
    subtitle: '4 小時連接亞洲主要城市',
    claim: '沖繩是高價值、周轉快產品的理想分銷點',
    bullets: [
      { text: '那霸機場與國際航線緊密連結：台北、香港、首爾、上海 4 小時內空運', highlight: true },
      { text: '「國際物流樞紐促進項目」補貼可抵銷跨海運輸負擔' },
      { text: '測試新產品對大中華區與韓國遊客的吸引力，收集數據優化亞洲產品矩陣' },
      { text: '島嶼物流溢價約 5-10%，但稅務優惠可抵銷' }
    ],
    dataRefs: [
      { id: 'D28', source: 'PDF 報告', page: 7 },
      { id: 'D24', source: 'PDF 報告', page: 5 }
    ],
    layout: 'title-bullets',
    theme: 'okinawa',
    image: {
      query: 'airport,cargo,logistics',
      alt: '機場物流',
      position: 'right'
    },
    notes: '沖繩的戰略價值不只是本地 140 萬人口，而是作為亞洲分銷樞紐的角色。品牌可在此存放高價值、周轉快的產品。'
  },

  // S11: Japan Retail Trends
  {
    id: 11,
    slug: 'japan-trends',
    title: '日本零售趨勢',
    subtitle: '推活文化 + 免稅制度改動',
    claim: 'Oshikatsu 年貢獻 230 億美元；免稅制度變更影響 POS 流程',
    bullets: [
      { text: '推活（Oshikatsu）粉絲經濟每年貢獻日本零售業超過 230 億美元', highlight: true },
      { text: '品牌若能與動漫 IP、明星、虛擬角色合作，可吸引黏性年輕客群' },
      { text: '免稅制度重大變更：2026 年起從「現場免稅」改為「機場退稅」', highlight: true },
      { text: '對店內流程影響：結帳價格回歸含稅，簡化合規但可能影響即時購買意願' },
      { text: '建議：2025 年起升級 POS 系統，預先規劃稅費處理流程' }
    ],
    dataRefs: [
      { id: 'D21', source: 'PDF 報告', page: 4 },
      { id: 'D22', source: 'PDF 報告', page: 4 }
    ],
    layout: 'title-bullets',
    theme: 'okinawa',
    image: {
      query: 'japan,anime,culture',
      alt: '日本動漫文化',
      position: 'right'
    },
    notes: '免稅制度變更是重要的營運提醒。品牌應提前準備 POS 系統升級，並規劃如何在新制度下維持遊客購買意願。'
  },

  // S12: Compliance Comparison
  {
    id: 12,
    slug: 'compliance',
    title: '合規與公司結構',
    subtitle: '曼谷 vs 沖繩',
    claim: '曼谷需精細股權設計，沖繩特區提供豐厚財政紅利',
    comparisonTable: {
      headers: ['維度', '曼谷', '沖繩'],
      rows: [
        ['外資持股', 'FBA 限制 49%；禁止名單人股東', '100% 外資可行'],
        ['合規路徑', '泰籍多數股權公司 / 美泰親善條約 / BOI', '特區資格認定'],
        ['稅務優惠', 'BOI 免稅期（條件式）', '法人稅最高 40% 減免（10 年）'],
        ['投資抵免', '依 BOI 條件', '設備 15%、建築 8%'],
        ['物流補貼', '無', '國際物流樞紐補貼'],
        ['區域免稅', '無', '國內遊客進口商品免關稅（限額 20 萬日圓）']
      ],
      caption: '資料來源：PDF 報告（P5）'
    },
    dataRefs: [
      { id: 'D23', source: 'PDF 報告', page: 5 },
      { id: 'D24', source: 'PDF 報告', page: 5 },
      { id: 'D25', source: 'PDF 報告', page: 5 }
    ],
    layout: 'comparison',
    theme: 'neutral',
    legalDisclaimer: true,
    notes: '視覺化 V2：進入決策矩陣。強調曼谷的「名單人股東風險」——DBD 正加大查處力道。沖繩特區的 40% 稅收減免對前 10 年盈利能力有決定性影響。'
  },

  // S13: Cost Structure
  {
    id: 13,
    slug: 'cost-structure',
    title: '成本與營運',
    subtitle: '人力、租金、物流差異',
    claim: '曼谷人力成本低但隱形租金高；沖繩高成本高效率但稅後利潤可觀',
    comparisonTable: {
      headers: ['項目', '曼谷', '沖繩'],
      rows: [
        ['最低工資', '400 THB/日', '1,023 JPY/時'],
        ['平均零售人員月薪', '13,000–35,000 THB', '約 390,000 JPY'],
        ['CRD 平均月租金', '3,746 THB/sqm', '地方都市 26,620 JPY/坪'],
        ['租金模式', '租金 + 營業額抽成（隱形成本高）', '固定租金為主'],
        ['物流挑戰', '城市擁塞、最後一英里', '島嶼物流溢價 5-10%']
      ],
      caption: '資料來源：PDF 報告（P6）'
    },
    dataRefs: [
      { id: 'D26', source: 'PDF 報告', page: 6 },
      { id: 'D27', source: 'PDF 報告', page: 6 },
      { id: 'D10', source: 'PDF 報告', page: 2 }
    ],
    layout: 'comparison',
    theme: 'neutral',
    notes: '曼谷的「隱形成本」是關鍵：頂級商場通常採取「租金 + 營業額抽成」模式，看起來租金低但實際成本高。沖繩雖然人力成本高，但稅務優惠可抵銷。'
  },

  // S14: Roadmap
  {
    id: 14,
    slug: 'roadmap',
    title: '進入策略 Roadmap',
    subtitle: '0→1 落地流程',
    claim: '從市場調研到試營運，分階段交付',
    roadmap: [
      {
        phase: 'Phase 1',
        title: '調研',
        items: ['市場驗證', '競品分析', '法規合規初步評估'],
        icon: '🔍'
      },
      {
        phase: 'Phase 2',
        title: '公司設立',
        items: ['股權結構設計', '特區資格申請', '銀行開戶'],
        icon: '🏢'
      },
      {
        phase: 'Phase 3',
        title: '選址',
        items: ['商場談判', '街邊店考察', '租約條款審閱'],
        icon: '📍'
      },
      {
        phase: 'Phase 4',
        title: '施工與供應鏈',
        items: ['店面裝修', '物流路線建立', 'POS/ERP 系統'],
        icon: '🔧'
      },
      {
        phase: 'Phase 5',
        title: '招募與培訓',
        items: ['本地經理人培養', '合規用工'],
        icon: '👥'
      },
      {
        phase: 'Phase 6',
        title: '試營運',
        items: ['軟開幕', '數據收集', '優化迭代'],
        icon: '🚀'
      }
    ],
    dataRefs: [
      { id: '綜合', source: 'PDF 報告策略建議', page: 7 }
    ],
    layout: 'roadmap',
    theme: 'neutral',
    notes: '視覺化 V3：0→1 落地 Roadmap。強調這是一個「分階段交付」的過程，每個階段都有明確的 deliverables。'
  },

  // S15: KPI Framework
  {
    id: 15,
    slug: 'kpi-framework',
    title: 'KPI 與衡量',
    subtitle: 'Leading / Lagging 指標框架',
    claim: '用領先指標預測，用滯後指標驗證',
    kpiTable: {
      headers: ['指標類型', '曼谷', '沖繩'],
      rows: [
        ['Leading（領先）', '線上搜尋量、LINE 好友數、商場人流轉化率', '遊客入境數、快閃店互動數、免稅申請數'],
        ['Lagging（滯後）', '月營收、坪效、會員回購率', '月營收、人均客單、遊客複購率'],
        ['風險監測', '空置率變化、租金漲幅、政經事件', '免稅政策變化、航線增減、匯率波動']
      ],
      caption: '備註：具體數字需依品牌實際情況設定，本框架為方法論參考'
    },
    layout: 'kpi',
    theme: 'neutral',
    notes: '這是一個「框架」而非具體數字。強調品牌需要根據自身情況設定具體 KPI，我們提供的是方法論。'
  },

  // S16: CTA
  {
    id: 16,
    slug: 'cta',
    title: '讓我們開始對話',
    subtitle: '下一步合作方式',
    claim: '30 分鐘診斷，釐清您的出海優先級',
    bullets: [
      { text: '30 分鐘診斷：快速了解品牌定位與目標市場適配度', highlight: true },
      { text: '選址研判：基於數據的子市場推薦與租約談判支援' },
      { text: '落地顧問：從公司設立到試營運的全流程陪跑' },
      {
        text: '聯絡方式：',
        subBullets: [
          'Email：contact@example.com',
          '預約連結：[需補充調研]'
        ]
      }
    ],
    layout: 'cta',
    theme: 'neutral',
    legalDisclaimer: true,
    image: {
      query: 'business,handshake,partnership',
      alt: '商務合作',
      position: 'background'
    },
    notes: '結尾 CTA。強調「對話」而非「銷售」。讓潛在客戶感受到我們是顧問角色，而非單純服務供應商。'
  }
];

export const dataBank = [
  { id: 'D01', location: '曼谷', topic: '零售庫存規模', data: '約 800 萬平方公尺', significance: '市場體量龐大，承載多元業態', page: 1 },
  { id: 'D02', location: '曼谷', topic: 'GDP 增長放緩', data: '2025 Q3 GDP 擴張率 1.2%（Q2 為 2.8%）', significance: '宏觀放緩但零售仍具韌性', page: 1 },
  { id: 'D03', location: '曼谷', topic: '購物中心集團表現', data: '2024 年收入與利潤增長約 9%', significance: '零售業是少數正向動能亮點', page: 1 },
  { id: 'D04', location: '曼谷', topic: '旅遊復甦', data: '2024 年 3,550 萬國際遊客，1.8 兆泰銖收入', significance: '境外消費力是核心支柱', page: 1 },
  { id: 'D05', location: '曼谷', topic: 'F&B 需求', data: 'F&B 佔 2025 Q3 淨吸收量一半以上', significance: '餐飲是最活躍驅動力', page: 1 },
  { id: 'D06', location: '曼谷', topic: '國際品牌租賃', data: '國際品牌租賃活動 Q3 按季增長 50%', significance: '全球品牌看好曼谷長期價值', page: 1 },
  { id: 'D07', location: '曼谷', topic: 'CRD 暹羅區', data: '庫存 374,884 sqm / 空置率 4.86% / 租金 3,475 THB/sqm', significance: '傳統核心，租金相對較低', page: 2 },
  { id: 'D08', location: '曼谷', topic: 'CRD 叻差帕頌-隆齊', data: '庫存 421,009 sqm / 空置率 4.77% / 租金 3,713 THB/sqm', significance: '最大子市場，奢侈品牌聚集', page: 2 },
  { id: 'D09', location: '曼谷', topic: 'CRD 澎蓬區', data: '庫存 190,325 sqm / 空置率 5.93% / 租金 4,050 THB/sqm', significance: '全曼谷最高租金，高淨值客群', page: 2 },
  { id: 'D10', location: '曼谷', topic: 'CRD 平均', data: '總庫存 986,218 sqm / 空置率 5.03% / 平均租金 3,746 THB/sqm', significance: '核心區供需健康', page: 2 },
  { id: 'D11', location: '曼谷', topic: '空間轉型', data: '商場上層轉型為醫療/健康/美容服務中心', significance: '創造日間人流、延長停留時間、提升坪效', page: 2 },
  { id: 'D12', location: '曼谷', topic: '新供應預測', data: '至 2030 年超過 63 萬 sqm 零售新供應，23.8% 位於 CRD', significance: '長期需求樂觀', page: 2 },
  { id: 'D13', location: '曼谷', topic: '電商規模', data: '泰國電商市場預計 2025 年達 320 億美元', significance: '數位整合不可或缺', page: 2 },
  { id: 'D14', location: '曼谷', topic: '行動支付', data: '約 23% 交易透過行動錢包，80%+ 線上銷售發生在行動端', significance: '全通路體驗是標配', page: 2 },
  { id: 'D15', location: '曼谷', topic: '消費者線上行為', data: '70% 消費者購物決策過程超過一半發生在線上', significance: '數位可見度與實體同等重要', page: 2 },
  { id: 'D16', location: '曼谷', topic: '健康消費', data: '40% 泰國人定期服用營養補充品，70% 避免高度加工食品', significance: '健康導向品牌有市場空位', page: 3 },
  { id: 'D17', location: '沖繩', topic: '旅遊人次', data: '2024 年約 967 萬人次，預計 2025 財年突破 1,000 萬', significance: '旅遊驅動零售爆發力', page: 3 },
  { id: 'D18', location: '沖繩', topic: '旅遊經濟貢獻', data: '旅遊業貢獻率 15-20%，年產出超過 1.17 兆日圓', significance: '零售與旅遊同步跳動', page: 4 },
  { id: 'D19', location: '沖繩', topic: '遊客構成', data: '國內 78%（6,830 億日圓）；國際 22%（2,160 億日圓）；前三：台灣 74.2 萬、韓國 42.4 萬、香港 31.8 萬', significance: '精準接觸大中華區與韓國客群', page: 4 },
  { id: 'D20', location: '沖繩', topic: '國際遊客人均消費', data: '人均 101,400 日圓，平均停留 4.7 晚', significance: '高消費力、長停留', page: 4 },
  { id: 'D21', location: '沖繩', topic: '推活文化', data: 'Oshikatsu 粉絲經濟每年貢獻日本零售業超過 230 億美元', significance: 'IP 合作可吸引黏性客群', page: 4 },
  { id: 'D22', location: '沖繩', topic: '免稅制度變更', data: '2026 年起從「現場免稅」改為「機場退稅」', significance: '影響店內定價與 POS 流程', page: 4 },
  { id: 'D23', location: '曼谷', topic: 'FBA 外資限制', data: '零售業外資持股上限 49%，禁止名單人股東', significance: '股權結構設計是合規關鍵', page: 5 },
  { id: 'D24', location: '沖繩', topic: '特區稅務優惠', data: '法人所得最高 40% 稅收減免（10 年）；設備投資抵免 15%、建築 8%', significance: '前 10 年盈利能力決定性影響', page: 5 },
  { id: 'D25', location: '沖繩', topic: '區域免稅', data: '國內遊客購買進口商品可免關稅（限額 20 萬日圓）', significance: '創造內需購物誘因', page: 5 },
  { id: 'D26', location: '曼谷', topic: '最低工資', data: '400 泰銖/日（2025 新制）', significance: '相對日本具競爭力', page: 6 },
  { id: 'D27', location: '沖繩', topic: '最低工資', data: '1,023 日圓/時', significance: '日本全國偏低但已破千', page: 6 },
  { id: 'D28', location: '沖繩', topic: '物流優勢', data: '與亞洲主要城市（台北、香港、首爾、上海）4 小時內空運連接', significance: '高價值產品理想分銷點', page: 7 }
];

export const totalSlides = slides.length;
