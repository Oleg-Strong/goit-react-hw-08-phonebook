// import { SiteLogo, LogoImg, LogoText } from './Logo.styled';
import logoSvg from '../../images/svg/icon-phonebook.png';
import { Box, Typography } from '@mui/material';
const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <img src={logoSvg} alt="Logo" width={'40px'} height={'40px'} />
      <Typography
        variant="h1"
        sx={{
          transition: 'all 500ms',
          fontSize: { xs: '15px', md: '20px' },
        }}
      >
        Phohebook
      </Typography>
    </Box>
  );
};
export default Logo;
