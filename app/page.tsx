import React from "react";
import Nav from "@/components/nav";
import Hero from "@/components/home/hero";

const page = () => {
  return (
    <div>
      {/* nav and hero */}
      <div className="h-screen">
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default page;
