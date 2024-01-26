import { useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { AppContext } from "../../../context/AppContext";

const Navbar = () => {
  const { loadingCompState } = useContext(AppContext);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-12 py-5 flex justify-between items-center ${
        loadingCompState ? "opacity-0 invisible" : " opacity-100 visible"
      } transition-[opacity, visibility] duration-500 z-[60]`}
    >
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
