import React, { Component } from 'react';
import * as Comps from './Widget.style';

class Widget extends Component {
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
            color={item.color}
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
            <React.Fragment
              key={index + Math.floor(Math.random() * 1000000 + 1)}
            >
              <Comps.StyledTab
                onClick={() => this.switchTabsHandler(index)}
                className={
                  index === this.state.currentTabIndex ? 'selected-tab' : null
                }
                color={item.color}
              >
                <div>{item.logo}</div>
                <span>{item.name}</span>
              </Comps.StyledTab>
              <Comps.SelectedTabDecoration
                style={
                  this.state.currentTabIndex !== index
                    ? { display: 'none' }
                    : null
                }
                color={item.color}
              />
            </React.Fragment>
          ))}
        </Comps.StyledTabList>
        {content}
      </Comps.Wrapper>
    );
  }
}

export default Widget;
