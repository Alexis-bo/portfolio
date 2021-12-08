import { styled } from 'styletron-react';

const ProjectSectionContainer = styled('div', () => ({
  display: 'flex',
  width: '80%',
  height: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '@media only screen and (min-width: 200px) and (max-width: 1025px)': {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
  },
}));

export { ProjectSectionContainer };
