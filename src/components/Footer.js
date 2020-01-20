import React from 'react';
import { Image, Grid, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='row'>
        <div className='ui bottom attached button' tabIndex='0'>
          <Grid columns={3} divided>
            <Grid.Column>
              <h3>ECLOSION</h3>
              <Link to='/Delivery'>Livraison</Link> <br />
              <Link to='/LegalMentions'>Mentions Légales</Link>
            </Grid.Column>
            <Grid.Column>
              <h3>CONTACT</h3>
              <p>
                adresse mail: atshabo.corinne@gmail.com <br />
                teléphone: 06 25 33 34 38<br></br>
                adresse postale:{' '}
              </p>
            </Grid.Column>
            <Grid.Column>
              <h3>RESEAUX SOCIAUX</h3>
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
                <p> Copyright© 2020 Wild Code School</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;
