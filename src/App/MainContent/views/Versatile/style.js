import { styled } from 'styletron-react';

const VersatileText = styled('div', () => ({
  animationDuration: '3s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease',
  animationDelay: '2s',
  animationName: {
    from: {
      transform: 'rotateY(0deg)',
    },
    to: {
      transform: 'rotateY(360deg)',
    },
  },
}));

const VersatileTextContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#b7b3b0',
}));

export { VersatileText, VersatileTextContainer };
