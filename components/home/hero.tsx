import React from "react";

const hero = () => {
  return (
    <div className="h-full pt-24 grid grid-cols-2">
      <div className="text-center font-nunito flex flex-col justify-center items-center">
        <div className="px-2 py-1 rounded-md bg-slate-200 inline-block">
          <span className="border-l-[2.5px] h-auto border-green-800 mx-auto pl-4 bg-slate-200 text-green-800">
            providing resources for startups
          </span>
        </div>
        <p className="text-5xl mt-5 w-2/3 leading-[50px]">
          We Connect Potential Startups with Angel Investors
        </p>
        <p className="text mt-2 font-montserrat w-4/5">
          We empower innovative entrepreneurs by providing the funding,
          mentorship, and resources they need to turn their vision into reality
        </p>
        {/* buttons */}
        
      </div>
    </div>
  );
};

export default hero;
