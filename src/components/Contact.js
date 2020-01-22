import React from 'react';
import MailFormWithFormik from './MailFormWithFormik';

class Contact extends React.Component {
  state = { isSent: false };
  render() {
    return (
      <div className='ui container contact'>
        <h1>Contactez-nous</h1>
        <MailFormWithFormik />
      </div>
    );
  }
}

export default Contact;
