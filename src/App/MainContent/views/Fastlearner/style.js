import { styled } from 'styletron-react';

const FastlearnerText = styled('div', () => ({}));

const FastlearnerContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '0',
}));

const FastlearnerChartContainer = styled('div', () => ({
  display: 'flex',
  position: 'absolute',
  left: '0px',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '-2',
}));

const FastlearnerChartHider = styled('div', ({ show, gradient }) => ({
  display: 'flex',
  position: 'absolute',
  left: show ? '100%' : '0px',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  background: gradient
    ? 'linear-gradient(0deg, #17038A 0%, #0A013D 100%)'
    : 'linear-gradient(0deg, #0A013D 0%, #17038A 100%)',
  transition: 'all 1.0s linear 0s',
}));

export { FastlearnerText, FastlearnerContainer, FastlearnerChartContainer, FastlearnerChartHider };
