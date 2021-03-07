import React from 'react';
import './nav.scss';
import logo from '../me.png';
import 'antd/dist/antd.css';

export default function Navbar() {

  
  return (
    <div className="nav">
      <img className="photo" src={logo} alt="logo" />

      <div style={{ width: 400, margin: '100px auto' }}>
        <div className="name">
          Colin Elsinga
        </div>
        <div className="subtitle">
          Full Stack Developer
        </div>
      
      </div>

      <a
          class="btnsame btn1"
          href="https://github.com/celsinga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
      </a>
      <a
        class="btnsame btn2"
        href="https://twitter.com/@colincodes1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-twitter"></i>
      </a>
      <a
        class="btnsame btn3"
        href="https://www.linkedin.com/in/colin-elsinga-989647103/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
  );
}