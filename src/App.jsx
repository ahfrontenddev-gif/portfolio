import Nav from "./sections/Nav";
import CircleProgress from "./common/CircleProgress";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "./Container";

gsap.registerPlugin(useGSAP);

function App() {
  useGSAP(() => {
    const section = document.querySelector(".circleprogress");
    const circle = document.querySelector(".circle");
    const percent = document.querySelector(".percent");
    if (!section || !circle || !percent) return;

    const circumference = circle.getTotalLength();

    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
    });

    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const value = gsap.utils.clamp(0, 1, progress);
      gsap.set(circle, {
        strokeDashoffset: circumference * (1 - value),
      });
      percent.textContent = `${Math.round(value * 100)}%`;
    };
    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  });

  return (
    <main className="relative bg-black">
      <Nav />
      <Container />
      <CircleProgress />
    </main>
  );
}

export default App;
