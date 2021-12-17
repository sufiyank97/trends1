import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

import { Wrapper } from './BubbleChart.style';

const Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/highcharts-more')(Highcharts);

class CustomBubbleChart extends Component {
  componentDidMount() {
    const { intl } = this.props;

    let data = null;
    let categories = null;
    let yAxisTitle = null;
    let yAxis = null;
    let tooltip = null;

    if (this.props.id === 'search-growth') {
      data = this.props.data.map(item => ({
        y: item.growth_TYLY_current,
        z: +item.searchVolume,
        tooltipHeader: item.searchTerms,
        tooltipFirstP: intl.formatMessage({
          id: 'bubbleChart.searchVolumePercent'
        }),
        tooltipSecondP: intl.formatMessage({ id: 'bubbleChart.searchVolume' })
      }));

      categories = this.props.data.map(item => item.searchTerms);

      yAxisTitle = {
        text: intl.formatMessage({ id: 'bubbleChart.searchVolumePercent' })
      };

      yAxis = {
        gridLineWidth: 0,
        min: -500,
        startOnTick: false,
        endOnTick: false,
        title: yAxisTitle,
        plotLines: [
          {
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 0,
            zIndex: 3
          }
        ]
      };

      tooltip = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><th colspan="2"><h3>{point.tooltipHeader}</h3></th></tr>' +
          '<tr><th>{point.tooltipFirstP}:</th><td>{point.y}%</td></tr>' +
          '<tr><th>{point.tooltipSecondP}:</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
      };
    } else if (this.props.id === 'growth-delta') {
      data = this.props.data.map(item => ({
        y: item.growthDelta,
        z: +item.searchVolume,
        tooltipHeader: item.searchTerms,
        tooltipFirstP: intl.formatMessage({ id: 'bubbleChart.growthDelta' }),
        tooltipSecondP: intl.formatMessage({
          id: 'bubbleChart.searchVolumePercent'
        })
      }));

      categories = this.props.data.map(item => item.searchTerms);

      yAxisTitle = {
        text: intl.formatMessage({ id: 'bubbleChart.growthDeltaPercent' })
      };

      yAxis = {
        gridLineWidth: 0,
        min: -500,
        startOnTick: false,
        endOnTick: false,
        title: yAxisTitle,
        plotLines: [
          {
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 0,
            zIndex: 3
          }
        ]
      };

      tooltip = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><th colspan="2"><h3>{point.tooltipHeader}</h3></th></tr>' +
          '<tr><th>{point.tooltipFirstP}:</th><td>{point.y}%</td></tr>' +
          '<tr><th>{point.tooltipSecondP}:</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
      };
    } else if (this.props.id === 'social-buzz') {
      data = this.props.data.map(item => ({
        y: item.postCount,
        z: item.actionPosts,
        tooltipHeader: item.socialAccount,
        tooltipFirstP: intl.formatMessage({ id: 'bubbleChart.posts' }),
        tooltipSecondP: intl.formatMessage({ id: 'bubbleChart.actionPost' })
      }));

      categories = this.props.data.map(item => item.socialAccount);

      yAxisTitle = {
        text: intl.formatMessage({ id: 'bubbleChart.postsCount' })
      };

      yAxis = {
        gridLineWidth: 0,
        startOnTick: false,
        endOnTick: false,
        title: yAxisTitle,
        plotLines: [
          {
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 0,
            zIndex: 3
          }
        ]
      };

      tooltip = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><th colspan="2"><h3>{point.tooltipHeader}</h3></th></tr>' +
          '<tr><th>{point.tooltipFirstP}:</th><td>{point.y}</td></tr>' +
          '<tr><th>{point.tooltipSecondP}:</th><td>{point.z}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
      };
    }

    Highcharts.chart('search-growth', {
      chart: {
        type: 'bubble',
        zoomType: 'xy'
      },
      credits: {
        enabled: false
      },

      legend: {
        enabled: false
      },

      title: {
        style: { display: 'none' }
      },

      tooltip,

      xAxis: {
        gridLineWidth: 1,
        type: 'category',
        categories,
        title: {
          text: intl.formatMessage({ id: 'bubbleChart.searchVolumeTitle' })
        },
        labels: {
          rotation: -45,
          padding: 0
        },
        tickmarkPlacement: 'on'
      },

      yAxis,

      series: [
        {
          data,
          color: 'rgba(145, 220, 90, 0.5)'
        }
      ]
    });
  }

  render() {
    return <Wrapper id="search-growth" />;
  }
}

export default injectIntl(CustomBubbleChart);
