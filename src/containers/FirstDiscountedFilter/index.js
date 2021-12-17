import React from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import RadioButton from '../../components/shared/RadioButton';

// TODO: remove later
const tempSellOut = ['All', 'Past Week', 'Past Month', 'Past 3 Months'];

const FirstDiscountedFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  return (
    <C.Wrapper>
      <C.CategoryHeading>First Discounted</C.CategoryHeading>
      <C.RadioButtons>
        {tempSellOut.map(status => {
          const checked = value.find(activeValue => activeValue === status);
          return (
            <C.RadioButtonWrapper
              onClick={() => onChangeHandler(filterValueId, status, 'radioButton')}
            >
              <RadioButton checked={checked} />
              <span className={checked ? 'active' : ''}>{status}</span>
            </C.RadioButtonWrapper>
          );
        })}
      </C.RadioButtons>

      <C.InputsWrapper>
        <C.RadioButtonWrapper
          onClick={() => onChangeHandler(filterValueId, 'dateRange', 'radioButton')}
        >
          <RadioButton
            checked={value.find(activeValue => activeValue === 'dateRange')}
          />
          <span
            className={
              value.find(activeValue => activeValue === 'dateRange')
                ? 'active'
                : ''
            }
          >
            Date Range
          </span>
        </C.RadioButtonWrapper>
        <span>from</span>
        <Input />
        <span>to</span>
        <Input />
      </C.InputsWrapper>
    </C.Wrapper>
  );
};

export default FirstDiscountedFilter;
