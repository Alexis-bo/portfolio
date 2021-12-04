import { styled } from 'styletron-react';

const SectionContainer = styled('div', ({ gradient }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  height: '100vh',
  width: '100vw',
  fontSize: '80px',
  lineHeight: '130px',
  color: '#b7b3b0',
  // backgroundColor: '#0A013D',
  background: gradient
    ? 'linear-gradient(0deg, #17038A 0%, #0A013D 100%)'
    : 'linear-gradient(0deg, #0A013D 0%, #17038A 100%)',
}));

export { SectionContainer };
