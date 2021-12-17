import React, { Component } from 'react';
import * as Comps from './Analysis.style';
import IntlMessages from '../../../../components/utility/IntlMessages';

class Analysis extends Component {
  state = {
    currentTabIndex: 0,
    currentSubTabIndex: 0
  };

  switchTabsHandler = index => {
    this.setState({ currentTabIndex: index });
    this.setState({ currentSubTabIndex: 0 });
  };

  switchSubTabsHandler = index => {
    this.setState({ currentSubTabIndex: index });
  };

  render() {
    let tabHeader = null;

    if (this.state.currentTabIndex === 0) {
      tabHeader = (
        <h1>
          <IntlMessages id="market.analysis.socialStream" />
        </h1>
      );
    } else if (this.state.currentTabIndex === 1) {
      tabHeader = (
        <h1>
          <IntlMessages id="market.analysis.marketStream" />
        </h1>
      );
    } else if (this.state.currentTabIndex === 2) {
      tabHeader = (
        <h1>
          <IntlMessages id="market.analysis.socialStream" />
        </h1>
      );
    }

    const content = this.props.config.map((mainItem, mainIndex) => {
      if (mainIndex === this.state.currentTabIndex) {
        return (
          <Comps.StyledTabPanel
            key={mainIndex}
            display={mainIndex !== this.state.currentTabIndex ? 'none' : null}
          >
            <Comps.ChildWrapper>
              <p className="header">{mainItem.tabName}</p>
              <Comps.StyledChildTabList>
                {mainItem.childTabs.map((item, index) => {
                  let parentColor = null;
                  if (this.state.currentTabIndex === mainIndex) {
                    parentColor = mainItem.color;
                  }
                  if (item.name) {
                    return (
                      <Comps.StyledChildTab
                        key={index + Math.floor(Math.random() * 1000000 + 1)}
                        onClick={() => this.switchSubTabsHandler(index)}
                        className={
                          index === this.state.currentSubTabIndex
                            ? 'selected-tab'
                            : null
                        }
                        color={parentColor}
                      >
                        <span>{item.name}</span>
                      </Comps.StyledChildTab>
                    );
                  }
                  return null;
                })}
              </Comps.StyledChildTabList>
              {mainItem.childTabs.map((item, index) => {
                if (index === this.state.currentSubTabIndex) {
                  return (
                    <Comps.StyledTabPanel
                      key={index + Math.floor(Math.random() * 1000000 + 1)}
                    >
                      <Comps.Controls>{item.controls}</Comps.Controls>
                      {item.content}
                    </Comps.StyledTabPanel>
                  );
                }
                return null;
              })}
            </Comps.ChildWrapper>
          </Comps.StyledTabPanel>
        );
      }
      return null;
    });

    return (
      <Comps.Wrapper>
        {tabHeader}
        {/* <Comps.StyledTabList>
                    {this.props.config.map((item, index) => (
                        <Comps.StyledTab
                            key={index + Math.floor((Math.random() * 1000000) + 1)}
                            onClick={() => this.switchTabsHandler(index)}
                            className={index === this.state.currentTabIndex ? 'selected-tab' : null}
                            color={item.color}
                        >
                            <img src={item.logo} alt={item.tabName}/>
                        </Comps.StyledTab>
                    ))}
                </Comps.StyledTabList> */}
        {content}
      </Comps.Wrapper>
    );
  }
}

export default Analysis;
