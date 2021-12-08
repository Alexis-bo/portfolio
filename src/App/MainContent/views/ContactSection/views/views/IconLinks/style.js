import { styled } from 'styletron-react';

const IconLinksText = styled('div', () => ({
  padding: '20px',
}));

const IconLinksContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: '#b7b3b0',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    width: '90%',
    padding: '100px',
  },
}));

const IconLinksRowContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  color: '#b7b3b0',
  alignItems: 'center',
  justifyContent: 'center',
}));

const IconLinksImageContainer = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '50px',
  padding: '5px',
  backgroundColor: 'white',
  borderRadius: '30px',
  margin: '30px 100px',
  alignSelf: 'center',
  color: '#0A013D',
  ':hover': {
    backgroundColor: '#0A013D',
    color: 'white',
  },
  transition: 'all 0.2s ease 0s',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    margin: '0px 15px',
  },
}));

export { IconLinksText, IconLinksContainer, IconLinksRowContainer, IconLinksImageContainer };
