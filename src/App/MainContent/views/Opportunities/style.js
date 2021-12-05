import { styled } from 'styletron-react';

const OpportunitiesText = styled('div', () => ({
  margin: '70px 0px',
}));

const OpportunitiesDifference = styled('span', ({ animation }) => ({
  color: animation ? 'red' : 'inherit',
  transition: 'all 1.0s linear 0s',
}));

const OpportunitiesContainer = styled('div', () => ({
  width: '60%',
}));

const OpportunitiesTextContainer = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

export {
  OpportunitiesText,
  OpportunitiesTextContainer,
  OpportunitiesDifference,
  OpportunitiesContainer,
};
