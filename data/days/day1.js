// Day 1｜抵達大阪・入住準備日
// 修改這一天的行程、圖片、Google Map、官網、票券，請改這個檔案。

window.TRIP_DAY_1 = {
  day: 1,
  date: "2026/06/15",
  title: "出發大阪・GO!",
  theme: "",
  intro: "以順利抵達、入境、入住為主，16:00 後可依體力自由安排大阪市區行程。",
  dayCard: {
    image: "assets/images/day-cards/day1.webp",
    title: "Day 1",
    description: "抵達大阪、入住"
  },
  schedule: [
    {
      time: "03:00 出發",
      place: "家 → 桃園機場 T1。",
      address: "",
      transport: "自駕",
      activity: "",
      estimatedCostText: "停車費8天約 NT$3,920",
      routeInfo: "車程約 2 小時，約 167 公里。",
      note: "出門檢查，清單確認",
      images: [],
      links: [
        {
          type: "map",
          label: "到機場路線",
          url: "https://maps.app.goo.gl/zvhH7G6WFrtCJGeh7"
        }
      ]
    },
    {
      time: "05:00 抵達",
      place: "桃園機場 T1",
      address: "",
      transport: "步行",
      activity: "第一航廈 → 櫃檯 1、2，7:00 前要完成報到與安檢。",
      estimatedCost: null,
      note: "訂位碼 RQB83G，2MHGG2。",
      imageDetails: [
        {
          src: "assets/images/flight/flight-departure-zh.webp",
          title: "去程航班資訊｜中文",
          description: "台北 → 大阪"
        },
        {
          src: "assets/images/flight/flight-departure-en.webp",
          title: "去程航班資訊｜英文",
          description: "Taipei → Osaka。"
        }
      ],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          url: "https://www.vietjetair.com/zh-TW/checkin"
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "07:45 起飛",
      place: "桃園機場 T1 → 關西機場 T1",
      address: "",
      transport: "飛機",
      transportStyle: {
      background: "#0004ff",
      color: "#ffffff"
      },      
      activity: "VZ566 → 大阪。",
      estimatedCostText: "機票 5 人 NT$60,172",
      routeInfo: "飛行時間約 2 小時 40 分鐘。",
      note: "機型 BOEING B737。",
      imageDetails: [
        {
          src: "assets/images/spots/day1/taoyuan-airport-t1.webp",
          title: "關西機場",
          description: ""
        },
        {
          src: "assets/images/vjw/hsu_dung_peng.webp",
          title: "許東朋",
          description: "hsu_dung_peng"
        },
        {
          src: "assets/images/vjw/li_ying_ying.webp",
          title: "李盈楹",
          description: "li_ying_ying"
        },
        {
          src: "assets/images/vjw/hsu_chun_teng.webp",
          title: "許駿騰",
          description: "hsu_chun_teng"
        },
        {
          src: "assets/images/vjw/hsu_chun_cheng.webp",
          title: "許浚承",
          description: "hsu_chun_cheng"
        },
        {
          src: "assets/images/vjw/hsu_chun_chuan.webp",
          title: "許駿權",
          description: "hsu_chun_chuan"
        },
      ],
      links: [
        {
          type: "map",
          url: ""
        },
        {
          type: "official",
          label: "VJW官網",
          url: "https://www.vjw.digital.go.jp/main/#/vjwpco001"
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "11:25 抵達",
      place: "抵達關西機場 T1",
      address: "",
      transport: "步行",
      activity: "入境、領行李後 → 南海電鐵 2 號月台。",
      estimatedCost: null,
      note: "開通esim，要辦理兒童icoca。",
      imageDetails: [
        {
          src: "assets/images/spots/day1/kansai-airport-t1.webp",
          title: "關西機場",
          description: "入境、領行李後 → 南海電鐵 2 號月台。"
        },
        {
          src: "assets/images/references/child-icoca-application-guide.webp",
          title: "兒童記名 ICOCA｜辦卡指南",
          description: "第一天可在 JR 關西機場站綠色窗口申辦，需攜帶小朋友護照。"
        },
        {
          src: "assets/images/references/child-icoca-usage-guide.webp",
          title: "兒童記名 ICOCA｜使用規範",
          description: "兒童卡會自動扣半價車資，刷卡時會有特殊提示音，請勿與成人卡混用。"
        },
        {
          src: "assets/images/references/child-icoca-refund-guide.webp",
          title: "兒童記名 ICOCA｜退卡提醒",
          description: "若旅程結束要退卡，請預留臨櫃處理時間並確認餘額、押金與手續費規則。"
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
      time: "12:39 車次",
      place: "關西機場",
      address: "",
      transport: "南海電鐵",
      transportStyle: {
      background: "#1100ff",
      color: "#ffffff"
      },
      activity: "關西機場 → 南海難波站",
      estimatedCostText: "成人 4 位 JPY ¥3,880，兒童 1 位 JPY ¥485，合計 JPY ¥4,365。",
      routeInfo: "約 45 分，11 站，不需換車。",
      note: "",
      imageDetails: [
        {
          src: "assets/images/spots/day1/nankai-namba-station.webp",
          title: "南海難波站",
          description: "抵達難波後依站內指標出站，接續前往大阪市區或轉乘地鐵。"
        },
      ],
      links: [
        {
          type: "map",
          label: "搭乘班次",
          url: "https://maps.app.goo.gl/fgh973MTG8XjyhXu8"
        },
        {
          type: "official",
          label: "南海電鐵時刻表",
          url: "https://kensaku.nankai.co.jp/tc/pc/N1?USR=PC&sf=5130-%E9%97%9C%E8%A5%BF%E6%A9%9F%E5%A0%B4&st=5728-%E9%9B%A3%E6%B3%A2%28%E5%8D%97%E6%B5%B7%29&rsf=%3F%3F%3F%3F&rst=%3F%3F&searchKIX=0"
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "13:40 前往 → 14:00 抵達",
      place: "難波八阪神社",
      address: "",
      transport: "步行",
      activity: "南海難波站 → 難波八阪神社。",
      estimatedCostText: null,
      routeInfo: "步行約 8 分，約 550 公尺。",
      note: "預計停留30分鐘",
      imageDetails: [
        {
          src: "assets/images/spots/day1/yasaka-shrine-osaka.webp",
          title: "難波八阪神社",
          description: "有名的獅子神社。"
        },
      ],
      links: [
        {
          type: "map",
          url: "https://maps.app.goo.gl/HaSrr5oxFPGm23uA7"
        },
        {
          type: "official",
          url: "https://nambayasaka.jp/"
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "14:30 前往",
      place: "大國町站",
      address: "",
      transport: "步行",
      activity: "難波八阪神社 → 大國町站。",
      estimatedCostText: null,
      routeInfo: "步行約 10 分，約 650 公尺。",
      note: "",
      images: [],
      links: [
        {
          type: "map",
          label: "行走路線",
          url: "https://maps.app.goo.gl/nNV8sRQVaHbcm7cc7"
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
      time: "14:47 車次",
      place: "大國町站 → 花園町站",
      address: "",
      transport: "Y四橋線",
      transportStyle: {
      background: "#6688ee",
      color: "#ffffff"
      },
      activity: "往住之江公園方向。",
      estimatedCostText: "成人JPY ¥190，兒童JPY ¥85",
      currency: "JPY",
      routeInfo: "約 2 分，1 站。",
      note: "5人共JPY ¥845，大國町站 → 花園町站",
      images: [],
      links: [
        {
          type: "map",
          label: "乘車路線",
          url: "https://maps.app.goo.gl/5dBZqm4RpHc4Sc4g7"
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
      time: "16:00 可入住",
      place: "桜町の宿a",
      address: "日本大阪府大阪市西成區花園北 2-9-7",
      transport: "步行",
      activity: "花園町站 → 旅館。",
      estimatedCostText: "包棟住宿7晚 NT$6,691",
      routeInfo: "步行約 3 分，約 280 公尺。",
      note: "電話：+81 80 4335 4131。",
      imageDetails: [
        {
          src: "assets/images/spots/day1/sakuramachi-no-yado-a.webp",
          title: "桜町の宿a",
          description: "大門"
        },
        {
          src: "assets/images/spots/day1/sakuramachi-no-yado-a-1.webp",
          title: "桜町の宿a",
          description: "客廳"
        },
                {
          src: "assets/images/spots/day1/sakuramachi-no-yado-a-2.webp",
          title: "桜町の宿a",
          description: "餐廳"
        },
                {
          src: "assets/images/spots/day1/sakuramachi-no-yado-a-3.webp",
          title: "桜町の宿a",
          description: "臥室"
        },
      ],
      links: [
        {
          type: "map",
          label: "旅館地圖",
          url: "https://maps.app.goo.gl/oQREz1X7W4GSeFh1A"
        },
        {
          type: "official",
          url: "https://www.booking.com/index.zh-tw.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaOcBiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuALq8ZDRBsACAdICJDgxNjI1N2FmLWFmMjUtNDFlNS04NzBmLTUzNjliYTM0MTU4Y9gCAeACAQ&chal_t=1780988308570&force_referer="
        },
        {
          type: "ticket",
          url: ""
        }
      ]
    },
    {
      time: "16:00 後",
      place: "自由活動",
      address: "",
      transport: "步行",
      activity: "入住後視體力狀況自由安排行程。",
      estimatedCostText: null,
      note: "可去通天閣、黑門市場、道頓堀、心齋橋。",
      imageDetails: [
        {
          src: "assets/images/spots/day1/dotonbori.webp",
          title: "道頓堀",
          description: "固力果跑者、河岸夜景"
        },
        {
          src: "assets/images/spots/day1/kuromon-market.webp",
          title: "黑門市場",
          description: "海鮮、晚餐"
        },
                {
          src: "assets/images/spots/day1/tsutenkaku.webp",
          title: "通天閣",
          description: "炸串、夜景"
        },
                {
          src: "assets/images/spots/day1/shinsaibashi.webp",
          title: "心齋橋",
          description: "血拼、逛街"
        },
      ],
      links: [
        {
          type: "map",
          label: "道頓堀",
          url: "https://maps.app.goo.gl/qHTx6r3RUdaDgg8S6"
        },
        {
          type: "map",
          label: "黑門市場",
          url: "https://maps.app.goo.gl/Unf2aK5Qkn38MMvX9"
        },
        {
          type: "map",
          label: "心齋橋",
          url: "https://maps.app.goo.gl/DWGY6mqex6qXgm7UA"
        },
        {
          type: "map",
          label: "通天閣",
          url: "https://maps.app.goo.gl/Z8NhSRiNkTJWgxNs7"
        }        
      ]
    },
    {
      time: "晚餐備案",
      place: "大阪市區美食攻略",
      address: "",
      transport: "步行 / 電車",
      activity: "入住後若體力足夠，可依當天想去的區域選擇晚餐與小吃。",
      estimatedCostText: "依現場消費",
      note: "這些是備案，不一定要全部安排；可從通天閣、黑門市場、道頓堀、心齋橋擇一。",
      imageDetails: [
        {
          src: "assets/images/spots/day1/food/food-dotonbori.webp",
          title: "道頓堀美食攻略",
          description: "入住後可依體力安排道頓堀晚餐、小吃或夜間散步。"
        },
        {
          src: "assets/images/spots/day1/food/food-kuromon-market.webp",
          title: "黑門市場美食攻略",
          description: "黑門市場周邊小吃與海鮮備案，可視當天時間安排。"
        },
        {
          src: "assets/images/spots/day1/food/food-tsutenkaku.webp",
          title: "通天閣美食攻略",
          description: "通天閣周邊串炸與晚餐備案，可與夜景散步一起安排。"
        },
        {
          src: "assets/images/spots/day1/food/food-shinsaibashi.webp",
          title: "心齋橋美食攻略",
          description: "心齋橋商店街周邊晚餐與小吃備案，適合逛街時順路選擇。"
        }
      ],
      links: []
    },
    {
      time: "住宿附近備案",
      place: "Marukome 關東煮、丸節沾麵",
      address: "",
      activity: "",
      estimatedCostText: "依現場為主",
      note: "不需要訂位，懶得跑遠，附近就能吃",
      imageDetails: [
        {
          src: "assets/images/spots/day1/food/oden_marukome.webp",
          title: "Marukome 關東煮",
          description: "關東煮專賣店，湯頭清爽，適合當晚餐或宵夜。"
        },
        {
          src: "assets/images/spots/day1/food/ramen-marubushi.webp",
          title: "丸節沾麵",
          description: "日式拉麵店，湯頭香濃，麵條彈牙。"
        }
      ],      
      links: [
        {
          type: "map",
          label: "Marukome 關東煮",
          url: "https://maps.app.goo.gl/Y55TwVzQxAfHuxr7A"
        },
        {
          type: "map",
          label: "丸節沾麵",
          url: "https://maps.app.goo.gl/kJjgurLrYnA4yHAZ9"
        }
      ]
    }

  ]
};
