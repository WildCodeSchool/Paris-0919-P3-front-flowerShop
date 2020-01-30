import React from 'react'
import ProductDetails from './ProductDetails'
import LoadingMsg from './LoadingMsg'
import api from '../api'

class ShowProductPage extends React.Component {
  state = {
    product: {},
    loading: true
  }

  componentDidMount() {
    console.log('show', this.props.setMessage)

    api.products
      .fetchById(this.props.match.params._id)
      .then(product => this.setState({ product, loading: false }))
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <LoadingMsg />
        ) : (
          <ProductDetails
            product={this.state.product}
            user={this.props.user}
            setMessage={this.props.setMessage}
          />
        )}
      </div>
    )
  }
}

export default ShowProductPage
