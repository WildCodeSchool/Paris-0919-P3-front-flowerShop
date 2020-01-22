import React from 'react';

import ModalMail from './ModalMail';

import mariageDetail from '../img/mariage_3.jpg';

class ArticleWedding extends React.Component {
  state = {};
  render() {
    return (
      <div className='container wedding'>
        <h1 className='articles__title'>MARIAGES</h1>
        <div className='ui equal width stackable grid'>
          <div className='stretched row'>
            <div className='six wide column'>
              <img
                className='ui image articles__img'
                src={mariageDetail}
                alt='Gros plan de fleurs sur la boutonnière du marié'
              />
            </div>
            <div className='column wedding'>
              <div className='wedding-flex'>
                <div className='five wide column'>
                  <div className='ui segment articles'>
                    Alors comme ça vous vous mariez prochainement! Toutes nos
                    félicitations!
                  </div>
                </div>
                <div className='five wide column'>
                  <div className='ui segment articles'>
                    Nous nous ferons un plaisir de sublimer cette magnifique
                    journée remplie d’émotion et de partage.
                  </div>
                </div>
              </div>
              <div className='ten wide column middle'>
                <div className='ui segment articles'>
                  Un mariage élégant, champêtre ou moderne, nous vous proposons
                  une décoration sur mesure. Nous vous accompagnons dans la
                  scénographie et la décoration florale de votre mariage.
                </div>
              </div>
              <div className='ten wide column'>
                <ModalMail
                  btnText='Faites nous part de vos envies !'
                  setMessage={this.props.setMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleWedding;
