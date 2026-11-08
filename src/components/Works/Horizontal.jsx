import Work from "./Work";

const Horizontal = () => {
  return (
    <div className="horizontal flex items-center flex-nowrap gap-[4rem] h-full">
      <Work />
      <Work />
      <Work />
    </div>
  );
};

export default Horizontal;
