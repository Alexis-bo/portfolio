/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { AiFillFilePdf, AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { IconLinksContainer, IconLinksImageContainer, IconLinksRowContainer } from './style.js';

import React from 'react';

const IconLinks = () => (
  <IconLinksContainer>
    <IconLinksRowContainer>
      <IconLinksImageContainer
        onClick={() => window.open('https://github.com/Alexis-bo', '_blank')}
      >
        <AiFillGithub big />
      </IconLinksImageContainer>
      <IconLinksImageContainer onClick={() => window.open('mailto:alebonnel@gmail.com', '_blank')}>
        <AiFillMail />
      </IconLinksImageContainer>
      <IconLinksImageContainer
        onClick={() =>
          window.open('https://www.linkedin.com/in/alexis-bonnel-846816184/', '_blank')
        }
      >
        <AiFillLinkedin />
      </IconLinksImageContainer>
      <IconLinksImageContainer
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/1uugGeLRKVRp18T4VuqT_ZBsnkQjCXbuR/view?usp=sharing',
            '_blank'
          )
        }
      >
        <AiFillFilePdf />
      </IconLinksImageContainer>
    </IconLinksRowContainer>
  </IconLinksContainer>
);

export default IconLinks;
