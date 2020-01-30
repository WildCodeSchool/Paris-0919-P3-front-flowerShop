import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import Message from './Message';
import ModalMail from './ModalMail';

const ProductsList = ({
  products,
  toggleFeatured,
  toggleDescription,
  deleteProduct,
  setMessage,
  user
}) => (
  <div className='ui container productList__shop'>
    <h1>FLOWER SHOP</h1>
    <p>
      Éclosion vous propose des bouquets frais{' '}
      <strong>renouvelés chaque mercredi</strong> à 9h.
    </p>
    <p>Des bouquets délicats, poétiques, un brin sauvage.</p>
    <div role='list' className='ui bulleted list'>
      <div role='listitem' className='item'>
        3 choix
      </div>
      <div role='listitem' className='item'>
        2 tailles
      </div>
    </div>
    <p className='productList__pres'>
      La livraison est incluse dans le prix du bouquet affiché.
    </p>
    <h2>Bouquets</h2>

    <div className='ui stackable grid three cards'>
      {products.length === 0 ? (
        <Message header='header' content='message' />
      ) : (
        products.map(
          product =>
            product.productType === '1' && (
              <ProductCard
                product={product}
                key={product._id}
                toggleFeatured={toggleFeatured}
                toggleDescription={toggleDescription}
                deleteProduct={deleteProduct}
                user={user}
                setMessage={setMessage}
              />
            )
        )
      )}
    </div>
    <hr />
    <h2>Accessoires</h2>
    <div className='ui stackable grid three cards'>
      {products.map(
        product =>
          product.productType === '2' && (
            <ProductCard
              product={product}
              key={product._id}
              toggleFeatured={toggleFeatured}
              toggleDescription={toggleDescription}
              deleteProduct={deleteProduct}
              user={user}
              setMessage={setMessage}
            />
          )
      )}
    </div>

    <hr />
    <h2>Décoration</h2>
    <div className='ui stackable grid three cards'>
      {products.map(
        product =>
          product.productType === '3' && (
            <ProductCard
              product={product}
              key={product._id}
              toggleFeatured={toggleFeatured}
              toggleDescription={toggleDescription}
              deleteProduct={deleteProduct}
              user={user}
              setMessage={setMessage}
            />
          )
      )}
    </div>

    <h3 className='productList__ask'>Vous avez une demande particulière ?</h3>
    <div className='productList__contact'>
      <ModalMail btnText='Contactez-nous' setMessage={setMessage} />
    </div>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

ProductsList.defaultProps = {
  products: []
};

export default ProductsList;
