import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { AppContext } from "../../../context/AppContext";

const Navbar = () => {
  const { loadingCompState } = useContext(AppContext);
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const { scrollY } = this;
      scrollY >= 100 ? setState(true) : setState(false);
    });
  }, [state]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-12 py-3 sm:py-4 flex justify-between items-center ${
        loadingCompState ? "opacity-0 invisible" : " opacity-100 visible"
      } ${
        state
          ? "bg-mainColor/60 rounded-bl-md rounded-br-md backdrop-blur-sm"
          : "bg-transparent"
      } transition-[opacity, visibility] duration-500 z-[60]`}
    >
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
