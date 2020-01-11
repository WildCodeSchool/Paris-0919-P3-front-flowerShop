import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { cityOptions } from '../cityOptions';

const MailForm = ({
  values,
  handleChange,
  errors,
  handleBlur,
  touched,
  setFieldValue,
  handleSubmit
}) => {
  const handleDropdownChange = (e, { name }) => {
    setFieldValue(name, e.target.textContent);
  };
  return (
    <Form onSubmit={handleSubmit}>
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
  );
};

export default MailForm;
