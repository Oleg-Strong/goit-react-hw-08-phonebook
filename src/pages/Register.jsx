import { Box, Container, Paper, Typography } from '@mui/material';
import UserRegisterForm from 'components/UserRegisterForm';
import { theme } from 'theme/theme';
import bgImg from '../images/bg-images/bg-register-login.jpg';
const Register = () => {
  return (
    <Paper
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        overflowY: 'scroll',
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Box
          sx={{
            pt: '80px',
            pb: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography variant="h2" color={theme.palette.primary.second}>
            Register
          </Typography>
          <UserRegisterForm />
        </Box>
      </Container>
    </Paper>
  );
};

export default Register;
