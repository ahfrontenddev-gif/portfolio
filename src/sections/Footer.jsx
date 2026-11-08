const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full h-full opacity-0 -z-10 bg-[url(/images/bg-transparent.png)] bg-[#DCD7FF] relative"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="h-fit flex items-center max-sm:flex-col">
          <div className="box-1 flex flex-col sm:border-r-4 max-sm:border-b-2 border-[#29145F] sm:pr-[3vw] max-sm:pb-[2vh]">
            <h4 className="flex flex-col  text-[8rem] leading-[7rem] font-[melodrama] text-[#29145F]">
              <span className="overflow-hidden"> Amirhossein </span>
              <span className="overflow-hidden"> Abbaszadeh</span>
            </h4>
            <h6 className="font-[tanker] text-[2.8rem] text-[#29145F]/80 pt-[2rem]">
              Front End Developer
            </h6>
            <p className="font-[tanker] font-extralight text-[1.7rem] text-[#29145F]/60">
              Let's create something amazing together
            </p>
          </div>
          <div className="box-2 flex flex-col sm:px-[3vw] max-sm:py-[2vh]">
            <h6 className="text-[#482e88] font-[Melodrama] font-bold text-[2rem] max-md:text-[3rem]">
              Tools
            </h6>
            <ul className="mt-[1rem] font-[Melodrama] text-[#6148a1] text-[1.6rem] md:text-[2.1rem]">
              <li className="flex items-center gap-[1rem]">
                React
                <img
                  className="w-[1.7rem]"
                  src="/images/icon/dright.png"
                  alt=""
                />
              </li>
              <li className="flex items-center gap-[1rem]">
                Gsap
                <img
                  className="w-[1.7rem]"
                  src="/images/icon/dright.png"
                  alt=""
                />
              </li>
              <li className="flex items-center gap-[1rem]">
                Tailwind
                <img
                  className="w-[1.7rem]"
                  src="/images/icon/dright.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="box-3 flex flex-col sm:border-l-4 max-sm:border-t-2 border-[#29145F] sm:pl-[3vw] max-sm:pt-[2vh] max-sm:w-full max-sm:items-center">
            <h5 className="font-[tanker] text-[3rem] text-[#5a409b]">
              Stay in Touch
            </h5>
            <p className="font-[tanker] text-[1.7rem] text-[#5a409b]/60 mt-[2rem]">
              Get notified about new projects and ideas
            </p>
            <a
              href="tel:+989935423036"
              className="button font-[tanker] mt-[1rem] text-[#F8F6FF] text-shadow-lg text-[2rem] flex items-center gap-[1rem] border w-fit py-[0.4rem] p-[1rem] rounded-[4rem] overflow-hidden"
            >
              <h6 className="scale-0">Get in touch</h6>

              <span className="scale-0 p-[.8rem] rounded-full bg-[#29145F]">
                <img
                  className="w-[2rem] aspect-square"
                  src="/images/icon/right.png"
                  alt=""
                />
              </span>
            </a>
            <div className="flex items-center gap-[2rem] mt-[1rem]">
              <a
                href="https://github.com/ahfrontenddev-gif/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-[1rem] bg-[#29145F] rounded-full overflow-hidden inline-flex"
              >
                <img
                  className="w-[3rem] h-[3rem]"
                  src="/images/tools/github.png"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://t.me/A1_M2_I3_R4O"
                target="_blank"
                rel="noopener noreferrer"
                className="p-[1rem] bg-[#29145F] rounded-full overflow-hidden inline-flex"
              >
                <img
                  className="w-[3rem] h-[3rem] object-cover"
                  src="/images/icon/telegram.png"
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
