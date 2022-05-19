import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      html: {
        '@media(max-width: 720px)': {
          fontSize: '87.5%',
        },

        '@media(max-width: 1080px)': {
          fontSize: '93.75%',
        },
        scroolBehavior: 'smooth',
      },
      ':root': {
        '--yellow': '#FBC02D',
        '--hard-blue': '#263238',
        '--light-blue': '#607D8B',
        '--light-bege': '#FFFBE2',

      },
      h1: {
        fontSize: '1.5rem',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 'bold',

      },
      h2: {
        fontSize: '1.25rem',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 'bold',
      },
      h3: {
        fontSize: "0.875rem'",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '1rem',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 'bold',
      },
      'button, a': {
        cursor: 'pointer',
      },

    },
  },
};
const customTheme = extendTheme(theme);
export default customTheme;
