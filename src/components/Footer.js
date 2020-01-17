import React from "react";
import { Button, Icon, Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div>
      <div className="row">
      <div class="ui bottom attached button" tabindex="0">
        <Grid columns={3} divided>
            <Grid.Column>
              <h1>ECLOSION</h1>
              <Link to="/ContextDelivery">Livraison</Link> <br/>
              <Link to="/LegalMentions">Mentions Légales</Link>
            </Grid.Column>
            <Grid.Column>
              <h1>CONTACT</h1>
              <p>adresse mail: vincentkouoi@free.fr <br/>
              teléphone: 0609576662<br></br>
              adresse postale: 10 rue Pierre leroux 75007 </p>
            </Grid.Column>
            <Grid.Column>
              <h1>RESEAUX SOCIAUX</h1>
            <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
            <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
            <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
            </Grid.Column>
        
        </Grid>
      
      </div>

        <div class="ui bottom attached button" tabindex="0">
          <Grid columns={2} divided>
            <Grid.Column>     
              <p>Logo</p>
            </Grid.Column>  
            <Grid.Column>
              <p> Copyright© 2020 Wild Code School</p>  
            </Grid.Column>
          </Grid>      
        </div>
      </div>
    </div>
  );
}

export default Footer;

