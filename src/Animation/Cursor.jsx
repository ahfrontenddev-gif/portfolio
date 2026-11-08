import React from "react";

const Cursor = () => {
  return (
    <div className="parent-cursor-frame absolute top-0 left-0">
      <div className="cursor-frame absolute">
        <img className="min-w-[2rem]" src="/images/cursor/frame.png" alt="" />
        <span className="absolute top-full left-full bg-blue-500 text-[snow] font-[trap] text-[1.4rem] rounded-tl-none tracking-[.1rem] rounded-3xl pl-[.5rem] pr-[.5rem] p-[.3rem]">
          Amir
        </span>
      </div>
    </div>
  );
};

export default Cursor;
