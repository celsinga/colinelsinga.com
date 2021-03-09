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
        <div className="name">
          {greet}!
        </div>
        <div className="subtitle">
          I am a passionate full stack developer based in Vancouver, Canada. 
        </div>
        <div className="skills">
          <div className="name">
          My Skills
          </div>
          <p>JavaScript/ES6 • React • Node/Express • PostgreSQL • JQuery • Ruby/Rails • AWS • Python</p>
          <div className="name">
            Projects
          </div>
          <p>Project 1 Project 2 Project 3</p>
        </div>

      </div>
  )
}

