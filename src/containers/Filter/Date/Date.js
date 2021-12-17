import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/IntlMessages';
import * as Comps from './Date.style';

class Date extends Component {
  state = {
    selectedNewValue: 'a',
    selectedSellOutValue: 'a',
    selectedDiscValue: 'a'
  };

  handleNewChange = event => {
    this.setState({ selectedNewValue: event.target.value });
  };

  handleSellOutChange = event => {
    this.setState({ selectedSellOutValue: event.target.value });
  };

  handleDiscChange = event => {
    this.setState({ selectedDiscValue: event.target.value });
  };

  render() {
    const config = [
      {
        id: 'selectedNewValue',
        header: <IntlMessages id="trends.date.newIn" />,
        onChange: event => {
          this.setState({ selectedNewValue: event.target.value });
        }
      },
      {
        id: 'selectedSellOutValue',
        header: <IntlMessages id="trends.date.firstSellOut" />,
        onChange: event => {
          this.setState({ selectedSellOutValue: event.target.value });
        }
      },
      {
        id: 'selectedDiscValue',
        header: <IntlMessages id="trends.date.firstDiscounted" />,
        onChange: event => {
          this.setState({ selectedDiscValue: event.target.value });
        }
      }
    ];

    const content = config.map(item => (
      <div className="radio-group-wrapper">
        <p>{item.header}</p>
        <div className="radio-text">
          <Comps.StyledRadio
            checked={this.state[item.id] === 'a'}
            onChange={item.onChange}
            value="a"
          />
          <p>
            <IntlMessages id="trends.date.allProducts" />
          </p>
        </div>
        <div className="radio-text">
          <Comps.StyledRadio
            checked={this.state[item.id] === 'b'}
            onChange={item.onChange}
            value="b"
          />
          <p>
            <IntlMessages id="trends.date.pastWeek" />
          </p>
        </div>
        <div className="radio-text">
          <Comps.StyledRadio
            checked={this.state[item.id] === 'c'}
            onChange={item.onChange}
            value="c"
          />
          <p>
            <IntlMessages id="trends.date.pastThreeMonths" />
          </p>
        </div>
        <div className="radio-text">
          <Comps.StyledRadio
            checked={this.state[item.id] === 'd'}
            onChange={item.onChange}
            value="d"
          />
          <p>
            <IntlMessages id="trends.date.dateRange" />
          </p>
        </div>
        <Comps.StyledDatePicker dropdownClassName="date-picker-dropdown" />
      </div>
    ));

    return (
      <Comps.Wrapper>
        <Comps.Headbar></Comps.Headbar>
        <Comps.ContentWrapper>
          <div className="first-wrapper">{content}</div>
        </Comps.ContentWrapper>
      </Comps.Wrapper>
    );
  }
}

export default Date;
