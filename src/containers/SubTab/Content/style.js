import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  ::before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 591.44px / 1127.34px * 100%;
  }

  ::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const StyledTabList = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 90px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 85px;
`;

export const SelectedTabDecoration = styled.div`
  background: ${props => props.theme.background.selected};
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  position: absolute;
  bottom: -36px;
  border-top: 13px solid ${props => props.color};
  border-bottom: 3px solid ${props => props.color};
  border-right: 2px solid ${props => props.color};
  border-left: 2px solid ${props => props.color};
`;

export const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 12%;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.text.default};
  background: ${props => props.theme.background.default};
  border-top: 6px solid ${props => props.color} !important;
  margin: 0 0.5%;
  padding: 10px;
  transition: 0.3s ease all;

  :first-of-type {
    margin-left: 0 !important;
  }

  :last-of-type {
    margin-right: 0 !important;
  }

  :hover {
    background: ${props => props.theme.background.selected};
    box-shadow: 0px 3px 7px 1px ${props => props.theme.background.defaultGrey};
    cursor: pointer;
  }

  img {
    margin: 10px;
    height: 20px;
  }

  &.selected-tab {
    pointer-events: none;
    text-decoration: none;
    position: relative;
    background: ${props => props.theme.background.selected};
    box-shadow: 0px 3px 7px 1px ${props => props.theme.background.defaultGrey};
    transition: 0.3s ease all;
    transform: translateY(-16px);

    ::after {
      content: '.';
      color: ${props => props.color};
      width: 10px;
      height: 55px;
      background: ${props => props.color};
      position: absolute;
      bottom: -55px;
    }
  }
`;

export const StyledTabPanel = styled.div`
  width: 100%;
  padding: 15px 0px;
  display: ${props => props.display};
`;
