/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ResumeContainer, ResumeImage, ResumeText } from './style.js';

import React from 'react';

const Resume = () => (
  <ResumeContainer>
    <ResumeText>
      Get to know{' '}
      <a
        href="https://drive.google.com/file/d/1uugGeLRKVRp18T4VuqT_ZBsnkQjCXbuR/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        me
      </a>{' '}
      a little better
    </ResumeText>
    <ResumeText>Or contact me !</ResumeText>
    <a href="mailto:alebonnel@gmail.com" target="_blank" rel="noopener noreferrer">
      <ResumeImage src="Logo-Mail.png" />
    </a>
  </ResumeContainer>
);

export default Resume;
