import styled from 'styled-components';

export const HiddenRadioButton = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRadioButton = styled.div`
  display: flex;
  width: ${props => props.width || '.8rem'};
  height: ${props => props.height || '.8rem'};
  background: ${props =>
    props.checked ? props.theme.colors.green : 'transparent'};
  border: 1px solid ${props => props.theme.colors.white};
  transition: 0.15s all ease;
  cursor: pointer;
  border-radius: 50%;

  > svg {
    height: 100%;
    width: 100%;
  }
`;

export const RadioButtonContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.2rem;
`;
