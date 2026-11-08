import React from "react";

const Work = () => {
  return (
    <div className="work flex flex-col gap-[1vh] w-[55rem] relative group max-sm:w-[40rem]">
      <div className="title w-full flex justify-between items-center font-[Tanker]">
        <h5 className="name-project text-[2rem] text-white">Dashboard</h5>
        <h6 className="tech text-[2rem] text-white/60">React</h6>
      </div>
      <div className="img transition group-hover:-rotate-2">
        <img className="w-full rounded-4xl border-2 overflow-hidden" src="/public/images/works/dashboard.jpg" alt="" />
      </div>
      <div className="desc flex flex-col pt-[2vh]">
        <h6 className="text-[3.7rem] leading-[3rem] font-[melodrama] text-white/90 max-sm:text-[2.4rem] max-md:font-bold max-sm:leading-[2.2rem]">Every shipment, live, in one place</h6>
        <p className="text-[1.7rem] font-[Tanker] text-white/80 mt-[1rem] max-sm:text-[2rem]">
          Drivers, routes and delays were scattered across tools. One TMS now
          shows live tracking.
        </p>
      </div>
    </div>
  );
};

export default Work;
