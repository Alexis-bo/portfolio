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

    <SectionContainer gradient>
      <Languages />
    </SectionContainer>

    <SectionContainer>
      <Fastlearner gradient={false} />
    </SectionContainer>

    <SectionContainer gradient>
      <Versatile />
    </SectionContainer>

    <SectionContainer>
      <Openminded />
    </SectionContainer>
  </Fragment>
);

export default MainContent;
