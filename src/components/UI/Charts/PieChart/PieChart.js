import React, { Component } from 'react';
import Highcharts from 'highcharts';
import { Wrapper } from './PieChart.style';

class CustomPieChart extends Component {
  state = {
    fullPrice: false,
    segments: false,
    colors: false
  };

  componentDidMount() {
    if (this.props.data[0].markdownRange) {
      this.setState({ fullPrice: true, segments: false, colors: false });
    } else if (this.props.data[0].priceRange) {
      this.setState({ segments: true, fullPrice: false, colors: false });
    } else if (this.props.data[0].colourRange) {
      this.setState({ colors: true, fullPrice: false, segments: false });
    }

    const fullPriceData = this.props.data.map(item => {
      if (item.markdownRange) {
        return [
          `${item.markdownRange}: ${item.percOfTotal}%`,
          item.percOfTotal
        ];
      }
      if (item.priceRange) {
        return [`${item.priceRange}: ${item.percOfTotal}%`, item.percOfTotal];
      }
      return [item.priceRange, item.percOfTotal];
    });

    const colors = this.props.data.map(item => {
      if (item.markdownRange) {
        return `rgba(147, 62, 197, ${item.percOfTotal / 100})`;
      }
      if (item.priceRange) {
        return `rgba(241, 104, 78, ${item.percOfTotal / 100})`;
      }
      return item.colourRange;
    });

    Highcharts.chart('full-price', {
      tooltip: {
        enabled: false
      },
      title: {
        style: { display: 'none' }
      },
      series: [
        {
          data: fullPriceData,
          type: 'pie',
          colors,
          allowPointSelect: true
        }
      ],
      credits: {
        enabled: false
      }
    });
  }

  render() {
    return (
      <Wrapper
        labels={this.state.colors ? 'display: none' : null}
        id="full-price"
      />
    );
  }
}

export default CustomPieChart;
