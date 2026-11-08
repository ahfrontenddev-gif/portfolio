const Desc = () => {
  return (
    <div className="desc flex-1 h-full flex flex-col gap-[4rem] relative pt-[8vh] max-md:h-auto">
      <h4 className="title font-[tanker] md:text-[16rem] md:leading-[13rem] text-[7rem] text-[#FFFDF7] -rotate-3">
        MY TOOLBOX
      </h4>
      <p className="para text-[2.5rem] leading-[3rem] max-md:text-[2rem] max-md:leading-[2rem] relative font-[Tanker] text-white/80 w-[70%] max-md:w-1/2 max-sm:w-[75%]">
        The technologies and tools i use to build modern, interactive and
        creative web experienes
        <img
          className="absolute top-full left-0 w-[40%]"
          src="/images/icon/line.png"
          alt=""
        />
      </p>
      <div className="character_img absolute bottom-0 right-0 w-full max-md:w-1/2 max-sm:w-[65%]">
        <img className="w-full" src="/images/character/what.png" alt="" />
      </div>
      <img
        className="code w-[8rem] opacity-80 absolute right-[8vw] top-[8vh]"
        src="/images/icon/code.png"
        alt=""
      />
      <img
        className="flash w-[12rem] opacity-90 absolute right-0 top-[12vh] max-md:hidden"
        src="/images/icon/flash.png"
        alt=""
      />
    </div>
  );
};

export default Desc;
