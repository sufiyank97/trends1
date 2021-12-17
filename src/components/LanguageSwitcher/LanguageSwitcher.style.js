import styled from 'styled-components';

/* COMPONENTS */
export const Wrapper = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 0;
`;

export const Button = styled.button`
  display: flex;
  padding: 5px;
  background: transparent;
  border: none;

  :focus {
    outline: none;
  }

  img {
    width: 20px;
    cursor: pointer;
  }
`;
