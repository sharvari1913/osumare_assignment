import React from "react";
import "./Features.css";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";
import expert from "../../assets/expert.png";

const Features = () => {
  return (
    <>
      <div className="container-feat">
        <header>
          <h1>Navigating Real Estate's Digital Landscape</h1>
          <p>Insights for Real Estate Marketing Advantage</p>
        </header>

        <div className="content-wrapper">
          <div className="left-panel">
            <div className="card">
              <img src={feature1} alt="feature" className="feature1" />
              <div className="text">
                <h3>Market Trends Analysis</h3>
                <p>Predictive insights to guide real estate strategies.</p>
              </div>
            </div>

            <div className="card">
              <img src={feature2} alt="feature" className="feature2" />
              <div className="text">
                <h3>Targeted Buyer Persona</h3>
                <p>Understand and connect with your ideal property buyers.</p>
              </div>
            </div>

            <div className="card">
              <img src={feature3} alt="feature" className="feature3" />
              <div className="text">
                <h3>Competitor Insights</h3>
                <p>
                  Stand out in the property market with informed strategies.
                </p>
              </div>
            </div>

            <div className="card">
              <img src={feature4} alt="feature" className="feature4" />
              <div className="text">
                <h3>Visual Content Appeal</h3>
                <p>
                  Captivate buyers with appealing visuals and immersive
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <img src={expert} alt="expert" className="expert" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
