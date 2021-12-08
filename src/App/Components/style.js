import { styled } from 'styletron-react';

const SectionContainer = styled('div', ({ horizontal, last }) => ({
  display: 'flex',
  flexDirection: horizontal ? 'row' : 'column',
  alignItems: 'center',
  justifyContent: last ? 'flex-end' : 'center',
  flex: '1',
  minHeight: '100vh',
  width: '100%',
  fontSize: '35px',
  lineHeight: '50px',
  backgroundColor: '#e3e2e1',
  color: '#0A013D',
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
  fontSize: '45px',
  lineHeight: '60px',
  color: '#0A013D',
  padding: '50px 0px',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    fontSize: '45px',
    lineHeight: '60px',
    textAlign: 'center',
  },
}));

export { SectionContainer, SectionTitle };
