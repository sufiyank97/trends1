import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation, useReactiveVar } from '@apollo/client';
import { useIntl } from 'react-intl';
import produce from 'immer';

import * as C from './style';
import actions from 'redux/lang/actions';
import structureActions from 'redux/structure/actions';
import { highchartLocales } from 'settings/config';
import { GET_CURRENT_USER } from 'apollo/local/queries';
import { GET_USER_TEAMS } from 'apollo/remote/queries';
import { UPDATE_USER_PROFILE } from 'apollo/remote/mutations';
import Icon from 'assets/icons';
import Input from 'components/shared/Input';
import CustomSelect from 'components/shared/Select';
import { Button } from 'components/shared/Button';
import { currentUser } from 'apollo/client';

const Highcharts = require('highcharts');

const Profile = ({ profileOpen, setProfileOpen }) => {
  // Local state
  const initialState = {
    teamValue: '',
    langValue: '',
    edit: {
      username: false,
      password: false
    },
    inputValues: {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    }
  };

  const reducer = produce((draft, action) => {
    switch (action.type) {
      case 'toggleEditState':
        draft.edit[action.fieldKey] = !draft.edit[action.fieldKey];
        return;
      case 'closeEditState':
        draft.edit = { username: false, password: false };
        draft.inputValues = initialState.inputValues;
        return;
      case 'selectTeam':
        draft.teamValue = action.value;
        return;
      case 'selectLanguage':
        draft.langValue = action.value;
        return;
      case 'setInputValue':
        draft.inputValues[action.fieldKey] = action.value;
        return;
    }
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const user = useReactiveVar(currentUser);

  console.log(user, 'USR');

  const {
    data: { getTeamUsers }
  } = useQuery(GET_USER_TEAMS, {
    variables: {
      userid: user.id
    },
    skip: !user.id
  });

  const [updateUserProfile] = useMutation(UPDATE_USER_PROFILE, {
    variables: {
      email: user.userEmail,
      firstName: state.inputValues.firstName || user.userName,
      middleName: null,
      lastName: state.inputValues.lastName || user.lastName,
      userName: user.userName,
      // password: 'testtest'
    },
    update: (cache, { data: { updateUserProfile } }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: {
          user: updateUserProfile
        }
      });
    }
  });

  const dispatchRedux = useDispatch();
  const language = useSelector(state => state.lang.language);
  const teamId = useSelector(state => state.structure.team_id);

  const switchLanguageHandler = language =>
    dispatchRedux(actions.switchLanguage(language));
  const switchStructureHandler = (structure, teamId) =>
    dispatchRedux(structureActions.setStructure(structure, teamId));

  const intl = useIntl();

  const langOptions = [
    {
      label: 'Russian',
      value: 'ru'
    },
    {
      label: 'English',
      value: 'en'
    }
  ];

  const teamsOptions = getTeamUsers
    ? getTeamUsers.map(team => ({
        label: team.team_name,
        value: team.team_id
      }))
    : [];

  // Set team for select according to currently selected team
  useEffect(() => {
    if (teamId) {
      const userTeam = getTeamUsers.find(item => item.team_id === teamId);

      selectTeamHandler({
        label: userTeam.team_name,
        value: userTeam.team_id
      });
    }
  }, [teamId]);

  // Set language for select according to currently selected language
  useEffect(() => {
    if (language) {
      selectLangHandler({
        label: language.text,
        value: language.locale
      });
    }
  }, []);

  // Handlers
  // Reset password values
  const resetPasswordValues = () => {
    dispatch({
      type: 'setInputValue',
      fieldKey: 'password',
      value: ''
    });
    dispatch({
      type: 'setInputValue',
      fieldKey: 'confirmPassword',
      value: ''
    });
  };

  // Reset names values
  const resetNamesValues = () => {
    dispatch({
      type: 'setInputValue',
      fieldKey: 'firstName',
      value: ''
    });
    dispatch({
      type: 'setInputValue',
      fieldKey: 'lastName',
      value: ''
    });
  };

  // Toggle edit mode for every field
  const toggleEditHandler = fieldKey => {
    dispatch({
      type: 'toggleEditState',
      fieldKey
    });
    // Set current firstName and lastName as a default values
    if (fieldKey === 'username') {
      dispatch({
        type: 'setInputValue',
        fieldKey: 'firstName',
        value: user.firstName
      });
      dispatch({
        type: 'setInputValue',
        fieldKey: 'lastName',
        value: user.lastName
      });
      // Reset entered values when press cancel icon
      if (state.edit[fieldKey]) {
        resetNamesValues();
      }
    }

    // Reset entered password and confirm password when press cancel icon
    if (fieldKey === 'password' && state.edit[fieldKey]) {
      resetPasswordValues();
    }
  };

  // Set edit state to false for all fields
  const closeEditStateHandler = () => {
    dispatch({ type: 'closeEditState' });
  };

  // OnChange handler for inputs
  const onChangeInputHandler = (fieldKey, value) => {
    dispatch({
      type: 'setInputValue',
      fieldKey,
      value
    });
  };

  // Select team
  const selectTeamHandler = value => {
    dispatch({
      type: 'selectTeam',
      value
    });
  };

  // Select language
  const selectLangHandler = value => {
    dispatch({
      type: 'selectLanguage',
      value
    });
  };

  // Save button handler
  const saveHandler = () => {
    // Change language
    Highcharts.setOptions(highchartLocales[state.langValue.value].options);
    switchLanguageHandler(state.langValue.label.toLowerCase());

    // Change json structure if we team is selected
    if (state.teamValue) {
      const structure = JSON.parse(
        getTeamUsers.find(item => item.team_id === state.teamValue.value)
          .structure
      );
      switchStructureHandler(structure, state.teamValue.value);
    }

    // Update user profile
    updateUserProfile();

    // Close edit state
    closeEditStateHandler();
  };

  console.log(state, 'state');

  return (
    <C.Wrapper className={profileOpen ? 'active' : ''}>
      <C.CloseIconWrapper onClick={() => setProfileOpen(false)}>
        <Icon name="close" />
      </C.CloseIconWrapper>
      <C.Heading>{intl.formatMessage({ id: 'profile.userProfile' })}</C.Heading>

      <C.SectionWrapper>
        <C.SectionHeading>
          {intl.formatMessage({ id: 'profile.myAccount' })}
        </C.SectionHeading>

        <C.SectionContent>
          <C.TextWithLabelWrapper>
            <C.TextWithLabel>
              <div className="label">
                <span>{intl.formatMessage({ id: 'profile.username' })}</span>
                <Icon
                  name={state.edit.username ? 'cancel' : 'edit'}
                  onClick={() => toggleEditHandler('username')}
                />
              </div>
              {state.edit.username ? (
                <>
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'profile.firstName'
                    })}
                    value={state.inputValues.firstName}
                    onChange={e =>
                      onChangeInputHandler('firstName', e.target.value)
                    }
                  />
                  <Input
                    placeholder={intl.formatMessage({ id: 'profile.lastName' })}
                    value={state.inputValues.lastName}
                    onChange={e =>
                      onChangeInputHandler('lastName', e.target.value)
                    }
                  />
                </>
              ) : (
                <span>{`${user.userName} ${user.middleName || ''}`}</span>
              )}
            </C.TextWithLabel>

            <C.TextWithLabel>
              <div className="label">
                <span>{intl.formatMessage({ id: 'profile.email' })}</span>
              </div>
              <span>{user.userEmail}</span>
            </C.TextWithLabel>

            <C.TextWithLabel>
              <div className="label">
                <span>{intl.formatMessage({ id: 'profile.password' })}</span>
                <Icon
                  name={state.edit.password ? 'cancel' : 'edit'}
                  onClick={() => toggleEditHandler('password')}
                />
              </div>
              {state.edit.password ? (
                <>
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'profile.newPassword'
                    })}
                    value={state.inputValues.password}
                    onChange={e =>
                      onChangeInputHandler('password', e.target.value)
                    }
                  />
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'profile.confirmNewPassword'
                    })}
                    value={state.inputValues.confirmPassword}
                    onChange={e =>
                      onChangeInputHandler('confirmPassword', e.target.value)
                    }
                  />
                </>
              ) : (
                <span>•••••••</span>
              )}
            </C.TextWithLabel>
          </C.TextWithLabelWrapper>
          <C.Avatar />
        </C.SectionContent>
      </C.SectionWrapper>

      <C.SectionWrapper>
        <C.SectionHeading>
          {intl.formatMessage({ id: 'profile.teams' })}
        </C.SectionHeading>

        <C.SectionContent>
          <C.SelectWrapper>
            <span>{intl.formatMessage({ id: 'profile.selectTeam' })}</span>
            <CustomSelect
              options={teamsOptions}
              value={state.teamValue}
              onChange={e => selectTeamHandler(e)}
            />
          </C.SelectWrapper>
        </C.SectionContent>
      </C.SectionWrapper>

      <C.SectionWrapper>
        <C.SectionHeading>
          {intl.formatMessage({ id: 'profile.languageSetting' })}
        </C.SectionHeading>

        <C.SectionContent>
          <C.SelectWrapper>
            <span>{intl.formatMessage({ id: 'profile.selectLanguage' })}</span>
            <CustomSelect
              options={langOptions}
              value={state.langValue}
              onChange={e => selectLangHandler(e)}
            />
          </C.SelectWrapper>
        </C.SectionContent>
      </C.SectionWrapper>

      <C.ButtonsWrapper>
        <Button onClick={() => saveHandler()}>
          {intl.formatMessage({ id: 'profile.save' })}
        </Button>
        <Button onClick={() => closeEditStateHandler()}>
          {intl.formatMessage({ id: 'profile.cancel' })}
        </Button>
      </C.ButtonsWrapper>
    </C.Wrapper>
  );
};

export default Profile;
