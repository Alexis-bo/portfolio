import { styled } from 'styletron-react';

const ProjectTitle = styled('div', () => ({
  lineHeight: '100px',
  fontSize: '80px',
  paddingBottom: '20px',
  alignSelf: 'center',
}));

const ProjectContainer = styled('div', () => ({
  display: 'flex',
  width: '30%',
  minHeight: '900px',
  flexDirection: 'column',
  textAlign: 'left',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  color: '#b7b3b0',
  margin: '50px 1.6%',
  lineHeight: '50px',
  fontSize: '40px',
  boxShadow: '4px 4px 20px 2px rgba(0, 0, 0, 0.15)',
}));

const ProjectImage = styled('img', () => ({
  display: 'flex',
  height: '400px',
  maxWidth: '100%',
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
  bakgroundColor: 'yellow',
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
