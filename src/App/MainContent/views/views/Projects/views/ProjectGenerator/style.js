import { styled } from 'styletron-react';

const ProjectTitle = styled('div', () => ({
  lineHeight: '70px',
  fontSize: '50px',
  paddingBottom: '20px',
  alignSelf: 'center',
}));

const ProjectContainer = styled('div', () => ({
  display: 'flex',
  width: '25%',
  minHeight: '500px',
  flexDirection: 'column',
  textAlign: 'left',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  color: '#b7b3b0',
  margin: '40px 3%',
  lineHeight: '40px',
  fontSize: '25px',
}));

const ProjectImage = styled('img', () => ({
  display: 'flex',
  height: '200px',
  maxWidth: '80%',
  width: 'auto',
  padding: '30px 0px',
  alignSelf: 'center',
}));

const ProjectDescription = styled('div', () => ({
  display: 'flex',
  width: '100%',
  padding: '20px 0px',
}));

const ProjectTechno = styled('div', () => ({
  fontStyle: 'italic',
  padding: '20px 0px',
}));

const ProjectLink = styled('a', () => ({
  display: 'flex',
}));

const ProjectGit = styled('a', () => ({
  display: 'flex',
}));

const ProjectLinkContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'row',
}));

export {
  ProjectTitle,
  ProjectContainer,
  ProjectImage,
  ProjectDescription,
  ProjectTechno,
  ProjectLink,
  ProjectGit,
  ProjectLinkContainer,
};
