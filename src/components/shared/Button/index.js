import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  min-width: 40px;
  min-height: 15px;
  padding: 8px;
  background: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  border-top: 1px solid ${props => props.theme.colors.darkBlue};
  border-right: 1px solid ${props => props.theme.colors.darkBlue};
  border-left: 1px solid ${props => props.theme.colors.darkBlue};
  border-bottom: 2px solid ${props => props.theme.colors.darkBlue};
  transition: 0.3s all ease;
  
  :hover {
    filter: brightness(0.7);
  }
  
  :active {
    position: relative;
    top: 2px;
  }
`;

export const Button = styled.button`
  ${baseButtonStyles};
`;

export const DangerButton = styled.button`
  ${baseButtonStyles};
  background: ${props => props.theme.colors.red};
`;
