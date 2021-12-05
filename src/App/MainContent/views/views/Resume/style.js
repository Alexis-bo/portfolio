import { styled } from 'styletron-react';

const ResumeText = styled('div', () => ({
  padding: '20px',
}));

const ResumeContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  color: '#b7b3b0',
  alignItems: 'center',
  justifyContent: 'center',
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
  height: '80px',
  width: 'auto',
  padding: '30px 100px',
  alignSelf: 'center',
  ':hover': {
    transform: 'scale(1.2)',
  },
  transition: 'all 0.2s ease 0s',
}));

export { ResumeText, ResumeContainer, ResumeImage, ResumeRowContainer };
