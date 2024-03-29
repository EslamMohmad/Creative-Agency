import { Outlet, useLocation, useHref } from "react-router-dom";
import LoadingComponent from "../loadingComponent/LoadingComponent";
import Cursor from "../cursor/Cursor";
import Navbar from "../home/navbar/Navbar";
import MenuComponent from "../menu/MenuComponent";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import ScrollTop from "./../scrollTop/ScrollTop";

const Parent = () => {
  const { menuCompState, loadingCompState } = useContext(AppContext);

  const location = useHref();

  useEffect(() => {
    menuCompState
      ? document.body.classList.add("!overflow-hidden", "h-[100dvh]")
      : !loadingCompState &&
        document.body.classList.remove("!overflow-hidden", "h-[100dvh]");
  }, [menuCompState, loadingCompState]);

  return (
    <div className="relative overflow-hidden min-h-[100svh] bg-mainColor">
      <Cursor />
      <LoadingComponent />
      <Navbar />
      <MenuComponent />
      <Outlet />
      {location !== "/Creative-Agency" ? <ScrollTop /> : false}
    </div>
  );
};

export default Parent;
