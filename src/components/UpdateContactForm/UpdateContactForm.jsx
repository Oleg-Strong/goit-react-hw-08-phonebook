import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import { fetchContacts, updateContact } from 'redux/contacts/operation';
import { theme } from 'theme/theme';

const UpdateContactForm = ({ contactValues, closeModal }) => {
  const { id, name, number } = contactValues;
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
      .phone('UA', true, 'enter the number in the format (***)-***-**-**'),
  });
  const initialValues = {
    name: name,
    number: number,
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(updateContact({ id, values }));
    resetForm();
    closeModal();
    dispatch(fetchContacts());
  };

  return (
    <Box
      p={6}
      sx={{
        backgroundColor: `${theme.palette.background.header}`,
        borderRadius: '5px',
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
                <Typography variant="h2" color={theme.palette.primary.second}>
                  Update Contact
                </Typography>
                <Field
                  as={TextField}
                  id="standard-error-helper-text"
                  variant="standard"
                  label="Name"
                  type="text"
                  name="name"
                  color="primary"
                  fullWidth
                  helperText={<ErrorMessage name="name" />}
                  error={props.errors.name && props.touched.name}
                  margin="normal"
                />
                <Field
                  as={TextField}
                  id="standard-error-helper-text"
                  variant="standard"
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
                  Update
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UpdateContactForm;
