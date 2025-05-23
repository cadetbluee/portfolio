import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="section">
      <div className="content">
        <h1 className="title">Hi, I'm Chaeyoung Yoon</h1>
        <p className="subtitle">A Frontend Developer building intuitive and dynamic user interfaces 🚀</p>
        <button className="cta-button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          Explore Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
