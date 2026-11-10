import React from "react";

const Paragraph = () => {
  return (
    <div className="relative">
      <p className="paragraph-two font-[Tanker] sm:text-[2rem] text-[2.5rem] text-[snow]/90 sm:w-[50vw] w-[85vw] text-center sm:mt-[8vh] mt-[2vh]">
        I enjoy turning ideas into reality through clean code, thoughtful
        design, and meaningful animations. I'm always exploring new
        technologies, experimenting with creative interactions, and finding
        better ways to bring the web to life
      </p>
      <p className="paragraph-one absolute top-0 left-0 font-[Tanker] sm:text-[2rem] text-[2.5rem] text-[snow]/90 sm:w-[50vw] w-[85vw] text-center sm:mt-[8vh] mt-[8vh]">
        I am 19 years old and have been learning front-end development for two
        years. I have a strong interest in learning new tools—such as Three.js
        and GSAP, which I am currently studying.
      </p>
    </div>
  );
};

export default Paragraph;
