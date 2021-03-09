// import { Component } from "react";
import Tilt from 'react-tilt'
import './main.scss';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import nba from './nba.png';
import scheduler from './app2.png';
import blockchain from './blockchain.png';
import altru from './altru.png';
import tweeter from './tweeter.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '24em',
    minHeight: '16em',
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    padding: theme.spacing(2),
    backgroundImage: 'linear-gradient(#353535, #282c34, #171718)',
    color: 'white',
    textEmphasis: 'bold',
    fontSize: 15,
    boxShadow: 'inset -3px -3px 7px black, inset 3px 3px 5px rgba(18, 18, 19, 0.288)',
    borderRadius: '5px',
    height: '7em', 
    filter: 'drop-shadow(0 0 0.15rem black)',
    overflowX: 'auto',
    zIndex: 1,
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
        <div style={{fontSize: '70px', paddingTop: '155px'}} className="name">
          Colin Elsinga
        </div>
        <div style={{color: '#9a9a9a', paddingBottom: '22px', paddingLeft: '25px', paddingRight: '25px'}} className="subtitle">
        {greet}! I am a passionate full stack web developer based in Vancouver, Canada. Coming from a background in audio engineering, I have always had a love for software and technology, which is the reason I began teaching myself to code. I am excited to help companies achieve high customer turnover through inovative design.
        </div>
        <div className="skills">
          <div>
          My Skills
          </div>
          <p style={{padding: '15px 10px'}}>JavaScript/ES6 • React • Node/Express • PostgreSQL • HTML5/CSS • JQuery • Ruby/Rails • AWS • Python</p>
          <div className="skills">
          My Projects
          </div>
          <div className="projects">
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
              <a href="https://github.com/celsinga/blockchain-model" target="_blank" rel="noopener noreferrer">
              <Paper className={classes.paper}>
                <p>JS Blockchain</p>
                <img src={blockchain}></img>
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

