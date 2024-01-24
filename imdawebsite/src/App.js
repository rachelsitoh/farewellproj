// import TypeWritterText from "./components/hero";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/AboutUs";
import Home from "./components/Home";
import KeyHighlights from "./components/KeyHighlights";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/keyHighlights" element={<KeyHighlights />} />
          <Route path="/whatWeDo" element={<WhatWeDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
