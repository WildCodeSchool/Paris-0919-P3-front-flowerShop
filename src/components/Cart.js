import React from 'react';

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
      !this.state.loading && (
        <div>
          <div className='ui container'>
            <h1>Votre Panier</h1>
            <table className='ui table'>
              <tbody>
                {this.state.cart[0].products.map(product => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    );
  }
}

export default Cart;
