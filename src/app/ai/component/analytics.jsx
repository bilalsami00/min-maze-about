import React from "react";
import Image from "next/image";

const Analytics = ({ title = "", subtitle = "" }) => {
  return (
    <section className="px-6 bg-[#EFF7FF] py-10 md:py-12 md:px-18 xl:py-20 xl:px-20 flex flex-col xl:flex-row items-center justify-center">
      <div className=" xl:w-7xl flex justify-center max-xl:flex-wrap gap-6 md:gap-10 xl:gap-42 ">
        <div className=" max-w-[606px] flex flex-col justify-center">
          <h1 className="txt-48 font-bold text-[#010E26] leading-tight">
            {title}
          </h1>
          <div className=" txt-20 font-normal text-[#010E26] pt-6 pb-8">
            {subtitle}
          </div>
          <div
            className="
                grid grid-cols-3 justify-items-center relative
                before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
                before:left-[33.333%] before:h-12 before:w-px before:bg-[#D8DFE0]
                after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
                after:left-[66.666%] after:h-12 after:w-px after:bg-[#D8DFE0]
            "
          >
            <div className="min-w-[100px] max-w-full flex flex-col md:justify-center items-center gap-1 pr-2">
              <h1 className="text-[#0071F5] txt-36 font-medium">60%</h1>
              <p className="text-center w-full ">AI Adoption Rate</p>
            </div>

            <div className="max-w-[180px] max-md:mx-6 flex flex-col md:justify-center gap-1 items-center">
              <h1 className="text-[#0071F5] txt-36 font-medium">$500B</h1>
              <p className="text-center w-full ">
                Global AI Market by 2028
              </p>
            </div>

            <div className="max-w-[150px] flex flex-col md:justify-center gap-1 items-center">
              <h1 className="text-[#0071F5] txt-36 font-medium">3.2x</h1>
              <p className="text-center w-full ">ROI on AI Investments</p>
            </div>
          </div>
        </div>
        <Image
          src="/ai/analytics-image.png"
          alt="Analytics Image"
          width={504}
          height={383}
          className="w-full min-h-[296px] md:max-w-[504px] md:max-h-[383px]"
        />
      </div>
    </section>
  );
};

export default Analytics;
