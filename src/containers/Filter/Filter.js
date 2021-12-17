import React, { Component } from 'react';
import { productsFilterConfig } from '../../settings/config';
import * as C from './Filter.style';
import arrowDown from '../../assets/images/arrow-down.svg';
import arrowUp from '../../assets/images/arrow-up.svg';

class Filter extends Component {
  state = {
    currentTabIndex: null
  };

  switchTabsHandler = index => {
    if (index !== this.state.currentTabIndex) {
      this.setState({ currentTabIndex: index });
    } else if (index === this.state.currentTabIndex) {
      this.setState({ currentTabIndex: null });
    }
  };

  render() {
    const content = productsFilterConfig.map((item, index) => {
      if (index === this.state.currentTabIndex) {
        return (
          <C.StyledTabPanel
            key={index + Math.floor(Math.random() * 1000000 + 1)}
          >
            {item.content}
          </C.StyledTabPanel>
        );
      }
      return null;
    });

    const tabs = (
      <C.Wrapper>
        <C.StyledTabList>
          {productsFilterConfig.map((item, index) => (
            <C.StyledTab
              key={index + Math.floor(Math.random() * 1000000 + 1)}
              onClick={() => this.switchTabsHandler(index)}
              className={
                index === this.state.currentTabIndex ? 'selected-tab' : null
              }
            >
              <p>{item.name}</p>
              <C.ArrowWrapper
                image={
                  index === this.state.currentTabIndex ? arrowDown : arrowUp
                }
              />
            </C.StyledTab>
          ))}
        </C.StyledTabList>
        {content}
      </C.Wrapper>
    );
    return tabs;
  }
}

export default Filter;
