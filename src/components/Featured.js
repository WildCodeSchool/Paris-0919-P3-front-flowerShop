import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ featured, toggleFeatured, productId }) => (
  <span>
    {featured ? (
      <div
        onClick={() => toggleFeatured(productId)}
        className='ui yellow corner label'
      >
        <i className='star icon'></i>
      </div>
    ) : (
      <div
        onClick={() => toggleFeatured(productId)}
        className='empty ui corner label'
      >
        <i className='star icon'></i>
      </div>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired
};

export default Featured;
