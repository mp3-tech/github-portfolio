export const userData = {
  githubUser: 'mp3-tech', 
  devUsername: "鄧凱謙 (Kai-Chien Teng)",
  github: 'https://github.com/mp3-tech', 
  email: '61710mp3@gmail.com', 
  phone: '',                    
  address: '',                  
  resume: "https://drive.google.com/file/d/1JTIlvBaNX7q4mSlPo9y3yXnVApGP68On/view?usp=sharing", 
  

  socialLinks: {
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
  },

  skills: [
    'C++', 
    'PHP', 
    'MySQL', 
    'n8n', 
    'Python', 
    'Solidity',
    'Git', 
    'Docker', 
    'Information Organization',
    'PID Control',
    'Project Management (PRASI/WBS)'
  ],
  timezone: '+8',
  projects: [
    {
      title: "2022 全國自走車大賽季軍 (InnoRacer)",
      description: "獲得第18屆全國高中職組季軍。負責核心控制邏輯與 PID 參數調教，實作 13 階動態限速模型，提升車輛在高速行駛下的循跡穩定性。",
      image: "/獎狀.JPG",
      tags: ["C++", "PID Control", "Robotics", "Optimization"],
      github: "https://github.com/mp3-tech/InnoRacer-Speed-Optimization",
      link: "https://github.com/mp3-tech/InnoRacer-Speed-Optimization"
    },
    {
      title: "UniGov Web3 投票系統 (WebVote)",
      description: "獨立開發具備 31 項核心功能之 Web3 治理中樞。負責 PHP/MySQL 後端業務邏輯、資料庫正規化設計，並實作 Solidity 智慧合約部署。",
      image: "", 
      tags: ["PHP", "MySQL", "Solidity", "Web3", "RDBMS"],
      github: "https://github.com/mp3-tech/Academic-Portfolio",
      link: "https://github.com/mp3-tech/Academic-Portfolio"
    },
    {
      title: "TKU 學術卓越作品集 (高分實作集)",
      description: "收錄「AI 與程式語言」(100分) 之 Python 邏輯實作，以及運用 PRASI/WBS 模型分析之「知識管理」(98分) 期末報告。",
      image: "", 
      tags: ["Python", "Knowledge Management", "PRASI", "Data Curation"],
      github: "https://github.com/mp3-tech/Academic-Portfolio",
      link: "https://github.com/mp3-tech/Academic-Portfolio"
    },
    {
      title: "沉浸式 AI 有聲書自動化平台 (n8n)",
      description: "運用 n8n 構建自動化工作流，整合 TTS 與 LLM API 實現大規模文本自動產製，並設計結構化 Metadata 提升檢索品質。",
      image: "", 
      tags: ["n8n", "AI Automation", "LLM", "Workflow"],
      github: "https://github.com/mp3-tech",
      link: "https://github.com/mp3-tech"
    },
    {
      title: "台灣大眾運輸演變：數位資料庫檢索專題",
      description: "運用「光華雜誌數位資料庫」進行資訊檢索與篩選。透過『運輸科技』核心關鍵字組織九大歷史轉折影像，呈現台灣從蒸汽動力到智慧共享的技術演進，展現數位檔案管理與媒體敘事能力。",
      image: "https://i.ytimg.com/vi/JSOfh_9FYsM/maxresdefault.jpg",
      tags: ["Digital Archiving", "Information Retrieval", "Media Management", "Sinorama Database"],
      github: "https://www.youtube.com/watch?v=JSOfh_9FYsM",
      link: "https://www.youtube.com/watch?v=JSOfh_9FYsM"
    }
  ]
};