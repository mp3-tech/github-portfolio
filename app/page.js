import React from "react";
// 改用相對路徑 ../ 代表回到上一層資料夾找 components
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

// 絕對不要導入會報錯的 LatestRepos
export default function Home() {
  return (
    <ContainerBlock
      title="鄧凱謙 (Kai-Chien Teng) - Portfolio"
      description="Software Engineer / Information Organization Specialist"
    >
      <Hero />
      {/* 這裡確保沒有 LatestRepos 元件 */}
      <AboutMe />
      <Experience />
    </ContainerBlock>
  );
}