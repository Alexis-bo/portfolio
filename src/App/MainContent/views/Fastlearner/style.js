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

const FastlearnerChartHider = styled('div', ({ show }) => ({
  display: 'flex',
  position: 'absolute',
  left: show ? '100%' : '33%',
  alignSelf: 'center',
  width: '50%',
  height: '100%',
  zIndex: '1',
  backgroundColor: '#0A013D',
  transition: 'all 3.0s linear 0s',
}));

export {
  FastlearnerText,
  FastlearnerContainer,
  FastlearnerChartContainer,
  FastlearnerChartHider,
  FastlearnerAbsoluteContainer,
};
