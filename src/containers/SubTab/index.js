import React, { useState } from 'react';

import * as C from './style';
import Content from './Content';

const SubTab = ({ structure }) => {
  // Hooks

  // Tabs management
  const [currentTab, setTab] = useState('main');

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
            color="#000"
          >
            <span>{structure[tabKey].name}</span>
          </C.StyledTab>
        ))}
      </C.StyledTabList>
      <C.StyledTabPanel>
        {structure[currentTab].subTabs ? (
          <Content
            currentTab={currentTab}
            structure={structure[currentTab].subTabs}
          />
        ) : null}
      </C.StyledTabPanel>
    </C.Wrapper>
  );
};

export default SubTab;
