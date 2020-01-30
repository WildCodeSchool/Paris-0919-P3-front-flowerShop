import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import { Link } from 'react-router-dom';
import FormInlineMessage from './FormInlineMessage';

class SignupForm extends React.Component {
  state = {
    data: {
      email: '',
      name: '',
      firstname: '',
      phone: '',
      password: '',
      passwordConfirmation: ''
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
    if (!data.name) errors.name = 'Champ obligatoire';
    if (!data.firstname) errors.firstname = 'Champ obligatoire';
    if (!data.phone) errors.phone = 'Champ obligatoire';
    if (!data.password) errors.password = 'Champ obligatoire';
    if (data.passwordConfirmation !== data.password)
      errors.password = 'Les mots de passe doivent correspondre';
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;
    const formClassNames = loading ? 'ui form loading' : 'ui form';
    return (
      <div className='ui container'>
        <h1>Créer un compte</h1>
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

          <div className='three fields'>
            <div className={errors.name ? 'field error' : 'field'}>
              <label htmlFor='name'>Nom</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Votre nom de famille'
                value={data.name}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage content={errors.email} type='error' />
            </div>

            <div className={errors.firstname ? 'field error' : 'field'}>
              <label htmlFor='firstname'>Prénom</label>
              <input
                type='text'
                id='firstname'
                name='firstname'
                placeholder='Votre prénom'
                value={data.firstname}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage content={errors.email} type='error' />
            </div>

            <div className={errors.phone ? 'field error' : 'field'}>
              <label htmlFor='phone'>Téléphone</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='Votre numéro de téléphone'
                value={data.phone}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage content={errors.email} type='error' />
            </div>
          </div>

          <div className='two fields'>
            <div className={errors.password ? 'field error' : 'field'}>
              <label htmlFor='password'>Créer un mot de passe</label>
              <input
                type='password'
                id='passord'
                name='password'
                placeholder='Choisissez votre mot de passe'
                value={data.password}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage content={errors.password} type='error' />
            </div>

            <div
              className={errors.passwordConfirmation ? 'field error' : 'field'}
            >
              <label htmlFor='passwordConfirmation'>
                Confirmez votre mot de passe
              </label>
              <input
                type='password'
                id='passordConfirmation'
                name='passwordConfirmation'
                placeholder='Remplissez à nouveau votre mot de passe'
                value={data.passwordConfirmation}
                onChange={this.handleStringChange}
              />
              <FormInlineMessage
                content={errors.passwordConfirmation}
                type='error'
              />
            </div>
          </div>

          <div className='ui fluid buttons'>
            <button className='ui primary button' type='submit'>
              Créer un compte
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

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
