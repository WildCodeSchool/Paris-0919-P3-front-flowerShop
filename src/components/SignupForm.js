import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import { Link } from 'react-router-dom';
import FormInlineMessage from './FormInlineMessage';

class SignupForm extends React.Component {
  state = {
    data: {
      email: '',
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
    if (!isEmail(data.email))
      errors.email = 'You provided invalid email address';
    if (!data.email) errors.email = "This field can't be blank";
    if (!data.password) errors.password = "This field can't be blank";
    if (data.passwordConfirmation !== data.password)
      errors.password = 'Passwords must match';
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;
    const formClassNames = loading ? 'ui form loading' : 'ui form';
    return (
      <form className={formClassNames} onSubmit={this.handleSubmit}>
        <div className={errors.email ? 'field error' : 'field'}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={data.email}
            onChange={this.handleStringChange}
          />
          <FormInlineMessage content={errors.email} type="error" />
        </div>

        <div className={errors.password ? 'field error' : 'field'}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="passord"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.handleStringChange}
          />
          <FormInlineMessage content={errors.password} type="error" />
        </div>

        <div className={errors.passwordConfirmation ? 'field error' : 'field'}>
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            type="password"
            id="passordConfirmation"
            name="passwordConfirmation"
            placeholder="Type it again, just to make sure"
            value={data.passwordConfirmation}
            onChange={this.handleStringChange}
          />
          <FormInlineMessage
            content={errors.passwordConfirmation}
            type="error"
          />
        </div>

        <div className="ui fluid buttons">
          <button className="ui primary button" type="submit">
            Sign Up
          </button>
          <div className="or"></div>
          <Link to="/" className="ui button">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
