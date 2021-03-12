import React, { Component } from "react";
import Slider from "react-slick";
import './education.scss';
import lighthouse from './img/lighthouse.png';
import nimbus from './img/nimbus.png';
import jsblockchain from './img/jsblockchain.png';

export default class Education extends Component {
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

          <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer">
            <div className="slickSlideE">
              <h3>Lighthouse Labs</h3>
              <img src={lighthouse}></img>
              <div className="learned">
                <div>
                  <p>Diploma in Web Development</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://www.nimbusrecording.com/" target="_blank" rel="noopener noreferrer">
            <div className="slickSlideE">
              <h3>Nimbus School of Recording & Media</h3>
              <img src={nimbus}></img>
              <div className="learned">
                <div>
                  <p>Diploma in Music Industry</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://www.udemy.com/course/blockchain-programming-using-javascript/" target="_blank" rel="noopener noreferrer">
            <div className="slickSlideE">
              <h3>Blockchain Programming with JavaScript</h3>
              <img src={jsblockchain}></img>
              <div className="learned">
                <div>
                  <p>Udemy Certificate</p>
                </div>
              </div>
            </div>
          </a>
    
        </Slider>
      </div>
    );
  }
}

{/* <a href="https://resume.creddle.io/resume/8nkxjv6eyoo" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>Urban Landscapes Vancouver</p>
                <p>Lead Horticulurist</p>
                <p>Jun 2017- Nov 2020</p>
              </Paper>
              </a>
        
              <a href="https://resume.creddle.io/resume/8nkxjv6eyoo" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>Beat Cinema</p>
                <p>Performer</p>
                <p>Feb 2019</p>
              </Paper>
              </a>
        
              <a href="https://resume.creddle.io/resume/8nkxjv6eyoo" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>Parting Films</p>
                <p>Boom Operator</p>
                <p>Jun 2016 - Mar 2017</p>
              </Paper>
              </a>
        
    
              <a href="http://altru.link/" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>Freelance Musician</p>
                <p>Altru</p>
                <p>2015 - Present</p>
              </Paper>
              </a> */}