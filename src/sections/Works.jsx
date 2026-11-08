import React from "react";
import Desc from "../components/Works/Desc";
import Horizontal from "../components/Works/Horizontal";

const Works = () => {
  return (
    <section className="works w-full h-full opacity-0 -z-10">
      <div className="w-full h-full pl-[4vw] flex gap-[10vw] items-center">
        <Desc />
        <Horizontal />
      </div>
    </section>
  );
};

export default Works;
