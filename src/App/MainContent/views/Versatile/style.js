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

const VersatileContainer = styled('div', () => ({
  display: 'flex',
  flex: '1',
  width: '100%',
  flexDirection: 'column',
  color: '#b7b3b0',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '10',
}));

export { VersatileText, VersatileContainer };
