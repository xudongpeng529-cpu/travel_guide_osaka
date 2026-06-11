// Day 5｜京都東山一日遊
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_5 = {
  day: 5,
  date: "2026/06/19",
  title: "京都",
  theme: "",
  intro: "清水寺、三年坂、二年坂一路散步至八坂神社與祇園，下午依體力安排建仁寺、錦市場、河原町，時間足夠再考慮伏見稻荷備案。",
  dayCard: {
    image: "assets/images/day-cards/day5.webp",
    title: "Day 5",
    description: "京都"
  },
  schedule: [
    {
      time: "07:10 前往",
      place: "旅館 → 萩之茶屋站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "約 2 分，110 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/iwTKCbTgkQhFxPDo9"
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
      time: "07:23 車次",
      place: "萩之茶屋站 → 天下茶屋站",
      address: "",
      transport: "NK南海高野線",
      transportStyle: {
      background: "#66ee88ee",
      color: "#ffffff"
      },
      activity: "各站皆停",
      estimatedCostText: "成人JPY ¥180，兒童JPY ¥90",
      routeInfo: "約2分，1 站",
      note: "5人共JPY ¥810，萩之茶屋車站 → 天下茶屋站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/wmbRS5EV6pMnveaY9"
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
      time: "07:41 車次",
      place: "天下茶屋 → 淡路",
      address: "",
      transport: "K堺筋線 / HK阪急千里線",
      transportStyle: {
      background: "#442200ee",
      color: "#ffffff"
      },
      activity: "普通車 → 往北千里方向。同班車直通，不用換車。",
      estimatedCostText: "成人JPY ¥700，兒童JPY ¥350",
      routeInfo: "約 25 分，11 站。",
      note: "5人共JPY ¥3,150，天下茶屋站 → 京都河原町",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/f6VFzsTi5mUMjZ4Q7"
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
      time: "轉乘 08:12 車次",
      place: "淡路 → 京都河原町",
      address: "",
      transport: "HK阪急京都線",
      transportStyle: {
      background: "#442200ee",
      color: "#ffffff"
      },
      activity: "往京都河原町方向，坐到終點站。",
      estimatedCostText: "",
      routeInfo: "約 43 分，8 站。",
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
      time: "09:01 車次",
      place: "京都河原町 → 四條河原町 → 清水道",
      address: "",
      transport: "207號公車",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },      
      activity: "步行 → 四條河原町 → 公車 → 清水寺。",
      estimatedCostText: "成人JPY ¥230，兒童JPY ¥115",
      routeInfo: "約 9 分，4 站。",
      note: "後門上車、前門下車付費，5人共JPY ¥1,035，可刷 ICOCA / 交通卡。",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/5NhBedk3MpfpnSSc9"
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
      time: "09:30 抵達",
      place: "清水寺",
      address: "",
      transport: "步行",
      activity: "清水道 → 清水寺。",
      estimatedCostText: "門票成人JPY ¥500，兒童JPY ¥200",
      note: "5人共JPY ¥2,200，預計停留1.5小時。",
      images: [
        "assets/images/spots/day5/kiyomizu-dera.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Kiyomizu-dera+Kyoto"
        },
        {
          type: "official",
          url: "https://www.kiyomizudera.or.jp"
        }
      ]
    },
    {
      time: "11:00 前往",
      place: "三年坂",
      address: "",
      transport: "步行",
      activity: "清水寺 → 三年坂。",
      estimatedCost: null,
      routeInfo: "約 3 分，240 公尺。",
      note: "預計停留1小時。",
      images: [
        "assets/images/spots/day5/sannenzaka.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Sannenzaka+Kyoto"
        }
      ]
    },
    {
      time: "12:00 前往",
      place: "二年坂",
      address: "",
      transport: "步行",
      activity: "三年坂 → 二年坂。",
      estimatedCost: null,
      routeInfo: "約 3 分，260 公尺。",
      note: "預計停留1小時。",
      images: [
        "assets/images/spots/day5/ninenzaka.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Ninenzaka+Kyoto"
        }
      ]
    },
    {
      time: "13:00 前往",
      place: "八坂神社",
      address: "",
      transport: "步行",
      activity: "二年坂 → 八坂神社。",
      estimatedCost: null,
      routeInfo: "約 11 分，800 公尺。",
      note: "預計停留1小時。",
      images: [
        "assets/images/spots/day5/yasaka-shrine-kyoto.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Yasaka+Shrine+Kyoto"
        },
        {
          type: "official",
          url: "https://www.yasaka-jinja.or.jp"
        }
      ]
    },
    {
      time: "14:00 前往",
      place: "祇園四條河道",
      address: "",
      transport: "步行",
      activity: "八坂神社 → 祇園四條河道。",
      estimatedCostText: "",
      routeInfo: "約 4 分，300 公尺。",
      note: "預計停留30分鐘。",
      images: [
        "assets/images/spots/day5/gion-shijo-riverside.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Gion+Shijo+Kyoto"
        }
      ]
    },
    {
      time: "14:30 前往",
      place: "建仁寺",
      address: "",
      transport: "步行",
      activity: "祇園四條河道 → 建仁寺。",
      estimatedCostText: "成人：JPY ¥600～¥800，兒童：JPY ¥300～¥400",
      routeInfo: "約 5 分，350 公尺。",
      note: "5人共JPY ¥2,700~3,600，預計停留30分鐘。",
      images: [
        "assets/images/spots/day5/kenninji-temple.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Kenninji+Temple+Kyoto"
        },
        {
          type: "official",
          url: "https://www.kenninji.jp"
        }
      ]
    },
    {
      time: "15:00 前往",
      place: "錦市場",
      address: "",
      transport: "步行",
      activity: "建仁寺 → 錦市場。",
      estimatedCostText: "",
      routeInfo: "約 9 分，650 公尺。",
      note: "可安排小吃、甜點、伴手禮，也可作為下午補餐點。",
      imageDetails: [
        {
          src: "assets/images/spots/day5/nishiki-market.webp",
          title: "錦市場",
          description: "建仁寺 → 錦市場。"
        },
        {
          src: "assets/images/spots/day5/food/food-kyoto.webp",
          title: "京都美食攻略",
          description: "京都市區美食備案，可搭配錦市場與河原町行程安排。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Nishiki+Market+Kyoto"
        },
        {
          type: "official",
          url: "https://www.kyoto-nishiki.or.jp"
        }
      ]
    },
    {
      time: "16:00 前往",
      place: "河原町",
      address: "",
      transport: "步行",
      activity: "錦市場 → 河原町商圈。",
      estimatedCostText: "",
      routeInfo: "約 7 分，550 公尺。",
      note: "預計停留1~2小時。",
      images: [
        "assets/images/spots/day5/kawaramachi.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Kawaramachi+Kyoto"
        }
      ]
    },
    {
      time: "時間足夠備案",
      place: "伏見稻荷大社",
      address: "",
      transport: "KH京阪本線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },
      activity: "祇園四條 → 伏見稻荷。",
      estimatedCostText: "",
      routeInfo: "約 8 分，5 站。",
      note: "若 17:18 前仍有體力可考慮；實際前往後，回程需從伏見稻荷重新查路線，不能直接接京都河原町 18:04 車次。",
      imageDetails: [
        {
          src: "assets/images/spots/day5/fushimi-inari-taisha.webp",
          title: "伏見稻荷大社",
          description: "京都代表神社之一，時間足夠時可作為加排行程。"
        },
        {
          src: "assets/images/spots/day5/senbon-torii-gates.webp",
          title: "千本鳥居",
          description: "伏見稻荷大社代表景觀。"
        }
      ],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/GM8HMzLiXZXBWoiZ6"
        },
        {
          type: "official",
          url: "https://maps.app.goo.gl/gJVEECNRdaaoKTV18"
        },        
      ]
    },
    {
      time: "18:04 車次",
      place: "京都河原町 → 淡路",
      address: "",
      transport: "HK阪急京都線",
      transportStyle: {
      background: "#442200ee",
      color: "#ffffff"
      },
      activity: "往大阪方向。",
      estimatedCostText: "JPY ¥3,150",
      routeInfo: "約 37 分，8 站。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/xMYkeRw6kHoxdVrb7"
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
      time: "同班車",
      place: "淡路 → 天下茶屋站",
      address: "",
      transport: "HK阪急千里線 / K堺筋線",
      transportStyle: {
      background: "#cc7700ee",
      color: "#ffffff"
      },
      activity: "同班車直通，不用換車。",
      estimatedCostText: "",
      routeInfo: "約43分，10站。",
      note: "路線名稱中途會變更，但同班車直通。",
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
      time: "19:33 車次",
      place: "天下茶屋站 → 萩之茶屋站",
      address: "",
      transport: "NK南海高野線",
      transportStyle: {
      background: "#66ee88ee",
      color: "#ffffff"
      },
      activity: "各站皆停。",
      estimatedCostText: "成人JPY ¥180，兒童JPY ¥90",
      routeInfo: "約 2 分，1 站。",
      note: "5人共JPY ¥810，天下茶屋站 → 萩之茶屋站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/PtHtwzjrFtAL1mPZ9"
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
      time: "19:40 抵達",
      place: "返回旅館",
      address: "",
      transport: "步行",
      activity: "萩之茶屋站 → 旅館。",
      estimatedCost: null,
      routeInfo: "步行約 1 分，110 公尺。",
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
