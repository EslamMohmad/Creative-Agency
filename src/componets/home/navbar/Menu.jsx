import { useContext, useRef } from "react";
import { AppContext } from "../../../context/AppContext";
import { lettersTransition } from "../../../utls/functions";

const Menu = () => {
  const { setCursorState } = useContext(AppContext);
  const textRef = useRef();

  return (
    <div
      className="flex items-center text-white"
      onMouseEnter={(e) => (
        setCursorState(true), lettersTransition(e, textRef)
      )}
      onMouseLeave={() => setCursorState(false)}
    >
      <div className="flex flex-col gap-1 relative ">
        <div className="bg-white w-5 h-[3px]"></div>
        <div className="bg-white w-5 h-[3px]"></div>
      </div>
      <h3
        className="pl-3 py-3 font-medium text-sm flex overflow-hidden"
        ref={textRef}
      >
        Menu
      </h3>
    </div>
  );
};

export default Menu;
