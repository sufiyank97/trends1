import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px 20px 30px;
  background: ${props => props.theme.colors.lightBlue};
  
  .react-select-container {
    width: 100px;
    height: 24px;
  }
  
  .react-select__control {
    border-radius: unset;
    padding: 0;
    margin: 0;
    min-height: unset;
    height: 100%;
  }
  
  .react-select__indicator-separator {
    display: none;
  }
  
  .react-select__indicators, .react-select__value-container {
    height: 100%;
    padding: 0;
  }
`;

export const ModalHeading = styled.div`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  span {
    color: ${props => props.theme.colors.white};
    font-size: 16px;
    margin-bottom: 4px;
  }
  
  input {
    width: 200px;
    margin-right: 10px;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: ${props => props.theme.colors.white};
  }
  
  .error-message {
    color: red;
    font-size: 12px;
    margin-top: 4px;
  }
}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  justify-content: flex-end;

  > button:first-of-type {
    margin: 0 10px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    height: 15px;
    width: 15px;
    cursor: pointer;
    fill: ${props => props.theme.colors.inactive};
    transition: 0.3s all ease;

    path {
      fill: ${props => props.theme.colors.inactive};
      transition: 0.3s all ease;
    }
  }

  :hover {
    svg {
      fill: ${props => props.theme.colors.white};

      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }
`;
