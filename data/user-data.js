export const userData = {
  githubUser: 'mp3-tech', 
  devUsername: "鄧凱謙 (Kai-Chien Teng)",
  name: "鄧凱謙 (Kai-Chien Teng)",
  designation: "Software Engineer / Information Organization Specialist",
  github: 'https://github.com/mp3-tech', 
  email: '61710mp3@gmail.com',
  phone: '',
  address: 'Taiwan',
  description: "資圖系背景的軟體開發者，擅長 PID 控制、n8n 自動化與資訊組織。",
  resumeUrl: "https://drive.google.com/file/d/1JTIlvBaNX7q4mSlPo9y3yXnVApGP68On/view?usp=sharing", 
  
  // 這是最重要的部分：補齊所有可能的社交與認證欄位
  socialLinks: {
    github: 'https://github.com/mp3-tech',
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    stackOverflow: '',
    leetcode: '',
    devTo: '',
  },

  // 有些模板需要這個結構來防止 auth 報錯
  contactsData: {
    email: '61710mp3@gmail.com',
    phone: '',
    address: 'Taiwan',
    github: 'https://github.com/mp3-tech',
    facebook: '',
    linkedIn: '',
    twitter: '',
    stackOverflow: '',
    devUsername: "mp3-tech"
  },

  // 防止教育或經歷欄位空白導致報錯
  education: [
    {
      id: 1,
      institution: "淡江大學 (TKU)",
      course: "資訊與圖書館學系",
      startYear: "2024",
      endYear: "Present"
    }
  ],
  experience: [],

  skills: ['C++', 'PHP', 'MySQL', 'n8n', 'Python', 'Solidity', 'Git', 'Docker', 'PID Control'],
  timezone: '+8',
  
  projects: [
    {
      title: "2022 全國自走車大賽季軍 (InnoRacer)",
      description: "獲得第18屆全國高中職組季軍。負責核心控制邏輯與 PID 參數調教，實作 13 階動態限速模型。",
      image: "/獎狀.JPG",
      tags: ["C++", "PID Control", "Robotics"],
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
    },
    {
        title: "UniGov Web3 投票系統",
        description: "PHP/MySQL 後端業務邏輯與 Solidity 智慧合約實作。",
        image: "",
        tags: ["PHP", "Solidity", "Web3"],
        github: "https://github.com/mp3-tech/Academic-Portfolio",
        link: "https://github.com/mp3-tech/Academic-Portfolio"
    }
  ]
};