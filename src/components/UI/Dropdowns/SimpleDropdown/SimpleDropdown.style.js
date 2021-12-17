import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';

export const styles = {
  menu: {
    background: '#fff',
    border: '1px solid #F1684E'
  },
  backdrop: {
    top: '50%'
  }
};

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  color: #000;
  background: #fff;
  min-height: 24px;
  height: 100%;
  font-size: 14px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const Options = styled.button`
  background: transparent;
  height: 25px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 0 0 5px;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }

  p {
    text-align: left;
  }
`;
