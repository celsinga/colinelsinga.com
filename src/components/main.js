import React from "react";
import './main.scss';
import Projects from './projects.js';

export default function Main() {
  
  let myDate = new Date();
  let hrs = myDate.getHours();
  let greet;
  if (hrs < 12) {
    greet = 'Good Morning';
  } else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon';
  } else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening';
  }

  return (
    <div className="main" style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{fontSize: '70px'}} className="name">
          Colin Elsinga
        </div>
        <div className="skills" style={{padding: '15px', paddingBottom: '20px'}}>
          Full Stack Developer
        </div>
        <div style={{color: 'white', paddingBottom: '22px', paddingLeft: '45px', paddingRight: '45px'}} className="subtitle">
        {greet}! I am a passionate full stack developer based in Vancouver, Canada. Coming from a background in audio engineering, I have always had a love for software and technology, which is the reason I began teaching myself to code.  I am excited to apply my knowledge of the domain to provide innovative solutions.
        </div>
        <div className="skills">
          <div>
          My Skills
          </div>
          <p style={{padding: '15px 10px'}} className="subtitle">JavaScript/ES6/Redux • React • Node/Express • TypeScript • PostgreSQL • HTML5/CSS • JQuery • Ruby/Rails • AWS • Solidity • Web3</p>
          <div className="skills">
          My Projects
          </div>
          <div className="projects">
            <Projects />
          </div>
        </div>

      </div>
  )
}

