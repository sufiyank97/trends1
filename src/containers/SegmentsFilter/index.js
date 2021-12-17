import React from 'react';

import * as C from './style';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

const MarketsFilter = props => {
  // new
  const filters = useReactiveVar(filtersData);
  const segmentsFilters = filters['2'] || [];
  // new end

  const { onChangeHandler, filterValueId, value } = props;

  return (
    <C.Wrapper>
      <C.SegmentsWrapper>
        <C.CategoryHeading>Select Segments</C.CategoryHeading>

        <C.Checkboxes>
          {segmentsFilters.map(item => {
            const { narrative, subSectionId } = item;

            const checked = value.find(
              activeSegment => activeSegment.subSectionId === subSectionId
            );
            return (
              <C.CheckboxWrapper
                onClick={() => onChangeHandler(filterValueId, item)}
              >
                <Checkbox checked={checked} />
                <span className={checked ? 'active' : ''}>{narrative}</span>
              </C.CheckboxWrapper>
            );
          })}
        </C.Checkboxes>
      </C.SegmentsWrapper>
    </C.Wrapper>
  );
};

export default MarketsFilter;
