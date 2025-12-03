import React from "react";
import Image from "next/image";

const Inspo = ({ title = "", subtitle = "" }) => {
  return (
    <section className=" bg-[#010E26] text-white  flex flex-col xl:flex-row items-center justify-center">
      <div className="px-6  py-10 md:py-12 md:px-18 xl:py-20 xl:px-20 xl:w-7xl flex justify-center max-lg:flex-wrap gap-6 md:gap-10 xl:gap-42 ">
        <div className=" max-w-[606px] flex flex-col justify-center">
          <h1 className="txt-48 font-bold  leading-tight">
            {title}
          </h1>
          <div className=" txt-20 font-normal  pt-6 pb-8">
            {subtitle}
          </div>
          {/* <div
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
          </div> */}
           <button className="txt-18 font-semibold bg-[#0071F5] max-w-[196px] max-h-14 rounded-xl w-full p-4">
              Read Case Study
            </button>
            <div className="flex mt-12">
                  <Image
          src="/ai/apple-store.svg"
          alt="apple store Image"
          width={150}
          height={50}
          className="w-full h-full md:max-w-[150px] md:max-h-[50px]"
        />
          <Image
          src="/ai/play-store.svg"
          alt="play store Image"
          width={150}
          height={50}
          className="w-full h-full md:max-w-[150px] md:max-h-[50px]"
        />
            </div>
        </div>
      </div>
        <Image
          src="/ai/inspo.png"
          alt="Inspo Image"
          width={920}
          height={1500}
          className="w-full h-full md:max-w-[920px] md:max-h-[1500px]"
        />
    </section>
  );
};

export default Inspo;
