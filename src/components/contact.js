import vancouver from './img/vancouver.png';
import './contact.scss';
import Education from './education.js'

export default function Contact() {


  return (
    <div className="main" style={{display: 'flex', flexDirection: 'column'}}>

        <div className="email">
          <img src={vancouver} style={{maxWidth: '70%', paddingBottom: '20px', borderRadius: '20px', marginTop: '-50px'}} className="city" alt="Vancouver" />
        
          <div className="skillsC" style={{paddingBottom: '10px'}}>Contact</div>

          <div className="resume" style={{display: 'flex', justifyContent: 'center', padding: '20px 20px', alignItems: 'center'}}>
            <div className="contact1">
              <div style={{paddingBottom: '55px', paddingRight: '70px'}}>
              <a
                  class="btnsame btn2"
                  style={{backgroundColor: 'transparent'}}
                  href="mailto:colinelsinga@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <i class="fa fa-envelope"><div>Email</div></i>
                </a>
              </div>
              <div style={{paddingBottom: '55px', paddingRight: '70px'}}>
                <a
                  class="btnsame btn1"
                  style={{backgroundColor: 'transparent'}}
                  href="https://github.com/celsinga"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <i class="fa fa-github"><div>Github</div></i>
                </a>
              </div>
            </div>
            <div className="contact2">
              <div style={{paddingBottom: '55px', paddingRight: '80px'}}>
                <a
                  class="btnsame btn3"
                  style={{backgroundColor: 'transparent'}}
                  href="https://www.linkedin.com/in/colin-elsinga-989647103/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <i class="fa fa-linkedin"><div>LinkedIn</div></i>
                </a>
                
              </div>

              <div style={{paddingBottom: '55px', paddingRight: '80px'}}>
                <a
                  class="btnsame btn4"
                  style={{backgroundColor: 'transparent'}}
                  href="https://resume.creddle.io/resume/8nkxjv6eyoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <i class="fa fa-file"><div>Resume</div></i>
                </a>
            </div>
              
            </div>

           
           </div>
           
          <div className="skillsC">Education</div>
          <div className="projectsC">
          <Education />

          </div>
         
        </div>

        
      </div>
  )
}

