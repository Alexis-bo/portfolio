/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { Fragment } from 'react';

import AboutmeSection from './views/AboutmeSection';
import ContactSection from './views/ContactSection';
import ProjectsSection from './views/ProjectsSection';

const MainContent = () => (
  <Fragment>
    <AboutmeSection />
    <ProjectsSection />
    <ContactSection />
  </Fragment>
);

export default MainContent;
