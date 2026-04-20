import React from "react";
import ContainerBlock from "@/components/ContainerBlock";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
// 註解掉會報錯的 LatestRepos
// import LatestRepos from "@/components/LatestRepos";

export default function Home() {
  return (
    <ContainerBlock
      title="鄧凱謙 (Kai-Chien Teng) - Portfolio"
      description="Software Engineer / Information Organization Specialist"
    >
      <Hero />
      {/* 關閉會導致 auth 錯誤的區塊 */}
      {/* <LatestRepos /> */}
      <AboutMe />
      <Experience />
    </ContainerBlock>
  );
}