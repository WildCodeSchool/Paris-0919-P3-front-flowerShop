//import React from 'react';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import OrderForm from './OrderForm';
import api from '../api';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// change to class
class OrderFormWithFormik extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          textContent: ''
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('Un nom est requis')
            .trim(),
          lastName: Yup.string()
            .required('Un prénom est requis')
            .trim(),
          email: Yup.string()
            .email()
            .required('Un email est requis')
            .trim(),
          phone: Yup.string().matches(
            phoneRegExp,
            "Le numéro entré n'est pas valide"
          ),
          address: Yup.string().required('Une adresse est requise'),
          city: Yup.string().required('Une ville est requise'),
          textContent: Yup.string().trim()
        })}
        onSubmit={(values, actions) => {
          api.email
            .send('orders', {
              ...values,
              products: this.props.cart.products
            })
            .then(data => this.props.setMessage(data));
          actions.resetForm();
          actions.setSubmitting(false);
          this.props.closeModal();
        }}
      >
        {props => (
          <>
            <OrderForm {...props} cart={this.props.cart} />
          </>
        )}
      </Formik>
    );
  }
}
export default OrderFormWithFormik;
