import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

import Home from "./componets/home/home";
import Parent from "./componets/parent/Parent";
import About from "./componets/about/About";
import Portfolio from "./componets/portfolio/Portfolio";
import Contact from "./componets/contact/Contact";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="Creative-Agency" element={<Parent />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
