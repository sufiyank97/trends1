import React from 'react';

import * as C from './style';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import { filtersData } from 'apollo/client';
import { useReactiveVar } from '@apollo/client';

const GendersFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const filters = useReactiveVar(filtersData);
  const adultsFilters = filters['3'] || [];
  const childrenFilters = filters['4'] || [];

  return (
    <C.Wrapper>
      <C.SectionWrapper>
        <C.CategoryHeading>Adults</C.CategoryHeading>

        <C.Checkboxes>
          {adultsFilters.map(item => {
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
      </C.SectionWrapper>

      <C.SectionWrapper>
        <C.CategoryHeading style={{ paddingLeft: 10 }}>
          Children
        </C.CategoryHeading>

        <C.Checkboxes style={{ paddingLeft: 10 }}>
          {childrenFilters.map(item => {
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
      </C.SectionWrapper>
    </C.Wrapper>
  );
};

export default GendersFilter;
