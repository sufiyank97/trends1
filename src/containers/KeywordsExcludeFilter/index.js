import React, { useState } from 'react';

import * as C from './style';
import Input from 'components/shared/Input';
import { Button } from 'components/shared/Button';
import Icon from 'assets/icons';

// TODO: remove later
const tempSegments = ['Value', 'Mass', 'Premium', 'Luxury'];

const KeywordsFilter = props => {
  const { onChangeHandler, filterValueId, value } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <C.Wrapper>
      <C.AddWrapper>
        <span>EXCLUDE PRODUCTS with these keywords</span>

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
          <Icon name="substract" />
        </C.InputWrapper>
      </C.AddWrapper>
    </C.Wrapper>
  );
};

export default KeywordsFilter;
