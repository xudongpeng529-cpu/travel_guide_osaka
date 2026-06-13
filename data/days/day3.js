// Day 3｜環球影城一日
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_3 = {
  day: 3,
  date: "2026/06/17",
  title: "環球影城",
  theme: "",
  intro: "下載ＡＰＰ，線上查詢表演時間",
  dayCard: {
    image: "assets/images/day-cards/day3.webp",
    title: "Day3",
    description: "環球影城"
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
      note: "有超商可先買早餐，或前一天先買",
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
      time: "06:41 車次",
      place: "新今宮站 → 西九條站",
      address: "",
      transport: "O大阪環狀線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },
      activity: "往天王寺方向。",
      estimatedCostText: "成人JPY ¥200，兒童JPY ¥100",
      routeInfo: "約 10 分，5 站",
      note: "5人共JPY ¥900，新今宮站 → 環球城",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/8zcd8pZ3wS7SHysu9"
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
      time: "06:57 車次",
      place: "西九條站 → 環球影城",
      address: "",
      transport: "JR夢咲線",
      transportStyle: {
      background: "#0011ee",
      color: "#ffffff"
      },
      activity: "轉車 → 普通車 → 往櫻島方向。",
      estimatedCostText: "",
      routeInfo: "約 6 分，2 站。",
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
      time: "07:30 抵達",
      place: "大阪環球影城",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCostText: "門票 NT$8,726",
      note: "kkday，線上購票",
      imageDetails: [
        {
          src: "assets/images/spots/day3/universal-studios-japan-entrance.webp",
          title: "大阪環球影城入口",
          description: "抵達後先完成安檢與入園，門票 QR Code、手機與水杯建議提前準備好。"
        },
        {
          src: "assets/images/spots/day3/universal-studios-japan-map.webp",
          title: "USJ 園區地圖",
          description: "入園後建議搭配 USJ 官方 App 查看地圖、排隊時間與整理券狀態。"
        },
        {
          src: "assets/images/spots/day3/jaws-usj.webp",
          title: "大白鯊區域",
          description: "經典園區拍照與設施區域，可依當天排隊時間彈性安排。"
        },
        {
          src: "assets/images/spots/day3/minions-usj.webp",
          title: "小黃人園區",
          description: "適合拍照與安排室內設施，下午想避暑或休息時可列入備案。"
        },
        {
          src: "assets/images/spots/day3/donkey-kong-country-gate.webp",
          title: "咚奇剛園區入口",
          description: "任天堂世界熱門區域之一，若有整理券或排隊時間可接受，可優先安排。"
        },
        {
          src: "assets/images/spots/day3/donkey-kong-country-usj.webp",
          title: "咚奇剛瘋狂礦車",
          description: "熱門設施，建議依 USJ App 排隊時間與整理券狀況動態判斷是否優先遊玩。"
        },
        {
          src: "assets/images/spots/day3/hogwarts-castle-usj.webp",
          title: "霍格華茲城堡",
          description: "哈利波特園區代表景點，傍晚或晚上拍照氛圍很好。"
        },
        {
          src: "assets/images/spots/day3/wizarding-world-harry-potter-usj.webp",
          title: "哈利波特魔法世界",
          description: "適合傍晚慢慢散步、拍照與補玩禁忌之旅、鷹馬飛行等設施。"
        },
        {
          src: "assets/images/spots/day3/super-nintendo-world-usj.webp",
          title: "超級任天堂世界",
          description: "USJ 熱門核心區域，入園後請優先確認整理券與可入場時段。"
        }
      ],
      links: [
        {
          type: "map",
          label: "",
          url: "https://maps.google.com/?q=Universal+Studios+Japan"
        },
        {
          type: "official",
          url: "https://www.usj.co.jp"
        }
      ]
    },
    {
      time: "攻略",
      place: "USJ 遊玩攻略",
      transport: "園區攻略",
      address: "",
      activity: "入園前準備、App 整理券、不買快速通關策略與安檢提醒。",
      estimatedCost: "",
      note: "",
      imageDetails: [
        {
          src: "assets/images/references/usj-guide-1-entry-preparation.webp",
          title: "USJ 攻略 1｜入園前準備",
          description: "出發前先準備 USJ App、門票 QR Code、行動電源、雨衣、水杯與舒適好走的鞋。"
        },
        {
          src: "assets/images/references/usj-guide-2-app-and-timed-entry.webp",
          title: "USJ 攻略 2｜App 與整理券",
          description: "不買快速通關時，USJ App 是現場作戰核心。入園後先確認門票綁定、整理券與熱門設施等待時間。"
        },
        {
          src: "assets/images/references/usj-guide-3-park-strategy.webp",
          title: "USJ 攻略 3｜不買快速通關遊玩策略",
          description: "早上優先熱門區域，中午穿插表演與休息，下午依排隊時間動態調整，晚上視體力收尾。"
        },
        {
          src: "assets/images/references/usj-guide-4-security-and-baggage.webp",
          title: "USJ 攻略 4｜安檢、寄物與禁帶提醒",
          description: "USJ 安檢接近機場規格，刺激設施前請先整理包包、眼鏡、帽子與貴重物品。"
        }
      ],
      links: [
        {
          type: "map",
          label: "",
          url: ""
        },
        {
          type: "map",
          label: "",
          url: ""
        }
      ]
    },

    {
      time: "20:00 返程",
      place: "園區 → 環球城站",
      address: "",
      transport: "步行",
      activity: "",
      estimatedCost: null,
      note: "離園前記得確認退稅、收據與隨身物品。",
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
      time: "20:06 車次",
      place: "環球影城 → 西九條站",
      address: "",
      transport: "JR夢咲線",
      transportStyle: {
      background: "#0011ee",
      color: "#ffffff"
      },     
      activity: "普通車 → 往西九條方向。",
      estimatedCostText: "成人JPY ¥200，兒童JPY ¥100",
      routeInfo: "約 6 分，2 站。",
      note: "5人共JPY ¥900，環球城 → 新今宮站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/Hb7hHQeZPni6FmZv6"
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
      time: "換乘20:14 車次",
      place: "西九條站 → 新今宮站",
      address: "",
      transport: "O大阪環狀線",
      transportStyle: {
      background: "#ee0011",
      color: "#ffffff"
      },      
      activity: "換乘 → 大阪環狀線 → 往和歌山方向。",
      estimatedCostText: "",
      routeInfo: "約 8 分，3 站。",
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
      time: "21:00 抵達",
      place: "旅館",
      address: "",
      transport: "步行",
      activity: "新今宮站 → 旅館。",
      estimatedCost: null,
      routeInfo: "約 12 分，800 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/7WfSfv5R9dupkYRE9"
        }
      ]
    }
  ]
};
