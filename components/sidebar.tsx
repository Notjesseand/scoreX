import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMiniBars2 } from "react-icons/hi2";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HiMiniBars2 className="text-3xl" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
          <div className="flex flex-col items-center font-nunito pt-10 gap-3">
            <Link href="">Services</Link>
            <Link href="">About Us</Link>
            <Link href="">Benfits</Link>
            <Link href="">FAQs</Link>
            <button className="py-2 px-5 rounded-full hover:bg-green-200 transition-all duration-300 bg-green-100 text-blue-950 flex items-center mt-10">
              Apply for funding{" "}
              <IoIosArrowRoundForward className="ml-2 text-lg" />
            </button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
