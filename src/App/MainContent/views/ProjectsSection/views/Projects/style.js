import { styled } from 'styletron-react';

const ProjectSectionContainer = styled('div', () => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '@media only screen and (min-width: 300px) and (max-width: 1025px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export { ProjectSectionContainer };
