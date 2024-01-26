import { memo, useContext } from "react";
import { lettersTransition } from "../utls/functions";
import { AppContext } from "../context/AppContext";

const HoverTransitionTxt = ({ children, elementRef, className, speed }) => {
  const { setCursorState } = useContext(AppContext);

  return (
    <div
      className={className}
      onMouseEnter={(e) => (
        setCursorState(true), lettersTransition(e, elementRef, speed)
      )}
      onMouseLeave={() => setCursorState(false)}
    >
      {children}
    </div>
  );
};

export default memo(HoverTransitionTxt);
