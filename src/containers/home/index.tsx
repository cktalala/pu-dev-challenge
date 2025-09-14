import { Reveal } from "@/components/scroll-animation";
import Image from "next/image";
import React from "react";
import SectionHeader from "./components/SectionHeader";
import SectionCount from "./components/SectionCount";

const HomePage = () => {
  return (
    <>
      <Reveal>
        <SectionHeader />
      </Reveal>
      <Reveal>
        <SectionCount />
      </Reveal>
    </>
  );
};

export default HomePage;
