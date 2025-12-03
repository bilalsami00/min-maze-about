import React from "react";
import Image from "next/image";

const InspoBanner = ({ title = "", subtitle = "" }) => {
  return (
    <section className=" bg-[#0071F5] text-white  flex flex-col xl:flex-row items-center justify-center">
      <div className="px-6 pt-6  pb-8 md:py-12 md:px-18 xl:px-20 xl:w-7xl flex max-md:justify-center max-lg:flex-wrap gap-6 md:gap-10 xl:gap-42 ">
        <div className=" gap-6 flex flex-col justify-center">
          <h1 className="txt-48 font-bold  leading-tight">{title}</h1>
          <div className=" txt-20 font-normal ">{subtitle}</div>
        </div>
      <button className="txt-18 font-semibold bg-white text-[#0071F5] max-w-[196px] max-h-14 rounded-xl w-full p-4">
        Book a Call
      </button>
      </div>
    </section>
  );
};

export default InspoBanner;
