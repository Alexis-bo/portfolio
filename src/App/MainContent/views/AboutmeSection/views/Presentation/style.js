import { styled } from 'styletron-react';

const PresentationText = styled('div', ({ leftMargin }) => ({
  // display: 'flex',
  marginLeft: leftMargin,
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    marginLeft: '0px',
  },
}));

const PresentationTextContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#b7b3b0',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '60px',
    lineHeight: '80px',
  },
}));

export { PresentationText, PresentationTextContainer };
