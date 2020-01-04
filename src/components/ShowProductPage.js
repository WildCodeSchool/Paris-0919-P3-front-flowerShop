import React from 'react';
import ProductDetails from './ProductDetails';
import LoadingMsg from './LoadingMsg';
import api from '../api';

class ShowProductPage extends React.Component {
  state = {
    game: {},
    loading: true
  };

  componentDidMount() {
    api.games
      .fetchById(this.props.match.params._id)
      .then(game => this.setState({ game, loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <LoadingMsg />
        ) : (
          <ProductDetails game={this.state.game} />
        )}
      </div>
    );
  }
}

export default ShowProductPage;
