import { styled } from 'styletron-react';

const LanguagesContainer = styled('div', () => ({
  width: '100%',
  alignSelf: 'center',
  textAlign: 'center',
}));

const LanguagesTypeWritter = styled('span', ({ number }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: number == 1 ? '#3572A5' : number == 2 ? '#e34c26' : number == 3 ? '#563d7c' : '#f1e05a',
}));

export { LanguagesContainer, LanguagesTypeWritter };
