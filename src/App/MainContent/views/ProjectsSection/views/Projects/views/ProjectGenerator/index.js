/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {
  ProjectContainer,
  ProjectDescription,
  ProjectGit,
  ProjectImage,
  ProjectLink,
  ProjectLinkContainer,
  ProjectTechno,
  ProjectTitle,
} from './style.js';

import React from 'react';

const ProjectGenerator = ({ title, imagePath, description, techno, link, git }) => (
  <ProjectContainer>
    <ProjectTitle>{title}</ProjectTitle>
    {imagePath && (
      <ProjectImage src={process.env.PUBLIC_URL + '/' + imagePath} alt="project image" />
    )}
    <ProjectDescription>{description}</ProjectDescription>
    <ProjectTechno>{techno}</ProjectTechno>
    <ProjectLinkContainer>
      {link && (
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          Link
        </ProjectLink>
      )}
      {git && (
        <ProjectGit href={git} target="_blank" rel="noopener noreferrer">
          Git
        </ProjectGit>
      )}
    </ProjectLinkContainer>
  </ProjectContainer>
);

export default ProjectGenerator;
