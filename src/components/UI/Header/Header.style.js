import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  background: transparent;
  box-sizing: border-box;
  padding: 5px 0;
  min-height: fit-content;
`;

export default withTheme(Wrapper);

export const ImageWrapper = styled.div`
  height: 24px;
  margin: 0 5px 5px 0;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
