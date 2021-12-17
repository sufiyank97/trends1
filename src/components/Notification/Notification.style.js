import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;

  > button {
    background: white;
    color: black;
    margin: 0 8px;
    cursor: pointer;
    border: none;
    border-radius: 2px;
  }
`;
