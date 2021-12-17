import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 10px;
  width: 100%;
  min-height: 57px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  background: ${props => props.theme.colors.lightBlue};
  
  input {
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }
  
  > * {
    cursor: pointer;
  }
  
  svg {
    width: 15px;
    height: 15px;
    opacity: 0;
    transition: 0.3s all ease;
  }

  &.active,
  :hover {
    background: ${props => props.theme.colors.darkBlue};
  }

  :hover {
    svg {
      opacity: 1;

      path,
      rect {
        fill: ${props => props.theme.colors.white} !important;
      }
    }
  }
`;
