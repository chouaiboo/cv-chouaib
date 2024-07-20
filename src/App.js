/** @format */

import "./App.css";
import Home from "./Components/Containers/Home/Home";
import Portfolio from "./Components/Containers/portfolio/Portfolio";
import Skills from "./Components/Containers/skills/Skills";
import About from "./Components/Containers/about/About";
import Contact from "./Components/Containers/conatct/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
