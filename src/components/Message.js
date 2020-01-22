import React from 'react';

const Message = ({ content, header }) => (
  <>
    <div className='ui green icon message'>
      <i className='icon thumbs up'></i>
      <div className={content}>
        <div className={header}>
          Il n'y a aucun produit dans votre boutique.
        </div>
        <p>Vous devriez en ajouter, qu'en dites-vous?</p>
      </div>
    </div>
  </>
);

export default Message;
