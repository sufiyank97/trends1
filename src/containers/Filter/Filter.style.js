import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  transition: 3s all ease;
  border-radius: 4px 4px 0 0;
`;

export const StyledTabList = styled.div`
  display: flex;
  width: 100%;
  min-height: 7%;
  background: ${props => props.theme.background.default};
`;

export const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  cursor: pointer;
  background: ${props => props.theme.background.default};

  &.selected-tab {
    background: ${props => props.theme.background.selected};
  }
`;

export const ArrowWrapper = styled.div`
  width: 10px;
  height: 10px;
  background: url(${props => props.image});
  background-size: cover;
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  min-height: 93%;
  background: ${props => props.theme.background.selected};
`;
