import React from 'react';

const ProductDescription = ({ described, toggleDescription, productId }) => {
  return (
    <span>
      {!described ? (
        <button
          onClick={() => toggleDescription(productId)}
          className='text__icon productCard__desc-btn'
        >
          <i className='ui pink icon eye' />
        </button>
      ) : (
        <button
          onClick={() => toggleDescription(productId)}
          className='text__icon productCard__desc-btn'
        >
          <i className='ui green icon eye' />
        </button>
      )}
    </span>
  );
};

export default ProductDescription;
