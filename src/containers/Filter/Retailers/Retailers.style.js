import styled from 'styled-components';

export const styles = {
  button: {
    color: '#fff',
    background: '#F1684E',
    minWidth: 100,
    minHeight: 40,
    border: '1px solid #F1684E',
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;

  span {
    color: ${props => props.theme.text.default};
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin: 30px 0 10px 15px;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      :hover {
        background: transparent;
      }

      img {
        max-height: 20px;
        margin: 0 5px 0 0;
      }
    }

    input {
      height: 28px;
      padding-left: 10px;
      border: 1px solid ${props => props.theme.background.defaultGrey};
      border-radius: 2px;

      :focus {
        outline: none;
      }
    }
  }
`;

export const Headbar = styled.div`
  display: flex;
  width: 100%;
  min-height: 90px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.background.defaultGrey};

  div {
    color: #fff;
    width: 20%;
    height: 50vh;
    border-left: 1px solid ${props => props.theme.background.defaultGrey};

    :first-of-type {
      border: none;
    }
  }
`;
