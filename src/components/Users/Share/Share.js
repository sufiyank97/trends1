import React, { Component } from 'react';
import * as Comps from './Share.style';
import searchSymbol from '../../../assets/images/search.svg';
import SimpleDropdown from '../../UI/Dropdowns/SimpleDropdown/SimpleDropdown';

class Share extends Component {
  state = {
    usersSearchValue: ''
  };

  render() {
    return (
      <Comps.Wrapper>
        <Comps.SearchUsers>
          <input
            placeholder="Search users..."
            value={this.state.usersSearchValue}
            type="text"
          />
          <button type="submit">
            <img src={searchSymbol} alt="Search icon" />
          </button>
        </Comps.SearchUsers>
        <Comps.UsersWrapper>
          <Comps.UsersContainer>
            <Comps.UserCard>
              <img src={searchSymbol} alt="Avatar" />
              <div>
                <p>Test Name</p>
                <SimpleDropdown options={this.props.optionsForDropdown} />
              </div>
            </Comps.UserCard>
          </Comps.UsersContainer>
          <Comps.SelectedUsersContainer>
            <Comps.SelectedUserCard>
              <img src={searchSymbol} alt="Avatar" />
              <div>
                <p>Test Name</p>
                <SimpleDropdown options={this.props.optionsForDropdown} />
              </div>
            </Comps.SelectedUserCard>
          </Comps.SelectedUsersContainer>
        </Comps.UsersWrapper>
      </Comps.Wrapper>
    );
  }
}

export default Share;
