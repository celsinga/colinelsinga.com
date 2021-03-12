import React from 'react';
import './nav.scss';
import logo from './img/me.png';
import 'antd/dist/antd.css';
import {
  Link
} from "react-router-dom";

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
        
        
        <p style={{paddingTop: '20px', paddingRight: '20px'}}> 
          <a
                class="btnsame btn1"
                style={{backgroundColor: 'transparent'}}
                href="https://github.com/celsinga"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-github"></i>
            </a>
        </p>

        <p className="location">📍 Vancouver, BC</p>

          <div className="navbtn" style={{backgroundImage: 'linear-gradient(#181438,  #0c091f)'}}>
            <Link to="/">Home</Link>
          </div>
          <div className="navbtn" style={{backgroundImage: 'linear-gradient(#181438,  #0c091f)'}}>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="navbtn" style={{backgroundImage: 'linear-gradient(#181438,  #0c091f)'}}>
            <a href="https://resume.creddle.io/resume/8nkxjv6eyoo" target="_blank" rel="noopener noreferrer" >Resume</a>
          </div>
         

      </div>

    
    </div>
  );
}