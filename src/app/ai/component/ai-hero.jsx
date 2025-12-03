import React from "react";
import Image from "next/image";

const AiHero = ({ title = "", subtitle = "" }) => {
  return (
    <section className="px-6 py-10 md:py-12 md:px-18 xl:pt-16 xl:pb-20 xl:px-20 flex flex-col xl:flex-row items-center justify-center">
      <div className=" xl:w-7xl flex flex-col bg-re d-400 justify-center items-center gap-6 md:gap-10 xl:gap-12 ">
        <div className=" max-w-[802px] text-center">
          <h1 className="txt-66 font-medium  text-[#010E26] leading-tight">
            {title}
          </h1>
          <div className=" txt-20 font-normal text-[#010E26] pt-6 pb-8">
            {subtitle}
          </div>
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="font-semibold">Great</span>
            <span className="font-semibold">4.1</span>
            <span>out of 5</span>

            <span className="inline-flex items-center gap-1">
              <Image
                src="/ai/green-star.svg"
                alt="Trustpilot star"
                width={17}
                height={17}
              />
              <span className="font-semibold">Trustpilot</span>
            </span>
          </div>
        </div>
        <Image
          src="/ai/ai-hero.png"
          alt="Hero Image"
          width={1280}
          height={734}
          className="w-full min-h-[342px] md:max-w-[1281px] md:max-h-[734px]"
        />
      </div>
    </section>
  );
};

export default AiHero;
