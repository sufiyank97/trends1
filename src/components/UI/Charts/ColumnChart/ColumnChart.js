import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import Highcharts from 'highcharts';

import { Wrapper } from './ColumnChart.style';

class CustomColumnChart extends Component {
  componentDidMount() {
    const { intl } = this.props;

    let data = null;
    let dataFacebook = null;
    let dataInstagram = null;
    let dataTwitter = null;
    let series = null;
    let categories = null;
    let yAxisTitle = null;
    let yAxisPlotLines = null;
    let toolTipFormat = null;
    let plotOptions = null;
    let legend = null;

    if (this.props.id === 'volume') {
      data = this.props.data.map(item => ({
        y: +item.searchVolume,
        tooltipHeader: item.searchTerms,
        tooltipFirstP: intl.formatMessage({ id: 'columnChart.totalSearches' }),
      }));

      categories = this.props.data.map(item => item.searchTerms);

      series = [
        {
          data,
          color: 'rgba(142, 142, 142, 0.8)',
          allowPointSelect: true,
        },
      ];

      yAxisTitle = intl.formatMessage({
        id: 'columnChart.totalNumberOfSearches',
      });

      const avgValue = this.props.data
        .map(item => +item.searchVolume)
        .reduce((a, b) => a + b) / this.props.data.length;

      yAxisPlotLines = [
        {
          color: 'rgba(241, 104, 78, 1)',
          dashStyle: 'dash',
          width: 2,
          value: avgValue,
          label: {
            align: 'right',
            text: `${intl.formatMessage({
              id: 'columnChart.averageSearches',
            })} ${avgValue}`,
            x: -10,
            style: {
              fontSize: '12px',
            },
          },
          zIndex: 8,
        },
      ];

      toolTipFormat = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><th colspan="2"><h3>{point.tooltipHeader}</h3></th></tr>'
          + '<tr><th>{point.tooltipFirstP}:</th><td>{point.y}</td></tr>',
        footerFormat: '</table>',
        followPointer: true,
      };

      plotOptions = {};

      legend = {
        enabled: false,
      };
    } else if (this.props.id === 'fan-count') {
      dataFacebook = this.props.data.map((item) => {
        const tooltipName = item.socialSourceStats[0].socialSource;
        return {
          y: item.socialSourceStats[0].socialFanCount,
          tooltipName:
            tooltipName.charAt(0).toUpperCase() + tooltipName.slice(1),
        };
      });

      dataInstagram = this.props.data.map((item) => {
        const tooltipName = item.socialSourceStats[2].socialSource;
        return {
          y: item.socialSourceStats[2].socialFanCount,
          tooltipName:
            tooltipName.charAt(0).toUpperCase() + tooltipName.slice(1),
        };
      });
      dataTwitter = this.props.data.map((item) => {
        const tooltipName = item.socialSourceStats[3].socialSource;
        return {
          y: item.socialSourceStats[3].socialFanCount,
          tooltipName:
            tooltipName.charAt(0).toUpperCase() + tooltipName.slice(1),
        };
      });

      categories = this.props.data.map(item => item.socialAccount);

      series = [
        {
          name: 'Facebook',
          allowPointSelect: true,
          data: dataFacebook,
          color: '#3b5998',
        },
        {
          name: 'Twitter',
          allowPointSelect: true,
          data: dataTwitter,
          color: '#1dcaff',
        },
        {
          name: 'Instagram',
          allowPointSelect: true,
          data: dataInstagram,
          color: '#fbad50',
        },
      ];

      plotOptions = {
        column: {
          stacking: 'normal',
          shadow: false,
          borderWidth: 0,
        },
      };

      yAxisTitle = intl.formatMessage({ id: 'columnChart.numberOfFansTitle' });

      yAxisPlotLines = [];

      toolTipFormat = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th>{point.tooltipName}:</th><td>{point.y}</td></tr>',
        footerFormat: '</table>',
        followPointer: true,
      };

