import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  background: ${props => props.theme.colors.lightBlue};
  padding: 10px 20px;
`;

export const CategoryHeading = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 10px;

  span {
    font-size: 0.7rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 5px;
  }

  button {
    height: 24px;
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  input {
    padding-left: 24px;
  }

  svg {
    position: absolute;
    top: 5px;
    left: 5px;
    height: 14px;
    width: 14px;
    fill: ${props => props.theme.colors.white};
  }
`;
