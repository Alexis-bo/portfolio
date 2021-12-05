import { styled } from 'styletron-react';

const TopbarContainer = styled('div', () => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  background: '#0A013D',
  margin: '0',
  zIndex: '1000',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    display: 'none',
  },
}));

const TopbarText = styled('div', ({ active }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: '0px 50px',
  fontSize: '40px',
  color: active ? 'white' : '#b7b3b0',
  ':hover': {
    color: 'white',
    cursor: 'pointer',
  },
}));

const TopbarRightContainer = styled('div', () => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0px 20px',
  width: '90%',
  height: '100%',
  borderBottom: '2px solid white',
}));

export { TopbarContainer, TopbarText, TopbarRightContainer };
