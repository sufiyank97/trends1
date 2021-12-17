import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  background: ${props => props.theme.colors.lightBlue};
  padding: 10px 20px;

  .react-select-container {
    height: 24px;

    * {
      margin: 0;
      padding: 0;
    }
  }

  .react-select__control {
    height: 24px;
    min-height: unset;
    border-radius: unset;
  }
`;

export const CategoryHeading = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  width: 100%;

  span {
    color: ${props => props.theme.colors.white};
  }

  input {
    width: 50px;
    margin: 0 10px;
  }
`;
