/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import ProjectGenerator from './views/ProjectGenerator';
import { ProjectSectionContainer } from './style';
import React from 'react';
import { projectsData } from './data';

const Project = () => (
  <ProjectSectionContainer>
    {projectsData.projects.map((project, index) => (
      <ProjectGenerator
        title={project.title}
        imagePath={project.imagePath}
        description={project.description}
        techno={project.techno}
        link={project.link}
        git={project.git}
        key={index}
      />
    ))}
  </ProjectSectionContainer>
);

export default Project;
