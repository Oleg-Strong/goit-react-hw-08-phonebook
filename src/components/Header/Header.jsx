import Logo from 'components/Logo';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';
import { AppBar, Box, Container } from '@mui/material';
import { theme } from 'theme/theme';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar
      sx={{
        pt: '10px',
        pb: '10px',
        backgroundColor: theme.palette.background.basic,
        boxShadow: theme.palette.background.boxShadow,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
