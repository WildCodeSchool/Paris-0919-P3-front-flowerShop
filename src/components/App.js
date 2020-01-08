import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import HomePage from './HomePage';
import TopNavigation from './TopNavigation';
import ProductsPage from './ProductsPage';
import ShowProductPage from './ShowProductPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

import Footer from './Footer';
import Contact from './Contact';
import Faq from './Faq';

const setAuthorizationHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

class App extends React.Component {
  state = {
    user: {
      token: null,
      role: 'user'
    },
    message: ''
  };

  componentDidMount() {
    if (localStorage.bgshopToken) {
      this.setState({
        user: {
          token: localStorage.bgshopToken,
          role: jwtDecode(localStorage.bgshopToken).user.role
        }
      });
      setAuthorizationHeader(localStorage.bgshopToken);
    }
  }

  setMessage = message => this.setState({ message });

  logout = () => {
    this.setState({ user: { token: null, role: 'user' } });
    setAuthorizationHeader();
    localStorage.removeItem('bgshopToken');
  };

  login = token => {
    this.setState({ user: { token, role: jwtDecode(token).user.role } });
    localStorage.bgshopToken = token;
    setAuthorizationHeader(token);
  };

  render() {
    return (
      <div>
        <TopNavigation
          isAuthenticated={!!this.state.user.token}
          logout={this.logout}
          isAdmin={!!this.state.user.token && this.state.user.role === 'admin'}
        />

        {this.state.message && (
          <div className='ui info message'>
            <i className='close icon' onClick={() => this.setMessage('')} />
            {this.state.message}
          </div>
        )}

        <Route
          exact
          path='/'
          render={props => <HomePage {...props} user={this.state.user} />}
        />
        <Route
          path='/products'
          render={props => <ProductsPage {...props} user={this.state.user} />}
        />
        <Route
          path='/signup'
          render={props => (
            <SignupPage {...props} setMessage={this.setMessage} />
          )}
        />
        <Route
          path='/login'
          render={props => <LoginPage {...props} login={this.login} />}
        />
        {/* <Route path='/product/:_id' exact component={ShowProductPage} /> */}
        <Route
          path='/product/:_id'
          render={props => (
            <ShowProductPage {...props} user={this.state.user} />
          )}
        />
        <Switch>
         
         <Route exact path="/Faq">
           <Faq />
         </Route>
         <Route exact path="/Contact">
           <Contact/>
         </Route>
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;
