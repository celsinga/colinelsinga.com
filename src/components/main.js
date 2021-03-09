import { Component } from "react";
import './main.scss';

export default function Main() {
  return (
    <div className="main" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="name">
          Colin Elsinga
        </div>
        <div className="subtitle">
          Full Stack Developer
        </div>
        <p className="location">📍 Vancouver, BC</p>
      </div>
  )
}

