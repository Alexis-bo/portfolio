import { styled } from 'styletron-react';

const PresentationArrowAnimated = styled('div', ({ hover, first, middle, last }) => ({
  border: 'solid white',
  width: '40px',
  height: '40px',
  borderWidth: '0px 10px 10px 0px',
  display: 'flex',
  opacity:
    first && hover ? '0%' : first && !hover ? '100%' : hover && (middle || last) ? '100%' : '0%',
  transform: 'rotate(45deg)',
  transition:
    hover && first
      ? 'all 0.5s linear 0s'
      : !hover && first
      ? 'all 0.5s linear 0.6s'
      : hover && middle
      ? 'all 0.5s linear 0s'
      : !hover && middle
      ? 'all 0.5s linear 0.3s'
      : hover && last
      ? 'all 0.5s linear 0.3s'
      : 'all 0.5s linear 0s',
}));

const PresentationArrow = styled('div', () => ({
  border: 'solid white',
  width: '40px',
  height: '40px',
  borderWidth: '0px 10px 10px 0px',
  display: 'flex',
  padding: '0px',
  transform: 'rotate(45deg)',
}));

const PresentationArrowContainer = styled('div', () => ({
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
}));

export { PresentationArrow, PresentationArrowContainer, PresentationArrowAnimated };
