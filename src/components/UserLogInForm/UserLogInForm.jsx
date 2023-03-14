import { Box, Button, TextField, Typography } from '@mui/material';
import NavigateLink from 'components/NavigateLink';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { theme } from 'theme/theme';
import * as yup from 'yup';
import 'yup-phone';

const UserLogInForm = () => {
  let scima = yup.object().shape({
    email: yup.string().email().required('email field is required'),
    password: yup.string().required('password field is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
              <Field
                as={TextField}
                id="standard-error-helper-text"
                variant="filled"
                label="Email"
                type="email"
                name="email"
                color="primary"
                fullWidth
                autoComplete="off"
                helperText={<ErrorMessage name="email" />}
                error={props.errors.email && props.touched.email}
                margin="normal"
              />

              <Field
                as={TextField}
                id="standard-error-helper-text"
                variant="filled"
                label="Password"
                type="password"
                name="password"
                color="primary"
                fullWidth
                autoComplete="off"
                helperText={<ErrorMessage name="password" />}
                error={props.errors.password && props.touched.password}
                margin="normal"
              />

              <Button variant="contained" type="submit">
                Log In
              </Button>
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
              >
                Need an Account?
                <NavigateLink size="secondary" to="/register">
                  Register
                </NavigateLink>
              </Typography>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserLogInForm;
