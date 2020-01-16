import React from 'react';

import ModalMail from './ModalMail';

import api from '../api';
import jwtdecode from 'jwt-decode';

class Cart extends React.Component {
  state = {
    cart: [],
    loading: true
  };

  handleClick = async product => {
    await this.setState({ loading: true });
    const userId = jwtdecode(this.props.user.token).user._id;
    const productId = product._id;
    await api.cart.delete(userId, productId);
    const updatedCart = await api.cart.fetchAll(userId);
    this.setState({ cart: updatedCart.cart, loading: false });
  };

  componentDidMount() {
    const userId = jwtdecode(this.props.user.token).user._id;
    console.log(userId);
    api.cart
      .fetchAll(userId)
      .then(cart => this.setState({ cart: cart.cart, loading: false }));
  }

  render() {
    return (
      <div>
        <div className='ui container'>
          <h1>Votre Panier</h1>
          {this.state.loading ? (
            <div class='ui active centered inline loader'></div>
          ) : (
            <table className='ui table'>
              <tbody>
                {console.log(this.state.cart)}
                {this.state.cart[0].products.length === 0 ? (
                  <div>
                    <h2>Votre panier est vide</h2>
                  </div>
                ) : (
                  this.state.cart[0].products.map(product => (
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
                  ))
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th>
                    <div class='ui right floated small primary labeled button'>
                      <ModalMail text='Commander' />
                    </div>
                  </th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;