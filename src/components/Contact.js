import React from 'react'
import MailFormWithFormik from './MailFormWithFormik'

class Contact extends React.Component {
  state = { isSent: false }
  render() {
    return (
      <div className='ui container contact'>
        <h1>Contactez-nous</h1>
        <MailFormWithFormik setMessage={this.props.setMessage} />
      </div>
    )
  }
}

export default Contact
