import React from 'react';

import DeliveryCities from './DeliveryCities';
import DeliveryTime from './DeliveryTime';

const ContextDelivery = () => {
  return (
    <div className='ui container'>
      <div className='ui stackable grid'>
        <div className='row'>
          <div className='ten wide column'>
            <h2>
              <span>
                <i className='leaf icon'></i>
              </span>
              {'  '}Environnement
            </h2>

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
            <div className='ui centered card contextDelivery__card'>
              <div className='content'>
                <div className='header'>
                  <span className='right floated'>
                    <i className='bicycle icon'></i>
                  </span>
                  <span></span> Livraison
                </div>
                <div className='description'>
                  <p className='justified'>
                    Nous livrons vos bouquets, en véhicule propre: vélo,
                    hybride, électrique sur le{' '}
                    <strong>secteur de Marne-la-Vallée</strong>.
                  </p>
                  <DeliveryCities />
                  <div className='contextDelivery_msg'>
                    <i className='heart outline like icon'></i>
                    <p>
                      Livraison soignée, rapide, écologique et avec le sourire!
                    </p>
                  </div>
                  <p className='contextDelivery__time'>
                    <strong>Du lundi au samedi de 9h à 20h</strong>
                  </p>
                  <DeliveryTime />
                </div>
              </div>
              <div className='center aligned extra content'>
                <p>
                  Vous avez un doute, la ville choisie ne figure pas sur la
                  liste? Nous pouvons peut être assurer votre livraison!
                </p>
                <button className='ui pink button productList__contact '>
                  Contactez-nous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextDelivery;
