import React from 'react';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductsList from './ProductsList';
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
          L’environnement est au cœur de nos préoccupations. Nous privilégions
          la Fleur locale, les fleurs cultivées en France, aux fleurs importées.
          Un circuit court pour des fleurs qui durent plus longtemps dans vos
          intérieurs.
        </p>
        <p>
          Exit les fleurs hors saison, nos bouquets sont composés de{' '}
          <strong>Fleurs de saison</strong>.
        </p>
        <p>Notre démarche va au-delà du choix des fleurs.</p>
        <div role='list' class='ui bulleted list'>
          <div role='listitem' class='item'>
            Tri sélectif des déchets
          </div>
          <div role='listitem' class='item'>
            Utilisation d’un emballage recyclé et recyclable
          </div>
          <div role='listitem' class='item'>
            Recyclabilité des pertes en fleurs séchées
          </div>
        </div>

        <div className='ten wide column'>
          {loading ? (
            <LoadingMsg />
          ) : (
            <ProductsList
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
