import React from "react";
import Image from "next/image";

const Journey = ({ title = "", subtitle = "" }) => {
  return (
    <section className=" px-6 py-10 md:py-12 md:px-18 xl:py-16 xl:px-20 flex flex-col xl:flex-row gap-10 md:gap-28 items-center justify-center">
      <div className=" max-w-7xl ">
        <h1 className="txt-48 font-bold text-[#010E26] leading-tight">
          {title}
        </h1>
        <div className=" txt-20 font-normal text-[#010E26] pt-6 pb-8">
          {subtitle}

          <div className="mt-12 flex flex-col xl:flex-row gap-6 max-xl:items-center">
            <Image
              src="/Journey-image.png"
              alt="Journey Image"
              width={684}
              height={684}
              className=" max-xl:w-auto max-xl:h-auto md:max-w-[684px] md:max-h-[684px]"
            />
            <div  className=" flex flex-col gap-4 md:gap-6 ">
              <div className="bg-[#EFF7FF] rounded-4xl gap-3 min-h-[248px] md:min-h-[330px] xl:max-w-[572px] px-4 py-6 md:p-8 flex flex-col justify-start items-start ">
                <h1 className="txt-36">Our Mission</h1>
                <p className="txt-24">
                  To empower businesses with affordable, reliable, and
                  result-driven digital services that elevate their brand and
                  accelerate their growth.
                </p>
              </div>
              <div className="bg-[#0071F5] text-white rounded-4xl gap-3 min-h-[248px] md:min-h-[330px] xl:max-w-[572px] px-4 py-6 md:p-8 flex flex-col justify-start items-start ">
                <h1 className="txt-36">Our Vision</h1>
                <p className="txt-24">
                  To become a globally recognized creative and development
                  agency known for quality, trust, and long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
