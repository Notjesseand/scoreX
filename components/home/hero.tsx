import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const hero = () => {
  return (
    <div className="h-full pt-24 md:grid grid-cols-2">
      <div className="font-nunito flex flex-col justify-center items-center sm:pb-14 pl-7 sm:pl-12 lg:pl-24">
        <div className=" w-full">
          <div className="px-2 py-1 rounded-md bg-slate-200 inline-block">
            <span className="border-l-[2.5px] h-auto border-green-800 mx-aut pl-4 bg-slate-200 text-green-800">
              providing resources for startups
            </span>
          </div>
          <p className="text-5xl my-6 w-5/6 leading-[55px] text-start">
            We Connect Potential Startups with Angel Investors
          </p>
        </div>
        <p className="text font-montserrat">
          We empower innovative entrepreneurs by providing the funding,
          mentorship, and resources they need to turn their vision into reality
        </p>
        {/* buttons */}
        <div className="flex pt-10 gap-4 justify-start items-start text-left w-full">
          <button className="px-5 py-2.5 rounded-full bg-[#005f54] text-white flex items-center">
            Apply for funding{" "}
            <IoIosArrowRoundForward className="ml-1 text-lg" />
          </button>
          <button className="px-5 py-2.5 rounded-full bg-[#005f54] text-white flex items-center">
            Apply for funding{" "}
            <IoIosArrowRoundForward className="ml-1 text-lg" />
          </button>
        </div>
      </div>
      {/* second column */}
      <div className="flex items-center">
        <img src="background.jpg" alt="" className=" w-4/5 lg:w-3/5 flex mx-auto"/>
      </div>
    </div>
  );
};

export default hero;
