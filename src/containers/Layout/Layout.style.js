import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 900px;
    padding: 15px 40px;
    box-sizing: border-box;
    overflow: overlay;
  }
`;
