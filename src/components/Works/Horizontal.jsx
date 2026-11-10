import Work from "./Work";

const data = [
  {
    name: "Landing Page",
    tools: "Gsap",
    img: "./images/works/landing.png",
    title: "A website that lets the product speak",
    descripte:
      "A website featuring smooth scrolling, a beautiful color palette, and elegant, fluid animations",
    link: "https://bucks-landing.pages.dev/",
  },
  {
    name: "Estate Hub",
    tools: "Redux Toolkit - Farmer Motion",
    img: "./images/works/estate.png",
    title: "An excellent piece of work for a company",
    descripte:
      "A website featuring scroll-triggered animation effects, unique mouse-interaction animations, and excellent responsiveness.",
    link: "https://estatehub-main.pages.dev/",
  },
  {
    name: "Dashboard",
    tools: "Tanstack Query - Supabase API",
    img: "./images/works/dashboard.png",
    title: "Modern and Minimal Dashboard",
    descripte: "Minimal and unique dashboard",
    link: "",
  },
];

const Horizontal = () => {
  return (
    <div className="horizontal flex items-center flex-nowrap h-full">
      <div className="flex flex-nowrap items-baseline gap-[12rem]">
        {data.map((work) => (
          <Work data={work} />
        ))}
      </div>
    </div>
  );
};

export default Horizontal;
