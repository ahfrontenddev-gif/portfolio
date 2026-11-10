import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import WhatIUse from "./sections/WhatIUse";
import Footer from "./sections/Footer";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

import "lenis/dist/lenis.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Container = () => {
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  // Lenis smooth scroll
  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  });

  // Hero entrance animation
  useGSAP(
    () => {
      const tlHero = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power1.inOut",
        },
      });

      tlHero
        .from(containerRef.current, {
          opacity: 0,
        })
        .from(".character", {
          y: 600,
        })
        .from(
          ".text-hero p",
          {
            y: -100,
            opacity: 0,
          },
          "<+=0.1",
        )
        .fromTo(
          ".text-hero h3",
          {
            letterSpacing: "10rem",
          },
          {
            letterSpacing: "0",
          },
          "<",
        )
        .from(
          ".text-hero .frame",
          {
            y: -100,
            opacity: 0,
          },
          "<",
        )
        .from(
          ".text-hero span",
          {
            y: -100,
            opacity: 0,
          },
          "<",
        )
        .from(".scroll-hero1", {
          opacity: 0,
          x: -250,
        });
    },
    { scope: heroRef },
  );

  // Main ScrollTrigger animation
  useGSAP(
    () => {
      const works = document.querySelector(".works");

      const scrollWorks =
        works.scrollWidth - works.clientWidth + works.clientWidth / 10;

      const split = SplitText.create(".what .para", {
        type: "chars, words",
        mask: "words",
        charsClass: "char++",
        wordsClass: "word++",
      });

      const splitWork = SplitText.create(".works .para .para-one", {
        type: "chars, words",
        mask: "words",
        charsClass: "char++",
        wordsClass: "word++",
      });

      const icons = gsap.utils.toArray(".character .head .box-icon");

      gsap.set(icons, {
        opacity: 0,
        scale: 0,
        x: -20,
      });

      gsap.set("footer", {
        top: "100vh",
      });

      gsap.set(containerRef.current, {
        backgroundColor: "#5B5B89",
      });

      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=10000",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: {
          ease: "none",
          duration: 1,
        },
      });

      // Hero
      tlMain
        .to(".character .head .img", {
          rotate: -60,
        })
        .to(icons, {
          y: -75,
          x: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
        })
        .to(".text-hero", {
          y: -15,
        })
        .to(".text-hero", {
          scale: 1.2,
          opacity: 0,
          y: -15,
        })
        .to(
          ".hero",
          {
            scale: 2.3,
            transformOrigin: "50% 60%",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".cont",
          {
            opacity: 0,
          },
          "3.4",
        )
        .set(
          ".hero",
          {
            display: "none",
          },
          ">",
        )
        // End Hero -- duration : 5
        // About
        .to(containerRef.current, {
          backgroundColor: "#3C6C70",
        })
        .to(".cont", { opacity: 1 }, "<")
        .set(".about", {
          display: "inline-block",
        })
        .fromTo(
          ".about .title span",
          {
            x: 400,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.4,
            ease: "back.out",
          },
        )
        .to(
          ".timeline",
          {
            width: "100%",
          },
          "<+=0.5",
        )
        .to(
          ".timeline .line",
          {
            width: "100%",
          },
          "<",
        )
        .fromTo(
          ".tree",
          {
            rotate: "30deg",
            opacity: 0,
            scale: 0.7,
            y: 15,
          },
          {
            rotate: 0,
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "<",
        )
        .fromTo(
          ".about .paragraph-one",
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
          },
          "<",
        )
        .set(".about .car", {
          scale: 1,
        })
        .to(".about .car", {
          right: "-110vw",
          duration: 3,
        })
        .to(
          ".about .paragraph-one",
          {
            opacity: 0,
            y: 200,
          },
          "<",
        )
        .fromTo(
          ".about .paragraph-two",
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
          },
          "<+.4",
        )
        .to(".tree-one", { x: "-100" }, "<")
        .to(".tree-two", { x: "-100", delay: 0.075 }, "<")
        .to(".tree-three", { x: "-100", delay: 0.15 }, "<")
        .to(".tree", {
          y: "-100",
          delay: 0.2,
        })
        .to(
          ".timeline",
          {
            y: 400,
          },
          "<",
        )
        .to(
          ".about .title span",
          {
            x: -300,
            opacity: 0,
            stagger: 0.5,
          },
          "<",
        )
        .to(
          ".about .paragraph-two",
          {
            opacity: 0,
            y: 200,
          },
          "<.+.8",
        )
        .to(".about", {
          opacity: 0,
        })
        .to(
          ".cont",
          {
            opacity: 0,
          },
          "<",
        )
        .set(
          ".about",
          {
            display: "none",
          },
          "<",
        )
        // End about - duration : 7.5 < x < 8.5
        // Tools
        .set(containerRef.current, {
          backgroundColor: "#8A4957",
        })
        .to(".cont", {
          opacity: 1,
        })
        .to(".what", {
          opacity: 1,
          zIndex: 1,
        })
        .fromTo(
          ".desc .title",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
          },
        )
        .fromTo(
          split.chars,
          {
            xPercent: "random([-150, 150])",
            yPercent: "random([-150, 150])",
            opacity: 0,
          },
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            stagger: {
              from: "random",
              amount: 0.7,
            },
            ease: "power2.out",
          },
        )
        .fromTo(
          ".what .desc .para img",
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
          },
          "<+=0.5",
        )
        .fromTo(
          ".desc .character_img",
          {
            scale: 0.5,
            opacity: 0,
            y: 100,
            transformOrigin: "bottom",
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
          },
          "<+=0.5",
        )
        .from(
          ".what .desc .code",
          {
            scale: 0.5,
            opacity: 0,
          },
          "<",
        )
        .fromTo(
          ".what .desc .flash",
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
          },
          "<",
        )
        .from(
          ".box",
          {
            y: 80,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
          },
          "<+=0.9",
        )
        .from(
          ".tools .box .num",
          {
            x: -80,
            scale: 0.8,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
          },
          "<+=0.2",
        )
        .from(
          ".tools .box .title",
          {
            y: -40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "<+=0.5",
        )
        .from(
          ".tools .box .para",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
          },
          "<+=0.25",
        )
        .from(
          ".tools .box .span",
          {
            height: 0,
          },
          "<+=0.5",
        )
        .from(
          ".tools .box .img",
          {
            x: 150,
            opacity: 0,
            stagger: 0.09,
            duration: 0.4,
          },
          "<+=0.5",
        )
        .from(
          ".tools .king",
          {
            opacity: 0,
            duration: 0.3,
          },
          "<+=0.2",
        )
        .from(
          ".tools .star",
          {
            opacity: 0,
            duration: 0.3,
          },
          "<+=0.2",
        )
        .to(
          ".cont",
          {
            opacity: 0,
            delay: 1,
          },
          ">",
        )
        .set(".what", {
          display: "none",
        })

        // Works
        .set(".works .desc .title", {
          y: 100,
          opacity: 0,
          scale: 0.9,
        })
        .set(containerRef.current, {
          backgroundColor: "#56683E",
        })
        .to(
          ".cont",
          {
            opacity: 1,
          },
          "<",
        )
        .to(
          ".works",
          {
            zIndex: 1,
            opacity: 1,
          },
          "<",
        )
        .to(".works .desc .title", {
          y: 0,
          opacity: 1,
          scale: 1,
        })
        .fromTo(
          splitWork.chars,
          {
            xPercent: "random([-150, 150])",
            yPercent: "random([-150, 150])",
            opacity: 0,
          },
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            stagger: {
              from: "random",
              amount: 0.7,
            },
            ease: "power2.out",
          },
        )
        .fromTo(
          ".work",
          {
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.05,
          },
        )
        .to(".works", {
          x: -scrollWorks,
          duration: 3,
        })
        // Footer
        .set("footer", {
          opacity: 1,
          zIndex: 100,
          duration: 0,
        })
        .to("footer", {
          top: "-100%",
          delay: 2,
        })
        .fromTo(
          "footer .box-1 h4 span",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          },
        )
        .from(
          "footer .box-1 h6",
          {
            y: 50,
            opacity: 0,
          },
          "<+=0.1",
        )
        .from(
          "footer .box-1 p",
          {
            y: 50,
            opacity: 0,
          },
          "<+=0.1",
        )
        .from(
          "footer .box-2 h6",
          {
            y: 50,
            opacity: 0,
          },
          "<+=0.1",
        )
        .from(
          "footer .box-2 ul li",
          {
            y: 50,
            opacity: 0,
            stagger: 0.2,
          },
          "<+=0.1",
        )
        .from(
          "footer .box-3 h5",
          {
            y: 50,
            opacity: 0,
          },
          "<+=0.1",
        )
        .from(
          "footer .box-3 p",
          {
            y: 50,
            opacity: 0,
          },
          "<+=0.1",
        )
        .from(
          "footer .box-3 .button",
          {
            y: 50,
            opacity: 0,
            onComplete: () => {
              gsap.to("footer .box-3 span", {
                scale: 1,
                onComplete: () => {
                  gsap.to("footer .box-3 .button h6", {
                    scale: 1,
                  });
                },
              });
            },
          },
          "<+=0.1",
        )
        .from(
          "footer .box-3 div a",
          {
            y: 50,
            opacity: 0,
          },
          "<+=0.1",
        );

      return () => {
        split.revert();
        splitWork.revert();
      };
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="relative z-10 h-lvh w-full">
      <div className="cont flex h-full w-full items-center justify-center overflow-hidden">
        <div
          ref={containerRef}
          className="bg-[url(/images/bg-transparent.png)] relative h-[calc(100dvh-3rem)] w-[calc(100vw-3rem)] overflow-hidden rounded-4xl"
        >
          <Hero />
          <About />
          <WhatIUse />
          <Works />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Container;
