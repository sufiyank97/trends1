import React from 'react';

// Components
import * as C from './style';

const RadioButton = ({ className, checked, checkedBackgroundColor, ...props }) => (
  <C.RadioButtonContainer className={className}>
    <C.HiddenRadioButton checked={checked} {...props} />
    <C.StyledRadioButton
      style={{ background: checked ? checkedBackgroundColor : '' }}
      checked={checked}
    />
  </C.RadioButtonContainer>
);

export default RadioButton;
