/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { Fragment } from 'react';
import { SectionContainer, SectionTitle } from '../Components/style';

import Fastlearner from './views/Fastlearner';
import Languages from './views/Languages';
import Openminded from './views/Openminded';
import Opportunities from './views/Opportunities';
import Presentation from './views/Presentation';
import Project from './views/Projects';
import Versatile from './views/Versatile';

const MainContent = () => (
  <Fragment>
    <SectionContainer gradient>
      <Presentation />
    </SectionContainer>

    <SectionContainer>
      <Opportunities />
    </SectionContainer>

    <SectionContainer horizontal gradient>
      <Versatile />
      <Fastlearner gradient />
      <Openminded />
    </SectionContainer>

    <SectionContainer>
      <Languages />
    </SectionContainer>

    <SectionContainer gradient>
      <SectionTitle>Some of the projects I have worked on</SectionTitle>
      <Project />
    </SectionContainer>

    {/* <SectionContainer></SectionContainer>  */}
  </Fragment>
);

export default MainContent;
