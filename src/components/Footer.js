import React from 'react';
import { Image, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Footer() {
  return (
    <div className='footer__container'>
      <div className='ui grid footer'>
        <div className='inverted teal row footer'>
          <Grid className='three stackable column'>
            <Grid.Column className='six wide column'>
              <h4>ECLOSION</h4>
              <Link className='footer__link' to='/delivery'>
                Livraison
              </Link>{' '}
              <br />
              <Link className='footer__link' to='/legal-mentions'>
                Mentions Légales
              </Link>
            </Grid.Column>
            <Grid.Column className='six wide column'>
              <h4>CONTACT</h4>
              <p className='footer-contact'>atshabo.corinne@gmail.com</p>
              <p className='footer-contact'>06 25 33 34 38</p>
              <p className='footer-contact'>adresse postale </p>
            </Grid.Column>
            <Grid.Column className='four wide column'>
              <h4>RESEAUX SOCIAUX</h4>
              <a
                href='https://www.facebook.com/eclosionfleurs'
                target='__blank'
              >
                <i className='facebook green square big icon reseaux'></i>
              </a>
              <a href='https://instagram.com/eclosionfleurs' target='__blank'>
                <i className='instagram green big icon reseaux'></i>
              </a>
            </Grid.Column>
          </Grid>
        </div>

        <div className='inverted grey row footer logo'>
          <Grid className='two stackable column'>
            <Grid.Column className='eight wide logo'>
              <Image src={logo} size='small' />
            </Grid.Column>
            <Grid.Column className='eight wide logo'>
              <Segment basic textAlign={'right'}>
                <p>
                  © 2020 Eclosion - Made by{' '}
                  <span role='img' aria-label='coeur'>
                    ❤️
                  </span>{' '}
                  par des élèves de la Wild Code School
                </p>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;
