import logo from "../assets/Home/logo.png";
import HoverCursor from "../../../reuseable components/HoverCursor";

const Logo = () => {
  return (
    <HoverCursor>
      <img src={logo} className="h-[16px]" />
    </HoverCursor>
  );
};

export default Logo;
