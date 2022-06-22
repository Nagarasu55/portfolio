import React from "react";
import "./Projects.css";
import projectImg1 from "./img/project1.png"
import projectImg2 from "./img/project2.PNG"
import projectImg3 from "./img/project3.PNG"
import projectImg4 from "./img/project4.PNG"
import projectImg5 from "./img/project5.PNG"
import projectImg6 from "./img/project6.PNG"
function Projects() {
  return (
    <div className="projects component__space" id="Projects">

      <div className="heading">
        <h1 className="heading">Projects</h1>
        <p className="heading p__color">
          These are my Web development and ReactJS projects
        </p>
      </div>

      <div className="container">
        <div className="row">
        
        <div className="col__5">
            <div className="service__box pointer">
            <h1 className="service__text">Hotel Management Website (Web)</h1>
              <div className="icon">
              <img src={projectImg1} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
              <button class="demo"><a href=' https://nagarasu55.github.io/hotel-management/' target="_blank">Demo</a></button>
              <button class="code"><a href='https://github.com/Nagarasu55/hotel-management' target="_blank">Code</a></button>
              </div>
            </div>
          </div>

          <div className="col__5">
            <div className="service__box pointer">
            <h1 className="service__text">Library Management Website (Web)</h1>
              <div className="icon">
              <img src={projectImg2} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
              <button class="demo"><a href=' https://nagarasu55.github.io/library-management/' target="_blank">Demo</a></button>
              <button class="code"><a href='https://github.com/Nagarasu55/library-management' target="_blank">Code</a></button>
              </div>
            </div>
          </div>

          <div className="col__5">
            <div className="service__box pointer">
            <h1 className="service__text">Weather App (Reactjs)</h1>
              <div className="icon">
              <img src={projectImg3} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
              <button class="demo"><a href='https://nagarasu55.github.io/weatherapp/' target="_blank">Demo</a></button>
              <button class="code"><a href='https://github.com/Nagarasu55/weatherapp/tree/master' target="_blank">Code</a></button>
              </div>
            </div>
          </div>

          <div className="col__5">
            <div className="service__box pointer">
            <h1 className="service__text">GK Quiz app (ReactJS)</h1>
              <div className="icon">
              <img src={projectImg4} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
              <button class="demo"><a href=' https://nagarasu55.github.io/quizapp/' target="_blank">Demo</a></button>
              <button class="code"><a href='https://github.com/Nagarasu55/quizapp/tree/master' target="_blank">Code</a></button>
              </div>
            </div>
          </div>

          <div className="col__5">
            <div className="service__box pointer">
            <h1 className="service__text">E-Commerse Website (React js)</h1>
              <div className="icon">
              <img src={projectImg5} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
              <button class="demo"><a href='https://nagarasu55.github.io/ecommerce/' target="_blank">Demo</a></button>
              <button class="code"><a href='https://github.com/Nagarasu55/ecommerce/tree/master' target="_blank">Code</a></button>
              </div>
            </div>
          </div>

          <div className="col__5">
            <div className="service__box pointer">
            <h1 className="service__text">Portfolio (ReactJS)</h1>
              <div className="icon">
              <img src={projectImg6} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
              <button class="demo"><a href='https://nagarasu55.github.io/portfolio/' target="_blank">Demo</a></button>
              <button class="code"><a href='https://github.com/Nagarasu55/portfolio/tree/master' target="_blank">Code</a></button>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Projects;
