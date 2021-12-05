/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { Component } from 'react';
import { TopbarContainer, TopbarRightContainer, TopbarText } from './style';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowOffset: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ windowOffset: window.pageYOffset });
  }

  checkIsActive(id) {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        const { windowOffset } = this.state;
        const start = element.offsetTop - 70;
        const end = start + element.offsetHeight;

        return windowOffset >= start && windowOffset < end;
      }
    }

    return false;
  }

  scrollTo(id) {
    let top = 0;
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        top = element.offsetTop;
        window.scroll({ top, behavior: 'smooth' });
      }
    }
  }

  render() {
    return (
      <TopbarContainer>
        <TopbarRightContainer>
          <TopbarText
            active={this.checkIsActive('aboutmeSection')}
            onClick={() => this.scrollTo('aboutmeSection')}
          >
            About me
          </TopbarText>
          <TopbarText
            active={this.checkIsActive('projectsSection')}
            onClick={() => this.scrollTo('projectsSection')}
          >
            Projects
          </TopbarText>
          <TopbarText
            active={this.checkIsActive('contactSection')}
            onClick={() => this.scrollTo('contactSection')}
          >
            Contact
          </TopbarText>
        </TopbarRightContainer>
      </TopbarContainer>
    );
  }
}
export default Topbar;
