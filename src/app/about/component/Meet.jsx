import React from "react";
import Image from "next/image";

const Meet = ({ title = "", subtitle = "" }) => {
  return (
    <section className="bg-[#010E26] text-white px-6 py-10 md:py-12 md:px-18 xl:py-16 xl:px-20 flex flex-col xl:flex-row gap-10 md:gap-28 items-center justify-center">
      <div className=" max-w-7xl ">
        <h1 className="txt-48 font-medium  leading-tight">
          {title}
        </h1>
        <div className=" txt-20 font-normal  pt-6 pb-8">
          {subtitle}

          <div className="mt-12 flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* zeeshan */}
            <div className="max-w-[410px]">
              <Image
                src="/zeeshan.png"
                alt="zeeshan"
                width={410}
                height={410}
                // className="xl:max-w-[410px] md:max-h-[410px]"
              />
              <div className="flex justify-between mt-4 items-center">
                <div>
                  <h1 className="txt-24">Muhammad Zeeshan</h1>
                  <p className="txt-18">Muhammad Zeeshan</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/aboutIcons/linkedin.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="cursor-pointer hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
            {/* isbah */}
            <div className="max-w-[410px]">
              <Image
                src="/isbah.png"
                alt="isbah"
                width={410}
                height={410}
                // className="xl:max-w-[410px] md:max-h-[410px]"
              />
              <div className="flex justify-between mt-4 items-center">
                <div>
                  <h1 className="txt-24">Isbah Zeeshan</h1>
                  <p className="txt-18">Chief Marketing Officer</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/aboutIcons/linkedin.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="cursor-pointer hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
            {/* osama */}
             <div className="max-w-[410px]">
              <Image
                src="/osama-image.png"
                alt="osama"
                width={410}
                height={410}
                // className="xl:max-w-[410px] md:max-h-[410px]"
              />
              <div className="flex justify-between mt-4 items-center">
                <div>
                  <h1 className="txt-24">Hassan Osama</h1>
                  <p className="txt-18">Chief Technology Officer</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/aboutIcons/linkedin.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="cursor-pointer hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
