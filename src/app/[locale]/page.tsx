import About from "@/src/components/home/About";
import { BottomHeader, TopHeader } from "@/src/components/home/Header";
import MainSec from "@/src/components/home/MainSec";
import Skills from "@/src/components/home/Skills";

export default function Home() {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <MainSec />
      <About />
      <Skills />
    </>
  );
}
