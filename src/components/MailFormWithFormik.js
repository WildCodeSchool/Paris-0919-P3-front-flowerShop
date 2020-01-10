import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import MailForm from './MailForm';
import api from '../api';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MailFormWithFormik = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    textContent: ''
  }),
  validationSchema: () => {
    return Yup.object().shape({
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
      textContent: Yup.string()
        .min(10, 'Votre message doit au moins contenir 20 caractères')
        .required('Un message doit être écrit')
        .trim()
    });
  },
  handleSubmit: (values, actions) => {
    api.email.send(values);
    actions.resetForm();
    this.setState({ isSent: true });
    actions.setSubmitting(false);
  }
})(MailForm);

export default MailFormWithFormik;
