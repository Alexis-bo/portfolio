import { styled } from 'styletron-react';

const PresentationText = styled('div', ({ small, big }) => ({
  fontSize: small ? '25px' : big ? '45px' : '35px',
  lineHeight: small ? '30px' : big ? '60px' : '45px',
  color: small ? '#b7b3b0' : '#0A013D',
  paddingTop: !small && !big ? '50px' : '0px',

  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    marginLeft: '0px',
  },
}));

const PresentationContainer = styled('div', () => ({
  display: 'flex',
  width: '80%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 50px)',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {},
}));

const PresentationTextContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#b7b3b0',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '60px',
    lineHeight: '80px',
  },
}));

export { PresentationText, PresentationTextContainer, PresentationContainer };
