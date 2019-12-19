import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Price from './Price';
import Featured from './Featured';
import GameDescription from './GameDescription';

class GameCard extends React.Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = () => this.setState({ showConfirmation: true });
  hideConfirmation = () => this.setState({ showConfirmation: false });

  render() {
    const {
      game,
      toggleFeatured,
      toggleDescription,
      deleteGame,
      user
    } = this.props;
    const adminActions = (
      <div className="extra content">
        {this.state.showConfirmation ? (
          <div className="ui two buttons">
            <button
              className="ui red basic button"
              onClick={() => deleteGame(game)}
            >
              <i className="ui icon check" /> YES
            </button>
            <button
              className="ui grey basic button"
              onClick={this.hideConfirmation}
            >
              <i className="ui icon close" /> NO
            </button>
          </div>
        ) : (
          <div className="ui two buttons">
            <Link
              to={`/games/edit/${game._id}`}
              className="ui green basic button"
            >
              <i className="ui icon edit"></i>
            </Link>
            <button
              className="ui red basic button"
              onClick={this.showConfirmation}
            >
              <i className="ui icon trash"></i>
            </button>
          </div>
        )}
      </div>
    );
    const addToCart = (
      <div className="extra content">
        <button className="ui green basic button">Add to Cart</button>
      </div>
    );

    return (
      <div className="ui card">
        {!game.described ? (
          <div className="image">
            <Price game={game} />
            <Featured
              featured={game.featured}
              toggleFeatured={toggleFeatured}
              gameId={game._id}
            />
            <img src={game.thumbnail} alt="Game cover" />
          </div>
        ) : (
          <div className="ui justified container description">
            <p>{game.description}</p>
          </div>
        )}
        <div className="content">
          <Link to={`/game/${game._id}`} className="header">
            {game.name}
          </Link>
          <div className="meta caption">
            <div className="game__icon">
              <i className="icon users" /> {game.players}&nbsp;
              <i className="icon wait" /> {game.duration} min.
            </div>
            <GameDescription
              described={game.described}
              toggleDescription={toggleDescription}
              gameId={game._id}
            />
          </div>
        </div>
        {user.token && user.role === 'user' && addToCart}
        {user.token && user.role === 'admin' && adminActions}
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default GameCard;
