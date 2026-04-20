export const userData = {
  githubUser: 'mp3-tech', 
  devUsername: "", // 先設為空字串，防止它去抓 Dev.to 的部落格資料導致報錯
  name: "鄧凱謙 (Kai-Chien Teng)",
  designation: "Software Engineer / Information Organization Specialist",
  github: 'https://github.com/mp3-tech', 
  email: '61710mp3@gmail.com',
  phone: '',
  address: 'Taiwan',
  description: "資圖系背景的軟體開發者，擅長 PID 控制、n8n 自動化與資訊組織。",
  resumeUrl: "https://drive.google.com/file/d/1JTIlvBaNX7q4mSlPo9y3yXnVApGP68On/view?usp=sharing", 
  googleAnalyticsId: null, // 補上這個，防止 GA 元件報錯

  socialLinks: {
    github: 'https://github.com/mp3-tech',
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
  },

  // 補上這個結構，解決 auth 報錯
  contactsData: {
    email: '61710mp3@gmail.com',
    phone: '',
    address: 'Taiwan',
    github: 'https://github.com/mp3-tech',
    facebook: '',
    linkedIn: '',
    twitter: '',
    stackOverflow: '',
    devUsername: ""
  },

  skills: ['C++', 'PHP', 'MySQL', 'n8n', 'Python', 'Solidity', 'Git', 'Docker', 'PID Control'],
  experience: [],
  education: [],
  timezone: '+8',
  
  projects: [
    {
      title: "2022 全國自走車大賽季軍 (InnoRacer)",
      description: "獲得第18屆全國高中職組季軍。負責核心控制邏輯與 PID 參數調教，實作 13 階動態限速模型。",
      image: "/獎狀.jpg", // 檢查：如果你的檔案是小寫 .jpg，這裡也要改小寫
      tags: ["C++", "PID Control"],
      github: "https://github.com/mp3-tech/InnoRacer-Speed-Optimization",
      link: "https://github.com/mp3-tech/InnoRacer-Speed-Optimization"
    },
    {
      title: "台灣大眾運輸演變專題",
      description: "數位資料庫檢索與媒體敘事能力展現。",
      image: "https://i.ytimg.com/vi/JSOfh_9FYsM/maxresdefault.jpg",
      tags: ["Digital Archiving", "Information Retrieval"],
      github: "https://www.youtube.com/watch?v=JSOfh_9FYsM",
      link: "https://www.youtube.com/watch?v=JSOfh_9FYsM"
    }
  ]
};