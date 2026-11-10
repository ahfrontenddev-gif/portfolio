import React from "react";

const Work = ({ data }) => {
  return (
    <a
    href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="work flex flex-col gap-[1vh] w-[55rem] relative group max-sm:w-[40rem]"
    >
      <div className="title w-full flex justify-between items-center font-[Tanker]">
        <h5 className="name-project text-[2rem] text-white">{data.name}</h5>
        <h6 className="tech text-[2rem] text-white/80">{data.tools}</h6>
      </div>
      <div className="img min-w-full h-[30rem] max-sm:h-[25rem] max-sm:w-[21rem] transition group-hover:-rotate-2">
        <img
          className="w-full h-full object-cover rounded-4xl border-2 overflow-hidden"
          src={data.img}
          alt={data.name}
        />
      </div>
      <div className="desc flex flex-col pt-[2vh]">
        <h6 className="text-[3.7rem] leading-[3rem] font-[melodrama] text-white/90 max-sm:text-[2.4rem] max-md:font-bold max-sm:leading-[2.2rem]">
          {data.name}
        </h6>
        <p className="text-[1.7rem] font-[Tanker] text-white/80 mt-[1rem] max-sm:text-[2rem]">
          {data.descripte}
        </p>
      </div>
    </a>
  );
};

export default Work;
