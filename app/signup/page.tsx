import React from "react";

const page = () => {
  return (
    <div className="pt-12">
      <p className="font-nunito text-3xl text-center capitalize font-bold mt-10 sm:mt-0">
        sign up
      </p>
      <p className="text-center font-nunito sm:text-lg mt-1 px-6">
        Stay connected, follow teams, and never miss thrilling{" "}
        <br className="hidden md:block" /> sports updates
      </p>
      <form
        action=""
        method="post"
        className="flex flex-col md:w-2/5 mt-20 md:mt-6 mx-auto px-4 pt-7"
      >
        {/* email */}
        <label htmlFor="email" className="text-base font-nunito">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          className="border mt-1 rounded-lg py-2 px-2 outline-none font-nunito bg-slate-100 border-slate-200"
        />
        {/* password */}
        <label htmlFor="email" className="text-base font-nunito mt-4">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          className="border mt-1 rounded-lg py-2 px-2 outline-none font-nunito bg-slate-100 border-slate-200"
        />
        {/* confirm password */}
        {/* password */}
        <label htmlFor="email" className="text-base font-nunito mt-4">
          Confirm Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          className="border mt-1 rounded-lg py-2 px-2 outline-none font-nunito bg-slate-100 border-slate-200"
        />
        {/* submit */}
        <input
          type="submit"
          value="sign up"
          className=" flex border mt-14 rounded-lg py-2.5 font-nunito bg-[#111] text-white text-lg cursor-pointer border-[#f52f3b]"
        />
      </form>
    </div>
  );
};

export default page;
