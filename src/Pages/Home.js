import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import gifIcon from "../Assets/gif.gif";
import { motion } from "framer-motion";
import '../Styles/Home.css'

function Home() {

  return (
    <motion.div className="home"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
    >
      <div className="about">
        <div className="greeting">
        <h2>Hi, My Name is Abhishek</h2>
        <img src={gifIcon} alt=""/>
        </div>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <div className="socialMediaDiv">
            <div className="icon linkedindiv">
              <div className="tooltip">Linkedin</div>
              <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon/>
              </a>
            </div>

            <div className="icon emaildiv">
              <div className="tooltip">Email</div>
              <a href="/contact" target="_blank" rel="noopener noreferrer">  
                <EmailIcon/>
              </a>
            </div>

            <div className="icon githubdiv">
              <div className="tooltip">Github</div>
              <a href="https://github.com/" target="_blank" rel="nopener noreferrer">  
                <GitHubIcon/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="skills"
        initial={{x:-400}}
        whileInView={{x:0}}
        viewport={{once:false, amount:0.1}}
        transition={{duration:1}}
      >
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span> 
              ReactJs, Redux, HTML, CSS, NPM, Yarn, Material UI.
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>
              NodeJS,MySQL, MongoDB,
            </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span>
              JavaScript, C, CPP, Python
            </span>
          </li>
        </ol>
      </motion.div>
    </motion.div>
  );
}

export default Home;
