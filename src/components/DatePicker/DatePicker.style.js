import styled from 'styled-components';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const styles = {
  button: {
    color: '#fff',
    background: '#F1684E',
    width: 100,
    height: 40,
    border: '1px solid #F1684E'
  }
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 200px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledRangePicker = styled(RangePicker)`
  span,
  input::placeholder {
    color: #000;
  }
`;
