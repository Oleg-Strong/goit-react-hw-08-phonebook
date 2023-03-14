import { logOut } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import StyledBadge from 'components/StyledBadge';

const UserMenu = () => {
  const dispatch = useDispatch();
  const hendlerLogOut = () => dispatch(logOut());
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { xs: '30px', md: '40px' },
              height: { xs: '30px', md: '40px' },
              bgcolor: 'rgb(5, 21, 252,0.5)',
            }}
          >
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: { xs: '15px', md: '20px' },
              }}
            >
              {user.name.slice(0, 2).toUpperCase()}
            </Typography>
          </Avatar>
        </StyledBadge>
      </Stack>

      <Typography
        variant="subtitle1"
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        {user.email}
      </Typography>
      <Button variant="contained" type="button" onClick={hendlerLogOut}>
        <Typography
          variant="button"
          sx={{
            fontSize: { xs: '10px', md: '12px' },
          }}
        >
          Log Out
        </Typography>
      </Button>
    </Box>
  );
};

export default UserMenu;
