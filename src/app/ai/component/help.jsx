// src\app\ai\component\help.jsx
import React from "react";
import Image from "next/image";
import "../ai.css"; // <-- import the global file for this route subtree

const Help = ({ title = "", subtitle = "" }) => {
  return (
    <section className="px-6 py-10 md:py-12 md:px-18 xl:py-20 xl:px-20 flex flex-col xl:flex-row items-center justify-center">
      <div className=" xl:w-7xl flex flex-col">
        <div className=" max-w-[606px] flex flex-col justify-center">
          <h1 className="txt-48 font-bold text-[#010E26] leading-tight">
            {title}
          </h1>
          <div className="txt-20 font-normal text-[#010E26] pt-6 pb-8">
            {subtitle}
          </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 w-full"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center w-full">

          <div className="card ">
            <h1 className="max-md:text-2xl txt-32 font-medium">
              AI Product Strategy & Roadmapping
            </h1>
            <p className="max-md:text-md txt-18 pt-4">
              We work with your team to define clear business goals, identify
              high-impact use cases, and create a scalable AI roadmap.
            </p>
          </div>
          <div className="card ">
            <h1 className="max-md:text-2xl txt-32 font-medium">
              Data Architecture & Model Development{" "}
            </h1>
            <p className="max-md:text-md txt-18 pt-4">
              We design clean data pipelines and build machine learning models
              tailored to your workflows — ensuring accuracy, reliability, and
              long-term adaptability.
            </p>
          </div>
          <div className="card ">
            <h1 className="max-md:text-2xl txt-32 font-medium">
              Human-Centered AI Interfaces
            </h1>
            <p className="max-md:text-md txt-18 pt-4">
              We turn AI outputs into intuitive, usable experiences. Our
              interfaces simplify complex results, improve adoption, and help
              users trust the system.
            </p>
          </div>
          <div className="card ">
            <h1 className="max-md:text-2xl txt-32 font-medium">
              Scalable Engineering & Cloud Infrastructure
            </h1>
            <p className="max-md:text-md txt-18 pt-4">
              We build robust backend systems, API-first architecture, and cloud
              environments optimized for performance, security, and compliance.
            </p>
          </div>
          <div className="card ">
            <h1 className="max-md:text-2xl txt-32 font-medium">
              Continuous Optimization & Growth
            </h1>
            <p className="max-md:text-md txt-18 pt-4">
              Every MVP undergoes functionality, performance, and usability
              testing. We handle deployment to ensure a smooth, reliable launch
              ready for user feedback or investor demo.
            </p>
          </div>
          <div className="card bg-[#0F2250]! text-white w-full flex flex-col justify-between ">
            <Image
              src="/ai/rocket.svg"
              alt="Analytics Image"
              width={48}
              height={48}
              //   className="w-full h-full"
            />
            <h1 className="max-md:text-2xl txt-32 font-medium">
              Ready to turn AI into real business impact?
            </h1>
            <button className="txt-18 font-semibold bg-[#0071F5] max-w-[362px] max-h-14 rounded-xl w-full p-4">
              Book a Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
