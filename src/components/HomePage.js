import React from 'react';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductsList from './ProductsList';
import LoadingMsg from './LoadingMsg';
import ContextDelivery from './ContextDelivery';

import api from '../api';

class HomePage extends React.Component {
  state = {
    products: [],
    loading: true,
    modalActive: false
  };

  componentDidMount() {
    api.products
      .fetchAll()
      .then(products =>
        this.setState({ products: this.sortProducts(products), loading: false })
      );
  }

  sortProducts(products) {
    return _orderBy(products, ['featured', 'name'], ['desc', 'asc']);
  }

  toggleFeatured = productId => {
    const product = _find(this.state.products, { _id: productId });
    return this.updateProduct({
      ...product,
      featured: !product.featured
    });
  };

  toggleDescription = productId =>
    this.setState({
      products: this.state.products.map(product =>
        productId === product._id
          ? { ...product, described: !product.described }
          : product
      )
    });

  deleteProduct = product =>
    api.products.delete(product).then(() =>
      this.setState({
        products: this.state.products.filter(item => item._id !== product._id)
      })
    );

  render() {
    const { products, loading } = this.state;
    return (
      <div className='home'>
        <div className='ui container'>
          <ContextDelivery />
          <div className='ten wide column'>
            {loading ? (
              <LoadingMsg />
            ) : (
              <ProductsList
                products={products}
                toggleFeatured={this.toggleFeatured}
                toggleDescription={this.toggleDescription}
                deleteProduct={this.deleteProduct}
                user={this.props.user}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
