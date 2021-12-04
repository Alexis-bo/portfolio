/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import './App.css';

import React, { Fragment } from 'react';

import MainContent from './App/MainContent';

const App = () => (
  <Fragment className="AppContainer">
    <MainContent />
  </Fragment>
);

export default App;
