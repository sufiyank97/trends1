import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const styles = {
  menu: {
    background: '#36454f',
    border: '1px solid #F1684E'
  },
  menuItem: {
    width: '250px',
    color: '#fff',
    minHeight: '24px',
    height: '100%',
    fontSize: 14
  }
};

export const StyledButton = styled(Button)`
  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin: 0 0 0 10px !important;
  }
`;

export const StyledMenu = styled(Menu)`
  div:nth-child(2) {
    background: ${props => props.theme.background.default};
    box-shadow: 0px 3px 7px 1px ${props => props.theme.background.defaultGrey};

    span {
      color: ${props => props.theme.text.default};
    }

    button {
      :hover {
        background: transparent;
      }
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  width: 250px;
  color: ${props => props.theme.text.default};
  min-height: 24px;
  height: 100%;
  font-size: 14px;
`;
