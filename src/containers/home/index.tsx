import { Reveal } from "@/components/scroll-animation";
import Image from "next/image";
import React from "react";
import SectionHero from "./components/SectionHero";
import SectionCount from "./components/SectionCount";
import ScrollDown from "@/components/scroll-down";
import SectionDetail from "./components/SectionDetail";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <SectionHero />

      <Reveal>
        <SectionCount />
      </Reveal>
      <Reveal>
        <SectionDetail />
      </Reveal>

      <ScrollDown />
    </>
  );
};

export default HomePage;
