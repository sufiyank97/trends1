import React from 'react';

import * as C from './style';
import RadioButton from 'components/shared/RadioButton';
import { useReactiveVar } from '@apollo/client';
import { filtersData } from 'apollo/client';

const ReplenishedFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const filters = useReactiveVar(filtersData);
  const replenishedFilters = filters['12'] || [];

  return (
    <C.Wrapper>
      <C.CategoryHeading>Replenished products</C.CategoryHeading>

      <C.RadioButtons>
        {replenishedFilters.map(item => {
          const { narrative, subSectionId } = item;

          const checked = value.find(
            activeValue => activeValue.subSectionId === subSectionId
          );
          return (
            <C.RadioButtonWrapper
              ky={subSectionId}
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

export default ReplenishedFilter;
