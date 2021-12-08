/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// import Fastlearner from '../views/Fastlearner';
// import Openminded from '../views/Openminded';
import Presentation from './views/Presentation';
import React from 'react';
import { SectionContainer } from '../../../Components/style';
// import Versatile from '../views/Versatile';

const AboutmeSection = () => (
  <div id="aboutmeSection">
    <SectionContainer>
      <Presentation />
    </SectionContainer>

    {/* <SectionContainer horizontal>
      <Versatile />
      <Fastlearner />
      <Openminded />
    </SectionContainer> */}
  </div>
);

export default AboutmeSection;
