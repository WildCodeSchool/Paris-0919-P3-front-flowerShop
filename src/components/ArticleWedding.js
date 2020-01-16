import React from 'react';

import ModalMail from './ModalMail';
import wedding from '../wedding.jpg';

class ArticleWedding extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className='ui container'>
          <h1 className='articles__title'>MARIAGES</h1>
          <div className='ui stackable grid articles'>
            <div className='six wide column articles'>
              <div className='ui segment'>
                Alors comme ça vous vous mariez prochainement! Toutes nos
                félicitations!
              </div>
            </div>
            <div className='six wide column articles'>
              <div className='ui segment'>
                Nous nous ferons un plaisir de sublimer cette magnifique journée
                remplie d’émotion et de partage.
              </div>
            </div>
            <div className='four wide column'>
              <img
                src={wedding}
                alt='Mariage'
                className='ui image articles__img'
              />
            </div>

            <div className='twelve wide column articles'>
              <div className='ui segment'>
                Un mariage élégant, champêtre ou moderne, nous vous proposons
                une décoration sur mesure. Nous vous accompagnons dans la
                scénographie et la décoration florale de votre mariage.
              </div>
            </div>
          </div>
          <div className='row wedding'>
            <ModalMail text='Faites nous part de vos envies !' />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleWedding;
