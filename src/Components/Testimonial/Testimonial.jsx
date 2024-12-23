import React from "react";
import "./Testimonial.css";
import Testimonial from "../../assets/Testimonal.jpeg";
import Profile from "../../assets/Profile.png";
import Coma from "../../assets/Symbol.png";

const Testimonal = () => {
  return (
    <>
      <div className="testimonial-container">
        <h1 className="main-title">What Our Pharma Partners Say</h1>
        <p className="subtitle">Driving Transformations, One Brand at a Time</p>

        <div className="testimonial-card">
          <div className="testimonial-left">
            <div className="image-container">
              <img src={Testimonial} alt="Partner" className="partner-image" />
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
            </div>
          </div>

          <div className="testimonial-right">
            <div className="profile">
              <img src={Profile} alt="Tabish Khan" className="profile-pic" />
              <h3 className="profile-name">Tabish khan</h3>
              <div className="coma">
                <img src={Coma} alt="symbol-img" className="symbol" />
              </div>
            </div>
            <p className="testimonial-text">
              Osumare's expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </p>
          </div>
        </div>

        <div className="navigation">
          <button className="nav-button prev">←</button>
          <button className="nav-button next">→</button>
        </div>
      </div>
    </>
  );
};

export default Testimonal;
