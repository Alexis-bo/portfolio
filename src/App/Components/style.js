import { styled } from 'styletron-react';

const SectionContainer = styled('div', ({ horizontal, last }) => ({
  display: 'flex',
  flexDirection: horizontal ? 'row' : 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  minHeight: '100vh',
  width: '100%',
  padding: last ? '50px 0px 0px 0px' : '50px 0px',
  fontSize: '50px',
  lineHeight: '120px',
  color: '#b7b3b0',
  backgroundColor: '#0A013D',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    fontSize: '40px',
    lineHeight: '50px',
  },
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
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    fontSize: '50px',
    lineHeight: '60px',
    textAlign: 'center',
  },
}));

export { SectionContainer, SectionTitle };
