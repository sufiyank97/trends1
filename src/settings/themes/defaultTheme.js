import { css } from 'styled-components';

const sizes = {
  tablet: 1400,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const theme = {
  colors: {
    darkBlue: '#33344A',
    lightBlue: '#464775',
    green: '#4D9905',
    white: '#fff',
    lightGrey: '#eaeaed',
    inactive: '#acadb5',
    red: '#A10B00'
  },
  // Legacy code starts below
  background: {
    default: '#f2f2f2',
    dark: '#000',
    selected: '#fff',
    defaultGrey: '#ccc'
  },
  text: {
    default: '#000'
  },
  input: {
    height: {
      default: '25px'
    },
    padding: {
      default: '3px'
    },
    borderRadius: {
      default: '2px'
    }
  },
  button: {
    height: {
      default: '29px'
    },
    color: {
      default: '#f1684e'
    },
    icon: {
      defaultHeight: '17px',
      defaultWidth: '17px',
      margin: '3px'
    },
    borderRadius: {
      default: '2px'
    },
    transition: {
      default: '0.3s all ease'
    },
    padding: {
      default: '2px 5px'
    }
  }
};
