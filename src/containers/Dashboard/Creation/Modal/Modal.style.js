import styled from 'styled-components';

export const styles = {
  menu: {
    background: '#fff',
    border: '1px solid #F1684E'
  },
  selectedButton: {
    background: '#F1684E !important'
  },
  backdrop: {
    top: '50%'
  }
};

export const StyledTabs = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledTabPanel = styled.div`
  height: 100%;
`;

export const StyledMenuItem = styled.div`
  display: flex;
  color: #000;
  background: #fff;
  min-height: 24px;
  height: 100%;
  font-size: 14px;

  p {
    margin: 0 0 0 10px;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 6px;
  width: 800px;
  height: 500px;
  align-items: space-between;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;

  h3 {
    margin: auto;
    color: #000;
    font-size: 35px;
  }

  button {
    background: transparent;
    border: none;

    :focus {
      outline: none;
    }

    :hover {
      cursor: pointer;
    }

    img {
      height: 35px;
      width: 35px;
    }
  }
`;

export const ModalCentralWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  color: #000;
  justify-content: center;
`;

export const ModalInputWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: flex-start;

  input {
    width: 100%;
    border-radius: 4px;
    height: 25px;
    border: 1px solid #ccc;
    padding: 0 0 0 5px;
  }

  p {
    margin: 0 0 5px 0;
  }
`;

export const EmailOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 15px;

  p {
    margin: 0 0 5px 0;
  }
`;

export const EmailOptions = styled.button`
  background: transparent;
  width: 100px;
  height: 25px;
  border: none;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  p {
    text-align: left;
  }
`;

export const ModalFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    button {
        min-height: 40px;
        min-width: 100px;
        background: #F1684E;
        border: 1px solid #F1684E;
        color: #fff;
        border-radius: 5px;
        transition: 0.6s ease all;

        :first-of-type {
            margin: 0 10px 0 0;
        }

        :focus {
            outline: none;
        }

        :hover {
            background: transparent;
            cursor: pointer;
            color: #000;
        }
`;
