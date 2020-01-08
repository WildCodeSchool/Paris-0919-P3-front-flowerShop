import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";



function Footer() {
  return (
    <div>
      <div className="row">
        <div className="one">
          <Link to="/about">A propos</Link>

          <Link to="/Contact">CONTACT</Link>
        </div>

    
   <div className="titre">
     <h4> Rejoins-nous </h4> 
     <div className="icons">
    
          <SocialIcon url="https://www.facebook.com/Eclosion33360/" />
          <SocialIcon url="https://www.linkedin.com/company/eclosion-florale/about/" />
          <SocialIcon url="https://www.instagram.com/eclosionfleuriste/" />
        </div> 
        </div>
        <div className="two">
          <Link to="/Faq">FAQ</Link>

        </div>
      </div>
    </div>
  );
}

export default Footer;