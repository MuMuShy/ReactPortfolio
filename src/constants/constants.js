export const projects = [
  {
    title: 'Crypto Tool',
    description: "透過python撰寫的桌面應用程式，可以用來記錄加密貨幣資產，即時查看加密貨幣價格。",
      image: '/images/projectCryptoTool.jpg',
      tags: ['Python', 'WebSocket', 'PySide2'],
    visit:'https://github.com/MuMuShy/CryptocurrencyTool',
    source: 'https://github.com/MuMuShy/CryptocurrencyTool/releases/tag/1.0',
    id: 0,
  },
  {
    title: 'Real Time Shooter',
    description:"透過python影像辨識，即時運算遊戲畫面並辨識出人體目標位置的自動瞄準系統。",
    image: '/images/projectShooter.jpg',
    tags: ['Python', 'OpenPose','OpenCV','CUDA'],
    source: 'https://www.youtube.com/watch?v=pX1uHqvtQEw',
    visit: 'https://github.com/MuMuShy/RealTimeShootHacker',
    id: 1,
  },
  {
    title: '虛擬貨幣網',
    description: "透過React撰寫的簡易虛擬貨幣網站，串接RapidAPI裡面的虛擬貨幣api獲得價格等資料。",
      image: '/images/projectCryptoWeb.jpg',
      tags: ['React', 'Request','CSS'],
    source: 'https://mumu.tw/ReactProject/CryptoWeb/',
    visit: 'https://github.com/MuMuShy/ReactCrypto',
    id: 2,
  },
  {
    title: '失眠聊天室',
    description: "透過firebase撰寫的即時聊天室，在失眠的夜晚也許有人能夠陪伴你。",
    image: '/images/projectCantSleep.jpg',
    tags: ['Firebase', 'JavaScript'],
    source: 'https://mumu.tw/mumu/CantSleep/',
    visit: 'https://github.com/MuMuShy/CantSleepOnlineChat',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'fiverr完成第一個外包專案', },
  { year: 2019, text: '向上國際擔任實習工程師', },
  { year: 2019, text: '成立Mumu大學程式外包團隊', },
  { year: 2020, text: '凡古興業擔任遊戲前端工程師', },
];