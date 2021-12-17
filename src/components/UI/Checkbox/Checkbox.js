import React from 'react';

// Components
import * as C from './Checkbox.style';

const Checkbox = ({ className, checked, checkedBackgroundColor, ...props }) => (
  <C.CheckboxContainer className={className}>
    <C.HiddenCheckbox checked={checked} {...props} />
    <C.StyledCheckbox
      style={{ background: checked ? checkedBackgroundColor : '' }}
      checked={checked}
    />
  </C.CheckboxContainer>
);

export default Checkbox;
