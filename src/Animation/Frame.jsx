import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Cursor from "./Cursor";

gsap.registerPlugin(useGSAP);

const Frame = ({ children }) => {
  const parentRef = useRef(null);
  const contiRef = useRef(null);
  const childRef = useRef(null);

  useGSAP(
    () => {
      const conti = contiRef.current;
      const child = childRef.current;
      const cursor = document.querySelector(".cursor-frame");
      const number = document.querySelector(".number");
      const rect = child.getBoundingClientRect();

      let initial = [];

      if (!conti || !child) return;

      gsap.set(cursor, {
        opacity: 0,
      });
      gsap.set(conti, {
        opacity: 0,
      });
      gsap.set(".number", { scale: 0, opacity: 0, y: -100 });
      const startFrame = () => {
        // const rect = child.getBoundingClientRect();
        number.textContent = `${Math.ceil(rect.width)} x ${Math.ceil(rect.height)}`;
        gsap.to(conti, {
          width: rect.width,
          height: rect.height,
          delay: 0.11,
          duration: 1,
          opacity: 1.3,
          ease: "none",
        });
        gsap.to(cursor, {
          x: rect.width,
          y: rect.height,
          opacity: 1,
          delay: 0,
          duration: 1,
          ease: "none",
        });
        gsap.to(".number", {
          scale: 1,
          opacity: 1,
          y: 0,
          delay: 0,
          ease: "none",
        });
      };

      const updateFrame = () => {
        const rect = child.getBoundingClientRect();
        number.textContent = `${Math.ceil(rect.width)} x ${Math.ceil(rect.height)}`;

        gsap.set(conti, {
          width: rect.width,
          height: rect.height,
          opacity: 1,
        });
        gsap.set(cursor, {
          x: rect.width * 1.1,
          y: rect.height,
          opacity: 1,
        });
        gsap.set(".number", {
          scale: 1,
          opacity: 1,
          y: 0,
        });
        initial = null;
      };

      setTimeout(() => {
        startFrame();
      }, 3000);
      window.addEventListener("resize", updateFrame);

      return () => {
        window.removeEventListener("resize", updateFrame);
      };
    },
    { scope: parentRef },
  );

  return (
    <div ref={parentRef} className="frame">
      <div className="relative">
        <div
          ref={contiRef}
          className="absolute top-0 left-0 border-2 border-blue-400 pointer-events-none"
        >
          <span className="number absolute left-[full] top-[-4rem] rounded-[.4rem] font-[trap] sm:text-[1.4rem] text-[1.8rem] pl-[.6rem] pr-[.6rem] p-[.3rem] bg-blue-500 text-[snow]"></span>
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-400" />

          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-400" />

          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-400" />

          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-400" />
        </div>

        <div ref={childRef} className="inline-block">
          {children}
        </div>
        <Cursor />
      </div>
    </div>
  );
};

export default Frame;
