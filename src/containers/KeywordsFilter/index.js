import React from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import { Button } from 'components/shared/Button';
import Icon from 'assets/icons';

// TODO: remove later
const tempSegments = ['Value', 'Mass', 'Premium', 'Luxury'];

const KeywordsFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  return (
    <C.Wrapper>
      <C.CategoryHeading>Manage Keywords</C.CategoryHeading>

      <C.AddWrapper>
        <span>INCLUDE PRODUCTS with these keywords</span>

        <C.InputWrapper>
          <Input />
          <Button>Add</Button>
          <Icon name="plus" />
        </C.InputWrapper>
      </C.AddWrapper>

      <C.AddWrapper>
        <span>EXCLUDE PRODUCTS with these keywords</span>

        <C.InputWrapper>
          <Input />
          <Button>Add</Button>
          <Icon name="substract" />
        </C.InputWrapper>
      </C.AddWrapper>
    </C.Wrapper>
  );
};

export default KeywordsFilter;
