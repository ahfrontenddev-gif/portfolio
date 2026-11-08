import React from "react";

const Desc = () => {
  return (
    <div className="desc h-full flex flex-col justify-center w-[60rem] gap-[3rem]">
      <h4 className="title text-[16rem] leading-[13rem] font-[Tanker] flex flex-col gap-[1rem] opacity-0 text-white/90 max-sm:text-[9rem] max-sm:leading-[7rem]">
        <span>SeLeCtEd</span>
        <span>WORK</span>
      </h4>
      <div className="para font-bold flex flex-col gap-[1.8rem] leading-[2rem] w-[60%] text-[1.8rem] text-[snow]/90 max-sm:w-full max-sm:">
        <p className="para-one font-[comico]">Examples of projects I have designed, shaped, and brought to execution—including complex pieces like these.</p>
      </div>
    </div>
  );
};

export default Desc;
