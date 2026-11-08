import Box from "./Box";

const dataTools = [
  {
    id: 1,
    title: "Frontend",
    desc: "Building the core of the web",
    imgs: [
      "/images/tools/html.png",
      "/images/tools/css.png",
      "/images/tools/js.png",
      "/images/tools/react.png",
    ],
  },
  {
    id: 2,
    title: "Styling",
    desc: "Making it look beatiful",
    imgs: [
      "/images/tools/tailwind.png",
      "/images/tools/styled.png",
      "/images/tools/modules.png",
    ],
  },
  {
    id: 3,
    title: "State & Data",
    desc: "Managing data with confidence",
    imgs: [
      "/images/tools/rtk.png",
      "/images/tools/reactrouter.png",
      "/images/tools/query.png",
    ],
  },
  {
    id: 4,
    title: "Animation , 3D",
    desc: "Bringing ideas to life",
    imgs: [
      "/images/tools/gsap.png",
      "/images/tools/motion.png",
      "/images/tools/threejs.png",
      "/images/tools/dnd.png",
    ],
  },
  {
    id: 5,
    title: "Others Toools",
    imgs: [
      "/images/tools/supabaseapi.png",
      "/images/tools/vitest.svg",
      "/images/tools/testing.png",
    ],
  },
];

const Tools = () => {
  return (
    <div className="tools flex-[1.2] h-full max-md:h-auto max-md:flex-[1.3]">
      <div className="w-full relative h-full flex flex-col justify-center gap-[1rem] items-center">
        <img
          className="king w-[10rem] absolute left-0 bottom-0"
          src="/images/icon/king.png"
          alt=""
        />
        <img
          className="star w-[5rem] absolute right-0 top-[10vh] max-sm:top-0"
          src="/images/icon/star.png"
          alt=""
        />
        {dataTools.map((data,index) => (
          <Box key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
