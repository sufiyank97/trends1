import React, { Component, useState } from 'react';

import * as C from './style';
import ContentSubTab from './ContentSubTab';
import getContent from '../../../components/utility/getContent';

const Content = ({ structure }) => {
  // Hooks

  // Tabs management
  const [currentTab, setTab] = useState(
    structure[Object.keys(structure)[0]].id
  );

  console.log(structure, 'content');

  return (
    <C.Wrapper>
      <C.StyledTabList>
        {Object.keys(structure).map(tabKey => (
          <React.Fragment key={tabKey}>
            <C.StyledTab
              onClick={() => setTab(structure[tabKey].id)}
              className={
                structure[tabKey].id === currentTab ? 'selected-tab' : null
              }
              color={structure[tabKey].color}
            >
              <span>{structure[tabKey].name}</span>
            </C.StyledTab>
            <C.SelectedTabDecoration
              style={
                structure[tabKey].id !== currentTab ? { display: 'none' } : null
              }
              color={structure[tabKey].color}
            />
          </React.Fragment>
        ))}
      </C.StyledTabList>
      {structure[currentTab].subTabs ? (
        <ContentSubTab
          parentTab={currentTab}
          structure={structure[currentTab].subTabs}
        />
      ) : (
        getContent(
          structure[currentTab] ? structure[currentTab].contentId : 'empty'
        )
      )}
    </C.Wrapper>
  );
};

export default Content;
