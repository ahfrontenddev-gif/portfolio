
const CircleProgress = () => {
  return (
    <div className="circleprogress font-[comico] fixed bottom-[5vh] right-[2.2vw] z-50 flex h-36 w-36 items-center justify-center rounded-full bg-[#18181b] shadow-lg">
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full -rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#42e6a4"
            strokeWidth="5"
            strokeLinecap="round"
            className="circle"
          />
        </svg>
        <div className="percent absolute inset-0 flex items-center justify-center text-[1.5rem] font-semibold text-white">
          0%
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
