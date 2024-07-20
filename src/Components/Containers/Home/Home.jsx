/** @format */

import React from "react";
import "./Home.css";
import cv from "../../../Assiete/image/cv.jpg";
import Particle from "../../Particle";
const Home = () => {
  return (
    <>
    <Particle/>
      <section className="home">
        <div className="home-content">
          <div className="home-text">
            <h1 className="title">
              <span className="greeting">Hello,</span>
              <span className="name">I'm Chouaib</span>
              <span className="profession">Front-End Developer</span>
              <br />
              Passionate about creating beautiful and functional web experiences{" "}
              <br />
              <a href="/cv.pdf" download className="cta-button">
                View My Cv
              </a>
            </h1>
          </div>
          <div className="home-image">
            <img src={cv} alt="Chouaib's portrait" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
