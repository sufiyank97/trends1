import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as Comps from './DropdownWithDate.style';
import calendarLogo from '../../../../assets/images/calendar.svg';
import DatePicker from '../../../DatePicker/DatePicker';
import IntlMessages from '../../../utility/IntlMessages';

class DropdownDatepicker extends Component {
  state = {
    anchorEl: null,
    dateValue: <IntlMessages id="market.datepicker.datePlaceholder" />
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = item => {
    this.setState({
      anchorEl: null,
      dateValue: item.content
    });
  };

  handleEmptyClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseWithDate = date => {
    this.setState({
      anchorEl: null,
      dateValue: date
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Comps.StyledButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <img src={calendarLogo} alt="Calendar logo" />
          <p>{this.state.dateValue}</p>
        </Comps.StyledButton>
        <Comps.StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleEmptyClose}
        >
          {this.props.config.map((item, index) => (
            <Comps.StyledMenuItem
              key={index + Math.floor(Math.random() * 1000000 + 1)}
              onClick={item.clickable ? () => this.handleClose(item) : null}
              classes={{ root: classes.menuItem }}
              disableRipple
            >
              {item.clickable ? (
                item.content
              ) : (
                <DatePicker
                  handleClose={
                    !item.clickable ? this.handleCloseWithDate : null
                  }
                  handleEmptyClose={
                    !item.clickable ? this.handleEmptyClose : null
                  }
                />
              )}
            </Comps.StyledMenuItem>
          ))}
        </Comps.StyledMenu>
      </div>
    );
  }
}

export default withStyles(Comps.styles)(DropdownDatepicker);
