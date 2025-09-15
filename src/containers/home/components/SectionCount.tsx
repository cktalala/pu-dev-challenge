import React from "react";
import CasesBarChart from "./CasesBarChart";

const SectionCount = () => {
  return (
    <section
      id="count"
      data-section
      className="font-sans flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white"
    >
      <div className="flex flex-col  justify-center max-w-[720px] mx-auto  gap-8">
        <h1 className="typo-h1 text-black font-noto-sans-thai">
          จำนวนคดีที่เกิดขึ้น
        </h1>
        <p className="typo-body1 text-black font-mono">
          มาตรา 112 มีการตีความการกระทำอย่างไร้ขอบเขต
          แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้
          จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี
          2548 เป็นต้นมา
        </p>
        <CasesBarChart />
        <p className="typo-body2 font-mono text-center">
          ที่มา:{" "}
          <a
            href="https://freedom.ilaw.or.th/node/817"
            target="_blank"
            rel="noopener noreferrer"
          >
            iLaw
          </a>
        </p>
      </div>
    </section>
  );
};

export default SectionCount;
