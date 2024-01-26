import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { lettersTransition } from "../utls/functions";

const OnViewEffect = ({ children, elementRef, speed, type, delay }) => {
  const { loadingCompState } = useContext(AppContext);

  useEffect(() => {
    if (!loadingCompState) {
      lettersTransition(undefined, elementRef, speed, type, delay);
    }
  }, [loadingCompState]);

  return children;
};

export default OnViewEffect;
