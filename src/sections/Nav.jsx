import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import cv from "../../public/cv.pdf";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Nav = () => {
  useGSAP(() => {
    gsap.from("nav", {
      y: -150,
      ease: "back",
      duration: 1,
    });
  });
  return (
    <nav className="font-[trap] w-dvw z-50 flex items-center justify-between fixed top-[5vh] left-0 pl-[5rem] pr-[5rem] font-[Lalezar]">
      <div className="left flex items-center gap-[1rem] max-sm:w-full max-sm:justify-between">
        <a
          href="/cv.pdf"
          download="Amirhossein-Abbaszadeh-CV.pdf"
          className="flex items-center gap-[.5rem] text-[1.7rem] rounded-[5rem] border border-[snow] text-[snow]/90 pl-[1.4rem] pr-[1.4rem] p-[.3rem]"
        >
          Download CV
        </a>
        <div className="flex items-center gap-[.5rem] rounded-[5rem] border border-[snow] text-[snow]/90 pl-[1.4rem] pr-[1.4rem] p-[.3rem]">
          <span className="w-[.7rem] aspect-square rounded-full bg-green-400"></span>
          <p className="text-[1.7rem]">Open to roles and freelance</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
