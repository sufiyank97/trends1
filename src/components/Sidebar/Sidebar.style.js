import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const navItemStyles = css`
  position: relative;
  width: 100%;
  color: ${props => props.theme.colors.inactive};
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  font-size: 12px;

  span {
    word-break: break-word;
    text-align: center;
  }

  :hover,
  &.active {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.lightBlue};

    svg {
      path,
      rect {
        fill: ${props => props.theme.colors.white} !important;
      }
    }
  }

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.green};
    opacity: 0;
  }

  &.active {
    ::after {
      opacity: 1;
    }
  }

  .icon {
    height: 30px;
  }

  svg {
    width: 30px;
    height: 30px;

    path,
    rect {
      fill: ${props => props.theme.colors.lightGrey} !important;
    }
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  min-width: 90px;
  min-height: 100%;
  background: ${props => props.theme.colors.darkBlue};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 90px;
  width: 90px;
  height: 100%;
  padding: 10px 0;
`;

export const NavItemLink = styled(NavLink)`
  ${navItemStyles};
`;

export const NavItem = styled.div`
  ${navItemStyles};
  cursor: pointer;
`;

export const Input = styled.input`
  height: 28px;
  width: 82%;
  padding-left: 10px;
  border: 1px solid ${props => props.theme.background.defaultGrey};
  border-left: none;
`;
