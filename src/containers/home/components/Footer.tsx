import React from "react";

const Footer = () => {
  return (
    <footer className="font-sans flex bg-white px-10 sm:px-0">
      <div className="flex flex-col w-full mx-auto  gap-16 h-[90px] md:h-[164px] items-center justify-center">
        <p className="typo-body2 text-darkgray font-mono text-center md:text-left">
          © PU Dev Challenge - Developed by Phatchara Sangkeaw
        </p>
      </div>
    </footer>
  );
};

export default Footer;
