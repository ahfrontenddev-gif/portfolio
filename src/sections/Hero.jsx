import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Character from "../components/Hero/Character"
import Scrollbar from "../components/Hero/Scrollbar"
import Text from "../components/Hero/Text"

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  //   const heroRef = useRef(null);
  //   const containerRef = useRef(null);

  // Initial entrance animation
  // useGSAP(
  //   () => {
  //     const tlHero = gsap.timeline({
  //       defaults: {
  //         duration: 1,
  //         ease: "power1.inOut",
  //       },
  //     });

  //     tlHero
  //       .from(containerRef.current, {
  //         opacity: 0,
  //       })
  //       .from(".character", {
  //         y: 600,
  //       })
  //       .from(
  //         ".text-hero p",
  //         {
  //           y: -100,
  //           opacity: 0,
  //         },
  //         "<+=0.3",
  //       )
  //       .from(
  //         ".text-hero .frame",
  //         {
  //           y: -100,
  //           opacity: 0,
  //         },
  //         "<",
  //       )
  //       .from(
  //         ".text-hero span",
  //         {
  //           y: -100,
  //           opacity: 0,
  //         },
  //         "<+=0.1",
  //       )
  //       .from(".scroll-hero1", {
  //         opacity: 0,
  //         x: 250,
  //       });
  //   },
  //   { scope: heroRef },
  // );

  // useGSAP(
  //   () => {
  //     const icons = gsap.utils.toArray(".character .head .box-icon");

  //     gsap.set(icons, {
  //       opacity: 0,
  //       scale: 0,
  //       x: -20,
  //     });

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: heroRef.current,
  //         start: "top top",
  //         end: "+=1400",
  //         pin: true,
  //         scrub: 1,
  //         markers: true,
  //       },
  //       defaults: {
  //         ease: "power1.inOut",
  //         duration: 1,
  //       },
  //     });

  //     tl.to(".character .head .img", {
  //       rotate: -60,
  //     })
  //       .to(icons, {
  //         y: -75,
  //         x: 0,
  //         opacity: 1,
  //         scale: 1,
  //         stagger: 0.1,
  //       })
  //       .to(".text-hero", { y: -15 })
  //       .to(".text-hero", { scale: 1.2, opacity: 0, y: -15 })
  //       .to(containerRef.current, {
  //         scale: 1.5,
  //         transformOrigin: "50% 60%",
  //         ease: "power2.inOut",
  //       },"<")
  //       .to(containerRef.current, {
  //         scale: 2.2,
  //         ease: "power2.in",
  //       },"<")
  //     .to(
  //       ".cont",
  //       {
  //         opacity: 0,
  //       },"4"
  //     )
  //   },
  //   { scope: heroRef },
  // );

  return (
    <header id="hero" className="hero w-full h-full relative">
      <Text />
      <Character />
      <Scrollbar />
    </header>
  );
};
export default Hero;
