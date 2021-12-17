import React, { Component } from 'react';
import * as Comps from './Regions.style';

class Regions extends Component {
  state = {
    filterValue: ''
  };

  inputChangeHandler = (value, id) => {
    this.setState({ [id]: value });
  };

  render() {
    return (
      <Comps.Wrapper>
        <Comps.Topbar>
          <Comps.StyledInput
            id="filtervalue"
            value={this.state.filterValue}
            onChange={event =>
              this.inputChangeHandler(event.target.value, event.target.id)
            }
          />
        </Comps.Topbar>
        <Comps.Content />
      </Comps.Wrapper>
    );
  }
}

export default Regions;
