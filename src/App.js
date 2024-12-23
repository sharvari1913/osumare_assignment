import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import DigitalMastery from "./Components/Digital_Mastery/DigitalMastery";
import Services from "./Components/Services/Services";
import Features from "./Components/Features/Features";
import Inquires from "./Components/Inquries/Inquires";
import Conversions from "./Components/Conversions/Conversions";
import Experties from "./Components/Experties/Experties";
import Peace from "./Components/Peace_Of_Mind/Peace";
import Testimonial from "./Components/Testimonial/Testimonial";
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DigitalMastery />
      <Services />
      <Features />
      <Inquires />
      <Conversions />
      <Experties />
      <Peace />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
