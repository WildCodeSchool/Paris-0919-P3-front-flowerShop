import React from 'react';

import ModalMail from './ModalMail';
import diy from '../diy.jpg';

class ArticleDIY extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className='ui container'>
          <h1 className='articles__title'>ATELIERS DIY</h1>
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
              <ModalMail content={'Plus de détails'} />
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
        </div>
      </div>
    );
  }
}

export default ArticleDIY;
