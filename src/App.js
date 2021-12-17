import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { connect } from 'react-redux';

import Layout from './containers/MainTab';
import Auth from './containers/Auth/Auth';
import Notification from './components/Notification/Notification';
import { GET_CURRENT_USER } from './apollo/local/queries';
import { GET_USER_TEAMS } from './apollo/remote/queries';
import structureActions from './redux/structure/actions';
import { useQuery, useReactiveVar } from '@apollo/client';
import { currentUser } from 'apollo/client';

const App = ({ structure, setStructure }) => {
  const [cookies, setCookie] = useCookies(['user']);

  const user = useReactiveVar(currentUser);

  const { data } = useQuery(GET_USER_TEAMS, {
    variables: {
      userid: user ? user.id : 0
    },
    skip: user ? !user.id : null
  });

  // console.log(user, 'current user from App.js');

  // Save user from Cookies into Apollo
  useEffect(() => {
    if (cookies.user) {
      currentUser({ ...cookies.user });
    }
  }, []);

  useEffect(() => {
    if (data && data.getTeamUsers) {
      if (data.getTeamUsers) {
        setStructure(
          data.getTeamUsers[0]
            ? JSON.parse(data.getTeamUsers[0].structure)
            : '',
          data.getTeamUsers[0] ? data.getTeamUsers[0].team_id : ''
        );
      }
    }
  }, [data]);

  return (
    <>
      {user && user.userName ? <Layout /> : <Auth />}
      {/* {user && user.userName ? <Auth /> : <Layout />} */}
      {user && user.userName && !cookies.user ? (
        <Notification setCookie={setCookie} currentUser={user} />
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  structure: state.structure.structure
});

const mapDispatchToProps = dispatch => ({
  setStructure: (structure, teamId) =>
    dispatch(structureActions.setStructure(structure, teamId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
