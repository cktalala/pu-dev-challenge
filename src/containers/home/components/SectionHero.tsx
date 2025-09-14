import React from "react";

const SectionHero = () => {
  return (
    <section
      id="hero"
      data-section
      className="font-sans flex items-center justify-items-center min-h-screen bg-black"
    >
      <div className="flex flex-col items-center justify-center max-w-[660px] mx-auto gap-8 md:gap-16 px-6 md:px-0">
        <h1 className="typo-display text-white font-noto-sans-thai">ม.๑๑๒</h1>
        <p className="typo-body1 text-white font-mono text-center">
          “ผู้ใดหมิ่นประมาท ดูหมิ่น <br className=" block md:hidden" />
          หรือแสดงความอาฆาตมาดร้าย พระมหากษัตริย์{" "}
          <br className=" block md:hidden" /> พระราชินี รัชทายาท{" "}
          <br className=" block md:hidden" />
          หรือผู้สำเร็จราชการแทนพระองค์ <br className=" block md:hidden" />
          ต้องระวางโทษจำคุกตั้งแต่สามปีถึงสิบห้าปี”
        </p>
      </div>
    </section>
  );
};

export default SectionHero;
