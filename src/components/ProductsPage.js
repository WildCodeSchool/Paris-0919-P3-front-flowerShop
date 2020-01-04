import React from 'react';
import PropTypes from 'prop-types';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import ProductForm from './ProductForm';
import ProductsList from './ProductsList';
import LoadingMsg from './LoadingMsg';
import AdminRoute from './AdminRoute';
import api from '../api';

import './App.css';

const publishers = [
  {
    _id: '1',
    name: 'Bouquet'
  },
  {
    _id: '2',
    name: 'Accessoire'
  }
];

class ProductsPage extends React.Component {
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

  saveGame = game =>
    // History object possible because update & addgame are promises. Replace a redirect component
    (game._id ? this.updateGame(game) : this.addGame(game)).then(() =>
      this.props.history.push('/games')
    );

  addGame = gameData =>
    api.games.create(gameData).then(game =>
      this.setState({
        games: this.sortGames([...this.state.games, game]),
        showGameForm: false
      })
    );

  updateGame = gameData =>
    api.games.update(gameData).then(game =>
      this.setState({
        games: this.sortGames(
          this.state.games.map(item => (item._id === game._id ? game : item))
        ),
        showGameForm: false
      })
    );

  deleteGame = game =>
    api.games.delete(game).then(() =>
      this.setState({
        games: this.state.games.filter(item => item._id !== game._id)
      })
    );

  render() {
    const { games, loading } = this.state;
    const numberOfColumns =
      this.props.location.pathname === '/games' ? 'sixteen' : 'ten';
    return (
      <div className='ui container'>
        <div className='ui stackable grid'>
          <AdminRoute
            path='/games/new'
            user={this.props.user}
            render={() => (
              <div className='six wide column'>
                <ProductForm
                  publishers={publishers}
                  submit={this.saveGame}
                  game={{}}
                />
              </div>
            )}
          />
          <AdminRoute
            path='/games/edit/:_id'
            user={this.props.user}
            render={props => (
              <div className='six wide column'>
                <ProductForm
                  publishers={publishers}
                  submit={this.saveGame}
                  game={
                    _find(this.state.games, {
                      _id: props.match.params._id
                    }) || {}
                  }
                />
              </div>
            )}
          />

          <div className={`${numberOfColumns} wide column`}>
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

        <br />
      </div>
    );
  }
}

ProductsPage.defaultProps = {
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default ProductsPage;
