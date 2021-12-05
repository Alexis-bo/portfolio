/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Opportunities from '../views/Opportunities';
import React from 'react';
import Resume from '../views/Resume';
import { SectionContainer } from '../../../Components/style';

const ContactSection = () => (
  <div id="contactSection">
    <SectionContainer>
      <Opportunities />
    </SectionContainer>

    <SectionContainer last>
      <Resume />
    </SectionContainer>
  </div>
);

export default ContactSection;
