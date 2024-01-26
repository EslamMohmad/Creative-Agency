import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const HoverCursor = (props) => {
  const { setCursorState } = useContext(AppContext);

  return (
    <div
      onMouseEnter={() => setCursorState(true)}
      onMouseLeave={() => setCursorState(false)}
      {...props}
      className={`cursor-pointer ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default HoverCursor;
