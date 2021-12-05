/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { Fragment } from 'react';
import { SectionContainer, SectionTitle } from '../Components/style';

import Fastlearner from './views/Fastlearner';
import Languages from './views/Languages';
import Openminded from './views/Openminded';
import Opportunities from './views/Opportunities';
import Presentation from './views/Presentation';
import Project from './views/Projects';
import Resume from './views/Resume';
import Versatile from './views/Versatile';

const MainContent = () => (
  <Fragment>
    <SectionContainer>
      <Presentation />
    </SectionContainer>

    <SectionContainer horizontal>
      <Versatile />
      <Fastlearner />
      <Openminded />
    </SectionContainer>

    <SectionContainer>
      <Languages />
    </SectionContainer>

    <SectionContainer>
      <SectionTitle>A few projects I have worked on</SectionTitle>
      <Project />
    </SectionContainer>

    <SectionContainer>
      <Opportunities />
    </SectionContainer>

    <SectionContainer last>
      <Resume />
    </SectionContainer>
  </Fragment>
);

export default MainContent;
