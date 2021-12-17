import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import * as Comps from './Trends.style';

class Trends extends Component {
  state = {
    currentTabIndex: 0
  };

  switchTabsHandler = index => {
    this.setState({ currentTabIndex: index });
  };

  render() {
    const content = this.props.config.map((item, index) => {
      if (index === this.state.currentTabIndex) {
        return (
          <Comps.StyledTabPanel
            key={index + Math.floor(Math.random() * 1000000 + 1)}
            display={index !== this.state.currentTabIndex ? 'none' : null}
          >
            {item.content}
          </Comps.StyledTabPanel>
        );
      }
      return null;
    });
    return (
      <Comps.Wrapper>
        <Comps.StyledTabList>
          {this.props.config.map((item, index) => (
            <Comps.StyledTab
              key={index + Math.floor(Math.random() * 1000000 + 1)}
              onClick={() => this.switchTabsHandler(index)}
              className={
                index === this.state.currentTabIndex ? 'selected-tab' : null
              }
              color={this.props.color}
            >
              <span>{item.name}</span>
            </Comps.StyledTab>
          ))}
        </Comps.StyledTabList>
        {content}
      </Comps.Wrapper>
    );
  }
}

export default injectIntl(Trends);
