import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import { Link } from 'react-router-dom';
import FormInlineMessage from './FormInlineMessage';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  handleStringChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Adresse email invalide';
    if (!data.email) errors.email = 'Champ obligatoire';
    if (!data.password) errors.password = 'Champ obligatoire';
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;
    const formClassNames = loading ? 'ui form loading' : 'ui form';
    return (
      <div className='ui container'>
        <h1>Connexion</h1>
        <form className={formClassNames} onSubmit={this.handleSubmit}>
          <div className={errors.email ? 'field error' : 'field'}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Votre adresse email'
              value={data.email}
              onChange={this.handleStringChange}
            />
            <FormInlineMessage content={errors.email} type='error' />
          </div>

          <div className={errors.password ? 'field error' : 'field'}>
            <label htmlFor='password'>Mot de passe</label>
            <input
              type='password'
              id='passord'
              name='password'
              placeholder='Votre mot de passe'
              value={data.password}
              onChange={this.handleStringChange}
            />
            <FormInlineMessage content={errors.password} type='error' />
          </div>

          <div className='ui fluid buttons'>
            <button className='ui primary button' type='submit'>
              Connexion
            </button>
            <div className='or' data-text='ou'></div>
            <Link to='/' className='ui button'>
              Annuler
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
