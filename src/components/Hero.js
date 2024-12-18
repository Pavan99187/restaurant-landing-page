import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <img src={heroImage} alt="Restaurant" className="hero-image" />
      <div className="hero-content">
        <h1>Taste the Best Dishes in Town</h1>
        <a href="#menu">
          <button className="cta-button">Order Now</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
