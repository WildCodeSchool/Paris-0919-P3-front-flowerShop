import React from 'react';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import GamesList from './GamesList';
import LoadingMsg from './LoadingMsg';

import api from '../api';

class HomePage extends React.Component {
  state = {
    games: [],
    loading: true
  };

  componentDidMount() {
    api.games
      .fetchAll()
      .then(games =>
        this.setState({ games: this.sortGames(games), loading: false })
      );
  }

  sortGames(games) {
    return _orderBy(games, ['featured', 'name'], ['desc', 'asc']);
  }

  toggleFeatured = gameId => {
    const game = _find(this.state.games, { _id: gameId });
    return this.updateGame({
      ...game,
      featured: !game.featured
    });
  };

  toggleDescription = gameId =>
    this.setState({
      games: this.state.games.map(game =>
        gameId === game._id ? { ...game, described: !game.described } : game
      )
    });

  deleteGame = game =>
    api.games.delete(game).then(() =>
      this.setState({
        games: this.state.games.filter(item => item._id !== game._id)
      })
    );

  render() {
    const { games, loading } = this.state;
    return (
      <div className='ui container'>
        <h1>Bienvenue chez Eclosion !</h1>
        <p>
          Éclosion vous propose des bouquets frais renouvelés chaque mercredi à
          9h.
        </p>
        <p>Des bouquets délicats, poétiques, un brin sauvage.</p>

        <div className='ten wide column'>
          {loading ? (
            <LoadingMsg />
          ) : (
            <GamesList
              games={games}
              toggleFeatured={this.toggleFeatured}
              toggleDescription={this.toggleDescription}
              deleteGame={this.deleteGame}
              user={this.props.user}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
