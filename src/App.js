/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import './App.css';

import React, { Fragment } from 'react';

import MainContent from './App/MainContent';
import Topbar from './App/Components/Topbar';

const App = () => (
  <Fragment>
    <Topbar />
    <MainContent />
  </Fragment>
);

export default App;
