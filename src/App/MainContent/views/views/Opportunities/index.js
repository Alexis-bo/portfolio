/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {
  OpportunitiesContainer,
  OpportunitiesDifference,
  OpportunitiesText,
  OpportunitiesTextContainer,
} from './style.js';
import React, { Component } from 'react';

class Opportunities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.animationThreshold = document.getElementById('opportunity').offsetTop - 300;
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset >= this.animationThreshold) {
      this.setState({ animation: window.pageYOffset >= this.animationThreshold });
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { animation } = this.state;

    return (
      <OpportunitiesTextContainer>
        <OpportunitiesContainer>
          <OpportunitiesText id="opportunity">
            I am looking for Software Engineering opportunities where I can make a{' '}
            <OpportunitiesDifference animation={animation}>difference</OpportunitiesDifference>
          </OpportunitiesText>
          <OpportunitiesText>Available from March 2022</OpportunitiesText>
        </OpportunitiesContainer>
      </OpportunitiesTextContainer>
    );
  }
}

export default Opportunities;
