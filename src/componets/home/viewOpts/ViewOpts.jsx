import { useContext, useRef } from "react";
import { AppContext } from "../../../context/AppContext";
import { imgsArr } from "../../../utls/constants";
import HoverTransitionTxt from "../../../reuseable components/HoverTransitionTxt";

const ViewOpts = () => {
  const { currImgIdx } = useContext(AppContext);
  const prevRef = useRef();
  const nextRef = useRef();
  return (
    <footer className="absolute bottom-0 px-3 py-4 sm:px-12 sm:py-7 text-white flex justify-between items-center flex-wrap sm:flex-nowrap sm:gap-5 w-full text-xs z-20">
      <HoverTransitionTxt
        elementRef={prevRef}
        className={`home-swiper-button-prev cursor-pointer order-2 sm:order-3 w-[45%] sm:w-[auto] flex items-center gap-4 ${
          currImgIdx === 0
            ? "opacity-30 pointer-events-none"
            : "[&>span]:hover:border border-white [&>span]:hover:border-white/25"
        }`}
      >
        <span className="font-semibold w-[50px] h-[50px] leading-[50px] rounded-full text-center transition-all duration-300">
          {"<"}
        </span>
        <h6
          className="flex w-[max-content] overflow-hidden h-[max-content] py-3"
          ref={prevRef}
        >
          Prev Slide
        </h6>
      </HoverTransitionTxt>
      <div className="flex items-center justify-center order-1 sm:order-3 w-[100%] sm:flex-grow-0">
        {currImgIdx + 1} /
        <span className="w-[70px] h-[1px] bg-white mx-2"></span>
        {imgsArr.length}
      </div>
      <HoverTransitionTxt
        elementRef={nextRef}
        className={`home-swiper-button-next cursor-pointer order-3 w-[45%] sm:w-[auto] flex items-center justify-end gap-4 ${
          currImgIdx === imgsArr.length - 1
            ? "opacity-30 pointer-events-none"
            : "[&>span]:hover:border border-white [&>span]:hover:border-white/25"
        }`}
      >
        <h6
          className="flex w-[max-content] overflow-hidden h-[max-content] py-3"
          ref={nextRef}
        >
          Next Slide
        </h6>
        <span className="font-semibold w-[50px] h-[50px] leading-[50px] rounded-full text-center transition-all duration-300">
          {">"}
        </span>
      </HoverTransitionTxt>
    </footer>
  );
};

export default ViewOpts;
