import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from '../../redux/contactsOps';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [inputWarning, setInputWarning] = useState('');

  const initialValues = { name: '', number: '' };

  const formatName = (input) => {
    return input
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const formatPhoneNumber = (input) => {
    const digits = input.replace(/\D/g, '');
    let formatted = '';
    if (digits.length <= 3) formatted = digits;
    else if (digits.length <= 5) formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    else formatted = `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 7)}`;
    return formatted;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Name should only contain letters and spaces')
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 digits')
      .max(50, 'Must be 50 digits or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ setFieldValue }) => (
        <Form className={css.form}>
          <label>
            Name
            <Field name="name">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={css.input}
                  placeholder="Rosie Simpson"
                  onChange={(e) => {
                    const formattedName = formatName(e.target.value);
                    setFieldValue('name', formattedName);
                  }}
                />
              )}
            </Field>
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label>
            Number
            <Field name="number">
              {({ field }) => (
                <div>
                  <input
                    {...field}
                    type="tel"
                    placeholder="123-45-67"
                    className={css.input}
                    onChange={(e) => {
                      const input = e.target.value;
                      if (/[^\d]/.test(input.replace(/[-]/g, ''))) {
                        setInputWarning('Only digits are allowed. Other characters will be ignored.');
                      } else {
                        setInputWarning('');
                      }

                      const formatted = formatPhoneNumber(input);
                      setFieldValue('number', formatted);
                    }}
                  />
                  {inputWarning && <div className={css.warning}>{inputWarning}</div>}
                </div>
              )}
            </Field>
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>

          <button type="submit" className={css.button}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
