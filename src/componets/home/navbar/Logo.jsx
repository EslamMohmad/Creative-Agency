import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import logo from "../assets/Home/logo.png";

const Logo = () => {
  const { setCursorState } = useContext(AppContext);

  return (
    <img
      onMouseEnter={() => setCursorState(true)}
      onMouseLeave={() => setCursorState(false)}
      src={logo}
      className="h-[16px]"
    />
  );
};

export default Logo;
