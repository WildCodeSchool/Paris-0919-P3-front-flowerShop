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
    await api.cart.delete(userId, productId);
    const updatedCart = await api.cart.fetchAll(userId);
    this.setState({ cart: updatedCart.cart, loading: false });
  };

  componentDidMount() {
    const userId = jwtdecode(this.token).user._id;
    api.cart.fetchAll(userId).then(cart => {
      console.log(cart);
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
            <table className='ui single line table'>
              <tbody>
                {this.state.cart.products.length === 0 ? (
                  <div>
                    <h2>Votre panier est vide</h2>
                  </div>
                ) : (
                  this.state.cart.products.map(product => {
                    return (
                      <tr key={product._id}>
                        <td>
                          <img
                            className='ui small image'
                            src={product.thumbnail}
                            alt=''
                          />
                        </td>
                        <td>
                          <p>{product.name}</p>
                          <p>{product.size}</p>
                        </td>
                        <td className='right aligned'>
                          <button
                            className='ui labeled icon button'
                            onClick={() => this.handleClick(product)}
                          >
                            <i className='trash alternate outline icon'></i>
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
              {this.state.cart.products.length > 0 && (
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>
                      <div className='ui right floated small primary labeled button'>
                        <OrderModalMail cart={this.state.cart} />
                      </div>
                    </th>
                  </tr>
                </tfoot>
              )}
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
