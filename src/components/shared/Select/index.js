import React from 'react';

import { StyledSelect } from './style';

const CustomSelect = props => (
  <StyledSelect
    className="react-select-container"
    classNamePrefix="react-select"
    {...props}
  />
);

export default CustomSelect;
