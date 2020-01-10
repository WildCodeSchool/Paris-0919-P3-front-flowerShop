import React from 'react';

import fleur from '../fleurs_sechees.jpg';

const Context = () => {
  return (
    <>
      <h2>
        <span>
          <i className='green leaf icon'></i>
        </span>
        {'  '}Environnement
      </h2>

      <p>
        L’environnement est au cœur de nos préoccupations. Nous privilégions la
        Fleur locale, les fleurs cultivées en France, aux fleurs importées. Un
        circuit court pour des fleurs qui durent plus longtemps dans vos
        intérieurs.
      </p>
      <p>
        Exit les fleurs hors saison, nos bouquets sont composés de{' '}
        <strong>Fleurs de saison</strong>.
      </p>
      <p>Notre démarche va au-delà du choix des fleurs.</p>
      <div className='context__flex'>
        <i className='recycle big green icon'></i>
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
      <img src={fleur} alt='Fleurs séchées' className='ui image context__img' />
    </>
  );
};

export default Context;
