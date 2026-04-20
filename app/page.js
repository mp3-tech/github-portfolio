import React from "react";

import ContainerBlock from "./components/ContainerBlock";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

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