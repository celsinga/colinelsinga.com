import vancouver from './img/vancouver.png';

export default function Contact() {


  return (
    <div className="main" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="email">
          <div className="skills" style={{paddingBottom: '40px', marginTop: '-100px'}}>Contact</div>
          <img src={vancouver} style={{maxWidth: '60%', paddingBottom: '20px'}} />
          <div className="resume" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '20px'}}>
            <div>
              <a
                style={{backgroundColor: 'transparent'}}
                href="mailto:colinelsinga@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-envelope"></i>
              <div>Email Me</div>
              </a>
            </div>
            <div style={{paddingLeft: '10px', paddingTop: '30px'}}>
              <a
                style={{backgroundColor: 'transparent'}}
                href="https://resume.creddle.io/resume/8nkxjv6eyoo"
                target="_blank"
                rel="noopener noreferrer"
                >
                <i class="fa fa-file"></i>
              <div>
                Get Resume
              </div>
              </a>
            </div>
            <div style={{paddingLeft: '10px', paddingTop: '30px'}}>
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
            <div style={{paddingLeft: '10px', paddingTop: '30px'}}>
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
         
        </div>

      </div>
  )
}

