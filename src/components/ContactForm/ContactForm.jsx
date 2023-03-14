import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { checkContactBeforeAdding } from 'utils/utils';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operation';
import { useContacts } from 'hooks/useContacts';
import { Box, Button, TextField } from '@mui/material';

const ContactForm = () => {
  let scima = yup.object().shape({
    name: yup
      .string()
      .min(3, 'please enter a name of at least 3 characters')
      .max(25, 'name cannot be more than 25 characters')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'name is not valid'
      )
      .required('name field is required'),
    number: yup
      .string()
      .required('number field is required')
      .phone('UA', true, 'enter the number in the format +380(**)-***-**-**'),
  });
  const initialValues = {
    name: '',
    number: '',
  };
  const { contacts } = useContacts();
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const checkedContact = checkContactBeforeAdding(contacts, values);
    if (checkedContact) {
      dispatch(addContact(checkedContact));
    }
    resetForm();
  };

  return (
    <Box
      p={2}
      sx={{
        width: '100%',
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={scima}
        onSubmit={handleSubmit}
      >
        {props => {
          return (
            <Form>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Field
                  as={TextField}
                  id="standard-error-helper-text"
                  variant="filled"
                  label="Name"
                  type="text"
                  name="name"
                  color="primary"
                  fullWidth
                  helperText={<ErrorMessage name="name" />}
                  error={props.errors.name && props.touched.name}
                />
                <Field
                  as={TextField}
                  id="standard-error-helper-text"
                  variant="filled"
                  label="Number"
                  type="tel"
                  name="number"
                  color="primary"
                  fullWidth
                  helperText={<ErrorMessage name="number" />}
                  error={props.errors.number && props.touched.number}
                  margin="normal"
                />
                <Button variant="contained" type="submit">
                  Add contact
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ContactForm;
