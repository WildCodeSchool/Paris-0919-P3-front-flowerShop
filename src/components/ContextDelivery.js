import React from 'react';

import DeliveryCities from './DeliveryCities';

const ContextDelivery = () => {
  return (
    <div className='ui container'>
      <h1>Bienvenue chez Eclosion !</h1>
      <div className='ui stackable grid'>
        <div className='row'>
          <div className='ten wide column'>
            <p>
              L’environnement est au cœur de nos préoccupations. Nous
              privilégions la Fleur locale, les fleurs cultivées en France, aux
              fleurs importées. Un circuit court pour des fleurs qui durent plus
              longtemps dans vos intérieurs.
            </p>
            <p>
              Exit les fleurs hors saison, nos bouquets sont composés de{' '}
              <strong>Fleurs de saison</strong>.
            </p>
            <p>Notre démarche va au-delà du choix des fleurs.</p>
            <div role='list' className='ui bulleted list'>
              <div role='listitem' className='item'>
                Tri sélectif des déchets
              </div>
              <div role='listitem' className='item'>
                Utilisation d’un emballage recyclé et recyclable
              </div>
              <div role='listitem' className='item'>
                Recyclabilité des pertes en fleurs séchées
              </div>
            </div>
          </div>
          <div className='six wide column'>
            <DeliveryCities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextDelivery;
