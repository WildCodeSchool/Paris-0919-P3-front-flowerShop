//import React from 'react';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import OrderForm from './MailForm';
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
          postalCode: '',
          city: '',
          products: [],
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
          city: Yup.string(),
          subject: Yup.string(),
          textContent: Yup.string()
            .min(10, 'Votre message doit au moins contenir 20 caractères')
            .required('Un message doit être écrit')
            .trim()
        })}
        onSubmit={(values, actions) => {
          // api.email.send('orders', values);
          // actions.resetForm();
          // this.setState({ isSent: true });
          // actions.setSubmitting(false);
          console.log(this.props);
        }}
      >
        {props => <OrderForm {...props} />}
      </Formik>
    );
  }
}
export default OrderFormWithFormik;
