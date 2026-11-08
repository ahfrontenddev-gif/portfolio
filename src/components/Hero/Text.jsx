import Frame from "../../Animation/Frame";

const Text = () => {
  return (
    <div className="text-hero absolute left-1/2 -translate-x-1/2 top-[10vh] w-full">
      <div className="conti flex items-center flex-col">
        <p className="font-[Comico] text-[#B7B7F0] font-bold text-[2.6rem]">
          Created by
        </p>
        <Frame>
          <h3 className="font-[Melodrama] text-nowrap font-medium max-sm:scale-y-110 leading-[5rem] text-[5rem] sm:leading-[8rem] sm:text-[8rem] text-[#ECECEC] pl-[3rem] pr-[3rem] max-sm:my-[2rem] max-sm:py-[1rem]">
            Amirhossein
            <br className="md:hidden" /> Abbaszadeh
          </h3>
        </Frame>
        <div className="font-[Melodrama] flex items-center gap-[4vw] sm:gap-[20vw] text-[2.7rem] md:text-[3.1rem]">
          <span className="text-[#ddddfa]">Front End</span>
          <span className=" text-[#ddddfa]">Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Text;
