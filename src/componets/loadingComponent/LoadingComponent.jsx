import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import styles from "./loadingComponent.module.css";

const LoadingComponent = () => {
  const { loadingCompState, setLoadingCompState } = useContext(AppContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setLoadingCompState(true);
  }, [pathname]);

  return loadingCompState ? (
    <div
      className={`fixed top-0 left-0 h-[100vh] w-full overflow-hidden z-[50]`}
    >
      <div
        style={{ "--translateY": "-100%" }}
        className={`h-1/2 bg-gray-800 ${styles.boardTranslateY}`}
        onAnimationEnd={() => setLoadingCompState(false)}
      ></div>
      <div
        className={`h-[1px] w-[30%] bg-black/30 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 ${styles.loadingDone}`}
      >
        <div className={`h-full bg-white ${styles.loadingBar}`}></div>
      </div>
      <div
        style={{ "--translateY": "100%" }}
        className={`h-1/2 bg-gray-800 ${styles.boardTranslateY}`}
      ></div>
    </div>
  ) : (
    false
  );
};

export default LoadingComponent;
