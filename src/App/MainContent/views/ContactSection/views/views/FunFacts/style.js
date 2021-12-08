import { styled } from 'styletron-react';

const FunFactsText = styled('div', () => ({
  fontSize: '25px',
  lineHeight: '30px',
  padding: '10px 0px',
}));

const FunFactsTitle = styled('div', () => ({
  paddingBottom: '20px',
  fontSize: '35px',
  lineHeight: '40px',
}));

const FunFactsContainer = styled('div', () => ({
  display: 'flex',
  width: '80%',
  border: '2px solid #0A013D',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '4px 4px 4px #0A013D',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '60px',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    width: '90%',
  },
}));

export { FunFactsText, FunFactsContainer, FunFactsTitle };
