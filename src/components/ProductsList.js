import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import Message from './Message';

const ProductsList = ({
  games,
  toggleFeatured,
  toggleDescription,
  deleteGame,
  user
}) => (
  <>
    <h1>Nos bouquets</h1>
    <p>
      Éclosion vous propose des bouquets frais renouvelés chaque mercredi à 9h.
    </p>
    <p>Des bouquets délicats, poétiques, un brin sauvage.</p>
    <div role='list' class='ui bulleted list'>
      <div role='listitem' class='item'>
        3 choix
      </div>
      <div role='listitem' class='item'>
        2 tailles
      </div>
    </div>
    <p>La livraison est incluse dans le prix du bouquet affiché.</p>

    <div className='ui stackable grid three cards'>
      {games.length === 0 ? (
        <Message header='header' content='message' />
      ) : (
        games.map(game => (
          <ProductCard
            game={game}
            key={game._id}
            toggleFeatured={toggleFeatured}
            toggleDescription={toggleDescription}
            deleteGame={deleteGame}
            user={user}
          />
        ))
      )}
    </div>

    <h3 className='ask'>Vous avez une demande particulière ?</h3>
    <div className='contact'>
      <button className='ui pink button contact'>Contactez-nous</button>
    </div>
  </>
);

ProductsList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

ProductsList.defaultProps = {
  games: []
};

export default ProductsList;
