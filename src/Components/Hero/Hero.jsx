import React from "react";
import "./Hero.css";
import hero from "../../assets/Header_image.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="hero">
            <h1>
              Elevate Real Estate Success with Osumare's Digital Expertise
            </h1>
            <p>
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </p>
            <button>Get started</button>
          </div>
          <div className="heroimage">
            <img src={hero} alt="hero_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
