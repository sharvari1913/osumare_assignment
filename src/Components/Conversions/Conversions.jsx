import React from "react";
import "./Conversions.css";
import icon1 from "../../assets/icon.png";
import icon2 from "../../assets/icon1.png";
import icon3 from "../../assets/icon2.png";
import icon4 from "../../assets/icon3.png";

const data = [
  {
    icon: icon1,
    title: "Call-to-Action Optimization",
    description:
      "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
  },
  {
    icon: icon2,
    title: "Landing Page Efficiency",
    description:
      "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
  },
  {
    icon: icon3,
    title: "Social Proof Utilization",
    description:
      "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.",
  },
  {
    icon: icon4,
    title: "Mobile-Friendly Experience",
    description:
      "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
  },
];

function Conversions() {
  return (
    <div className="container">
      <div className="container-conv">
        <div className="property-header">
          <h2>Driving Property Inquiries to Conversions</h2>
        </div>
        <div className="row">
          {data.slice(0, 2).map((item, index) => (
            <div key={index} className="col">
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
        <div className="row">
          {data.slice(2).map((item, index) => (
            <div key={index + 2} className="col">
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
    </div>
  );
}

export default Conversions;
