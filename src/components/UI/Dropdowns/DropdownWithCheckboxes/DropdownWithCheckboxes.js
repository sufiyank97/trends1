import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './DropdownWithCheckboxes.style';

class DropdownWithCheckboxes extends Component {
  state = {
    anchorEl: null,
    all: false,
    a: false,
    b: false,
    c: false,
    d: false
  };

  handleCheckbox = itemValue => {
    if (this.state[itemValue]) {
      this.setState({
        [itemValue]: false,
        all: false
      });
    } else if (!this.state[itemValue]) {
      this.setState({
        [itemValue]: true
      });
    }
  };

  handleAllCheckbox = () => {
    if (!this.state.all) {
      this.setState({
        all: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true
      });
    } else if (this.state.all) {
      this.setState({
        all: false,
        a: false,
        b: false,
        c: false,
        d: false,
        e: false
      });
    }
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <p>{this.props.controlName}</p>
        </Button>
        <Menu
          id="simple-menu"
          classes={{ paper: classes.menu }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.dropdownConfig.map(item => (
            <MenuItem
              key={item.name + Math.floor(Math.random() * 1000000 + 1)}
              classes={{ root: classes.menuItem }}
              disableRipple
            >
              <Checkbox
                style={{ color: '#000', padding: '0px' }}
                onChange={
                  item.value === 'all'
                    ? () => this.handleAllCheckbox()
                    : () => this.handleCheckbox(item.value)
                }
                value={item.value}
                checked={this.state[item.value]}
              />
              <p>{item.name}</p>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(DropdownWithCheckboxes);
