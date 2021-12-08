import { styled } from 'styletron-react';

const PresentationText = styled('div', ({ small, big }) => ({
  color: small ? '#b7b3b0' : '#0A013D',
  fontSize: small ? '25px' : big ? '45px' : '35px',
  lineHeight: small ? '30px' : big ? '60px' : '45px',
  paddingTop: !small && !big ? '50px' : '0px',

  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    fontSize: small ? '30px' : big ? '55px' : '45px',
    lineHeight: small ? '35px' : big ? '70px' : '55px',
    paddingTop: !small && !big ? '50px' : '0px',
  },
}));

const PresentationContainer = styled('div', () => ({
  display: 'flex',
  width: '80%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '30px',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {},
}));

const PresentationTextContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#b7b3b0',
}));

export { PresentationText, PresentationTextContainer, PresentationContainer };
