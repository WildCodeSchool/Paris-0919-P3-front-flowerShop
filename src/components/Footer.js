import React from 'react';
import { Image, Grid, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='ui bottom attached button' tabIndex='0'>
          <Grid columns={3} divided>
            <Grid.Column>
              <h4>ECLOSION</h4>
              <Link to='/Delivery'>Livraison</Link> <br />
              <Link to='/LegalMentions'>Mentions Légales</Link>
            </Grid.Column>
            <Grid.Column>
              <h4>CONTACT</h4>
              <p>atshabo.corinne@gmail.com </p>
              <p> 06 25 33 34 38</p>
              <p> adresse postale </p>
            </Grid.Column>
            <Grid.Column>
              <h4>RESEAUX SOCIAUX</h4>
              <a href='https://www.facebook.com/'>
                <i className='facebook square icon huge'></i>
              </a>
              <a href='https://.instagram.com/'>
                <Button
                  circular
                  color='instagram'
                  icon='instagram'
                  size='huge'
                />
              </a>
            </Grid.Column>
          </Grid>
        </div>

        <div className='ui bottom attached button' tabIndex='0'>
          <Grid columns={2} divided>
            <Grid.Column>
              <Image
                src='/static/media/logo.129f7ba9.png'
                size='small'
                centered
              />
            </Grid.Column>
            <Grid.Column>
              <Segment basic textAlign={'center'}>
                <p>© 2020 Eclosion - Wild Code School</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;
