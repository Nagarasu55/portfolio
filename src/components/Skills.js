import React from "react";
import "./Skills.css";
import reactImg from "./img/react.png"
import htmlImg from "./img/html.png"
import cssImg from "./img/css.png"
import jsImg from "./img/js.png"
import BootstrapImg from "./img/bootstrap.png"
import GithubImg from "./img/github.png"

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">Skills</h1>
        <p className="heading p__color">
          These are the varias applications, i have worked with.
        </p>
      </div>

      <div className="container">
        <div className="row">
          
          <div className="col__1">
            <div className="skill__box pointer">
              <div className="icon1">
              <img src={htmlImg} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">HTML 5</h1>
              </div>
            </div>
          </div>

          <div className="col__1">
            <div className="skill__box pointer">
              <div className="icon1">
              <img src={cssImg} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">CSS 3</h1>
              </div>
            </div>
          </div>

          <div className="col__1">
            <div className="skill__box pointer">
              <div className="icon1">
              <img src={jsImg} alt="" className="contact__img" /> 
              </div>
              <div className="service__meta">
                <h1 className="service__text">JavaScript</h1>
              </div>
            </div>
          </div>
          
          <div className="col__1">
            <div className="skill__box pointer">
              <div className="icon1">
              <img src={reactImg} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">React JS</h1>
              </div>
            </div>
          </div>

          <div className="col__1">
            <div className="skill__box pointer">
              <div className="icon1">
              <img src={BootstrapImg} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Bootstrap 5</h1>
              </div>
            </div>
          </div>
          <div className="col__1">
            <div className="skill__box pointer">
              <div className="icon1">
              <img src={GithubImg} alt="" className="contact__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Github</h1>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Skills;
