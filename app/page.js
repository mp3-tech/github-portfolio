import { userData } from "@/data/user-data";
import Contributions from "./components/contributions";
import HeroSection from "./components/hero-section";
import GitLanguage from "./components/language";
import Projects from "./components/projects";
import Rank from "./components/rank";
import GitStats from "./components/stats";

async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${userData.githubUser}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json();
};

export default async function Home() {
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection profile={profile} />
      
      <div className="flex flex-col items-center justify-center py-12 px-4">
         <h2 className="text-3xl font-bold mb-8 text-[#16f2b3]">榮譽獎項 (Awards)</h2>
         <img 
           src="/award.jpg" 
           alt="全國自走車大賽季軍獎狀" 
           className="max-w-full md:max-w-3xl rounded-xl border border-[#16f2b3] shadow-lg shadow-[#16f2b3]/20" 
         />
         <p className="mt-6 text-gray-300 text-center max-w-2xl text-lg">
           2022 全國自走車大賽季軍 (InnoRacer) <br/>
           <span className="text-sm text-gray-400">負責核心控制邏輯與 PID 參數調教，實作 13 階動態限速模型。</span>
         </p>
      </div>

      {/* 關閉會報錯的 GitHub 統計圖表 */}
      {/* <GitStats /> */}
      
      <Projects projects={projects.items} profile={profile} />
      <GitLanguage />
      
      {/* 關閉會報錯的 Rank 與 Contributions 圖表 */}
      {/* <Rank /> */}
      {/* <Contributions /> */}
    </>
  )
};

export async function generateMetadata({ params, searchParams }, parent) {
  const profile = await getGitProfile();
  return {
    title: `GitHub Profile of ${profile.name}`,
    description: profile.description,
  };
};