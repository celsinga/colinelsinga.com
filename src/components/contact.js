import vancouver from './img/vancouver.png';
import lighthouse from './img/lighthouse.png'
import nimbus from './img/nimbus.png';

export default function Contact() {


  return (
    <div className="main" style={{display: 'flex', flexDirection: 'column'}}>

        <div className="email">

        <img src={vancouver} style={{maxWidth: '70%', paddingBottom: '20px', borderRadius: '20px', marginTop: '-50px'}} />
          <div className="skills" style={{paddingBottom: '-10px'}}>Contact</div>

          <div className="resume" style={{display: 'flex', justifyContent: 'center', padding: '20px 10px'}}>
            <div style={{paddingLeft: '10px', paddingTop: '10px'}}>
            <a
                style={{backgroundColor: 'transparent'}}
                href="mailto:colinelsinga@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-envelope"></i>
              <div>Email</div>
              </a>
            </div>
            <div style={{paddingRight: '20px', paddingLeft: '40px', paddingTop: '10px'}}>
              <a
                style={{backgroundColor: 'transparent'}}
                href="https://github.com/celsinga"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-github"></i>
              <div>
                Github
              </div>
              </a>
            </div>
            <div style={{paddingLeft: '10px', paddingTop: '10px'}}>
              <a
                style={{backgroundColor: 'transparent'}}
                href="https://www.linkedin.com/in/colin-elsinga-989647103/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-linkedin"></i>
              <div>
                LinkedIn
              </div>
              </a>
            </div>
           
           </div>
          <div className="skills">Education</div>
          <div style={{padding: '10px'}}>
            <div>
              <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer"><img className="lighthouse" src={lighthouse}></img></a>
            </div>
            <p style={{padding: '15px', fontSize: '20px'}}>Lighthouse Labs - 2020-21 • Diploma in Web Development</p>
            <div></div>
          </div>
           
         
        </div>

        
      </div>
  )
}

