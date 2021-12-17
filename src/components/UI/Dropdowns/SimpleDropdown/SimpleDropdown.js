import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import * as Comps from './SimpleDropdown.style';

class SimpleDropdown extends Component {
  state = {
    anchorEl: null,
    selectedOption: {
      value: '',
      index: 1
    }
  };

  /* EVENT HANDLERS */

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleEmptyClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelection = (item, index) => {
    this.setState({
      anchorEl: null,
      selectedOption: {
        ...this.state.selectedOption,
        value: item.name,
        index
      }
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Comps.OptionsWrapper>
          <Comps.Options
            aria-owns={anchorEl ? 'options' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <p>{this.state.selectedOption.value}</p>
          </Comps.Options>
        </Comps.OptionsWrapper>
        <Menu
          id="options"
          classes={{ paper: classes.menu }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleEmptyClose}
        >
          {this.props.options.map((item, index) => (
            <Comps.StyledMenuItem
              key={index + Math.floor(Math.random() * 1000000 + 1)}
              onClick={() => this.handleSelection(item, index)}
              disableRipple
            >
              <p>{item.name}</p>
            </Comps.StyledMenuItem>
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

export default withStyles(Comps.styles)(SimpleDropdown);
