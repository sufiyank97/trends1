import React, { useState, useEffect } from 'react';

import * as C from './style';
import getContent from '../../../../components/utility/getContent';

const ContentSubTab = ({ structure, parentTab }) => {
  // Hooks

  // Tabs management
  const [currentTab, setTab] = useState(null);

  useEffect(() => {
    setTab(structure[Object.keys(structure)[0]].id);
  }, [parentTab]);

  console.log('STT', structure);

  console.log(currentTab);

  return (
    <C.Wrapper>
      <C.StyledTabList>
        {Object.keys(structure).map(tabKey => (
          <C.StyledTab
            key={structure[tabKey].id}
            onClick={() => setTab(structure[tabKey].id)}
            className={
              structure[tabKey].id === currentTab ? 'selected-tab' : null
            }
          >
            <span>{structure[tabKey].name}</span>
          </C.StyledTab>
        ))}
      </C.StyledTabList>
      <C.StyledTabPanel>
        {getContent(
          structure[currentTab] ? structure[currentTab].contentId : 'empty',
        )}
      </C.StyledTabPanel>
    </C.Wrapper>
  );
};

/* class Overview extends Component {
  state = {
    currentTabIndex: 0
  };

  switchTabsHandler = index => {
    this.setState({ currentTabIndex: index });
  };

  render() {
    let content = this.props.config.map((item, index) => {
      if (index === this.state.currentTabIndex) {
        return (
            <C.StyledTabPanel
                key={index + Math.floor(Math.random() * 1000000 + 1)}
                display={index !== this.state.currentTabIndex ? "none" : null}
            >
              <C.Controls>{item.controls}</C.Controls>
              {item.content}
            </C.StyledTabPanel>
        );
      } else {
        return null;
      }
    });
    return (
        <C.Wrapper>
          <C.StyledTabList>
            {this.props.config.map((item, index) => (
                <C.StyledTab
                    key={index + Math.floor(Math.random() * 1000000 + 1)}
                    onClick={() => this.switchTabsHandler(index)}
                    className={
                      index === this.state.currentTabIndex ? "selected-tab" : null
                    }
                    color={this.props.color}
                >
                  <span>{item.name}</span>
                </C.StyledTab>
            ))}
          </C.StyledTabList>
          {content}
        </C.Wrapper>
    );
  }
} */

export default ContentSubTab;
