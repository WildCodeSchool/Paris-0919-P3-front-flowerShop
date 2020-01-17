import React from "react";
import { Button, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div>
      <div className="row">
      <div class="ui bottom attached button" tabindex="0">

      <Link to="/LegalMentions">Mentions Légales</Link>
      <Link to="/Contact">Contact</Link>
      </div>

        <div class="ui bottom attached button" tabindex="0">

        <a href="https://www.facebook.com/"><i class="facebook square icon huge"></i></a>
        <a href="https://twitter.com/"><i class="twitter square icon huge"></i></a>
        <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon huge"></i></a>      
        <p> Copyright© 2020 Wild Code School</p>          
        </div>
      </div>
    </div>
  );
}

export default Footer;

{/* <Button
color='red'
content='Like'
icon='heart'
label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
/> */}