import React from 'react'
import PropTypes from 'prop-types'

const Price = ({ game }) => (
  <span className="ui green ribbon label">$ {game.price / 100}</span>
)

Price.propTypes = {
  game: PropTypes.shape({
    price: PropTypes.number.isRequired
  }).isRequired
}

export default Price
