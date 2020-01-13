import React from 'react';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductsList from './ProductsList';
import LoadingMsg from './LoadingMsg';
import Delivery from './Delivery';
import Context from './Context';

import api from '../api';
import ArticlesList from './ArticlesList';

class HomePage extends React.Component {
  state = {
    products: [],
    articles: [],
    loading: true
  };

  componentDidMount() {
    api.products
      .fetchAll()
      .then(products =>
        this.setState({ products: this.sortProducts(products), loading: false })
      );
    api.articles
      .fetchAll()
      .then(articles => this.setState({ articles, loading: false }));
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

  deleteArticle = article =>
    api.articles.delete(article).then(() =>
      this.setState({
        articles: this.state.articles.filter(item => item._id !== article._id)
      })
    );

  render() {
    const { products, articles, loading } = this.state;
    return (
      <div className='home'>
        <div className='ui container'>
          <h1>Bienvenue chez Eclosion !</h1>
        </div>
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
        <ArticlesList
          articles={articles}
          deleteArticle={this.deleteArticle}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default HomePage;
