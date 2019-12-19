import React from 'react';
import PropTypes from 'prop-types';
import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

import GameForm from './GameForm';
import GamesList from './GamesList';
import LoadingMsg from './LoadingMsg';
import AdminRoute from './AdminRoute';
import api from '../api';

import './App.css';

const publishers = [
  {
    _id: '1',
    name: 'Days of Wonder'
  },
  {
    _id: '2',
    name: 'Rio Grande Games'
  }
];

// const games = [
//   {
//     _id: 1,
//     publisher: 1,
//     featured: true,
//     described: false,
//     name: 'Quadropolis',
//     thumbnail:
//       'https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg',
//     price: 3299,
//     players: '2-4',
//     duration: 60,
//     description:
//       'Awesome Quadropolis game!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     _id: 2,
//     publisher: 1,
//     featured: false,
//     described: false,
//     name: 'Five Tribes',
//     thumbnail:
//       'https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg',
//     price: 5100,
//     players: '2-4',
//     duration: 80,
//     description:
//       'Awesome Five Tribes Game!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   },
//   {
//     _id: 3,
//     publisher: 2,
//     featured: false,
//     described: false,
//     name: 'Roll for the Galaxy',
//     thumbnail:
//       'https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg',
//     price: 2999,
//     players: '2-5',
//     duration: 45,
//     description:
//       'Awesome Roll for the Galaxy Game!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//   }
// ];
//https://cf.geekdo-images.com/A9vPPhYgg1Tb3TxbSAw2j49-YmM=/fit-in/246x300/pic979889.jpg

class GamesPage extends React.Component {
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
    // this.setState({
    //   games: this.sortGames(
    //     this.state.games.map(game =>
    //       gameId === game._id ? { ...game, featured: !game.featured } : game
    //     )
    //   )
    // });
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
      <div className="ui container">
        <div className="ui stackable grid">
          <AdminRoute
            path="/games/new"
            user={this.props.user}
            render={() => (
              <div className="six wide column">
                <GameForm
                  publishers={publishers}
                  submit={this.saveGame}
                  game={{}}
                />
              </div>
            )}
          />
          <AdminRoute
            path="/games/edit/:_id"
            user={this.props.user}
            render={props => (
              <div className="six wide column">
                <GameForm
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

        <br />
      </div>
    );
  }
}

GamesPage.defaultProps = {
  user: PropTypes.shape({
    token: PropTypes.string,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default GamesPage;
