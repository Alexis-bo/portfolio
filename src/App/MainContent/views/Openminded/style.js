import { styled } from 'styletron-react';

const OpenmindedText = styled('div', () => ({
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  animationDelay: '0s',
  animationDirection: 'alternate',
  animationName: {
    from: {
      color: '#inherit',
    },
    to: {
      color: '#B8A000',
    },
  },
}));

const OpenmindedContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

const OpenmindedTextContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#b7b3b0',
}));

export { OpenmindedText, OpenmindedTextContainer, OpenmindedContainer };
