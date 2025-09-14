import React from "react";

const SectionCount = () => {
  return (
    <section
      id="count"
      data-section
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 "
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-black">Hello World</h1>
      </div>
    </section>
  );
};

export default SectionCount;
