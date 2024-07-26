import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Sidebar from "./sidebar";

const Nav = () => {
  return (
    <div className="flex justify-between py-6 px-5 sm:px-8 lg:px-14">
      <div className="flex ">
        <p className="text-[#0a7339] text-2xl font-semibold font-montserrat">
          APEX
        </p>
        <div className="hidden md:flex ml-20 lg:ml-32 font-nunito gap-8 items-center  lg:gap-12">
          <Link href={""}>Services</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Benefits</Link>
          <Link href={""}>FAQs</Link>
        </div>
      </div>
      <div className="font-nunito hidden md:flex">
        <button className="py-2 px-5 rounded-full hover:bg-green-200 transition-all duration-300 bg-green-100 text-blue-950 flex items-center">
          Apply for funding <IoIosArrowRoundForward className="ml-2 text-lg" />
        </button>
      </div>
      <div className="flex md:hidden">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Nav;
