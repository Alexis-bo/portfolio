/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { SectionContainer, SectionTitle } from '../../../Components/style';

import Project from './views/Projects';
import React from 'react';

const ProjectsSection = () => (
  <div id="projectsSection">
    <SectionContainer>
      <SectionTitle>A few projects I have worked on</SectionTitle>
      <Project />
    </SectionContainer>
  </div>
);

export default ProjectsSection;
