/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { LanguagesContainer, LanguagesTypeWritter } from './style.js';
import React, { Component } from 'react';

import { LanguagesData } from './data.js';

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWord: 0,
      currentDisplay: '',
    };

    this.wordType = this.wordType.bind(this);
    this.wordDelete = this.wordDelete.bind(this);
  }

  componentDidMount() {
    this.wordType();
  }

  wordType() {
    const { activeWord, currentDisplay } = this.state;

    if (LanguagesData[activeWord] == currentDisplay) {
      setTimeout(this.wordDelete, 1500);
    } else {
      this.setState({
        currentDisplay: LanguagesData[activeWord].substring(0, currentDisplay.length + 1),
      });

      setTimeout(this.wordType, 150);
    }
  }

  wordDelete() {
    const { activeWord, currentDisplay } = this.state;
    this.setState({
      currentDisplay: '',
    });

    if (currentDisplay == '') {
      this.setState({
        activeWord: (activeWord + 1) % LanguagesData.length,
      });

      setTimeout(this.wordType, 150);
    } else {
      this.setState({
        currentDisplay: currentDisplay.substring(0, currentDisplay.length - 1),
      });

      setTimeout(this.wordDelete, 80);
    }
  }

  render() {
    const { currentDisplay, activeWord } = this.state;

    return (
      <LanguagesContainer>
        Some of my favorite <br />
        languages :{' '}
        <LanguagesTypeWritter number={activeWord}>{currentDisplay}</LanguagesTypeWritter>
      </LanguagesContainer>
    );
  }
}

export default Languages;
