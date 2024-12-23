import React from "react";
import "./Inquires.css";
import inquires from "../../assets/inquires.png";

const Inquires = () => {
  return (
    <>
      <div className="container">
        <div className="property-section">
          <div className="property-header">
            <h2>Driving Property Inquiries to Conversions</h2>
            <p className="subtitle">
              Streamlined Strategies for Real Estate Success
            </p>
          </div>
          <div className="property-body">
            <div className="property-image">
              <img src={inquires} alt="inquires" />
            </div>
            <div className="property-content">
              <h3>Optimized Path to Property Purchase</h3>
              <p className="description">
                In the dynamic realm of real estate, the journey from a property
                inquiry to a successful conversion demands a well-crafted
                approach. At Osumare, we specialize in guiding potential buyers
                through this journey seamlessly, maximizing
                inquiries-turned-conversions with expert strategies.
              </p>
              <button className="but1">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquires;
