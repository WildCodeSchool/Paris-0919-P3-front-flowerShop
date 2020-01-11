import React from 'react';

import wedding from '../wedding.jpg';
import event from '../event.jpg';
import diy from '../diy.jpg';

class Articles extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className='ui container'>
          <h1>MARIAGES</h1>
          <div className='ui stackable grid'>
            <div className='six wide column'>
              <div className='ui segment'>
                Alors comme ça vous vous mariez prochainement! Toutes nos
                félicitations!
              </div>
            </div>
            <div className='six wide column'>
              <div className='ui segment'>
                Nous nous ferons un plaisir de sublimer cette magnifique journée
                remplie d’émotion et de partage.
              </div>
            </div>

            <div className='four wide column'>
              <button className='ui pink button productList__contact'>
                Faites nous part de vos envies !
              </button>
            </div>
            <div className='twelve wide column'>
              <div className='ui segment'>
                Un mariage élégant, champêtre ou moderne, nous vous proposons
                une décoration sur mesure. Nous vous accompagnons dans la
                scénographie et la décoration florale de votre mariage.
              </div>
            </div>
          </div>
          <img src={wedding} alt='Mariage' className='ui image articles__img' />
          <hr />
        </div>
        <div className='ui container'>
          <h1>ENTREPRISES</h1>
          <div className='ui stackable grid'>
            <div className='six wide column'>
              <div className='ui segment'>
                Un dîner d’entreprise, une inauguration, une décoration de
                vitrine...
              </div>
            </div>
            <div className='six wide column'>
              <div className='ui segment'>
                Vous avez besoin d’une scénographie qui en jette !
              </div>
            </div>

            <div className='four wide column'>
              <button className='ui pink button productList__contact'>
                Contactez-nous
              </button>
            </div>
            <div className='twelve wide column'>
              <div className='ui segment'>
                Éclosion fleurit vos événements à l’image de votre marque et de
                votre concept.
              </div>
            </div>
          </div>
          <img
            src={event}
            alt='Evenement professionnel'
            className='ui image articles__img'
          />
          <hr />
        </div>
        <div className='ui container'>
          <h1>ATELIERS DIY</h1>
          <div className='ui stackable grid'>
            <div className='six wide column'>
              <div className='ui segment'>
                Vous avez l’âme d’un artiste, Vous souhaitez laisser parler
                votre créativité! Couronne de fleurs, bouquet, terrarium...
              </div>
            </div>
            <div className='six wide column'>
              <div className='ui segment'>
                Durant toute l’année nous vous proposons des ateliers DIY «fais
                le toi-même» en fonction des fleurs et des saisons.
              </div>
            </div>

            <div className='four wide column'>
              <button className='ui pink button productList__contact'>
                Plus de détails
              </button>
            </div>
            <div className='twelve wide column'>
              <div className='ui segment'>
                EVJF, anniversaire, team building.... Nous proposons des
                ateliers privés à partir de 8 personnes.
              </div>
            </div>
          </div>
          <img
            src={diy}
            alt='Evenement professionnel'
            className='ui image articles__img'
          />
          <hr />
        </div>
      </div>
    );
  }
}

export default Articles;
