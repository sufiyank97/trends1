import React from 'react';

import * as C from './style';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { filtersData } from 'apollo/client';
import { useReactiveVar } from '@apollo/client';

const MarkdownFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const filters = useReactiveVar(filtersData);
  const markdownsFilters = filters['13'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Select Markdowns</C.CategoryHeading>

      <C.Checkboxes>
        {markdownsFilters.map(item => {
          const { narrative, subSectionId } = item;

          const checked = value.find(
            activeValue => activeValue.subSectionId === subSectionId
          );
          return (
            <C.CheckboxWrapper
              key={subSectionId}
              onClick={() => onChangeHandler(filterValueId, item)}
            >
              <Checkbox checked={checked} />
              <span className={checked ? 'active' : ''}>{narrative}</span>
            </C.CheckboxWrapper>
          );
        })}
      </C.Checkboxes>
    </C.Wrapper>
  );
};

export default MarkdownFilter;
