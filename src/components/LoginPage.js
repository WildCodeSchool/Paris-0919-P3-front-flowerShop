import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import api from '../api';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  submit = data =>
    api.users.login(data).then(token => {
      this.props.login(token);
      this.props.history.push('/products');
      this.props.setMessage('Vous êtes connecté à votre compte !');
    });

  render() {
    return (
      <div className='ui segment'>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginPage;
