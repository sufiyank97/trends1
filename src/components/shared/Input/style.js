import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 24px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.darkBlue};
  padding: 2px 4px;
  border: none;
`;
