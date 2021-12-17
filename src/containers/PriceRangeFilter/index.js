import React from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import CustomSelect from 'components/shared/Select';

const PriceRangeFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  return (
    <C.Wrapper>
      <C.CategoryHeading>Price range</C.CategoryHeading>

      <C.InputsWrapper>
        <span>From</span>
        <Input />
        <span>to</span>
        <Input />
        <CustomSelect />
      </C.InputsWrapper>
    </C.Wrapper>
  );
};

export default PriceRangeFilter;
