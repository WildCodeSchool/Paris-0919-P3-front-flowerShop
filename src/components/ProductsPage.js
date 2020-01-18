import React from 'react';
import PropTypes from 'prop-types';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductForm from './ProductForm';
import ProductsList from './ProductsList';
import LoadingMsg from './LoadingMsg';
import AdminRoute from './AdminRoute';
import api from '../api';

import './App.css';

const productTypes = [
  {
    _id: '1',
    name: 'Bouquet'
  },
  {
    _id: '2',
    name: 'Accessoire'
  },
  {
    _id: '3',
    name: 'Décoration'
  }
];

class ProductsPage extends React.Component {
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

  saveProduct = product =>
    // History object possible because update & addProduct are promises. Replace a redirect component
    (product._id
      ? this.updateProduct(product)
      : this.addProduct(product)
    ).then(() => this.props.history.push('/products'));

  addProduct = productData =>
    api.products.create(productData).then(product =>
      this.setState({
        products: this.sortProducts([...this.state.products, product]),
        showProductForm: false
      })
    );

  updateProduct = productData =>
    api.products.update(productData).then(product =>
      this.setState({
        products: this.sortProducts(
          this.state.products.map(item =>
            item._id === product._id ? product : item
          )
        ),
        showProductForm: false
      })
    );

  deleteProduct = product =>
    api.products.delete(product).then(() =>
      this.setState({
        products: this.state.products.filter(item => item._id !== product._id)
      })
    );

  render() {
    const { products, loading } = this.state;
    const numberOfColumns =
      this.props.location.pathname === '/products' ? 'sixteen' : 'ten';
    const editPath =
      this.props.location.pathname === '/products/new' ? 'Créer' : 'Editer';

    return (
      <div className='ui container'>
        <div className='ui stackable grid'>
          <AdminRoute
            path='/products/new'
            user={this.props.user}
            render={() => (
              <div className='six wide column'>
                <ProductForm
                  productTypes={productTypes}
                  submit={this.saveProduct}
                  product={{}}
                  editPath={editPath}
                />
              </div>
            )}
          />
          <AdminRoute
            path='/products/edit/:_id'
            user={this.props.user}
            render={props => (
              <div className='six wide column'>
                <ProductForm
                  productTypes={productTypes}
                  submit={this.saveProduct}
                  product={
                    _find(this.state.products, {
                      _id: props.match.params._id
                    }) || {}
                  }
                  editPath={editPath}
                />
              </div>
            )}
          />

          <div className={`${numberOfColumns} wide column`}>
            {loading ? (
              <LoadingMsg />
            ) : (
              <ProductsList
                products={products}
                toggleFeatured={this.toggleFeatured}
                toggleDescription={this.toggleDescription}
                deleteProduct={this.deleteProduct}
                user={this.props.user}
                editPath={editPath}
                setMessage={this.props.setMessage}
              />
            )}
          </div>
        </div>

        <br />
      </div>
    );
  }
}

ProductsPage.defaultProps = {
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default ProductsPage;
