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
import Cart from './Cart';
import ArticleWedding from './ArticleWedding';
import ArticlePro from './ArticlePro';
import ArticleDIY from './ArticleDIY';

import Footer from './Footer';
import LegalMentions from './LegalMentions';
import Delivery from './Delivery';

import requireAuth from './hoc/requireAuth';
import requireNotAuth from './hoc/requireNotAuth';
import Contact from './Contact';

const setAuthorizationHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

let messageTimeout;

class App extends React.Component {
  state = {
    user: {
      token: null,
      role: 'user'
    },
    message: {
      visible: false
    }
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

  setMessage = message => {
    clearInterval(messageTimeout);
    this.setState({ message: { visible: false } });
    this.setState({ message: { visible: true, ...message } });
    messageTimeout = setTimeout(
      () => this.setState({ message: { visible: false } }),
      3000
    );
  };

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
      <div className='app'>
        <div className='app__content'>
          <TopNavigation
            isAuthenticated={!!this.state.user.token}
            logout={this.logout}
            isAdmin={
              !!this.state.user.token && this.state.user.role === 'admin'
            }
            message={this.state.message}
          />

          {/* {this.state.message && (
            <div className='ui info message'>
              <i className='close icon' onClick={() => this.setMessage('')} />
              {this.state.message}
            </div>
          )} */}

          <Route
            exact
            path='/'
            render={props => (
              <HomePage
                {...props}
                user={this.state.user}
                setMessage={this.setMessage}
              />
            )}
          />
          <Route
            path='/products'
            render={props => (
              <ProductsPage
                {...props}
                user={this.state.user}
                setMessage={this.setMessage}
              />
            )}
          />
          <Route
            path='/signup'
            render={props => {
              const SignupPageWithProtection = requireNotAuth(SignupPage);
              return (
                <SignupPageWithProtection
                  {...props}
                  setMessage={this.setMessage}
                />
              );
            }}
          />
          <Route
            path='/login'
            render={props => {
              const LoginPageWithProtection = requireNotAuth(LoginPage);
              return <LoginPageWithProtection {...props} login={this.login} />;
            }}
          />
          {/* <Route path='/product/:_id' exact component={ShowProductPage} /> */}
          <Route
            path='/product/:_id'
            render={props => (
              <ShowProductPage
                {...props}
                user={this.state.user}
                setMessage={this.props.setMessage}
              />
            )}
          />
          <Route path='/contact' exact component={Contact} />

          <Route
            path='/cart'
            exact
            render={props => {
              const CartWithProtection = requireAuth(Cart);
              return (
                <CartWithProtection
                  {...props}
                  user={this.state.user}
                  setMessage={this.setMessage}
                />
              );
            }}
          />
          <Route
            path='/wedding'
            exact
            render={props => (
              <ArticleWedding {...props} setMessage={this.setMessage} />
            )}
          />
          <Route
            path='/pro'
            exact
            render={props => (
              <ArticlePro {...props} setMessage={this.setMessage} />
            )}
          />
          <Route
            path='/DIY'
            exact
            render={props => (
              <ArticleDIY {...props} setMessage={this.setMessage} />
            )}
          />

          <Switch>
            <Route path='/legal-mentions'>
              <LegalMentions />
            </Route>
            <Route path='/delivery'>
              <div className='ui container delivery_alone'>
                <Delivery />
              </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
