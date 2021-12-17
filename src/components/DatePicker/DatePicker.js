import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IntlMessages from '../utility/IntlMessages';
import * as Comps from './DatePicker.style';

class DatePickerComponent extends Component {
  state = {
    currentDate: 'YY/MM/DD'
  };

  onChange = (date, dateString) => {
    const updatedDate = `${dateString[0]} — ${dateString[1]}`;
    this.setState({ currentDate: updatedDate });
  };

  render() {
    const { classes } = this.props;

    return (
      <Comps.Wrapper>
        <p>
          <IntlMessages id="market.datepicker.customRange" />
        </p>
        <Comps.StyledRangePicker
          onChange={this.onChange}
          dropdownClassName="date-picker-dropdown"
        />
        <Comps.ButtonsWrapper>
          <Button
            variant="outlined"
            classes={{ root: classes.button }}
            onClick={
              this.state.currentDate === 'YY/MM/DD'
                ? () => this.props.handleEmptyClose()
                : () => this.props.handleClose(this.state.currentDate)
            }
          >
            <IntlMessages id="market.datepicker.apply" />
          </Button>
          <Button
            variant="outlined"
            classes={{ root: classes.button }}
            onClick={() => this.props.handleEmptyClose()}
          >
            <IntlMessages id="market.datepicker.cancel" />
          </Button>
        </Comps.ButtonsWrapper>
      </Comps.Wrapper>
    );
  }
}

export default withStyles(Comps.styles)(DatePickerComponent);
