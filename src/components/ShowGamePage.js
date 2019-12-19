import React from 'react';
import GameDetails from './GameDetails';
import LoadingMsg from './LoadingMsg';
import api from '../api';

class ShowGamePage extends React.Component {
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
          <GameDetails game={this.state.game} />
        )}
      </div>
    );
  }
}

export default ShowGamePage;
