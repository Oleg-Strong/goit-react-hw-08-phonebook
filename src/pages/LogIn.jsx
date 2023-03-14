import UserLogInForm from 'components/UserLogInForm';
import bgImg from '../images/bg-images/bg-register-login.jpg';
import { Box, Container, Paper, Typography } from '@mui/material';
import { theme } from 'theme/theme';
const LogIn = () => {
  return (
    <Paper
      sx={{
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
          }}
        >
          <Typography variant="h2" color={theme.palette.primary.second}>
            Log in
          </Typography>
          <UserLogInForm />
        </Box>
      </Container>
    </Paper>
  );
};

export default LogIn;
