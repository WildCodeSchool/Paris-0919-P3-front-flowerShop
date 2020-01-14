import React from 'react';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductsList from './ProductsList';
import LoadingMsg from './LoadingMsg';
import Delivery from './Delivery';
import Context from './Context';
import Articles from './Articles';

import api from '../api';
//import flower from '../flower_wallpaper.jpg';

class HomePage extends React.Component {
  state = {
    products: [],
    loading: true
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
        <div className='home__opening'>
          {/* <img
            className='ui centered image'
            src={flower}
            alt='Bouquets de fleur'
          /> */}

          <div className='ui centered grid'>
            <div className='computer only three column row'>
              <div className='column'>
                <div className='ui teal inverted center aligned segment'>
                  <h3>Atelier de créations florales</h3>
                  <h3>
                    Livraison à vélo de bouquets uniques sur Marne la Vallée
                  </h3>
                  <h3>Commander votre bouquet éco responsable de la semaine</h3>
                </div>
              </div>
            </div>
          </div>

          <div class='ui centered grid'>
            <div class='mobile only row'>
              <div class='ui segment column'>
                <h3>Atelier de créations florales</h3>
                <h3>
                  Livraison à vélo de bouquets uniques sur Marne la Vallée
                </h3>
                <h3>Commander votre bouquet éco responsable de la semaine</h3>
              </div>
            </div>
            <div class='ui segment six wide tablet eight wide computer column'>
              a
            </div>
            <div class='ui segment six wide tablet eight wide computer column'>
              b
            </div>
            <div class='ui segment six wide tablet eight wide computer column'>
              c
            </div>
            <div class='ui segment six wide tablet eight wide computer column'>
              d
            </div>
            <div class='ui segment six wide tablet eight wide computer column'>
              e
            </div>
          </div>
        </div>

        <div className='ten wide column'>
          {loading ? (
            <LoadingMsg />
          ) : (
            <div className='shop__container'>
              <ProductsList
                products={products}
                toggleFeatured={this.toggleFeatured}
                toggleDescription={this.toggleDescription}
                deleteProduct={this.deleteProduct}
                user={this.props.user}
              />
            </div>
          )}
        </div>
        <div className='context-delivery'>
          <div className='ui container'>
            <div className='ui stackable grid'>
              <div className='row'>
                <div className='ten wide column'>
                  <Context />
                </div>
                <div className='six wide column'>
                  <Delivery />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Articles />
      </div>
    );
  }
}

export default HomePage;
