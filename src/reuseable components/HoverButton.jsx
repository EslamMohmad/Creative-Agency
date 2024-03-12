const HoverButton = ({ children }) => {
  return (
    <button className="group relative z-10 border-2 border-white font-semibold text-md w-[200px] capitalize h-[fit-content] py-3 hover:text-black transition-colors overflow-hidden">
      <div className="absolute w-[calc(100%_+_10px)] h-full -top-20 -rotate-6 group-hover:rotate-0  bg-white origin-bottom z-0 group-hover:top-0 transition-all duration-500"></div>
      <span className="relative block z-10 group-hover:text-black transition-colors delay-150">
        {children}
      </span>
    </button>
  );
};

export default HoverButton;
