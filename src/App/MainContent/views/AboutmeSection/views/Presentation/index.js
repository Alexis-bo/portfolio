/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PresentationContainer, PresentationText, PresentationTextContainer } from './style.js';

import DownArrows from './views/DownArrows/index.js';
import React from 'react';

const Presentation = () => (
  <PresentationContainer>
    <PresentationTextContainer>
      <PresentationText small>Hello ! I am</PresentationText>
      <PresentationText big>Alexis </PresentationText>
      <PresentationText small>Software Engineer</PresentationText>
      <PresentationText>I build easy-to-use and user-centered solutions !</PresentationText>
    </PresentationTextContainer>
    <DownArrows />
  </PresentationContainer>
);

export default Presentation;
