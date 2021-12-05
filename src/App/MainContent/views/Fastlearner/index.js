/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import 'chart.js/auto';

import {
  FastlearnerAbsoluteContainer,
  FastlearnerChartContainer,
  FastlearnerChartHider,
  FastlearnerContainer,
  FastlearnerText,
} from './style';
import React, { Component } from 'react';

import { Chart } from 'react-chartjs-2';

class Fastlearner extends Component {
  constructor() {
    super();
    this.data = {
      labels: ['', '', '', '', '', '', ''],
      datasets: [
        {
          label: 'fast learner',
          data: ['1', '2', '3', '5', '8', '12', '19'],
          fill: false,
          backgroundColor: '#4B5977',
          borderColor: '#06D6A0',
          lineTension: 0.3,
        },
      ],
    };

    this.options = {
      elements: {
        point: {
          radius: 0,
        },
      },
      events: [],
      layout: {
        padding: {},
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          display: false,
        },
        x: {
          grid: {
            display: false,
          },
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: true,
    };

    this.state = {
      animation: false,
      animationThreshold: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.animationThreshold = document.getElementById('chart').offsetTop - 550;
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
      <FastlearnerContainer>
        <FastlearnerText id="chart">Fastlearner</FastlearnerText>
        <FastlearnerAbsoluteContainer>
          <FastlearnerChartHider show={animation} />
          <FastlearnerChartContainer>
            <Chart type="line" data={this.data} options={this.options} />
          </FastlearnerChartContainer>
        </FastlearnerAbsoluteContainer>
      </FastlearnerContainer>
    );
  }
}

export default Fastlearner;
