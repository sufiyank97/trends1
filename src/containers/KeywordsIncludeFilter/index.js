import React, { useState } from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import { Button } from 'components/shared/Button';
import Icon from 'assets/icons';

const KeywordsFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <C.Wrapper>
      <C.CategoryHeading>Manage Keywords</C.CategoryHeading>

      <C.AddWrapper>
        <span>INCLUDE PRODUCTS with these keywords</span>

        <C.InputWrapper>
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <Button
            onClick={() => {
              onChangeHandler(filterValueId, inputValue);
              setInputValue('');
            }}
          >
            Add
          </Button>
          <Icon name="plus" />
        </C.InputWrapper>
      </C.AddWrapper>
    </C.Wrapper>
  );
};

export default KeywordsFilter;
