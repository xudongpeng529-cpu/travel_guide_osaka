// Day 7｜奈良一日遊
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_7 = {
  day: 7,
  date: "2026/06/21",
  title: "奈良",
  theme: "",
  intro: "上午從大阪前往奈良，安排東向商店街、奈良公園、東大寺與二月堂，下午視體力前往若草山，晚上回大阪難波與道頓堀晚餐散步。",
  dayCard: {
    image: "assets/images/day-cards/day7.webp",
    title: "Day 7",
    description: "奈良"
  },
  schedule: [
    {
      time: "08:00 前往",
      place: "旅館 → 花園町站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "約 5 分，350 公尺。",
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
      time: "08:16 車次",
      place: "花園町站 → 難波站",
      address: "",
      transport: "Y四橋線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "往西梅田方向。",
      estimatedCostText: "成人JPY ¥870，兒童JPY ¥435",
      routeInfo: "約 4 分，2 站。",
      note: "5人共JPY ¥3,915，花園町 → 近鐵奈良。",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/FFHJaGmEckeas4WR7"
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
      place: "難波站 → 大阪難波站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "步行約 4 分。",
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
      time: "08:24 車次",
      place: "大阪難波 → 近鐵奈良",
      address: "",
      transport: "A近鐵奈良線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },            
      activity: "快速急行 → 往近鐵奈良方向。",
      estimatedCostText: "",
      routeInfo: "約 36 分，8 站。",
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
      time: "09:00 抵達",
      place: "東向商店街",
      address: "",
      transport: "步行",
      activity: "近鐵奈良站 → 東向商店街。",
      estimatedCostText: "",
      routeInfo: "約 4 分，220 公尺。",
      note: "可先買小吃、飲料或簡單早餐，奈良美食攻略可作為午餐備案。",
      imageDetails: [
        {
          src: "assets/images/spots/day7/higashimuki-shopping-street.webp",
          title: "東向商店街",
          description: "近鐵奈良站 → 東向商店街。"
        },
        {
          src: "assets/images/spots/day7/food/food-nara.webp",
          title: "奈良美食攻略",
          description: "奈良市區餐點與小吃備案，可在東向商店街周邊彈性安排。"
        }
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Higashimuki+Shopping+Street+Nara"
        }
      ]
    },
    {
      time: "10:00 前往",
      place: "奈良公園",
      address: "",
      transport: "步行",
      activity: "東向商店街 → 奈良公園。",
      estimatedCostText: "小鹿餅乾 JPY ¥200",
      routeInfo: "約 7 分，550 公尺。",
      note: "餵鹿時注意手上的食物與紙張，小鹿會咬。",
      images: [
        "assets/images/spots/day7/nara-park.webp",
        "assets/images/spots/day7/nara-park2.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Nara+Park"
        },
        {
          type: "official",
          url: "https://www3.pref.nara.jp/park"
        }
      ]
    },
    {
      time: "12:00 前往",
      place: "東大寺",
      address: "",
      transport: "步行",
      activity: "奈良公園 → 東大寺。",
      estimatedCostText: "門票：成人JPY ¥800，兒童JPY ¥400",
      routeInfo: "約 4 分，240 公尺。",
      note: "5人共JPY ¥3,600，預計停留1小時",
      images: [
        "assets/images/spots/day7/todaiji-temple.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Todaiji+Temple"
        },
        {
          type: "official",
          url: "https://www.todaiji.or.jp"
        }
      ]
    },
    {
      time: "13:00 前往",
      place: "二月堂",
      address: "",
      transport: "步行",
      activity: "東大寺 → 二月堂。",
      estimatedCost: null,
      routeInfo: "約 8 分，600 公尺。",
      note: "可看奈良市區景色，預計停留1小時。",
      images: [
        "assets/images/spots/day7/nigatsudo-hall.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Nigatsudo+Hall"
        },
        {
          type: "official",
          url: "https://www.todaiji.or.jp"
        }
      ]
    },
    {
      time: "14:00~16:00自由活動",
      place: "奈良公園周邊休息",
      address: "",
      transport: "步行",
      activity: "可依體力安排午餐、甜點、買飲料或在奈良公園周邊慢慢散步。",
      estimatedCostText: "",
      routeInfo: "",
      note: "",
      images: [],
      links: []
    },
    {
      time: "16:00 前往",
      place: "若草山",
      address: "",
      transport: "步行",
      activity: "二月堂 / 奈良公園周邊 → 若草山。",
      estimatedCostText: "",
      routeInfo: "約 13 分，900 公尺。",
      note: "",
      images: [
        "assets/images/spots/day7/mount-wakakusa.webp"
      ],
      links: [
        {
          type: "map",
          url: "https://maps.google.com/?q=Mount+Wakakusa"
        },
        {
          type: "official",
          url: "https://www3.pref.nara.jp/park"
        }
      ]
    },
    {
      time: "18:00 前往",
      place: "若草山 → 近鐵奈良站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      routeInfo: "步行約 27 分，2 公里。",
      note: "回程步行較長，若體力不足可提早離開若草山。",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/UsN2qAUEbRaCkLtF8"
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
      time: "18:34 車次",
      place: "近鐵奈良 → 大阪難波",
      address: "",
      transport: "A近鐵奈良線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },
      activity: "快速急行 → 往大阪難波方向。",
      estimatedCostText: "成人JPY ¥680，兒童JPY ¥340",
      routeInfo: "約 36 分，8 站。",
      note: "5人共JPY ¥3,060，近鐵奈良 → 大阪難波。",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/w1menbRSd3GSjPki9"
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
      time: "19:20 抵達",
      place: "道頓堀",
      address: "",
      transport: "步行",
      activity: "大阪難波站 → 道頓堀。",
      estimatedCostText: "",
      routeInfo: "約 5 分，400 公尺。",
      note: "晚餐、最後血拼～",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/RELbcx5jKbM2J9Vu7"
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
      time: "21:05 車次",
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
      note: "5人共JPY ¥845，難波站 → 花園町站。",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/n2f7opu8Sp6anfdy6"
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
      time: "21:15 抵達",
      place: "返回旅館",
      address: "",
      transport: "步行",
      activity: "花園町站 → 旅館。",
      estimatedCostText: "",
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
