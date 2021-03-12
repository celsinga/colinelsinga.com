// import { Component } from "react";
import Tilt from 'react-tilt'
import './main.scss';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import nba from './img/nba.png';
import scheduler from './img/app2.png';
import blockchain from './img/blockchain.png';
import altru from './img/altru.png';
import tweeter from './img/tweeter.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '24em',
    minHeight: '16em',
    margin: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    padding: theme.spacing(2),
    backgroundColor: 'rgb(61, 61, 61)',
    color: 'white',
    textEmphasis: 'bold',
    fontSize: 15,
    boxShadow: 'inset 0px 0px 7px black, inset 3px 3px 5px rgba(18, 18, 19, 0.288)',
    borderRadius: '5px',
    height: '7em', 
    filter: 'drop-shadow(0 0 0.15rem black)',
    overflowX: 'auto',
    zIndex: 1
  },
}));

export default function Main() {

  const classes = useStyles();


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
        <div className="skills" style={{paddingTop: '10px', paddingBottom: '20px'}}>
          Full Stack Developer
        </div>
        <div style={{color: 'white', paddingBottom: '22px', paddingLeft: '45px', paddingRight: '45px'}} className="subtitle">
        {greet}! I am a passionate full stack developer based in Vancouver, Canada. Coming from a background in audio engineering, I have always had a love for software and technology, which is the reason I began teaching myself to code. I am excited to help companies achieve high customer turnover through innovative design.
        </div>
        <div className="skills">
          <div>
          My Skills
          </div>
          <p style={{padding: '15px 10px'}} className="subtitle">JavaScript/ES6 • React • Node/Express • PostgreSQL • HTML5/CSS • JQuery • Ruby/Rails • AWS • Blockchain • Python</p>
          <div className="skills" style={{marginTop: '-20px'}}>
          My Projects
          </div>
          <div className="projects" style={{ marginTop: '-15px'}}>
            <Tilt>
              <a href="https://github.com/celsinga/nba-dashboard" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>NBA Dashboard</p>
                <img src={nba}></img>
              </Paper>
              </a>
            </Tilt>
            <Tilt>
              <a href="http://altru.link/" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>altru.link</p>
                <img src={altru}></img>
              </Paper>
              </a>
            </Tilt>
            <Tilt>
              <a href="https://github.com/celsinga/scheduler" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>Scheduler</p>
                <img src={scheduler}></img>
              </Paper>
              </a>
            </Tilt>
            <Tilt>
              <a href="https://github.com/celsinga/blockchain-model" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>JS Blockchain</p>
                <img src={blockchain}></img>
              </Paper>
              </a>
            </Tilt>
            <Tilt>
              <a href="https://github.com/celsinga/tweeter" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>Tweeter</p>
                <img src={tweeter}></img>
              </Paper>
              </a>
            </Tilt>
          </div>
        </div>

      </div>
  )
}

