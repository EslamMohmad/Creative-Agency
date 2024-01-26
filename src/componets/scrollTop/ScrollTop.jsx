import { useEffect, useState } from "react";
import HoverCursor from "../../reuseable components/HoverCursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Circle from "./Circle.jsx";

const ScrollTop = () => {
  const [compState, setCompState] = useState(false);

  useEffect(() => {
    function onScrollHandler() {
      if (this.scrollY > 50) {
        setCompState(true);
      } else setCompState(false);
    }

    window.addEventListener("scroll", onScrollHandler);
    //clean up
    return () => window.removeEventListener("scroll", onScrollHandler);
  }, [compState]);

  return (
    <HoverCursor
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-10 bottom-5 right-5 w-[50px] h-[50px] text-center leading-[50px] ${
        compState
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-[20px] invisible"
      } transition-all duration-300`}
    >
      <Circle />
      <FontAwesomeIcon
        icon={faAngleUp}
        className="text-lightGreenColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </HoverCursor>
  );
};

export default ScrollTop;
