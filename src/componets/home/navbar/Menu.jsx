import { useContext, useRef } from "react";
import HoverTransitionTxt from "../../../reuseable components/HoverTransitionTxt";
import { AppContext } from "../../../context/AppContext";

const Menu = () => {
  const { menuCompState, setMenuCompState } = useContext(AppContext);

  const textRef = useRef();

  return (
    <HoverTransitionTxt elementRef={textRef}>
      <div
        className="flex items-center text-white"
        onClick={() => setMenuCompState(!menuCompState)}
      >
        <div className="flex flex-col gap-1 relative ">
          <div className="bg-white w-5 h-[3px]"></div>
          <div className="bg-white w-5 h-[3px]"></div>
        </div>
        <h3
          className="pl-3 py-3 font-medium text-sm flex overflow-hidden"
          ref={textRef}
        >
          {menuCompState ? "Close" : "Menu"}
        </h3>
      </div>
    </HoverTransitionTxt>
  );
};

export default Menu;
