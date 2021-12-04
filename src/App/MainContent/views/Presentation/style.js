import { styled } from 'styletron-react';

const PresentationText = styled('div', ({ leftMargin }) => ({
  // display: 'flex',
  marginLeft: leftMargin,
}));

const PresentationTextContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#b7b3b0',
}));

export { PresentationText, PresentationTextContainer };
