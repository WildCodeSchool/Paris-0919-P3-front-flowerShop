import React from 'react';

import OrderModalMail from './OrderModalMail';

import api from '../api';
import jwtdecode from 'jwt-decode';

class Cart extends React.Component {
  state = {
    cart: [],
    loading: true
  };

  token = window.localStorage.getItem('bgshopToken');

  handleClick = async product => {
    await this.setState({ loading: true });
    const userId = jwtdecode(this.token).user._id;
    const productId = product._id;
    await api.cart.delete(userId, productId).then(data => {
      this.props.setMessage(data.message);
    });
    const updatedCart = await api.cart.fetchAll(userId);
    this.setState({ cart: updatedCart.cart, loading: false });
  };

  componentDidMount() {
    const userId = jwtdecode(this.token).user._id;
    api.cart.fetchAll(userId).then(cart => {
      this.setState({ cart: cart.cart, loading: false });
    });
  }

  render() {
    return (
      <div>
        <div className='ui container'>
          <h1>Votre Panier</h1>
          {this.state.loading ? (
            <div className='ui active centered inline loader'></div>
          ) : (
            <>
              {this.state.cart.products.length === 0 ? (
                <div>
                  <h2>Votre panier est vide</h2>
                </div>
              ) : (
                <div className='cart'>
                  {/* <thead>
                    <tr>
                      <th className='three wide'></th>
                      <th className='twelve wide'>Produit</th>
                      <th className='one wide'></th>
                    </tr>
                  </thead> */}
                  <div className='cart__items'>
                    {this.state.cart.products.map(product => {
                      return (
                        <div className='cart__item' key={product._id}>
                          <div className='cart__item-photo'>
                            <img
                              className='ui tiny image productDetails__img'
                              src={product.thumbnail}
                              alt='Miniature du produit'
                            />
                          </div>
                          <div className='cart__item-description'>
                            <p>{product.name}</p>
                            <p>{product.size}</p>
                          </div>
                          <div className='cart__item-btn'>
                            <div
                              className='ui icon button'
                              onClick={() => this.handleClick(product)}
                            >
                              <i className='trash alternate outline icon'></i>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className='cart__footer'>
                    <div className='ui right floated right aligned sixteen wide column'>
                      <OrderModalMail
                        cart={this.state.cart}
                        setMessage={this.props.setMessage}
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
