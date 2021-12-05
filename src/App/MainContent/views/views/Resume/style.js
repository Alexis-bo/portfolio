import { styled } from 'styletron-react';

const ResumeText = styled('div', () => ({
  padding: '20px',
}));

const ResumeContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  color: '#b7b3b0',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    width: '90%',
  },
}));

const ResumeRowContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  color: '#b7b3b0',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ResumeImage = styled('img', () => ({
  display: 'flex',
  height: '50px',
  width: 'auto',
  padding: '30px 100px',
  alignSelf: 'center',
  ':hover': {
    transform: 'scale(1.4)',
  },
  transition: 'all 0.2s ease 0s',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    padding: '30px 20px',
  },
}));

export { ResumeText, ResumeContainer, ResumeImage, ResumeRowContainer };
