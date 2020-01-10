import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

const ProductDetails = ({ product, user }) => {
  const handleChange = e => console.log(e.target.value);

  return (
    <div className='ui container'>
      <h1 className='ui center aligned dividing header'>{product.name}</h1>

      <div className='ui stackable grid'>
        <div className='row'>
          <div className='six wide column'>
            <div className='ui fluid image'>
              <img src={product.thumbnail} alt='Bouquet' />
            </div>
          </div>

          <div className='ten wide column'>
            <p>{product.description}</p>
            <table className='ui table'>
              <tbody>
                <tr>
                  <td>Tailles disponibles:</td>
                  {user.token && user.role === 'user' ? (
                    <td>
                      <select
                        name='productSize'
                        value='Tailles'
                        onChange={handleChange}
                      >
                        <option value='0'>Choisir la taille</option>
                        {product.size.split(' / ').map((taille, index) => (
                          <option value={taille} key={index}>
                            {taille}
                          </option>
                        ))}
                      </select>
                    </td>
                  ) : (
                    <td>{product.size}</td>
                  )}
                </tr>
                {/* <tr>
              <td>Duration:</td>
              <td>{product.duration} minutes</td>
            </tr> */}
              </tbody>
            </table>

            <div className='productDetails__buttons'>
              <p className='ui green huge label'>{product.price / 100} €</p>

              {user.token && user.role === 'user' && (
                <div className='extra content right'>
                  <button className='ui green basic button'>
                    <i className='shopping basket icon'></i>Ajouter au panier
                  </button>
                </div>
              )}
=======
import Delivery from './Delivery';
import Context from './Context';

class ProductDetails extends React.Component {
  state = {
    size: ''
  };
  handleChange = e => this.setState({ size: e.target.value });

  render() {
    const { product, user } = this.props;
    const { size } = this.state;
    return (
      <div className='ui container'>
        <h1 className='ui center aligned dividing header'>{product.name}</h1>

        <div className='ui stackable grid'>
          <div className='row'>
            <div className='six wide column'>
              <div className='ui fluid image'>
                <img src={product.thumbnail} alt='Bouquet' />
              </div>
            </div>

            <div className='ten wide column'>
              <p>{product.description}</p>
              <table className='ui table'>
                <tbody>
                  <tr>
                    <td>Tailles disponibles:</td>
                    {(user.token && user.role === 'user') ||
                    user.role === 'admin' ? (
                      <td>
                        <select
                          name='productSize'
                          value={size}
                          onChange={this.handleChange}
                          className='ui dropdown'
                        >
                          <option value=''>Choisir la taille</option>
                          {product.size.split(' / ').map((taille, index) => (
                            <option value={taille} key={index}>
                              {taille}
                            </option>
                          ))}
                        </select>
                      </td>
                    ) : (
                      <td>{product.size}</td>
                    )}
                  </tr>
                </tbody>
              </table>

              <div className='productDetails__buttons'>
                <p className='ui green huge label'>{product.price / 100} €</p>

                {user.token && (user.role === 'user' || user.role === 'admin') && (
                  <div className='extra content right'>
                    <button className='ui green basic button'>
                      <i className='shopping basket icon'></i>Ajouter au panier
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='ui stackable grid'>
          <div className='row'>
            <div className='twelve wide column'>
              <Context />
            </div>
            <div className='four wide column'>
              <Delivery />
>>>>>>> dev
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
};
=======
    );
  }
}
>>>>>>> dev

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
<<<<<<< HEAD
    //duration: PropTypes.number.isRequired
=======
>>>>>>> dev
  }).isRequired
};

export default ProductDetails;
