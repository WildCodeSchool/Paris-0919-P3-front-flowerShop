import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { cityOptions } from '../cityOptions';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ModalMailContact = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        textContent: ''
      }}
      validationSchema={yup.object().shape({
        firstName: yup
          .string()
          .required('Un nom est requis')
          .trim(),
        lastName: yup
          .string()
          .required('Un prénom est requis')
          .trim(),
        email: yup
          .string()
          .email()
          .required('Un email est requis')
          .trim(),
        phone: yup
          .string()
          .matches(phoneRegExp, "Le numéro entré n'est pas valide"),
        city: yup.string(),
        textContent: yup
          .string()
          .min(10, 'Votre message doit au moins contenir 20 caractères')
          .required('Un message doit être écrit')
          .trim()
      })}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        setFieldValue
      }) => {
        const handleDropdownChange = (e, { name }) => {
          setFieldValue(name, e.target.textContent);
        };
        return (
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
                    <Form.Input
                      required
                      fluid
                      label='Nom'
                      placeholder='Nom'
                      type='text'
                      name='firstName'
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && errors.firstName}
                    />
                    <Form.Input
                      required
                      fluid
                      label='Prénom'
                      placeholder='Prénom'
                      type='text'
                      name='lastName'
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && errors.lastName}
                    />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input
                      required
                      label='Email'
                      placeholder='Email'
                      type='email'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                    />
                    <Form.Input
                      label='Téléphone'
                      placeholder='Téléphone'
                      type='text'
                      name='phone'
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && errors.phone}
                    />
                    <Form.Dropdown
                      fluid
                      selection
                      label='Ville'
                      placeholder='Ville'
                      options={cityOptions}
                      name='city'
                      onChange={handleDropdownChange}
                      error={errors.city}
                    />
                  </Form.Group>
                  <Form.TextArea
                    name='textContent'
                    label='Demande'
                    placeholder='Texte à entrer ici...'
                    value={values.textContent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.textContent && errors.textContent}
                  />
                  <Button type='submit'>Envoyer</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default ModalMailContact;
