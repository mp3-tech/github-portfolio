export const userData = {
  githubUser: 'mp3-tech', 
  devUsername: "mp3-tech", // 拿掉中文，避免 API 抓取錯誤
  github: 'https://github.com/mp3-tech', 
  
  // ▼▼▼ 導致 auth 報錯的元凶就是缺少這些！我幫你全部填上安全網址 ▼▼▼
  facebook: 'https://github.com/mp3-tech',
  linkedIn: 'https://github.com/mp3-tech',
  twitter: 'https://github.com/mp3-tech',
  stackOverflow: 'https://github.com/mp3-tech',
  leetcode: 'https://github.com/mp3-tech',
  // ▲▲▲ ==================================================== ▲▲▲

  resume: "https://drive.google.com/file/d/1JTIlvBaNX7q4mSlPo9y3yXnVApGP68On/view?usp=sharing", 
  skills: [
    'C++', 'PHP', 'MySQL', 'n8n', 'Python', 'Solidity',
    'Git', 'Docker', 'Information Organization',
    'PID Control', 'Project Management (PRASI/WBS)'
  ],
  timezone: '+8',
  projects: [
    {
      title: "2022 全國自走車大賽季軍 (InnoRacer)",
      description: "獲得第18屆全國高中職組季軍。負責核心控制邏輯與 PID 參數調教，實作 13 階動態限速模型，提升車輛在高速行駛下的循跡穩定性。",
      image: "/獎狀.jpg", // 已修正為小寫，確保 Vercel 抓得到
      tags: ["C++", "PID Control", "Robotics", "Optimization"],
      github: "https://github.com/mp3-tech/InnoRacer-Speed-Optimization",
      link: "https://github.com/mp3-tech/InnoRacer-Speed-Optimization"
    },
    {
      title: "台灣大眾運輸演變：數位資料庫檢索專題",
      description: "透過『運輸科技』核心關鍵字組織九大歷史轉折影像，展現數位檔案管理與媒體敘事能力。",
      image: "https://i.ytimg.com/vi/JSOfh_9FYsM/maxresdefault.jpg",
      tags: ["Digital Archiving", "Information Retrieval"],
      github: "https://www.youtube.com/watch?v=JSOfh_9FYsM",
      link: "https://www.youtube.com/watch?v=JSOfh_9FYsM"
    }
  ]
};