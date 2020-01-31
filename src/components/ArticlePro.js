import React from 'react'

import ModalMail from './ModalMail'
import event from '../img/event.jpg'

class ArticlePro extends React.Component {
  state = {}
  render() {
    return (
      <div className='ui container'>
        <h1 className='articles__title'>ENTREPRISES</h1>
        <div className='ui stackable grid articles'>
          <div className='six wide column'>
            <div className='ui segment articles'>
              Un dîner d’entreprise, une inauguration, une décoration de
              vitrine...
            </div>
          </div>
          <div className='six wide column'>
            <div className='ui segment articles'>
              Vous avez besoin d’une scénographie qui en jette!
            </div>
          </div>

          <div className='four wide column'>
            <ModalMail
              btnText='Contactez-nous'
              setMessage={this.props.setMessage}
            />
          </div>
          <div className='twelve wide column'>
            <div className='ui segment articles'>
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
      </div>
    )
  }
}

export default ArticlePro
