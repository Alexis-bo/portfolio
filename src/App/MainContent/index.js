/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { Fragment } from 'react';

import Fastlearner from './views/Fastlearner';
import Languages from './views/Languages';
import Openminded from './views/Openminded';
import Opportunities from './views/Opportunities';
import Presentation from './views/Presentation';
import { SectionContainer } from '../Components/style';
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

    {/* <SectionContainer gradient></SectionContainer>

    <SectionContainer></SectionContainer> */}
  </Fragment>
);

export default MainContent;
