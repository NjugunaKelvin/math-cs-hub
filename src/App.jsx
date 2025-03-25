import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Mathematics from "./pages/Mathematics";
import ComputerScience from "./pages/ComputerScience";
import Tools from "./pages/Tools";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<Mathematics />} />
        <Route path="/cs" element={<ComputerScience />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
};

export default App;
