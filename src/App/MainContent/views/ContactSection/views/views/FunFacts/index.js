/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { FunFactsContainer, FunFactsText, FunFactsTitle } from './style';

// import Languages from './Languages';
import React from 'react';

const FunFacts = () => (
  <FunFactsContainer>
    <FunFactsTitle>💡Fun facts about me💡</FunFactsTitle>
    <FunFactsText>
      I am a competitive gamer !<br />I even participated to regional and world video game
      championships
    </FunFactsText>
    <FunFactsText>I passed the TOEIC test with 980/990</FunFactsText>
    {/* <Languages /> */}
  </FunFactsContainer>
);

export default FunFacts;
