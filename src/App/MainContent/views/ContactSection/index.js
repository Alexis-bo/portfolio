/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import FunFacts from './views/views/FunFacts';
import IconLinks from './views/views/IconLinks';
import Opportunities from './views/views/Opportunities';
import React from 'react';
import { SectionContainer } from '../../../Components/style';

const ContactSection = () => (
  <div id="contactSection">
    <SectionContainer>
      <FunFacts />
      <Opportunities />
      <IconLinks />
    </SectionContainer>
  </div>
);

export default ContactSection;
