// Day 8｜回程返家日
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_8 = {
  day: 8,
  date: "2026/06/22",
  title: "回家",
  theme: "",
  intro: "回程日以退房、行李整理、前往關西機場與搭機返台為主，不安排景點或購物行程。",
  dayCard: {
    image: "assets/images/day-cards/day8.webp",
    title: "Day 8",
    description: "回家"
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
      note: "退房前確認護照、錢包、手機、充電器、行李與房內物品。",
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
      time: "08:35 車次",
      place: "新今宮站 → 關西機場",
      address: "",
      transport: "南海本線",
      transportStyle: {
      background: "#1100ff",
      color: "#ffffff"
      },
      activity: "往關西機場方向。",
      estimatedCostText: "成人JPY ¥970，兒童JPY ¥485",
      routeInfo: "約 34 分，8 站。",
      note: "5人共JPY ¥4,365，新今宮站 → 關西機場。",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/9qG9i7Fe1HzgRYkK8"
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
      place: "泉佐野站 → 關西機場",
      address: "",
      transport: "南海機場線",
      transportStyle: {
      background: "#dd00ff",
      color: "#ffffff"
      },
      activity: "同班車直通，不用下車換乘。",
      estimatedCostText: "",
      routeInfo: "約 9 分，2 站。",
      note: "路線名稱中途會變更，但照原車坐到關西機場。",
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
      time: "09:10 抵達",
      place: "關西機場 T1",
      address: "",
      transport: "步行",
      activity: "抵達關西機場後，前往 VietJet 報到櫃檯。",
      estimatedCost: null,
      routeInfo: "",
      note: "先確認航廈、報到櫃檯、托運行李重量與隨身行李規定。",
      images: [],
      links: []
    },
    {
      time: "報到 / 安檢",
      place: "關西機場 T1",
      address: "",
      transport: "步行",
      activity: "VZ567 回程報到、托運行李、安檢與出境。",
      estimatedCost: null,
      note: "預訂碼 ND2UHR、UKZF9M。行李多，建議提早完成托運與安檢。",
      imageDetails: [
        {
          src: "assets/images/flight/flight-return-zh.webp",
          title: "回程航班資訊｜中文",
          description: "大阪 → 台北"
        },
        {
          src: "assets/images/flight/flight-return-en.webp",
          title: "回程航班資訊｜英文",
          description: "Osaka → Taipei"
        }
      ],
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
      time: "12:25 起飛",
      place: "關西機場 T1 → 桃園機場 T1",
      address: "",
      transport: "飛機",
      transportStyle: {
      background: "#0004ff",
      color: "#ffffff"
      }, 
      activity: "VZ567 → 台北。",
      estimatedCostText: "",
      routeInfo: "飛行時間約 3 小時。",
      note: "機型 BOEING B737。",
      images: [
        "assets/images/spots/day8/kansai-airport-t1.webp"
      ],
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
      time: "14:25 抵達",
      place: "桃園機場 T1",
      address: "",
      transport: "步行",
      activity: "入境、領行李，確認行李件數後前往取車。",
      estimatedCost: null,
      routeInfo: "",
      note: "回程行李較多，先確認托運行李、手提行李與護照都在身上。",
      images: [
        "assets/images/spots/day8/taoyuan-airport-t1.webp"
      ],
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
      time: "取車後回家",
      place: "桃園機場 T1 → 回家",
      address: "",
      transport: "自駕",
      activity: "",
      estimatedCostText: "",
      routeInfo: "車程約 2 小時，約 167 公里。",
      note: "取車後再出發，視行李、入境與取車時間彈性調整。",
      images: [],      
      links: [
        {
          type: "map",
          label: "行車路線",
          url: "https://maps.app.goo.gl/KEbr3xQcHSZNZG1k9"
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
