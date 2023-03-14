import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const NavigateLink = styled(NavLink, {
  shouldForwardProp: prop => prop !== 'size',
  name: 'NavigateLink',
  overridesResolver: (props, styles) => [
    styles.root,
    props.size === 'primary' && styles.primary,
    props.size === 'secondary' && styles.secondary,
  ],
})(({ theme }) => ({
  fontFamily: '"Roboto","Helvetica","Arial","sans-serif"',

  fontWeight: '600',
  textDecoration: 'none',
  color: `${theme.palette.primary.main}`,
  transition: 'all 500ms',
  '&.active': {
    textShadow:
      ' 0 0 5px rgb(5, 21, 252), 0 0 10px rgb(5, 21, 252),0 0 15px rgb(5, 21, 252), 0 0 20px rgb(5, 21, 252), 0 0 30px rgb(5, 21, 252),0 0 40px rgb(5, 21, 252), 0 0 55px rgb(5, 21, 252), 0 0 75px rgb(5, 21, 252)',
  },
  ' &:hover': {
    textShadow:
      ' 0 0 5px rgb(236, 244, 16), 0 0 10px rgb(236, 244, 16),0 0 15px rgb(236, 244, 16), 0 0 20px rgb(236, 244, 16), 0 0 30px rgb(236, 244, 16),0 0 40px rgb(236, 244, 16), 0 0 55px rgb(236, 244, 16), 0 0 75px rgb(236, 244, 16)',
  },
}));

export default NavigateLink;
