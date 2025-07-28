import React from "react";
import '../assets/styles/Bio.scss'

function Bio() {
  return (
    <div id="about">
      <div className="bio-section">
        <h1>About Me</h1>
        <div className="bio-content">
          <section className="bio-item">
            <p>
              I am a robotics engineer and researcher currently pursuing my Masters at Pontificia Universidad Católica de Chile, 
              where I also serve as an Associate Professor in the Mechanical Engineering department. I work as a Robotics Engineer 
              at <a href="https://oddness.ai" target="_blank" rel="noopener noreferrer" className="bio-link">Oddness Technologies</a> and conduct research at <a href="https://cenia.cl/en/home/" target="_blank" rel="noopener noreferrer" className="bio-link">CENIA</a>, Chile's National Center for Artificial Intelligence.
            </p>
          </section>

          <section className="bio-item">
            <h3><strong>Research Interests</strong></h3>
            <p>
              I am interested in robotic task generalization and developing adaptive systems that can efficiently learn and transfer 
              skills across diverse environments. My research focuses on bridging the gap between laboratory demonstrations and 
              real-world deployment through robust learning algorithms that generalize beyond their training distribution. I am 
              particularly fascinated by "learning to learn" approaches that enable robots to rapidly adapt to new tasks through 
              minimal demonstrations or natural language feedback, combining semantic understanding with geometric reasoning to 
              enable safe manipulation in human-populated spaces.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Bio;