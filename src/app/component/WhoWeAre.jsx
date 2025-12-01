import React from "react";
import Image from "next/image";

const WhoWeAre = ({ title = "", subtitle = "" }) => {
  return (
    <section className="bg-[#EFF7FF] px-6 py-10 md:py-12 md:px-18 xl:p-20 xl:px-20 flex   items-center justify-center">
      <div className=" xl:w-7xl flex flex-col-reverse lg:flex-row justify-center items-center max-lg:flex-wrap gap-10 xl:gap-28 ">
       <Image
        src="/WhoWeAre-image.png"
        alt="WhoWeAre Image"
        width={590}
        height={430}
        className="w-full min-h-[296px] md:max-w-[590px] md:max-h-[430px]"
      />
      <div 
      // className=" max-w-[642px] "
      >
        <h1 className="txt-48 font-medium  leading-tight">Who We Are</h1>
        <div className=" txt-20 font-normal  pt-6 flex flex-col gap-6 leading-snug ">
          <span>
            Maze Digital Solutions is a dedicated digital agency focused on
            creating meaningful, scalable, and user-centric digital products.
          </span>
          {/* <br /> */}
          <span>
            We work with startups, small businesses, and growing brands to craft
            websites, designs, and systems that are visually stunning, highly
            functional, and easy to manage.
          </span>
          {/* <br /> */}
          <span>
            {" "}
            Our team is driven by innovation, transparency, and the belief that
            great digital solutions should be accessible to everyone — not just
            big corporations.
          </span>
        </div>
      </div>
     </div>
    </section>
  );
};

export default WhoWeAre;
