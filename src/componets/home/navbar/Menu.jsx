import { useContext } from "react";
import HoverTransitionTxt from "../../../reuseable components/HoverTransitionTxt";
import { AppContext } from "../../../context/AppContext";
import HoverCursor from "../../../reuseable components/HoverCursor";

const Menu = () => {
  const { menuCompState, setMenuCompState } = useContext(AppContext);

  return (
    <HoverCursor>
      <div
        className="flex items-center text-white"
        onClick={() => setMenuCompState(!menuCompState)}
      >
        <div className="flex flex-col gap-1 relative ">
          <div className="bg-white w-5 h-[3px]"></div>
          <div className="bg-white w-5 h-[3px]"></div>
        </div>
        <HoverTransitionTxt className="pl-3 py-3 font-medium text-sm flex overflow-hidden">
          {menuCompState ? "Close" : "Menu"}
        </HoverTransitionTxt>
      </div>
    </HoverCursor>
  );
};

export default Menu;
