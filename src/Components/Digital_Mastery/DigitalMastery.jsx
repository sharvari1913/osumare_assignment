import React from "react";
import "./DigitalMastery.css";
import digital from "../../assets/digital.png";

const DigitalMastery = () => {
  return (
    <>
      <div className="container">
        <div className="digital-section">
          <div className="digital-header">
            <h2>Real Estate-Focused Digital Mastery</h2>
          </div>
          <div className="digital-body">
            <div className="digital-image">
              <img src={digital} alt="digital" />
            </div>
            <div className="digital-content">
              <h3>Unlock the Potential of Digital Real Estate Excellence</h3>
              <p className="description">
                At Osumare, we understand that the real estate landscape demands
                a digital presence that aligns with the intricacies of property
                marketing. Our range of specialized services is meticulously
                designed to catapult your brand's success in the ever-evolving
                digital property market.
              </p>
              <button className="but2">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMastery;
