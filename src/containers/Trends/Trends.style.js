import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: fit-content;

  p {
    &.header {
      margin: 0 0 15px 0;
      font-weight: bold;
      font-size: 23px;
    }
  }
`;

export const StyledTabList = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: flex-end;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${props => props.theme.background.defaultGrey};
  box-sizing: border-box;
`;

export const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 0 10px;
  padding: 10px;
  color: ${props => props.theme.text.default};
  background: ${props => props.theme.background.selected};
  border-left: 1px solid ${props => props.theme.background.selected};
  border-right: 1px solid ${props => props.theme.background.selected};
  transition: 0.3s ease all;

  :first-of-type {
    margin-left: 0 !important;
  }

  :last-of-type {
    margin-right: 0 !important;
  }

  :hover {
    background: ${props => props.theme.background.selected};
    cursor: pointer;
  }

  img {
    margin: 10px;
    height: 20px;
  }

  &.selected-tab {
    pointer-events: none;
    text-decoration: none;
    border-left: 1px solid ${props => props.theme.background.defaultGrey};
    border-right: 1px solid ${props => props.theme.background.defaultGrey};
    border-top: 3px solid ${props => props.color};
    box-shadow: 0 5px 0 0 ${props => props.theme.background.selected};
    transition: 0.3s ease all;
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;

export const Controls = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
