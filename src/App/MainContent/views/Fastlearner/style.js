import { styled } from 'styletron-react';

const FastlearnerText = styled('div', () => ({
  zIndex: '10',
}));

const FastlearnerContainer = styled('div', () => ({
  display: 'flex',
  flex: '1',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FastlearnerAbsoluteContainer = styled('div', () => ({
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FastlearnerChartContainer = styled('div', () => ({
  display: 'flex',
  left: '0px',
  width: '33%',
  height: '100%',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '0',
}));

const FastlearnerChartHider = styled('div', ({ show, gradient }) => ({
  display: 'flex',
  position: 'absolute',
  left: show ? '100%' : '33%',
  alignSelf: 'center',
  width: '50%',
  height: '100%',
  zIndex: '1',
  background: gradient
    ? 'linear-gradient(0deg, #17038A 0%, #0A013D 100%)'
    : 'linear-gradient(0deg, #0A013D 0%, #17038A 100%)',
  backgroundColor: gradient ? 'red' : 'red',
  transition: 'all 3.0s linear 0s',
}));

export {
  FastlearnerText,
  FastlearnerContainer,
  FastlearnerChartContainer,
  FastlearnerChartHider,
  FastlearnerAbsoluteContainer,
};
