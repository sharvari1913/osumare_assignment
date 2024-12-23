import React from "react";
import "./Experties.css";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";

const data = [
  {
    icon: icon5,
    title: "Effective CTAs",
    description:
      "See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
  },
  {
    icon: icon6,
    title: "Conversion-Optimized Landing Pages",
    description:
      "Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
  },
  {
    icon: icon7,
    title: "Trust Building with Social Proof",
    description:
      "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
  },
  {
    icon: icon8,
    title: "Mobile-First Success:",
    description:
      "Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
  },
];

function Experties() {
  return (
    <>
      <div className="container">
        <div className="head-exp">
          <h1>Our Experties in Action</h1>
        </div>
        <div className="container-exp">
          {data.map((item, index) => (
            <div key={index} className="item">
              <img src={item.icon} alt={item.title} />
              <h3 style={{ fontSize: "22px", lineHeight: "3rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "20px", lineHeight: "2rem" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experties;
