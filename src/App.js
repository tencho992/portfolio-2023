import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Components/Home/Home";
import Project1 from "./Components/Project/Project-1";
import Project2 from "./Components/Project/Project-2";
import Project3 from "./Components/Project/Project-3";
import Project4 from "./Components/Project/Project-4";
import Project5 from "./Components/Project/Project-5";

function App() {
  const location = useLocation();

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  // setting the background color based on the active page
  const getBackgroundColor = () => {
    if (isActivePage("/")) {
      return "#191c1a";
    } else if (isActivePage("/project")) {
      return "#b0b0b0";
    }
    return "white"; // default background color
  };

  // apply the background color to the HTML and body elements
  document.documentElement.style.backgroundColor = getBackgroundColor();
  document.body.style.backgroundColor = getBackgroundColor();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/project-1" element={<Project1 />} />
          <Route path="/project-1" element={<Project2 />} />
          <Route path="/project-1" element={<Project3 />} />
          <Route path="/project-1" element={<Project4 />} />
          <Route path="/project-1" element={<Project5 />} />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
