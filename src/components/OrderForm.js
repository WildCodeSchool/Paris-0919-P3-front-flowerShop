import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { cityOptions } from '../listData';

const OrderForm = ({
  values,
  handleChange,
  errors,
  handleBlur,
  touched,
  setFieldValue,
  handleSubmit,
  cart
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
          label='Prénom'
          placeholder='Prénom'
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
          label='Nom'
          placeholder='Nom'
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
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input
          label='Adresse'
          placeholder='Adresse'
          type='text'
          name='address'
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && errors.address}
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
      <h4>Récapitulatif de la commande</h4>
      {cart.products.map(product => (
        <table className='ui celled table' key={product._id}>
          <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{product.size}</td>
            </tr>
          </tbody>
        </table>
      ))}
      <Form.TextArea
        name='textContent'
        label='Demande particulière'
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

export default OrderForm;
