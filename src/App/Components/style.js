import { styled } from 'styletron-react';

const SectionContainer = styled('div', ({ horizontal, last }) => ({
  display: 'flex',
  flexDirection: horizontal ? 'row' : 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  minHeight: '100vh',
  width: '100vw',
  padding: last ? '50px 0px 0px 0px' : '50px 0px',
  fontSize: '50px',
  lineHeight: '120px',
  color: '#b7b3b0',
  backgroundColor: '#0A013D',
  // background: gradient
  //   ? 'linear-gradient(0deg, #17038A 0%, #0A013D 100%)'
  //   : 'linear-gradient(0deg, #0A013D 0%, #17038A 100%)',
}));

const SectionTitle = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  width: '100%',
  fontSize: '60px',
  lineHeight: '80px',
  color: '#b7b3b0',
  padding: '100px 0px',
}));

export { SectionContainer, SectionTitle };
