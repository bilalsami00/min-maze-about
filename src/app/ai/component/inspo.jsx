import React from "react";
import Image from "next/image";

const Inspo = ({ title = "", subtitle = "" }) => {
  return (
    <section className=" bg-[#010E26] text-white  flex flex-col xl:flex-row items-center justify-center">
      <div className="px-6  py-10 md:py-12 md:px-18 xl:py-20 xl:px-20 xl:w-7xl flex justify-center md:justify-end max-lg:flex-wrap">
        <div className=" w-full xl:max-w-[590px] flex flex-col justify-center">
          <h1 className="txt-48 font-bold  leading-tight">
            {title}
          </h1>
          <div className=" txt-20 font-normal  pt-6 pb-8">
            {subtitle}
          </div>
           <button className="txt-18 font-semibold bg-[#0071F5] max-w-[196px] max-h-14 rounded-xl w-full p-4">
              Read Case Study
            </button>
            <div className="flex mt-12">
                  <Image
          src="/ai/apple-store.svg"
          alt="apple store Image"
          width={150}
          height={50}
          className="w-auto h-auto md:max-w-[150px] md:max-h-[50px]"
        />
          <Image
          src="/ai/play-store.svg"
          alt="play store Image"
          width={150}
          height={50}
          className="w-auto h-auto md:max-w-[150px] md:max-h-[50px]"
        />
            </div>
        </div>
      </div>
        <Image
          src="/ai/inspo.png"
          alt="Inspo Image"
          width={920}
          height={1500}
          className="w-full h-full xl:max-w-[920px] xl:max-h-[1500px]"
        />
    </section>
  );
};

export default Inspo;
