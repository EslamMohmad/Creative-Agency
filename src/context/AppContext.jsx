import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState(false);
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [loadingCompState, setLoadingCompState] = useState(true);
  const [menuCompState, setMenuCompState] = useState(false);

  const shardValues = {
    cursorState,
    setCursorState,
    currImgIdx,
    setCurrImgIdx,
    loadingCompState,
    setLoadingCompState,
    menuCompState,
    setMenuCompState,
  };

  return (
    <AppContext.Provider value={shardValues}>{children}</AppContext.Provider>
  );
};
