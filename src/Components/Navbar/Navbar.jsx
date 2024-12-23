import React from "react";
import "./Navbar.css";
import logo from "../../assets/Osamare_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="container-Home">
            <div className="logo">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="btn">
              <button className="contact-us-button">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
