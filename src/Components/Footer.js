import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../Styles/Footer.css";

function Footer() {
  const navigate = () => {};
  return (
    <div className="footer">
      <div className="socialMedia" onClick={navigate}>
        <div className="icon instagramdiv">
            <div className="tooltip">Instagram</div>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">   
              <InstagramIcon />
            </a>
        </div>
        
        <div className="icon linkedindiv">
          <div className="tooltip">Linkedin</div>
            <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
        </div>

        <div className="icon emaildiv">
          <div className="tooltip">Email</div>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </div>
      </div>
      <p> &copy; 2022 Abhishek Madiwale</p>
    </div>
  );
}

export default Footer;
