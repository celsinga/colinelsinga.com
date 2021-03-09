import { Component } from "react";
import './main.scss';

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
        <div style={{fontSize: '70px', marginTop: '-120px'}} className="name">
          Colin Elsinga
        </div>
        <div style={{paddingTop: '12px', fontSize: '30px'}} className="subtitle">
        {greet}!
        </div>
        <div style={{paddingTop: '12px', color: 'white'}} className="subtitle">
          I am a passionate full stack web developer based in Vancouver, Canada.
        </div>
        <div className="skills">
          <div>
          My Skills
          </div>
          <p>JavaScript/ES6 • React • Node/Express • PostgreSQL • JQuery • Ruby/Rails • AWS • Python</p>
          <div className="name">
            Projects
          </div>
          <div className="name">
            Projects  Projects
          </div>
          <div className="name">
            Education
          </div>
        </div>

      </div>
  )
}

