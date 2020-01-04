import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ product }) => (
  <span className='ui pink basic label'>{product.price / 100} €</span>
);

Price.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired
  }).isRequired
};

export default Price;
