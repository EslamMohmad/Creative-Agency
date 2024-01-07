import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const cursor = () => {
  const [dims, setDims] = useState({
    top: 0,
    left: 0,
  });

  const { cursorState } = useContext(AppContext);

  const cursorStyleHandler = () => {
    if (cursorState) {
      return {
        outerCursor: "opacity-0",
        innerCursor: "w-[70px] h-[70px] opacity-30 -m-[35px]",
      };
    } else
      return {
        outerCursor: "",
        innerCursor: "",
      };
  };

  useEffect(() => {
    const mousemoveFunc = (e) => {
      const { pageX, pageY } = e;
      setDims({ top: pageY, left: pageX });
    };

    window.addEventListener("mousemove", mousemoveFunc);

    return () => {
      window.removeEventListener("mousemove", mousemoveFunc);
    };
  }, []);

  return (
    <>
      <div
        style={{
          transform: `translate(${dims.left}px, ${dims.top}px)`,
          transition: "0.12s ease-out transform",
        }}
        className={`absolute w-[38px] h-[38px] rounded-full border border-green-500 -m-[16.5px] pointer-events-none z-10  ${
          cursorStyleHandler().outerCursor
        }`}
      ></div>
      <div
        style={{
          transform: `translate(${dims.left}px, ${dims.top}px)`,
          transitionDuration: `${cursorState ? "0.3s" : "0.1s"}`,
          transitionTimingFunction: "ease-out",
          transitionProperty: "width, height, margin, opacity",
        }}
        className={`absolute bg-green-500 w-[5px] h-[5px] rounded-full  pointer-events-none z-10 ${
          cursorStyleHandler().innerCursor
        }`}
      ></div>
    </>
  );
};

export default cursor;
