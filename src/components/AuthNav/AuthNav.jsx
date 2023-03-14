import { Box } from '@mui/material';
import NavigateLink from 'components/NavigateLink';

const AuthNav = () => {
  return (
    <Box>
      <NavigateLink size="primary" to="/register">
        Register
      </NavigateLink>
      <NavigateLink size="primary" to="/login">
        Log In
      </NavigateLink>
    </Box>
  );
};

export default AuthNav;
