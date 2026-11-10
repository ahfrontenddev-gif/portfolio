import React from "react";

const Timeline = () => {
  return (
    <div className="timeline absolute bottom-[7vh] left-0 z-[2]">
      <div className="line w-full bg-[snow] h-[.4rem] absolute bottom-0 left-0"></div>
      <div className="car absolute bottom-[-1vh] right-full z-[3]">
        <img className="w-[28rem] max-sm:w-[15rem]" src="/images/car.png" alt="" />
      </div>
      <div className="trees z-[2]">
        <div className="tree tree-one origin-bottom-left absolute bottom-[-.1vh] left-[20vw]">
          <img className="w-[10rem]" src="/images/trees/01.png" alt="" />
        </div>
        <div className="tree tree-two origin-bottom-left absolute bottom-[-.1vh] left-[65vw]">
          <img className="w-[10rem] max-sm:w-[7rem]" src="/images/trees/02.png" alt="" />
        </div>
        <div className="tree tree-three origin-bottom-left absolute bottom-[-.1vh] left-[90vw]">
          <img className="min-w-[10rem]" src="/images/trees/03.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
