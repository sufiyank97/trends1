import styled, { keyframes } from 'styled-components';

/* ANIMATIONS */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

/* STYLES */
export const styles = {
  checkbox: {
    color: '#ccc',
    '&$checked': {
      color: '#f1684e'
    }
  },
  checked: {},
  label: {
    height: '25px',
    margin: '0 5px 0 -9px'
  },
  backdrop: {
    top: '50%'
  }
};

/* COMPONENTS */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Topbar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 70px;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.background.defaultGrey};
  margin: 0 -5px;
`;

export const StyledInput = styled.input`
  padding: ${props => props.theme.input.padding.default};
  border: 1px solid ${props => props.theme.background.defaultGrey};
  border-radius: ${props => props.theme.input.borderRadius.default};
  height: ${props => props.theme.input.height.default};
  margin: 0 5px;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.theme.button.height.default};
    background: ${props => props.theme.button.color.default}
    border: 1px solid ${props => props.theme.button.color.default};
    border-radius: ${props => props.theme.button.borderRadius.default};
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 5px;
    padding: ${props => props.theme.button.padding.default};
    transition: ${props => props.theme.button.transition.default};
    outline: none;
    
    :hover {
        background: transparent;
        
        .icon {
            animation: ${rotate} 2s linear infinite;
        }
    }
    
    .icon {
        height: ${props => props.theme.button.icon.defaultHeight};
        width: ${props => props.theme.button.icon.defaultWidth};
        background: url(${props => props.icon});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: ${props => props.theme.button.icon.margin};
        pointer-events: none;
    }
    
    span {
        pointer-events: none;
    }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  margin: auto;
  transform: translateY(-50%);
  background: ${props => props.theme.background.selected};
  padding: 10px 15px;

  .from {
    display: flex;
    width: 100%;
    margin: 10px 0;

    span {
      align-self: flex-start;
      text-align: left;
      width: 50px;
    }

    input {
      padding: ${props => props.theme.input.padding.default};
      border: 1px solid ${props => props.theme.background.defaultGrey};
      border-radius: ${props => props.theme.input.borderRadius.default};
      height: ${props => props.theme.input.height.default};
      margin: 0 0 0 5px;
    }
  }

  .to {
    display: flex;
    width: 100%;

    span {
      align-self: flex-start;
      text-align: left;
      width: 50px;
    }

    input {
      padding: ${props => props.theme.input.padding.default};
      border: 1px solid ${props => props.theme.background.defaultGrey};
      border-radius: ${props => props.theme.input.borderRadius.default};
      height: ${props => props.theme.input.height.default};
      margin: 0 0 0 5px;
    }
  }

  .request {
    display: flex;
    width: 100%;

    span {
      align-self: flex-start;
      text-align: left;
      width: 50px;
    }

    input {
      padding: ${props => props.theme.input.padding.default};
      border: 1px solid ${props => props.theme.background.defaultGrey};
      border-radius: ${props => props.theme.input.borderRadius.default};
      height: ${props => props.theme.input.height.default};
      margin: 0 0 0 5px;
    }
  }
`;

export const ModalHeader = styled.div`
  font: 25px bold;
  padding: 5px 0;
  border-bottom: 1px solid ${props => props.theme.background.defaultGrey};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15px;
  height: 200px;
`;
