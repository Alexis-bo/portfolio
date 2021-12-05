/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ResumeContainer, ResumeImage, ResumeRowContainer, ResumeText } from './style.js';

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
    <ResumeRowContainer>
      <a href="https://github.com/Alexis-bo" target="_blank" rel="noopener noreferrer">
        <ResumeImage src={process.env.PUBLIC_URL + '/' + 'Logo-Github.png'} alt="logo github" />
      </a>
      <a href="mailto:alebonnel@gmail.com" target="_blank" rel="noopener noreferrer">
        <ResumeImage src={process.env.PUBLIC_URL + '/' + 'Logo-Mail.png'} alt="logo mail" />
      </a>
      <a
        href="https://www.linkedin.com/in/alexis-bonnel-846816184/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ResumeImage src={process.env.PUBLIC_URL + '/' + 'Logo-Linkedin.png'} alt="logo linkedin" />
      </a>
    </ResumeRowContainer>
  </ResumeContainer>
);

export default Resume;
