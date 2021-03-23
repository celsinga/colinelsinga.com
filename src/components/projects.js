import React, { Component } from "react";
import Slider from "react-slick";
import './projects.scss';
import nba from './img/nba.png';
import scheduler from './img/app2.png';
import blockchain from './img/blockchain.png';
import altru from './img/altru.png';
import tweeter from './img/tweeter.png';

export default class Projects extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>

          <a href="https://github.com/celsinga/nba-dashboard" target="_blank" rel="noopener noreferrer">
            <div className="slickSlide">
              <h3>NBA Dashboard</h3>
              <img src={nba} alt="nba-dashboard"></img>
              <div className="learned">
                <div>
                  <p>React</p>
                  <p>Axios</p>
                </div>
                <div>
                  <p>Express</p>
                  <p>Python</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/celsinga/blockchain-model" target="_blank" rel="noopener noreferrer">
            <div className="slickSlide">
              <h3>JS Blockchain</h3>
              <img src={blockchain} alt="js-blockchain"></img>
              <div className="learned">
                <div>
                  <p>Node.js</p>
                  <p>Express</p>
                </div>
                <div>
                  <p>Proof of Work</p>
                  <p>Mining</p>
                </div>
              </div>
            </div>
          </a>

          <a href="http://altru.link/" target="_blank" rel="noopener noreferrer">
            <div className="slickSlide">
              <h3>altru.link</h3>
              <img src={altru} alt="altrulink"></img>
              <div className="learned">
                <div>
                  <p>HTML5</p>
                  <p>CSS</p>
                </div>
                <div>  
                  <p>JavaScript</p>
                  <p>AWS</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/celsinga/scheduler" target="_blank" rel="noopener noreferrer">
            <div className="slickSlide">
              <h3>Scheduler</h3>
              <img src={scheduler} alt="scheduler"></img>
              <div className="learned">
                <div>
                  <p>React</p>
                  <p>PostgreSQL</p>
                </div>
                <div>
                  <p>API</p>
                  <p>HTTP</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/celsinga/tweeter" target="_blank" rel="noopener noreferrer">
            <div className="slickSlide">
              <h3>Tweeter</h3>
              <img src={tweeter} alt="twitter-clone"></img>
              <div className="learned">
                <div>
                  <p>jQuery</p>
                  <p>AJAX</p>
                </div>
                <div>
                  <p>CSS</p>
                  <p>Express</p>
                </div>
              </div>
            </div>
          </a>
    
        </Slider>
      </div>
    );
  }
}