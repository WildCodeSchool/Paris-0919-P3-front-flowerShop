import React from 'react';
import { Button, Modal, Message } from 'semantic-ui-react';

import MailFormWithFormik from './MailFormWithFormik';

class ModalMailContact extends React.Component {
  state = {
    isSent: false
  };

  render() {
    return (
      <Modal
        trigger={
          <Button className='ui pink button productList__contact '>
            {this.props.content}
          </Button>
        }
      >
        <Modal.Header>Eclosion - Contact Mail</Modal.Header>
        <Modal.Content>
          {this.state.isSent ? (
            <Message positive>
              <Message.Header>
                Votre mail a été envoyé avec succès!
              </Message.Header>
              <p>
                Nous vous remercions de votre mail et nous vous recontacterons
                au plus vite.
              </p>
            </Message>
          ) : null}
          <Modal.Description>
            <MailFormWithFormik />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalMailContact;
