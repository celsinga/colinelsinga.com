import { Component } from "react";
import './main.scss';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '24em',
    minHeight: '14em',
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
    color: 'white',
    textEmphasis: 'bold',
    fontSize: 15,
    boxShadow: '0.2px 1px 7px black',
    borderRadius: '5px',
    height: '7em', 
    filter: 'drop-shadow(0 0 0.15rem black)',
    overflowX: 'auto',
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
        <div style={{paddingTop: '12px', color: '#9a9a9a'}} className="subtitle">
        {greet}! I am a passionate full stack web developer based in Vancouver, Canada.
        </div>
        <div className="skills">
          <div>
          My Skills
          </div>
          <p>JavaScript/ES6 • React • Node/Express • PostgreSQL • HTML5/CSS • JQuery • Ruby/Rails • AWS • Python</p>
          <div className="name">
            Projects
          </div>
          <div className="projects">
            <Paper className={classes.paper}>
              NBA Dashboard
            </Paper>
            <Paper className={classes.paper}>
              Scheduler
            </Paper>
            <Paper className={classes.paper}>
              altru.link
            </Paper>
            <Paper className={classes.paper}>
              JS Blockchain
            </Paper>
            <Paper className={classes.paper}>
              Tweeter
            </Paper>
            <Paper className={classes.paper}>
              Kigogo
            </Paper>
          </div>
        </div>

      </div>
  )
}

