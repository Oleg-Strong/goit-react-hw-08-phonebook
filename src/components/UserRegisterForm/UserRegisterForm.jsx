import { Box, Button, TextField, Typography } from '@mui/material';
import NavigateLink from 'components/NavigateLink';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { theme } from 'theme/theme';
import * as yup from 'yup';
import 'yup-phone';

const UserRegisterForm = () => {
  let scima = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'name is not valid'
      )
      .required('name field is required'),
    email: yup.string().email().required('email field is required'),
    password: yup.string().required('password field is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
              {/* <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              > */}
              <Field
                as={TextField}
                id="standard-error-helper-text"
                variant="filled"
                label="Name"
                type="text"
                name="name"
                color="primary"
                fullWidth
                autoComplete="off"
                helperText={<ErrorMessage name="name" />}
                error={props.errors.name && props.touched.name}
                margin="normal"
              />
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
                Add User
              </Button>
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
              >
                Have an account?
                <NavigateLink size="secondary" to="/login">
                  Log In
                </NavigateLink>
              </Typography>
              {/* </Box> */}
            </Form>
          );
        }}
        {/* <RegisterForm>
        <RegisterFormLabel>
          <LabelText>Name:</LabelText>
          <RegisterFormInput
            type="text"
            name="name"
            required
            placeholder="First and last name"
          />
          <ErrorMessage name="name">
            {errMsg => <Error>{errMsg}</Error>}
          </ErrorMessage>
        </RegisterFormLabel>

        <RegisterFormLabel>
          <LabelText>Email:</LabelText>
          <RegisterFormInput
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <ErrorMessage name="email">
            {errMsg => <Error>{errMsg}</Error>}
          </ErrorMessage>
        </RegisterFormLabel>

        <RegisterFormLabel>
          <LabelText>Password:</LabelText>
          <RegisterFormInput
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <ErrorMessage name="password">
            {errMsg => <Error>{errMsg}</Error>}
          </ErrorMessage>
        </RegisterFormLabel>
        <RegisterFormBtn type="submit">Add User</RegisterFormBtn>
        <RegisterFormText>
          Have an account?<NavLink to="/login">Log In</NavLink>
        </RegisterFormText>
      </RegisterForm> */}
      </Formik>
    </Box>
  );
};

export default UserRegisterForm;
