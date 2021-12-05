/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { PresentationText, PresentationTextContainer } from './style.js';

import React from 'react';

const Presentation = () => (
  <PresentationTextContainer>
    <PresentationText>Hello !</PresentationText>
    <PresentationText leftMargin="25px">I am Alexis,</PresentationText>
    <PresentationText leftMargin="50px">Software Engineer</PresentationText>
  </PresentationTextContainer>
);

export default Presentation;
