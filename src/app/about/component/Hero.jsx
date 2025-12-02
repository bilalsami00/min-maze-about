import React from "react";
import Image from "next/image";

const Hero = ({ title = "", subtitle = "" }) => {
  return (
    <section className="px-6 py-10 md:py-12 md:px-18 xl:py-16 xl:px-20 flex flex-col xl:flex-row items-center justify-center">
      <div className=" xl:w-7xl flex justify-center max-lg:flex-wrap gap-6 md:gap-10 xl:gap-28 ">
        <div 
      className=" max-w-[635px] "
      >
        <h1 className="txt-66 font-medium text-[#010E26] leading-tight">
          {title}
        </h1>
        <div className=" txt-20 font-normal text-[#010E26] pt-6 pb-8">
          {subtitle}
        </div>
        {/* <div className="grid grid-cols-3 justify-items-center">
          <div className="max-w-[132px] flex flex-col justify-center items-center">
            <h1 className="text-[#0071F5] txt-36">10+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="max-w-[132px] flex flex-col justify-center items-center">
            <h1 className="text-[#0071F5] txt-36">120+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="max-w-[132px] flex flex-col justify-center items-center">
            <h1 className="text-[#0071F5] txt-36">78+</h1>
            <p>Years of Experience</p>
          </div>
        </div> */}
        <div
  className="
    grid grid-cols-3 justify-items-center relative
    before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
    before:left-[33.333%] before:h-12 before:w-px before:bg-[#D8DFE0]
    after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
    after:left-[66.666%] after:h-12 after:w-px after:bg-[#D8DFE0]
  "
>
  <div className="min-w-[132px] flex flex-col justify-center items-center pr-2">
    <h1 className="text-[#0071F5] txt-36 font-medium">10+</h1>
    <p className="text-center w-full">Years of Experience</p>
  </div>

  <div className="max-w-[132px] flex flex-col justify-center items-center">
    <h1 className="text-[#0071F5] txt-36 font-medium">120+</h1>
    <p className="text-center w-full">Years of Experience</p>
  </div>

  <div className="max-w-[132px] flex flex-col justify-center items-center">
    <h1 className="text-[#0071F5] txt-36 font-medium">78+</h1>
    <p className="text-center w-full">Years of Experience</p>
  </div>
</div>

      </div>
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        width={535}
        height={436}
        className="w-full min-h-[296px] md:max-w-[535px] md:max-h-[436px]"
      />
      </div>
    </section>
  );
};

export default Hero;