      legend = {
        enabled: true,
        verticalAlign: 'top',
      };
    } else if (this.props.id === 'post-engagement') {
      dataFacebook = this.props.data.map((item) => {
        const tooltipName = item.socialSourceStats[0].socialSource;
        return {
          y: item.socialSourceStats[0].socialFanCount,
          tooltipName:
            tooltipName.charAt(0).toUpperCase() + tooltipName.slice(1),
        };
      });

      dataInstagram = this.props.data.map((item) => {
        const tooltipName = item.socialSourceStats[2].socialSource;
        return {
          y: item.socialSourceStats[2].socialFanCount,
          tooltipName:
            tooltipName.charAt(0).toUpperCase() + tooltipName.slice(1),
        };
      });
      dataTwitter = this.props.data.map((item) => {
        const tooltipName = item.socialSourceStats[3].socialSource;
        return {
          y: item.socialSourceStats[3].socialFanCount,
          tooltipName:
            tooltipName.charAt(0).toUpperCase() + tooltipName.slice(1),
        };
      });

      categories = this.props.data.map(item => item.socialAccount);

      series = [
        {
          name: 'Facebook',
          allowPointSelect: true,
          data: dataFacebook,
          color: '#3b5998',
        },
        {
          name: 'Twitter',
          allowPointSelect: true,
          data: dataTwitter,
          color: '#1dcaff',
        },
        {
          name: 'Instagram',
          allowPointSelect: true,
          data: dataInstagram,
          color: '#fbad50',
        },
      ];

      plotOptions = {
        column: {
          stacking: 'normal',
          shadow: false,
          borderWidth: 0,
        },
      };

      yAxisTitle = intl.formatMessage({
        id: 'columnChart.numberOfEngagementTitle',
      });

      yAxisPlotLines = [];

      toolTipFormat = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th>{point.tooltipName}:</th><td>{point.y}</td></tr>',
        footerFormat: '</table>',
        followPointer: true,
      };

      legend = {
        enabled: true,
        verticalAlign: 'top',
      };
    } else if (this.props.id === 'insights') {
      data = this.props.data.map(item => ({
        y: item.actionPosts,
        tooltipHeader: item.socialAccount,
        tooltipFirstP: intl.formatMessage({
          id: 'columnChart.totalActionsPost',
        }),
      }));

      categories = this.props.data.map(item => item.socialAccount);

      series = [
        {
          data,
          color: 'rgba(142, 142, 142, 0.8)',
          allowPointSelect: true,
        },
      ];

      yAxisTitle = intl.formatMessage({
        id: 'columnChart.searchActionsPerPost',
      });

      const avgValue = this.props.data.map(item => item.actionPosts).reduce((a, b) => a + b)
        / this.props.data.length;

      yAxisPlotLines = [
        {
          color: 'rgba(241, 104, 78, 1)',
          dashStyle: 'dash',
          width: 2,
          value: avgValue,
          label: {
            align: 'right',
            text: `${intl.formatMessage({
              id: 'columnChart.averageSocialActionsPerPost',
            })} ${avgValue.toFixed(2)}`,
            x: -10,
            style: {
              fontSize: '12px',
            },
          },
          zIndex: 8,
        },
      ];

      toolTipFormat = {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat:
          '<tr><th colspan="2"><h3>{point.tooltipHeader}</h3></th></tr>'
          + '<tr><th>{point.tooltipFirstP}:</th><td>{point.y}</td></tr>',
        footerFormat: '</table>',
        followPointer: true,
      };

      plotOptions = {};

      legend = {
        enabled: false,
      };
    }

    Highcharts.chart('volume', {
      chart: {
        type: 'column',
        zoomType: 'xy',
      },
      credits: {
        enabled: false,
      },

      legend,

      title: {
        style: { display: 'none' },
      },

      plotOptions,

      xAxis: {
        type: 'category',
        categories,
        title: {
          enabled: false,
        },
        labels: {
          rotation: -45,
          padding: 0,
        },
      },

      yAxis: {
        gridLineWidth: 1,
        startOnTick: false,
        endOnTick: false,
        title: {
          text: yAxisTitle,
        },
        plotLines: yAxisPlotLines,
      },

      series,
    });
  }

  render() {
    return <Wrapper id="volume" />;
  }
}

export default injectIntl(CustomColumnChart);
