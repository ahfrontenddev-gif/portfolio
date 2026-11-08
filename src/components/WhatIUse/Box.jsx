const dataTools = [
  { id: 1, title: "Frontend", desc: "Building the core of the web", imgs: [] },
];

const Box = ({ data }) => {
  return (
    <div className="box w-[80%] max-sm:w-[95%] min-h-[8rem] max-md:min-h-[5rem] bg-[#F5F0E6] flex items-center p-[1rem] max-md:py-[.5rem] border rounded-4xl overflow-hidden">
      <div className=" flex items-center justify-between gap-[2rem] w-[40%]">
        <span className="num font-[tanker] text-[4rem] text-[#8A4957] max-sm:text-[2.4rem]">
          {data.id > 10 ? data.id : "0" + `${data.id}`}
        </span>
        <div className="h-full flex flex-col gap-[.7rem] flex-1 max-sm:gap-0">
          <h4 className="title text-[2rem] max-sm:text-[1.8rem] leading-[2rem] font-[trap] font-bold text-[#29252]">
            {data.title}
          </h4>
          {data.desc ? (
            <p className="para text-[1.5rem] leading-[1.5rem] font-[trap] text-[#5b645d]">
              {data.desc}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <span className="span h-[80%] w-[.2rem] bg-[#B9C9BC] mx-[2rem]"></span>
      <div className="relative overflow-hidden flex-1 flex items-center gap-[2rem]">
        {data.imgs.map((img) => (
          <div key={img} className="img h-[7rem] max-md:h-[5rem] max-sm:h-[4rem] flex items-center justify-center flex-1">
            <img className="max-h-full object-cover scale-70 max-sm:scale-90" src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
