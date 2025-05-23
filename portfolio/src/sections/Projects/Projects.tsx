import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="card">
        <h3>Community Movie Recommendation</h3>
        <p>A platform for movie lovers to discover and recommend films.</p>
      </div>
      <div className="card">
        <h3>Live Trading Platform</h3>
        <p>Facilitates real-time transactions for secondhand goods.</p>
      </div>
      <div className="card">
        <h3>FinTech Meal Tracker</h3>
        <p>An app for automatically logging meals and expenses.</p>
      </div>
    </section>
  );
};

export default Projects;
