import styled from 'styled-components';

import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15px;
`;

export const CategoryFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  margin: 30px 0 10px 15px;

  h3 {
    color: ${props => props.theme.text.default};
    font-size: 1.3em;
  }
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

  div {
    color: ${props => props.theme.text.default};
    border-left: 1px solid ${props => props.theme.background.defaultGrey};
    padding: 0px 10px 0 0;

    :first-of-type {
      border: none;
    }
  }

  .radio-group-wrapper {
    border: none;

    p {
      display: inline-block;
      vertical-align: middle;
    }

    &.bordered {
      border-bottom: 1px solid ${props => props.theme.background.defaultGrey};
    }
  }

  .right-side {
    width: 60%;
    padding: 0 0 0 10px;

    .price-range {
      display: flex;
      width: 35%;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      input {
        width: 50px;
        height: 28px;
        color: #000;
        border: 1px solid ${props => props.theme.background.defaultGrey};
        padding: 0 0 0 5px;
        border-radius: 2px;
      }

      select {
        width: 60px;
        height: 28px;
        color: #000;
        border: 1px solid ${props => props.theme.background.defaultGrey};
        padding: 0 0 0 5px;
        border-radius: 2px;
      }

      &.bottom {
        width: 70%;
      }
    }

    h3 {
      padding: 0 !important;
    }
  }

  h3 {
    color: ${props => props.theme.text.default};

    :last-of-type {
      padding: 10px 0 0 0;
    }
  }
`;

export const PriceChangesWrapper = styled.div`
  display: flex;
  border: none !important;
  justify-content: space-between;

  p {
    padding: 10px 0;
  }

  .price-changes-wrapper {
    width: 50%;
    border: none !important;
    padding: 0 0 10px 0;

    .price-checkbox-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 35%;
      border: none !important;

      p {
        padding: 0 !important;
      }

      &.more-width {
        width: 65%;
        display: flex;
        justify-content: left;
      }

      &.more-width-padding {
        width: 39%;
        padding: 5px 0;
        display: flex;
        justify-content: left;
      }

      &.width-52 {
        width: 52%;
      }

      &.width-47 {
        width: 47%;
      }
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
