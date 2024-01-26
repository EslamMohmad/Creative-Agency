import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import NavList from "./NavList";
import DevDetails from "./DevDetails";

const MenuComponent = () => {
  const { menuCompState, setMenuCompState, loadingCompState } =
    useContext(AppContext);

  const { pathname } = useLocation();

  useEffect(() => {
    setMenuCompState(false);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full over bg-zinc-950 z-[50] ${
        menuCompState
          ? "translate-x-0 delay-200"
          : "-translate-x-full delay-[200ms]"
      } transition-transform duration-500 ease flex overflow-hidden`}
      // onTransitionEnd={() => setMenuCompState(false)}
    >
      <NavList state={menuCompState} />
      <div
        className={`w-[1px] h-[100%] bg-gray-500/25 ${
          menuCompState
            ? "translate-y-[0] opacity-100 delay-[800ms]"
            : "-translate-y-[100%] opacity-0"
        } transition-[transform, opacity] duration-500 ease`}
      ></div>
      <DevDetails state={menuCompState} />
    </div>
  );
};

export default MenuComponent;
