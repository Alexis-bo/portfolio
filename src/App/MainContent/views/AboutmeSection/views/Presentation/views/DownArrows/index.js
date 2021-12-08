/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {
  PresentationArrow,
  PresentationArrowAnimated,
  PresentationArrowContainer,
} from './style.js';
import React, { Component } from 'react';

class DownArrows extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    const { hover } = this.state;

    return (
      <PresentationArrowContainer
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <PresentationArrowAnimated first hover={hover} />
        <PresentationArrow />
        <PresentationArrow />
        <PresentationArrowAnimated middle hover={hover} />
        <PresentationArrowAnimated last hover={hover} />
      </PresentationArrowContainer>
    );
  }
}

export default DownArrows;
