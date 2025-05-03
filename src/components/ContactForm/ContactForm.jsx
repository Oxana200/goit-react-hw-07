import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from '../../redux//contactsOps';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required').min(3),
    number: Yup.string().required('Required').min(3),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className={css.form}>
        <label>
          Name
          <Field className={css.input} name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label>
          Number
          <Field className={css.input} name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
