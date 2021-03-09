import React from 'react';
import './nav.scss';
import logo from '../me.png';
import 'antd/dist/antd.css';

export default function Navbar() {
  
  return (
    <div className="nav">
      <div className="sidebar" style={{display: 'flex', flexDirection: 'column'}}>
        <img className="photo" src={logo} alt="logo" />
        <div className="name">
          Colin Elsinga
        </div>
        <div className="subtitle">
          Full Stack Developer
        </div>
        <p className="location">📍 Vancouver, BC</p>
        <div className="navbtn">
          Home
        </div>
        <div className="navbtn">
          Education
        </div>
        <div className="navbtn">
          Contact
        </div>
      </div>

      <div style={{ width: 400, margin: '15px auto', paddingLeft: '200px' }}>
      
      </div>
      {/* <p style={{padding: '15px'}}>Colin Elsinga</p> */}
      <a
          class="btnsame btn1"
          href="https://github.com/celsinga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
      </a>
      <a
        class="btnsame btn3"
        href="https://www.linkedin.com/in/colin-elsinga-989647103/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a
        class="btnsame btn2"
        href="https://resume.creddle.io/resume/8nkxjv6eyoo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-file"></i>
      </a>
    </div>
  );
}