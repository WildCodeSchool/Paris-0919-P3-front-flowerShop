import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

import { cityOptions } from '../cityOptions';

const ModalMailContact = () => (
  <Modal
    trigger={
      <Button className='ui pink button productList__contact '>
        Contactez-nous
      </Button>
    }
  >
    <Modal.Header>Eclosion - Demande particulière</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Nom' placeholder='Nom' />
            <Form.Input fluid label='Prénom' placeholder='Prénom' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Email' placeholder='Email' />
            <Form.Input label='Téléphone' placeholder='Téléphone' />
            <Form.Select
              fluid
              label='Ville'
              options={cityOptions}
              placeholder='Ville'
            />
          </Form.Group>
          <Form.TextArea label='Demande' placeholder='Texte à entrer ici...' />
          <Button type='submit'>Envoyer</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalMailContact;
