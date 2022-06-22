import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Skills/>
       <Projects />
       <Contact />
    </div>
  );
}

export default App;
