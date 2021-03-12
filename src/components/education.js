
import './education.scss';

import lighthouse from './img/lighthouse.png'
import nimbus from './img/nimbus.png';


export default function Education() {

  return (
    <div className="education" style={{display: 'flex', flexDirection: 'column', verticalAlign: 'middle'}}>
        <div className="skillsE" style={{paddingTop: '10px'}}>
          <div class="top">
          Education
          </div>
          <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer"><img className="lighthouse" src={lighthouse}></img></a>
          <p style={{padding: '15px 10px'}}>Lighthouse Labs - 2020-21 • Diploma in Web Development</p>
          <a href="https://www.nimbusrecording.com/" target="_blank" rel="noopener noreferrer">
          <img className="nimbus" src={nimbus}></img>
          </a>
            <p style={{padding: '15px 10px'}}>Nimbus School of Recording & Media - 2014-16 • Diploma in Music Industry</p>
          <div className="skillsE" style={{marginTop: '-20px'}}>
          Work Experience
          </div>
          <div className="projectsE">


     

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
   
          </div>
        </div>

      </div>
  )
}

