import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product }) => (
  <div className='ui container'>
    <h1 className='ui center aligned dividing header'>{product.name}</h1>

    <div className='ui stackable grid'>
      <div className='row'>
        <div className='six wide column'>
          <div className='ui fluid image'>
            <img src={product.thumbnail} alt='Bouquet' />
          </div>
        </div>

        <div className='ten wide column'>
          <p>{product.description}</p>
          <table className='ui table'>
            <tbody>
              <tr>
                <td>Tailles disponibles:</td>
                <td>{product.size}</td>
              </tr>
              {/* <tr>
            <td>Duration:</td>
            <td>{product.duration} minutes</td>
          </tr> */}
            </tbody>
          </table>

          <p className='ui green huge label'>{product.price / 100} €</p>
        </div>
      </div>
    </div>
  </div>
);

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
    //duration: PropTypes.number.isRequired
  }).isRequired
};

export default ProductDetails;
