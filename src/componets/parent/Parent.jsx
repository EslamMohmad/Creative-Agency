import { Outlet } from "react-router-dom";
import LoadingComponent from "../loadingComponent/LoadingComponent";
import Cursor from "../cursor/Cursor";
import Navbar from "../home/navbar/Navbar";
import MenuComponent from "../menu/MenuComponent";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const Parent = () => {
  const { menuCompState, loadingCompState } = useContext(AppContext);

  useEffect(() => {
    menuCompState
      ? document.body.classList.add("!overflow-hidden", "h-[100vh]")
      : !loadingCompState &&
        document.body.classList.remove("!overflow-hidden", "h-[100vh]");
  }, [menuCompState, loadingCompState]);

  return (
    <div className="relative overflow-hidden min-h-[100vh] bg-mainColor">
      <Cursor />
      <LoadingComponent />
      <Navbar />
      <MenuComponent />
      <Outlet />
    </div>
  );
};

export default Parent;
