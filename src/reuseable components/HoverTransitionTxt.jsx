import { memo, useContext, useRef } from "react";
import { lettersTransition } from "../utls/functions";
import { AppContext } from "../context/AppContext";

const HoverTransitionTxt = ({ children, className, speed }) => {
  const { setCursorState } = useContext(AppContext);
  const elementRef = useRef();

  return (
    <div
      ref={elementRef}
      className={className}
      onMouseEnter={(e) => lettersTransition(e, elementRef, speed)}
    >
      {children}
    </div>
  );
};

export default memo(HoverTransitionTxt);
