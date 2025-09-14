import { Reveal } from "@/components/scroll-animation";
import Image from "next/image";
import React from "react";
import SectionHero from "./components/SectionHero";
import SectionCount from "./components/SectionCount";
import ScrollDown from "@/components/scroll-down";

const HomePage = () => {
  return (
    <>
      <SectionHero />

      <Reveal>
        <SectionCount />
      </Reveal>

      <ScrollDown />
    </>
  );
};

export default HomePage;
