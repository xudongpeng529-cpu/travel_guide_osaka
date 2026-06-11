// Day 6｜大阪港灣一日
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_6 = {
  day: 6,
  date: "2026/06/20",
  title: "大鳥大社、大阪港",
  theme: "",
  intro: "上午前往大鳥大社參拜，午後移動到大阪港，安排天保山購物中心、聖瑪麗亞觀光船、大摩天輪與海遊館，晚上視體力前往道頓堀晚餐。",
  dayCard: {
    image: "assets/images/day-cards/day6.webp",
    title: "Day 6",
    description: "大鳥大社、大阪港"
  },
  schedule: [
    {
      time: "08:00 前往",
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
      time: "08:19 車次",
      place: "新今宮站 → 鳳站",
      address: "",
      transport: "R阪和線",
      transportStyle: {
      background: "#cc7700ee",
      color: "#ffffff"
      },      
      activity: "快速電車 → 往關西機場 / 和歌山方向。",
      estimatedCostText: "成人JPY ¥320，兒童JPY ¥160",
      routeInfo: "約 16 分，3 站。",
      note: "5人共JPY ¥1,440，新今宮站 → 鳳站。",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/2KGMn3XEuCuHuUuL8"
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
      time: "08:43 前往",
      place: "鳳站 → 大鳥大社",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "步行約 6 分，450 公尺。",
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
      time: "08:50 抵達",
      place: "大鳥大社",
      address: "",
      transport: "步行",
      activity: "參拜、抽透明籤、看御守。",
      estimatedCostText: "抽透明籤 JPY ¥300，御守 JPY ¥1,500",
      routeInfo: "步行約 6 分，450 公尺。",
      note: "預計停留約 1.5 小時。",
      images: [
        "assets/images/spots/day6/otori-taisha.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Otori+Taisha+Osaka"
        },
        {
          type: "official",
          url: "https://www.ootoritaisha.jp"
        }
      ]
    },
    {
      time: "10:30 前往",
      place: "大鳥大社 → 鳳站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "步行約 6 分，450 公尺。",
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
      time: "10:40 車次",
      place: "鳳站 → 弁天町站",
      address: "",
      transport: "R阪和線 / O大阪環狀線",
      transportStyle: {
      background: "#cc7700ee",
      color: "#ffffff"
      },      
      activity: "快速電車，途中路線名稱會變更；同班車直通，不用換車。",
      estimatedCostText: "成人JPY ¥650，兒童JPY ¥325",
      routeInfo: "約 24 分，6 站。",
      note: "5人共JPY ¥2,925，鳳站 → 大阪港站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/C9P7LWRE4vrMYGCy6"
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
      time: "11:05 車次",
      place: "弁天町站 → 大阪港站",
      address: "",
      transport: "C中央線",
      transportStyle: {
      background: "#00ee33",
      color: "#ffffff"
      }, 
      activity: "往夢洲方向。",
      estimatedCostText: "已含交通費",
      routeInfo: "約 5 分，2 站。",
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
      time: "11:30 抵達",
      place: "天保山購物中心",
      address: "",
      transport: "步行",
      activity: "大阪港站 → 天保山購物中心。",
      estimatedCostText: "",
      routeInfo: "約 6 分，400 公尺。",
      note: "可安排午餐、休息與購物。",
      images: [
        "assets/images/spots/day6/tempozan-marketplace.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Tempozan+Marketplace+Osaka"
        },
        {
          type: "official",
          url: "https://www.kaiyukan.com/thv/marketplace/"
        }
      ]
    },
    {
      time: "13:00 前往",
      place: "聖瑪麗亞觀光船",
      address: "",
      transport: "步行",
      activity: "天保山購物中心 → 聖瑪麗亞號觀光船。",
      estimatedCostText: "成人票 JPY ¥1,800，兒童票 JPY ¥900。",
      routeInfo: "步行約 1 分，50 公尺。",
      note: "5人共JPY ¥8,100",
      images: [
        "assets/images/spots/day6/santa-maria-cruise.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Santa+Maria+Cruise+Osaka"
        },
        {
          type: "official",
          url: "https://suijo-bus.osaka/intro/santamaria/"
        }
      ]
    },
    {
      time: "14:00 前往",
      place: "天保山大摩天輪",
      address: "",
      transport: "步行",
      activity: "聖瑪麗亞觀光船 → 天保山大摩天輪。",
      estimatedCostText: "成人票 JPY ¥2,000，兒童票 JPY ¥1,000。",
      routeInfo: "步行約 4 分，250 公尺。",
      note: "5人共JPY ¥9,000",
      images: [
        "assets/images/spots/day6/tempozan-giant-ferris-wheel.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Tempozan+Giant+Ferris+Wheel+Osaka"
        }
      ]
    },
    {
      time: "15:00 前往",
      place: "海遊館",
      address: "",
      transport: "步行",
      activity: "天保山大摩天輪 → 海遊館。",
      estimatedCostText: "成人票 JPY ¥2,700~3,500，兒童票 JPY ¥1,400~1,800。",
      routeInfo: "步行約 4 分，250 公尺。",
      note: "5人共JPY ¥12,200~15,800",
      images: [
        "assets/images/spots/day6/osaka-aquarium-kaiyukan.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Osaka+Aquarium+Kaiyukan"
        },
        {
          type: "official",
          url: "https://www.kaiyukan.com"
        }
      ]
    },
    {
      time: "17:13 車次",
      place: "大阪港站 → 本町站",
      address: "",
      transport: "C中央線",
      transportStyle: {
      background: "#00ee33",
      color: "#ffffff"
      }, 
      activity: "往生駒方向。",
      estimatedCostText: "成人JPY ¥290，兒童JPY ¥145",
      routeInfo: "約 12 分，5 站。",
      note: "5人共JPY ¥1,305，大阪港站 → 難波站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/Lr9e5AXzEo41PL4x6"
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
      place: "本町站 → 難波站",
      address: "",
      transport: "Y四橋線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "往住之江公園方向。",
      estimatedCostText: "",
      routeInfo: "約 3 分，2 站。",
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
      time: "17:36 抵達",
      place: "道頓堀",
      address: "",
      transport: "步行",
      activity: "難波站 → 道頓堀。",
      estimatedCostText: "",
      routeInfo: "約 5 分，400 公尺。",
      note: "晚餐、拍照、血拼備案；若體力不足可直接回旅館。",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/Adf8n8Pt1Lby4Dpz8"
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
      time: "20:26 車次",
      place: "難波站 → 花園町站",
      address: "",
      transport: "Y四橋線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "往住之江公園方向。",
      estimatedCostText: "成人JPY ¥190，兒童JPY ¥85",
      routeInfo: "約 4 分，2 站。",
      note: "5人共JPY ¥845，難波站 → 花園町站",
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
      time: "20:40 抵達",
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
