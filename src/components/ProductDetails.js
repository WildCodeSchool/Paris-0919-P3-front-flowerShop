import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ game }) => (
  <div className='ui container'>
    <h1 className='ui center aligned dividing header'>{game.name}</h1>

    <div className='ui stackable grid'>
      <div className='six wide column'>
        <div className='ui fluid image'>
          <img src={game.thumbnail} alt='Game cover' />
        </div>
      </div>
    </div>

    <div className='ten wide column'>
      <p>{game.description}</p>

      <table className='ui table'>
        <tbody>
          <tr>
            <td>Numbers of players:</td>
            <td>{game.players}</td>
          </tr>
          <tr>
            <td>Duration:</td>
            <td>{game.duration} minutes</td>
          </tr>
        </tbody>
      </table>

      <p className='ui green huge label'>{game.price / 100} €</p>
    </div>
  </div>
);

ProductDetails.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};

export default ProductDetails;
