import { useState } from 'react'
import "./Hero.css";
import profilePic from "../assets/portfolio.png";

function Hero() {
  return (
    <section className="hero-container">
      
      {/* Left Column: Big Typography */}
      <div className="hero-left">
        <h1>Hello, I'm Sameer</h1>
        <h2>
          Architecting, building & scaling full-stack applications that matter.
        </h2>
      </div>

      {/* Middle: Faint Divider Line */}
      <div className="hero-divider"></div>

      {/* Right Column: Profile & Bio */}
      <div className="hero-right">
        {/* Replace this src with your actual image path */}
        <img src={profilePic} alt="Sameer" className="hero-avatar" />
        <p>
          I turn complex problems into clean, scalable software. I build efficient, maintainable systems with performance that just works.
        </p>
      </div>

    </section>
  );
}

export default Hero;