import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  padding: 1rem 2rem;
  box-shadow: 5px 5px 5px 0 #ccc;
`;

export const Heading = styled.div`
  font-size: medium;
  font-weight: bold;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    width: 100%;
    height: 2rem;
    padding: 0.2rem;
    border-radius: 0.3rem;
    margin: 0.5rem 0;
    border: 1px solid black;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid black;
  cursor: pointer;
  font-size: 1rem;
`;
