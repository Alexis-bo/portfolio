/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { TopbarContainer, TopbarRightContainer, TopbarText } from './style';

import React from 'react';

const Topbar = () => (
  <TopbarContainer>
    <TopbarRightContainer>
      <TopbarText>About me</TopbarText>
      <TopbarText>Projects</TopbarText>
      <TopbarText>Contact</TopbarText>
    </TopbarRightContainer>
  </TopbarContainer>
);

export default Topbar;
