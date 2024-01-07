import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState(false);
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const shardValues = {
    cursorState,
    setCursorState,
    currImgIdx,
    setCurrImgIdx,
  };

  return (
    <AppContext.Provider value={shardValues}>{children}</AppContext.Provider>
  );
};
