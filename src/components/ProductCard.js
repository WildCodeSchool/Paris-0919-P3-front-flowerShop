import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Price from './Price';
import ProductDescription from './ProductDescription';

class ProductCard extends React.Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = () => this.setState({ showConfirmation: true });
  hideConfirmation = () => this.setState({ showConfirmation: false });

  render() {
    const { product, toggleDescription, deleteProduct, user } = this.props;
    const adminActions = (
      <div className='extra content'>
        {this.state.showConfirmation ? (
          <div className='ui two buttons'>
            <button
              className='ui red basic button'
              onClick={() => deleteProduct(product)}
            >
              <i className='ui icon check' /> YES
            </button>
            <button
              className='ui grey basic button'
              onClick={this.hideConfirmation}
            >
              <i className='ui icon close' /> NO
            </button>
          </div>
        ) : (
          <div className='ui two buttons'>
            <Link
              to={`/products/edit/${product._id}`}
              className='ui green basic button'
            >
              <i className='ui icon edit' />
            </Link>
            <button
              className='ui red basic button'
              onClick={this.showConfirmation}
            >
              <i className='ui icon trash' />
            </button>
          </div>
        )}
      </div>
    );
    const addToCart = (
      <div className='extra content right'>
        <button className='ui green basic button'>
          <i className='shopping basket icon'></i>Ajouter au panier
        </button>
      </div>
    );

    return (
      <div className='ui card'>
        {!product.described ? (
          <div className='image'>
            <Price product={product} />
            <img
              className='productCard__image'
              src={product.thumbnail}
              alt='Bouquet'
            />
          </div>
        ) : (
          <div className='ui justified container description'>
            <p>{product.description}</p>
          </div>
        )}
        <div className='content'>
          <Link to={`/product/${product._id}`} className='header' {...user}>
            {product.name}
          </Link>

          <div className='meta caption productCard__caption'>
            <div className='product__icon'>
              <i className='icon sort' /> <strong>Tailles :</strong>{' '}
              {product.size}
            </div>
            <ProductDescription
              described={product.described}
              toggleDescription={toggleDescription}
              productId={product._id}
            />
          </div>
        </div>
        {user.token &&
          (user.role === 'user' || user.role === 'admin') &&
          addToCart}
        {user.token && user.role === 'admin' && adminActions}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default ProductCard;
