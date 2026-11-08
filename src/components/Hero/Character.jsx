import React from "react";

const Character = () => {
  return (
    <div className="character absolute bottom-0 left-1/2 -translate-x-1/2">
      <div className="conti relative flex items-center justify-center flex-col">
        <div className="head z-[51] relative">
          <div className="img origin-bottom-left sm:w-[15vw] w-[31.3vw]">
            <img
              className="w-full translate-y-1 relative"
              src="/images/character/سر.png"
              alt=""
            />
          </div>
          <div className="icons absolute bottom-0 right-0 flex items-center translate-x-1/3 translate-y-14">
            <div className="box-icon relative">
              <img
                className="icon w-[3rem] relative -top-10 -left-2"
                src="/images/icon/js.png"
              />
            </div>
            <div className="box-icon relative">
              <img
                className="icon w-[3rem] relative -left-2"
                src="/images/icon/react.png"
              />
            </div>
            <div className="box-icon relative">
              <span className="icon inline-block relative top-10 min-w-[2.9rem] h-[2.9rem] border-[3.2px] rounded-full bg-blue-400"></span>
            </div>
            <div className="box-icon relative">
              <span className="icon inline-block relative -top-12 min-w-[2.3rem] h-[2.3rem] border-[3.2px] rounded-full bg-red-400"></span>
            </div>
            <div className="box-icon relative">
              <span className="icon inline-block relative top-4 min-w-[3.2rem] h-[3.2rem] border-[3.2px] rounded-full bg-white"></span>
            </div>
          </div>
        </div>
        <div className="body z-[48] sm:w-[38vw] w-[80vw]">
          <img className="w-full" src="/images/character/بدن.png" alt="" />
        </div>
        <div className="hand z-[49] absolute sm:bottom-[8.1vw] bottom-[17vw] sm:left-[1.5vw] left-[4vw] sm:w-[8vw] w-[14vw]">
          <img className="w-full" src="/images/character/دست.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Character;
