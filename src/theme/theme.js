import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },

    NavigateLink: {
      styleOverrides: {
        primary: {
          padding: '10px',
          fontSize: '15px',
          '@media (min-width:768px)': {
            fontSize: '20px',
          },
        },
        secondary: {
          paddingLeft: '10px',
          paddingRight: '10px',
          fontSize: '15px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {
            backgroundColor: theme.palette.background.button,
            color: theme.palette.primary.main,
            padding: '7px 10px',
            outline: 'none',
            borderRadius: '5px',
            textDecoration: 'none',
            boxShadow: '0px 0px 20px 1px rgba(5, 21, 252,0.75)',
            transition: 'all 250ms  ease-out',

            '&:hover, &:focus': {
              color: theme.palette.primary.hover,
              transform: 'scale(0.9)',
              textShadow:
                ' 0 0 5px rgb(236, 244, 16), 0 0 10px rgb(236, 244, 16),0 0 15px rgb(236, 244, 16), 0 0 20px rgb(236, 244, 16), 0 0 30px rgb(236, 244, 16),0 0 40px rgb(236, 244, 16), 0 0 55px rgb(236, 244, 16), 0 0 75px rgb(236, 244, 16)',
              backgroundColor: theme.palette.background.header,
            },
          }),
        }),
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h2',
        subtitle1: 'p',
        subtitle2: 'p',
        subtitle3: 'span',
        button: 'button',
      },
    },
  },
  typography: {
    h1: {
      textShadow:
        ' 0 0 5px rgb(5, 21, 252), 0 0 10px rgb(5, 21, 252),0 0 15px rgb(5, 21, 252), 0 0 20px rgb(5, 21, 252), 0 0 30px rgb(5, 21, 252),0 0 40px rgb(5, 21, 252), 0 0 55px rgb(5, 21, 252), 0 0 75px rgb(5, 21, 252) ',
      fontWeight: 900,

      '@media (min-width:1200px)': {
        fontSize: '25px',
      },
    },
    h2: {
      textShadow:
        ' 0 0 5px rgb(5, 21, 252), 0 0 10px rgb(5, 21, 252),0 0 15px rgb(5, 21, 252), 0 0 20px rgb(5, 21, 252), 0 0 30px rgb(5, 21, 252),0 0 40px rgb(5, 21, 252), 0 0 55px rgb(5, 21, 252), 0 0 75px rgb(5, 21, 252) ',
      fontSize: '25px',
      textAlign: 'center',

      '@media (min-width:768px)': {
        fontSize: '30px',
      },
      '@media (min-width:1200px)': {
        fontSize: '35px',
      },
    },
    h3: {
      fontSize: '30px',
      textAlign: 'center',
      textShadow:
        '0 0 5px rgb(230, 255, 5), 0 0 10px rgb(230, 255, 5),0 0 15px rgb(230, 255, 5), 0 0 20px rgba(5, 51, 255, 1),0 0 30px rgba(5, 51, 255, 1), 0 0 40px rgba(5, 51, 255, 1),0 0 55px rgba(5, 51, 255, 1), 0 0 75px rgba(5, 51, 255, 1)',
      '@media (min-width:1200px)': {
        fontSize: '35px',
      },
    },

    button: {
      '@media (min-width:1200px)': {
        fontSize: '14px',
      },
    },
    subtitle1: {
      fontSize: '12px',

      '@media (min-width:1200px)': {
        fontSize: '14px',
      },
    },
    subtitle2: {
      fontSize: '30px',

      '@media (min-width:1200px)': {
        fontSize: '25px',
      },
    },
    subtitle3: {
      fontSize: '30px',
      textShadow:
        ' 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5)',

      '@media (min-width:1200px)': {
        fontSize: '25px',
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(236, 244, 16)',
      third: ' rgb(4, 29, 247)',
      second: 'rgb(247, 255, 7)',
      hover: 'rgb(236, 244, 16)',
    },

    background: {
      basic: 'rgba(221, 221, 221, 0.7)',
      button: 'rgba(4, 8, 248, 0.493)',
      boxShadow: '  0px 8px 15px -1px rgba(168, 168, 168, 0.75);',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 900,
      xl: 1200,
    },
  },
});
