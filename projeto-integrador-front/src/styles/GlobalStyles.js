import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      html: {},
      ':root': {
        '--blue': '#d9b061',
        '--hard-blue': '#3f0d0c',
        '--light-blue': '#633a39',
        '--light-bege': '#FFF',
        '--red': '#e06141',
        fontSize: '16px',
      },
      '.swiper-pagination-bullet-active': {
        background: 'var(--blue) !important',
      },
      body: {
        background: 'var(--light-bege)',
        '@media(max-width: 1080px)': {
          fontSize: '93.75%',
        },
        '@media(max-width: 720px)': {
          fontSize: '87.5%',
        },
        fontFamily: 'Poppins, sans-serif',

        scroolBehavior: 'smooth',
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
