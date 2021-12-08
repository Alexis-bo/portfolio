import { styled } from 'styletron-react';

const FunFactsText = styled('div', () => ({
  fontSize: '25px',
  lineHeight: '30px',
  padding: '10px 0px',
  width: '90%',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    fontSize: '35px',
    lineHeight: '45px',
    padding: '30px 0px',
  },
}));

const FunFactsTitle = styled('div', () => ({
  paddingBottom: '20px',
  fontSize: '35px',
  lineHeight: '40px',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    fontSize: '40px',
    lineHeight: '50px',
    padding: '70px 0px',
  },
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
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    width: '90%',
    justifyContent: 'flex-start',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'inherit',
    padding: '30px 0px',
  },
}));

export { FunFactsText, FunFactsContainer, FunFactsTitle };
