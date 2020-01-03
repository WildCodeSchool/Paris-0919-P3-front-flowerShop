import React from 'react';
import PropTypes from 'prop-types';

import GameCard from './GameCard';
import Message from './Message';

const GamesList = ({
  games,
  toggleFeatured,
  toggleDescription,
  deleteGame,
  user
}) => (
  <>
    <h1>Nos bouquets</h1>
    <div className='ui stackable grid three cards'>
      {games.length === 0 ? (
        <Message header='header' content='message' />
      ) : (
        games.map(game => (
          <GameCard
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
  </>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
