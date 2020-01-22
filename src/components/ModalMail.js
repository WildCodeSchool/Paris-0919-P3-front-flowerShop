import React from 'react';
import { Button, Modal, Message } from 'semantic-ui-react';
import MailFormWithFormik from './MailFormWithFormik';
class ModalMail extends React.Component {
  state = {
    isSent: false,
    open: false,
    closeOnDimmerClick: true
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  handleBtnClick = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button
            className='ui pink button productList__contact '
            onClick={this.handleBtnClick}
          >
            {this.props.btnText}
          </Button>
        }
        open={this.state.open}
        closeOnDimmerClick={this.state.closeOnDimmerClick}
        onClose={this.closeModal}
        closeIcon
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
            <MailFormWithFormik
              closeModal={this.closeModal}
              setMessage={this.props.setMessage}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalMail;
