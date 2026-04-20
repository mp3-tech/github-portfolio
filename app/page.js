import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
// 把下面這行註解掉，不抓 GitHub 動態資料就不會報錯
// import LatestRepos from "../components/LatestRepos"; 

export default function Home() {
  return (
    <ContainerBlock
      title="鄧凱謙 (Kai-Chien Teng) - Portfolio"
      description="Software Engineer / Information Organization Specialist"
    >
      <Hero />
      {/* 把下面這行也註解掉 */}
      {/* <LatestRepos /> */}
      <AboutMe />
      <Experience />
    </ContainerBlock>
  );
}