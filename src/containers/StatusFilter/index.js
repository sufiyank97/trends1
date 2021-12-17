import React from 'react';

import * as C from './style';
import RadioButton from 'components/shared/RadioButton';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

const StatusFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const filters = useReactiveVar(filtersData);
  const statusFilters = filters['10'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Status</C.CategoryHeading>

      <C.RadioButtons>
        {statusFilters.map(item => {
          const { narrative, subSectionId } = item;

          const checked = value.find(
            activeValue => activeValue.subSectionId === subSectionId
          );
          return (
            <C.RadioButtonWrapper
              key={subSectionId}
              onClick={() =>
                onChangeHandler(filterValueId, item, 'radioButton')
              }
            >
              <RadioButton checked={checked} />
              <span className={checked ? 'active' : ''}>{narrative}</span>
            </C.RadioButtonWrapper>
          );
        })}
      </C.RadioButtons>
    </C.Wrapper>
  );
};

export default StatusFilter;
