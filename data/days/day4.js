// Day 4｜嵐山一日遊
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_4 = {
  day: 4,
  date: "2026/06/18",
  title: "嵐山",
  theme: "",
  intro: "竹林小徑→嵯峨野小火車→保津川遊船→渡月橋→岩田山猴子公園→音樂盒堂→和服森林→拉拉熊茶坊。",
  dayCard: {
    image: "assets/images/day-cards/day4.webp",
    title: "Day 4",
    description: "嵐山"
  },
  schedule: [
    {
      time: "06:20 前往",
      place: "旅館 → 新今宮站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "步行約 12 分，800 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/9ND5YMkymRNgy57h7"
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "07:26 車次",
      place: "新今宮站 → 大阪車站",
      address: "",
      transport: "O大阪環狀線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },
      activity: "普通車 → 往外環線方向",
      estimatedCostText: "成人JPY ¥1,120，兒童JPY ¥660",
      routeInfo: "約 17 分，8 站。",
      note: "5人共JPY ¥5,040，新今宮站 → JR嵯峨嵐山站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/cyPdCDcoGizKvV2V6"
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "轉乘 07:47 車次",
      place: "大阪車站 → 京都車站",
      address: "",
      transport: "A東海道・山陽本線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "新快速車 → 敦賀方向。",
      estimatedCostText: null,
      routeInfo: "約29分，3站。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "轉乘 08:27 車次",
      place: "京都車站 → JR嵯峨嵐山站",
      address: "",
      transport: "JR 山陰本線",
      transportStyle: {
      background: "#ec66ee",
      color: "#ffffff"
      },
      activity: "普通車 → 龜岡方向。",
      estimatedCostText: "",
      routeInfo: "約 19 分，7 站。",
      note: "可先在嵯峨嵐山站購買保津川遊船船票",
      images: [],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "09:00 前往",
      place: "竹林小徑",
      address: "",
      transport: "步行",
      activity: "嵯峨嵐山站 → 嵐山竹林。",
      estimatedCost: null,
      routeInfo: "步行約 13 分，950 公尺。",
      note: "早去拍照，9:40 前要離開，準備前往小火車嵯峨站",
      images: [
        "assets/images/spots/day4/arashiyama-bamboo-grove.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Arashiyama+Bamboo+Grove"
        }
      ]
    },
    {
      time: "10:02 車次",
      place: "嵯峨野觀光小火車",
      address: "",
      transport: "小火車",
      transportStyle: {
      background: "#eebe00",
      color: "#ffffff"
      },
      activity: "",
      estimatedCostText: "成人JPY ¥880，兒童JPY ¥440",
      routeInfo: "嵯峨站 → 龜岡站，約20分鐘。",
      note: "網路購票共JPY ¥3,960，選雙號排才有風景看",
      images: [
        "assets/images/spots/day4/sagano-romantic-train.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Sagano+Romantic+Train"
        },
        {
          type: "official",
          url: "https://www.sagano-kanko.co.jp"
        }
      ]
    },
    {
      time: "10:35 車次",
      place: "保津川遊船接駁車 → 乘船處",
      address: "",
      transport: "接駁巴士",
      transportStyle: {
      background: "#00ddff",
      color: "#ffffff"
      },
      activity: "車程預計15分鐘，只收現金",
      estimatedCostText: "成人JPY ¥310，兒童JPY ¥155",
      note: "後門上車、下車收費，前門付款，要現金共JPY ¥1,750。",
      images: [],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "12:00 船次",
      place: "保津川遊船",
      address: "",
      transport: "遊船",
      transportStyle: {
      background: "#888844cc",
      color: "#ffffff"
      },      
      activity: "保津川遊船 → 渡月橋，約2小時",
      estimatedCostText: "成人JPY ¥6,000，兒童JPY ¥4,500",
      note: "共JPY ¥28,000，網路沒有12:00，可現場購票。",
      images: [
        "assets/images/spots/day4/hozugawa-river-boat.webp",
        "assets/images/spots/day4/togetsukyo-bridge.webp"
      ],
      links: [
        {
          type: "map",
          label: "保津川遊船地圖",
          url: "https://maps.google.com/?q=Hozugawa+River+Boat+Ride"
        },
        {
          type: "official",
          label: "保津川遊船官方網站",
          url: "https://www.hozugawakudari.jp"
        },
        {
          type: "map",
          label: "渡月橋地圖",
          url: "https://maps.google.com/?q=Togetsukyo+Bridge"
        }
      ]
    },
    {
      time: "14:30 前往",
      place: "岩田山猴子公園",
      address: "",
      transport: "步行",
      activity: "渡月橋 → 猴子公園。",
      estimatedCostText: "飼料每份JPY ¥100",
      routeInfo: "步行約 15~20 分，750 公尺，爬坡約160 公尺。",
      note: "預計停留30分鐘，16:00會關門",
      images: [
        "assets/images/spots/day4/iwatayama-monkey-park.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Iwatayama+Monkey+Park"
        },
        {
          type: "official",
          url: "https://www.monkeypark.jp"
        }
      ]
    },
    {
      time: "15:30 前往",
      place: "音樂盒堂",
      address: "",
      transport: "步行",
      activity: "猴子公園 → 音樂盒堂。",
      estimatedCost: null,
      routeInfo: "步行約 15 分，750 公尺。",
      note: "預計停留30分鐘",
      images: [
        "assets/images/spots/day4/kyoto-arashiyama-music-box-museum.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Arashiyama+Music+Box+Museum"
        }
      ]
    },
    {
      time: "16:30 前往",
      place: "和服森林",
      address: "",
      transport: "步行",
      activity: "音樂盒堂 → 和服森林。",
      estimatedCost: null,
      routeInfo: "步行約 7 分，500 公尺。",
      note: "預計停留30分鐘",
      images: [
        "assets/images/spots/day4/kimono-forest.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Kimono+Forest+Arashiyama"
        }
      ]
    },
    {
      time: "17:30 前往",
      place: "拉拉熊茶坊",
      address: "",
      transport: "步行",
      activity: "和服森林 → 拉拉熊主題餐廳。",
      estimatedCost: null,
      routeInfo: "步行約 6 分，450 公尺。",
      note: "預計停留30分鐘",
      imageDetails: [
        {
          src: "assets/images/spots/day4/rilakkuma-sabo-arashiyama.webp",
          title: "拉拉熊茶坊",
          description: "和服森林 → 拉拉熊主題餐廳。"
        },
        {
          src: "assets/images/spots/day4/food/food-arashiyama.webp",
          title: "嵐山美食攻略",
          description: "嵐山周邊餐點與小吃備案，可依現場排隊狀況彈性選擇。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Rilakkuma+Sabo+Arashiyama"
        },
        {
          type: "official",
          url: "https://rilakkumasabo.jp"
        }
      ]
    },
    {
      time: "18:00 前往",
      place: "前往嵯峨嵐山站",
      address: "",
      transport: "步行",
      activity: "拉拉熊餐廳 → JR 嵯峨嵐山站。",
      estimatedCost: null,
      routeInfo: "步行約 7 分，500 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "18:19 車次",
      place: "JR嵯峨嵐山站 → 京都車站",
      address: "",
      transport: "JR 山陰本線",
      transportStyle: {
      background: "#ec66ee",
      color: "#ffffff"
      },
      activity: "普通車 → 往京都方向",
      estimatedCostText: "成人JPY ¥1,120，兒童JPY ¥660",
      routeInfo: "約 17 分，7 站",
      note: "5人共JPY ¥5,040，JR嵯峨嵐山站 → 新今宮站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/uPj5W5mZbc3RAN876"
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "轉乘18:44 車次",
      place: "京都車站 → 大阪車站",
      address: "",
      transport: "A東海道・山陽本線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "新快速車 → 米原 經由 播州赤穗。",
      estimatedCostText: "",
      routeInfo: "約 29 分，3 站",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "轉乘 19:19 車次",
      place: "大阪車站 → 新今宮站",
      address: "",
      transport: "O大阪環狀線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },      
      activity: "普通車 → 往內環線方向。。",
      estimatedCostText: "",
      routeInfo: "16分，8站。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "20:00 抵達",
      place: "返回旅館",
      address: "",
      transport: "步行",
      activity: "新今宮站 → 旅館。",
      estimatedCost: null,
      routeInfo: "步行約 12 分，800 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/7WfSfv5R9dupkYRE9"
        },
        {
          type: "official",
          url: ""
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    }
  ]
};
