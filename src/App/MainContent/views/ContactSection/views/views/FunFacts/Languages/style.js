import { styled } from 'styletron-react';

const LanguagesContainer = styled('div', () => ({
  width: '100%',
  alignSelf: 'center',
  textAlign: 'center',
  fontSize: '25px',
}));

const LanguagesTypeWritter = styled('span', ({ number }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '25px',
  color: number == 1 ? '#3572A5' : number == 2 ? '#e34c26' : number == 3 ? '#563d7c' : '#f1e05a',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    display: 'flex',
    width: '100%',
    height: '50px',
  },
}));

export { LanguagesContainer, LanguagesTypeWritter };
