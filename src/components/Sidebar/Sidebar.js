import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useIntl } from 'react-intl';
import { useApolloClient } from '@apollo/client';
import { useSelector } from 'react-redux';

import { MainWrapper, Wrapper, NavItem, NavItemLink } from './Sidebar.style';
import Filter from './Filters';
import OldFilter from 'containers/Filter/Filter';
import Icon from 'assets/icons';
import Profile from 'containers/Profile';
import Management from 'containers/Management';

const Sidebar = ({ match, ...props }) => {
  // Apollo
  const client = useApolloClient();

  // Open/hide filter bar
  const [filterOpen, setFilterOpen] = useState(false);

  // Open/hide profile bar
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Pin/unpin filter bar
  const [filterPinned, setFilterPinned] = useState(false);

  // Localization
  const intl = useIntl();

  // Cookies
  const [, , removeCookie] = useCookies(['cookie-name']);

  // Handlers
  const toggleFilterHandler = useCallback(() => {
    setFilterOpen(!filterOpen);
    setDrawerOpen(false);
  }, [filterOpen]);

  const toggleDrawerHandler = useCallback(
    drawerId => {
      setFilterPinned(false);
      setFilterOpen(false);
      setDrawerOpen(drawerOpen === drawerId ? false : drawerId);
    },
    [drawerOpen]
  );

  /*// Handlers
  const toggleContent = event => {
    if (drawer && drawer === event.target.id) {
      toggleDrawer(false);
    } else {
      toggleDrawer(event.target.id);
    }
  };

  let content = null;

  if (drawer === 'management') {
    content = <ManageDB />;
  } else if (drawer === 'filter') {
    content = (
      <FilterWrapper>
        <InputWrapper className="input-wrapper">
          <InputButton>
            <img src={search} alt="Search icon" />
            <img src={arrow} alt="Arrow icon" />
          </InputButton>
          <Input
            placeholder={intl.formatMessage({
              id: 'sidebar.searchBrandsTrendsAndMore'
            })}
          />
        </InputWrapper>
        <Filters />
      </FilterWrapper>
    );
  }*/

  // Redux
  const structure = useSelector(state => state.structure.structure);

  return (
    <MainWrapper>
      {/*<OldFilter />*/}
      <Wrapper>
        {filterPinned ? null : (
          <Filter filterOpen={filterOpen} setFilterPinned={setFilterPinned} />
        )}
        {drawerOpen === 'profile' ? (
          <Profile
            profileOpen={drawerOpen === 'profile'}
            setProfileOpen={setDrawerOpen}
          />
        ) : null}
        {drawerOpen === 'management' ? <Management /> : null}
        {/* {drawer ? <Drawer toggleDrawer={toggleDrawer}>{content}</Drawer> : null}

      <div className="top-part">
        <div
          id="management"
          className={`${
            drawer === "management" ? "active" : null
          } nav-item drawerOutside`}
          onClick={event => toggleContent(event)}
        >
          <img src={placeholderIcon} alt="Button" />
          <IntlMessages id="sidebar.dbManagement" />
        </div>

        <div
          id="filter"
          className={`${
            drawer === "filter" ? "active" : null
          } nav-item drawerOutside`}
          onClick={event => toggleContent(event)}
        >
          <img src={placeholderIcon} alt="Button" />
          <IntlMessages id="sidebar.filter" />
        </div>

        {structure.tabs
          ? Object.keys(structure.tabs).map((tabKey, index) => (
              <NavLink
                key={structure.tabs[tabKey].id}
                to={`/${structure.tabs[tabKey].id}`}
                exact
                activeClassName="selected"
              >
                <div
                  className="nav-item"
                  id={index === 0 ? "first-nav-item" : null}
                >
                  <Icon className="icon" name={structure.tabs[tabKey].id} />
                  <p>{structure.tabs[tabKey].name}</p>
                </div>
              </NavLink>
            ))
          : null}
      </div>
      <div className="bottom-part">
        <NavLink to="/profile" exact activeClassName="selected">
          <div className="nav-item">
            <img src={merchandiserIcon} alt="Button" />
            <p>Profile</p>
          </div>
        </NavLink>
        <div
          className="nav-item drawerOutside"
          onClick={() => {
            client.writeData({
              data: {
                currentUser: { id: 0, __typename: "currentUser" }
              }
            });
            removeCookie("user", { path: "/" });
          }}
        >
          <img src={placeholderIcon} alt="Button" />
          <IntlMessages id="sidebar.logout" />
        </div>
      </div> */}
        <NavItem
          className={drawerOpen === 'management' ? 'active' : ''}
          onClick={() => toggleDrawerHandler('management')}
        >
          <Icon name="placeholder" />
          <span>{intl.formatMessage({ id: 'sidebar.dbManagement' })}</span>
        </NavItem>
        {structure.tabs
          ? Object.keys(structure.tabs).map(tabKey => (
              <NavItemLink
                key={structure.tabs[tabKey].id}
                to={`/${structure.tabs[tabKey].id}`}
                exact
                activeClassName={!drawerOpen ? 'active' : ''}
                onClick={() => toggleFilterHandler()}
              >
                <Icon name={structure.tabs[tabKey].id} />
                {intl.formatMessage({
                  id: `sidebar.${structure.tabs[tabKey].name.toLowerCase()}`
                })}
              </NavItemLink>
            ))
          : null}
        <NavItem
          className={drawerOpen === 'profile' ? 'active' : ''}
          style={{ marginTop: 'auto' }}
          onClick={() => toggleDrawerHandler('profile')}
        >
          <Icon name="merchandiser" />
          <span>{intl.formatMessage({ id: 'sidebar.myProfile' })}</span>
        </NavItem>
        <NavItem
          onClick={() => {
            client.writeData({
              data: {
                currentUser: { id: 0, __typename: 'currentUser' }
              }
            });
            removeCookie('user', { path: '/' });
          }}
        >
          <Icon name="logout" />
          <span>{intl.formatMessage({ id: 'sidebar.logout' })}</span>
        </NavItem>
      </Wrapper>
      {filterPinned ? (
        <Filter filterPinned={filterPinned} setFilterPinned={setFilterPinned} />
      ) : null}
    </MainWrapper>
  );
};

export default withRouter(Sidebar);
