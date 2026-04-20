import React from "react";
// 如果報錯，請把下面的 components 改成 Components (如果你的資料夾開頭是大寫)
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <ContainerBlock
      title="鄧凱謙 (Kai-Chien Teng) - Portfolio"
      description="資圖系背景的軟體開發者"
    >
      <Hero />
      <AboutMe />
      <Experience />
    </ContainerBlock>
  );
}