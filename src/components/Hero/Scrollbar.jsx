import React from "react";

const Scrollbar = () => {
  return (
    <div className="scroll-hero1 absolute bottom-[5vh] left-[2.2vw]">
      <div className="flex flex-col">
        <span className="scroll-text text-[1.4rem] text-nowrap font-[comico] text-[snow] max-sm:absolute max-sm:bottom-[-4.5vh] max-sm:left-[50vw] max-sm:-translate-x-2/3">
          scroll to step inside
        </span>
        <span className="w-[.4rem] h-[5rem] bg-[gray]/50 relative overflow-hidden rounded-[6rem] max-sm:translate-y-[4.5vh]">
          <span className="scroll-hero w-full h-[1rem] bg-[snow] absolute top-0 left-0 rounded-[6rem]"></span>
        </span>
      </div>
    </div>
  );
};

export default Scrollbar;
