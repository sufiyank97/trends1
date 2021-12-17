import styled from 'styled-components';

import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
`;

export const Headbar = styled.div`
  display: flex;
  width: 100%;
  min-height: 90px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.background.defaultGrey};

  .first-wrapper {
    display: flex;
    justify-content: space-between;
    width: 50%;
    color: ${props => props.theme.text.default};
  }

  .radio-group-wrapper {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;

    .radio-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none !important;
    }

    p {
      display: inline-block;
      vertical-align: middle;
    }
  }
`;

export const StyledRadio = styled(Radio)`
  color: ${props => props.theme.text.default} !important;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: ${props => props.theme.text.default} !important;
  padding: 0px;
`;

export const StyledDatePicker = styled(RangePicker)`
  margin: 10px 0 0 0;
`;
