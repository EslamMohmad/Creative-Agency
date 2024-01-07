import React from "react";
import Home from "./componets/home/home";
import Cursor from "./componets/cursor/Cursor";
import { AppContextProvider } from "./context/AppContext";
function App() {
  return (
    <div className="relative overflow-hidden">
      <AppContextProvider>
        <Cursor />
        <Home />
      </AppContextProvider>
    </div>
  );
}

export default App;
