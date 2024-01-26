import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

import Home from "./componets/home/home";
import Parent from "./componets/parent/Parent";
import About from "./componets/about/About";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="Creative-Agency" element={<Parent />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
