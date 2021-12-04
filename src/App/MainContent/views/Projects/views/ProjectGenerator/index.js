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
    {imagePath && <ProjectImage src={imagePath} />}
    <ProjectDescription>{description}</ProjectDescription>
    <ProjectTechno>{techno}</ProjectTechno>
    <ProjectLinkContainer>
      {link && <ProjectLink href={link}>Link</ProjectLink>}
      {git && <ProjectGit href={git}>Git</ProjectGit>}
    </ProjectLinkContainer>
  </ProjectContainer>
);

export default ProjectGenerator;
