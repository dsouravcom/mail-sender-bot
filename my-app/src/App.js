import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";



function App() {
  return (
    <div className="flex flex-col max-h-[100vh] overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
