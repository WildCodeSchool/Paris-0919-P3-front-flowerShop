import React from 'react';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductsList from './ProductsList';
import LoadingMsg from './LoadingMsg';

import api from '../api';

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
        <div className='ui container'>
          <h1>Bienvenue chez Eclosion !</h1>
          <p>
            L’environnement est au cœur de nos préoccupations. Nous privilégions
            la Fleur locale, les fleurs cultivées en France, aux fleurs
            importées. Un circuit court pour des fleurs qui durent plus
            longtemps dans vos intérieurs.
          </p>
          <p>
            Exit les fleurs hors saison, nos bouquets sont composés de{' '}
            <strong>Fleurs de saison</strong>.
          </p>
          <p>Notre démarche va au-delà du choix des fleurs.</p>
          <div role='list' className='ui bulleted list'>
            <div role='listitem' className='item'>
              Tri sélectif des déchets
            </div>
            <div role='listitem' className='item'>
              Utilisation d’un emballage recyclé et recyclable
            </div>
            <div role='listitem' className='item'>
              Recyclabilité des pertes en fleurs séchées
            </div>
          </div>
        </div>

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
    );
  }
}

export default HomePage;
