// Day 2｜勝尾寺半日＋大阪市區散步
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_2 = {
  day: 2,
  date: "2026/06/16",
  title: "勝尾寺、大阪市區",
  theme: "",
  intro: "勝尾寺→天王寺動物園→通天閣→日本橋動漫街→黑門市場→橡子共和國→道頓堀→心齋橋",
  dayCard: {
    image: "assets/images/day-cards/day2.webp",
    title: "Day 2",
    description: "勝尾寺、大阪市區"
  },
  schedule: [
    {
      time: "06:40 前往",
      place: "旅館 → 花園町站。",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "步行約 5 分，350 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/K9JfMYnexbxV2NRP8"
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
      time: "06:54 車次",
      place: "花園町站 → 大國町站",
      address: "",
      transport: "Y四橋線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "往西梅田方向。",
      estimatedCostText: "JPY ¥2,385",
      routeInfo: "約 2 分，1 站。",
      note: "刷 ICOCA / 交通卡。",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/SfMerDz5Lhh7qDT67"
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
      time: "06:56 車次",
      place: "大國町站轉乘",
      address: "",
      transport: "步行轉乘",
      activity: "大國町站 → 御堂筋線。",
      estimatedCost: null,
      routeInfo: "站內轉乘。",
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
      time: "轉乘",
      place: "大國町站 → 箕面萱野站",
      address: "",
      transport: "M御堂筋線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },
      activity: "往箕面萱野站方向。",
      estimatedCostText: null,
      routeInfo: "約 23 分，10 站",
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
      time: "07:35 搭計程車",
      place: "箕面萱野站 → 勝尾寺",
      address: "",
      transport: "計程車",
      transportStyle: {
      background: "#ffdd11",
      color: "#000000"
      },
      activity: "",
      estimatedCostText: "約JPY ¥3,500",
      routeInfo: "路程約 14 分",
      note: "提早叫車，GO app(日本專用)",
      images: [
        "assets/images/references/katsuoji-taxi-guide.webp"
      ],
      links: [
        {
          type: "map",
          label: "行車路線",
          url: "https://maps.app.goo.gl/MUSXGapwKwVkxcqm6"
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
      time: "08:00 抵達",
      place: "勝尾寺",
      address: "",
      transport: "步行",
      activity: "勝尾寺參拜、達摩拍照。",
      estimatedCostText: "透明籤詩JPY ¥100，御守約JPY ¥800~1,500",
      note: "建議停留約 2-3 小時。",
      images: [
        "assets/images/spots/day2/katsuoji-temple.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Katsuoji+Temple+Osaka"
        },
        {
          type: "official",
          url: "https://katsuo-ji-temple.or.jp"
        }
      ]
    },
    {
      time: "10:30 搭計程車",
      place: "勝尾寺 → 箕面萱野站",
      address: "",
      transport: "計程車",
      transportStyle: {
      background: "#ffdd11",
      color: "#000000"
      },      
      activity: "",
      estimatedCostText: "約JPY ¥3,500",
      routeInfo: "約 14 分",
      note: "提早叫車，GO app(日本專用)",
      images: [],
      links: [
        {
          type: "map",
          label: "行車路線",
          url: "https://maps.app.goo.gl/dtv2RVwBfyomLKrz5"
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
      time: "11:07 車次",
      place: "箕面萱野站 → 動物園前站",
      address: "",
      transport: "M御堂筋線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },
      activity: "往中百舌鳥方向",
      estimatedCostText: "JPY ¥2,385",
      routeInfo: "約 25 分，11 站",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/2x9s3rXQJxv8PJUb6"
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
      time: "11:55 前往",
      place: "動物園前站 → 天王寺動物園",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCostText: null,
      routeInfo: "步行約 5 分，400 公尺。",
      note: "會經過通天閣，可吃午餐或拍照",
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
      time: "12:00 抵達",
      place: "天王寺動物園",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCostText: "成人 JPY ¥500、兒童 JPY ¥200",
      note: "可停留至約 14:00。",
      images: [
        "assets/images/spots/day2/tennoji-zoo.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Tennoji+Zoo+Osaka"
        },
        {
          type: "official",
          url: "https://www.tennojizoo.jp/en/"
        }
      ]
    },
    {
      time: "14:00 前往",
      place: "通天閣",
      address: "",
      transport: "步行",
      activity: "天王寺動物園 → 通天閣。",
      estimatedCostText: "觀望台門票，成人 JPY ¥1,200、兒童 JPY ¥600",
      routeInfo: "約 4 分，290 公尺。",
      note: "預計停留1小時",
      imageDetails: [
        {
          src: "assets/images/spots/day2/tsutenkaku.webp",
          title: "通天閣",
          description: "天王寺動物園 → 通天閣。"
        },
        {
          src: "assets/images/spots/day2/food/food-tsutenkaku.webp",
          title: "通天閣美食攻略",
          description: "通天閣周邊美食備案，可依現場時間選擇午餐或小吃。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Tsutenkaku+Osaka"
        },
        {
          type: "official",
          url: "https://www.tsutenkaku.co.jp"
        }
      ]
    },
    {
      time: "15:00 前往",
      place: "日本橋動漫街",
      address: "",
      transport: "步行",
      activity: "通天閣 → 日本橋動漫街。",
      estimatedCostText: "依個人消費",
      routeInfo: "約 13 分，900 公尺。",
      note: "預計停留2小時",
      images: [
        "assets/images/spots/day2/den-den-town.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Den+Den+Town+Osaka"
        }
      ]
    },
    {
      time: "17:00 前往",
      place: "黑門市場",
      address: "",
      transport: "步行",
      activity: "日本橋動漫街 → 黑門市場。",
      estimatedCostText: "依個人消費",
      routeInfo: "約 8 分，550 公尺。",
      note: "預計停留1小時",
      imageDetails: [
        {
          src: "assets/images/spots/day2/kuromon-market.webp",
          title: "黑門市場",
          description: "日本橋動漫街 → 黑門市場。"
        },
        {
          src: "assets/images/spots/day2/food/food-kuromon-market.webp",
          title: "黑門市場美食攻略",
          description: "黑門市場小吃與海鮮備案，可依現場消費彈性安排。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Kuromon+Market+Osaka"
        },
        {
          type: "official",
          url: "https://kuromon.com/en/"
        }
      ]
    },
    {
      time: "18:00 前往",
      place: "橡子共和國 難波店",
      address: "",
      transport: "步行",
      activity: "黑門市場 → 橡子共和國 難波店。",
      estimatedCostText: "",
      routeInfo: "約 8 分，600 公尺。",
      note: "預計停留30分鐘",
      images: [
        "assets/images/spots/day2/donguri-kyowakoku-namba.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Donguri+Kyowakoku+Namba"
        },
        {
          type: "official",
          url: "https://benelic.com/donguri/"
        }
      ]
    },
    {
      time: "18:30 前往",
      place: "道頓堀",
      address: "",
      transport: "步行",
      activity: "橡子共和國 → 道頓堀。",
      estimatedCostText: "觀光船票價，成人 JPY ¥2,000、兒童 JPY ¥1,000",
      routeInfo: "約 5 分，400 公尺。",
      note: "觀光船需先購票",
      imageDetails: [
        {
          src: "assets/images/spots/day2/dotonbori.webp",
          title: "道頓堀",
          description: "橡子共和國 → 道頓堀。"
        },
        {
          src: "assets/images/spots/day2/food/food-dotonbori.webp",
          title: "道頓堀美食攻略",
          description: "道頓堀晚餐與小吃備案，可與觀光船或夜景散步一起安排。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Dotonbori+Osaka"
        }
      ]
    },
    {
      time: "視情況選擇",
      place: "心齋橋",
      address: "",
      transport: "步行",
      activity: "道頓堀 → 心齋橋。",
      estimatedCostText: null,
      note: "約 10 分，700 公尺。",
      imageDetails: [
        {
          src: "assets/images/spots/day2/shinsaibashi.webp",
          title: "心齋橋",
          description: "道頓堀 → 心齋橋。"
        },
        {
          src: "assets/images/spots/day2/food/food-shinsaibashi.webp",
          title: "心齋橋美食攻略",
          description: "心齋橋商店街周邊美食備案，適合逛街時順路選擇。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Shinsaibashi+Osaka"
        },
        {
          type: "official",
          url: "https://www.shinsaibashi.or.jp/en/"
        }
      ]
    },
    {
      time: "20:10 車次",
      place: "難波站 → 花園町站",
      address: "",
      transport: "Y四橋線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "往住之江公園方向。",
      estimatedCostText: "成人JPY ¥190，兒童JPY ¥85",
      routeInfo: "約 4 分，2 站",
      note: "5人共JPY ¥845，難波站 → 花園町站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/Jey8Pms8WwVFGXYA7"
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
      time: "20:30 抵達",
      place: "返回旅館",
      address: "",
      transport: "步行",
      activity: "花園町站 → 旅館。",
      estimatedCost: null,
      routeInfo: "步行約 3 分，280 公尺。",
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
