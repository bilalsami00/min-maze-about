"use client";
import React from "react";
// import { useState } from "react";
import Image from "next/image";
import PhoneFlagInput from "./PhoneFlagInput";

const Contact = ({ title = "", subtitle = "" }) => {

      const [phone, setPhone] = React.useState("");

  return (
    <section
      className="bg-[#EFF7FF] text-[#010E26] px-6 py-10 md:py-12 md:px-18 xl:p-20 xl:px-20 
    flex flex-col md:flex-row gap-10 md:gap-28 items-center justify-center"
    >
      <div className=" md:w-7xl flex max-md:flex-wrap md:gap-22">
        <div className=" max-w-[642px] ">
          <h1 className="txt-48 font-medium  leading-tight">{title}</h1>
          <div className=" txt-20 font-normal  pt-6 pb-8 flex flex-col gap-6 leading-snug ">
            {subtitle}
            <span className="flex gap-2 font-medium txt-16">
              <Image
                src="/aboutIcons/sms.svg"
                alt="sms Image"
                width={24}
                height={24}
                className=" md:max-w-6 md:max-h-6"
              />
              sales@mazedigitals.com
            </span>
             <span className="flex gap-2 font-medium txt-16">
              <Image
                src="/aboutIcons/call.svg"
                alt="call Image"
                width={24}
                height={24}
                className=" md:max-w-6 md:max-h-6"
              />
              +1 509-232-9749
            </span>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-4 w-full txt-14">
          <input
            type="text"
            placeholder="Full Name"
            className="px-3 py-5 max-h-14 border rounded-md border-[#BBCFF3] focus:outline-none "
          />
        <div className="w-full flex justify-center items-center px-3 py-5 max-h-14 border rounded-md border-[#BBCFF3] focus:outline-none">
          <PhoneFlagInput value={phone} onChange={(val) => setPhone(val)} />
        </div>
          <input
            type="text"
            placeholder="Email Address"
            className="px-3 py-5 max-h-14 border rounded-md border-[#BBCFF3] focus:outline-none "
          />
          <textarea
            placeholder="What's your project all about?"
            className="px-3 py-5 min-h-[130px] border rounded-md border-[#BBCFF3] 
             focus:outline-none txt-14 resize-none"
          ></textarea>

          <button
            className="bg-[#0071F5] text-white text-[16px] font-medium py-4 px-6 max-w-[196px] rounded-xl hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
