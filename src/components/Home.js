import React from "react";
import "./Home.css";
import { Link } from 'react-scroll';

function Home() {

  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul id="navi" className="navbar d__flex">
            <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
          </div>
        </div>

        {/* HOME CONTENT */}
        <div className="col__6">
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">Hi,</h1>
              <h2 className="home__text pz__10">I’m Nagarasu</h2>
              <h3 className="home__text sweet pz__10">I'm a React JS Developer,</h3>
              <h4 className="home__text pz__10">With highly passionate.</h4>
            </div>
          </div>
        </div>
        </div>

        <div className="col__7">
      
        </div>
        
      </div>
    </div>
  );
}

export default Home;
