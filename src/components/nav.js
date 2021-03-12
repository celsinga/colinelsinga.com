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
        
        <p className="location">📍 Vancouver, BC</p>
          <div className="navbtn">
            <Link to="/">Home</Link>
          </div>
          <div className="navbtn">
            <Link to="/education">Education</Link>
          </div>
          <div className="navbtn">
            <Link to="/contact">Contact</Link>
          </div>

      </div>

      <div style={{ width: 400, margin: '15px auto', paddingLeft: '200px' }}>
      
      </div>
    </div>
  );
}