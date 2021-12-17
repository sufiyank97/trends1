import React, { useReducer, useEffect, useCallback } from 'react';
import {
  useQuery,
  useMutation,
  useApolloClient,
  useReactiveVar
} from '@apollo/client';
import { injectIntl } from 'react-intl';
import { get as _get } from 'lodash';

import * as C from './style';
import Checkbox from 'components/UI/Checkbox/Checkbox';
import Input from 'components/shared/Input';
import Icon from 'assets/icons';
import DashboardCard from 'components/DashboardCard';
import FolderCard from 'components/FolderCard';
import { GET_CURRENT_USER, GET_SELECTED_FOLDER } from 'apollo/local/queries';
import {
  GET_FOLDERS,
  GET_SHARED_FOLDERS,
  GET_DASHBOARDS_BY_FOLDER_ID
} from 'apollo/remote/queries';
import {
  CREATE_FOLDER,
  CREATE_DASHBOARD,
  DELETE_DASHBOARD
} from 'apollo/remote/mutations';
import { currentUser } from 'apollo/client';

const DBManagement = ({ intl }) => {
  // Local state
  const initialState = {
    folderCreationShown: false,
    dashboardCreationShown: false,
    selectedFolder: null,
    shownFolders: 'userFolders',
    folderCreationValue: '',
    dashboardCreationValue: '',
    folderSearchValue: '',
    dashboardSearchValue: '',
    showFolderOptions: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'toggleAddInput':
        return { ...state, [action.key]: !state[action.key] };
      case 'toggleFoldersFilter':
        return { ...state, shownFolders: action.key };
      case 'changeInputValue':
        return { ...state, [action.key]: action.value };
      case 'showFolderOptions':
        return { ...state, showFolderOptions: action.folderId };
      case 'selectFolder':
        return { ...state, selectedFolder: action.folder };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Track active folders tab
  useEffect(() => {}, [state.shownFolders]);

  // Apollo
  const client = useApolloClient();

  const user = useReactiveVar(currentUser);

  console.log(user, 'user from management');

  const { data: userFoldersData, foldersLoading, foldersError } = useQuery(
    GET_FOLDERS,
    {
      variables: {
        userId: user.id
      }
    }
  );

  console.log(userFoldersData, 'user folders data');

  const {
    // data: { getSharedFoldersByUserId: sharedFolders },
    data: sharedFoldersData,
    sharedFoldersLoading,
    sharedFoldersError
  } = useQuery(GET_SHARED_FOLDERS, {
    variables: {
      userId: user.id
    }
  });

  console.log(sharedFoldersData, 'shared folders data');

  const {
    // data: { selectedFolder }
    data: selectedFolderData
  } = useQuery(GET_SELECTED_FOLDER);

  console.log(selectedFolderData, 'selected folder data');

  const { selectedFolder } = state;

  const userFolders = _get(userFoldersData, 'getFolderByUserId', []);
  const sharedFolders = _get(sharedFoldersData, 'getSharedFoldersByUserId', []);

  const { data, dashboardsLoading, dashboardsError } = useQuery(
    GET_DASHBOARDS_BY_FOLDER_ID,
    {
      variables: {
        folderId: selectedFolder?.id || null
      },
      skip: !selectedFolder
    }
  );

  const [createFolder] = useMutation(CREATE_FOLDER, {
    variables: {
      userid: user.id,
      folderDesc: state.folderCreationValue,
      folderName: state.folderCreationValue
    },
    update: (cache, { data: { createFolder } }) => {
      const { getFolderByUserId } = cache.readQuery({
        query: GET_FOLDERS,
        variables: { userId: user.id }
      });
      cache.writeQuery({
        query: GET_FOLDERS,
        variables: { userId: user.id },
        data: {
          getFolderByUserId: getFolderByUserId.concat(createFolder)
        }
      });
    }
  });

  // Create dashboard
  const [createDashboard] = useMutation(CREATE_DASHBOARD, {
    variables: {
      folderId: selectedFolder?.id || null,
      dashboardDesc: state.dashboardCreationValue,
      dashboardName: state.dashboardCreationValue
    },
    update: (cache, { data: { createDashboard } }) => {
      const { getDashboardByFolderId } = cache.readQuery({
        query: GET_DASHBOARDS_BY_FOLDER_ID,
        variables: { folderId: selectedFolder.id }
      });
      cache.writeQuery({
        query: GET_DASHBOARDS_BY_FOLDER_ID,
        variables: { folderId: selectedFolder.id },
        data: {
          getDashboardByFolderId: getDashboardByFolderId.concat(createDashboard)
        }
      });
    }
  });

  // Delete dashboard
  const [deleteDashboard] = useMutation(DELETE_DASHBOARD, {
    update: (cache, { data: { deleteDashboard } }) => {
      const { getDashboardByFolderId } = cache.readQuery({
        query: GET_DASHBOARDS_BY_FOLDER_ID,
        variables: { folderId: selectedFolder.id }
      });
      cache.writeQuery({
        query: GET_DASHBOARDS_BY_FOLDER_ID,
        variables: { folderId: selectedFolder.id },
        data: {
          getDashboardByFolderId: getDashboardByFolderId.filter(
            dashboard => dashboard.id !== deleteDashboard.id
          )
        }
      });
    }
  });

  // Local handlers
  const showFolderOptions = useCallback(folderId => {
    dispatch({ type: 'showFolderOptions', folderId });
  }, []);

  // Variables
  const selectFolder = folder => {
    dispatch({
      type: 'selectFolder',
      folder
    });
  };

  const folderItems = () => {
    let activeFolders = [];

    switch (state.shownFolders) {
      case 'userFolders':
        activeFolders = userFolders;
        break;
      case 'sharedFolders':
        activeFolders = sharedFolders;
        break;
      case 'templates':
        activeFolders = [];
        break;
      default:
        return;
    }

    if (foldersLoading) return <div>Loading</div>;
    if (foldersError) return <div>Error</div>;

    if (activeFolders) {
      // Filtering logic
      if (state.folderSearchValue) {
        return activeFolders
          .filter(item =>
            item.folderName
              .toLowerCase()
              .trim()
              .includes(state.folderSearchValue.toLowerCase().trim())
          )
          .map(folder => (
            <FolderCard
              key={folder.id}
              folder={folder}
              selectFolder={selectFolder}
              selectedFolder={selectedFolder}
              showFolderOptions={showFolderOptions}
              folderOptionsShown={state.showFolderOptions}
              userId={user.id}
            />
          ));
      }
      // Return all values if there are no filter value
      return activeFolders.map(folder => (
        <FolderCard
          key={folder.id}
          folder={folder}
          selectFolder={selectFolder}
          selectedFolder={selectedFolder || {}}
          showFolderOptions={showFolderOptions}
          folderOptionsShown={state.showFolderOptions}
          userId={user.id}
        />
      ));
    }
  };

  const dashboardItems = () => {
    const dashboards = data.getDashboardByFolderId || [];

    console.log(dashboards, 'dashboards');

    if (dashboardsLoading) return <div>Loading</div>;
    if (dashboardsError) return <div>Error</div>;

    if (dashboards.length) {
      // Filtering logic
      if (state.dashboardSearchValue) {
        return dashboards
          .filter(item =>
            item.dashboard_name
              .toLowerCase()
              .trim()
              .includes(state.dashboardSearchValue.toLowerCase().trim())
          )
          .map(dashboard => (
            <DashboardCard
              key={dashboard.id}
              id={dashboard.id}
              name={dashboard.dashboard_name}
              deleteDashboard={deleteDashboard}
            />
          ));
      }
      // Return all values if there are no filter value
      return dashboards.map(dashboard => (
        <DashboardCard
          key={dashboard.id}
          id={dashboard.id}
          name={dashboard.dashboard_name}
          deleteDashboard={deleteDashboard}
        />
      ));
    }
  };

  return (
    <C.Wrapper>
      <div className="creations-wrapper">
        <div className="add-wrapper">
          <div className="label">
            {intl.formatMessage({ id: 'dbManagement.folders' })}
          </div>
          {state.folderCreationShown ? (
            <>
              <Input
                value={state.folderCreationValue}
                onChange={e =>
                  dispatch({
                    type: 'changeInputValue',
                    key: 'folderCreationValue',
                    value: e.target.value
                  })
                }
                placeholder={intl.formatMessage({
                  id: 'dbManagement.enterFolderName'
                })}
              />

              <div
                className="create-button"
                onClick={async () => {
                  await createFolder();
                  dispatch({
                    type: 'changeInputValue',
                    key: 'folderCreationValue',
                    value: ''
                  });
                }}
              >
                {intl.formatMessage({ id: 'dbManagement.add' })}
              </div>
            </>
          ) : null}
          <div
            className="add-button"
            onClick={() =>
              dispatch({ type: 'toggleAddInput', key: 'folderCreationShown' })
            }
          >
            +
          </div>
        </div>
        <div className={`add-wrapper ${selectedFolder ? null : 'disabled'}`}>
          <div className="label">
            {intl.formatMessage({ id: 'dbManagement.dashboards' })}
          </div>
          {state.dashboardCreationShown ? (
            <>
              <Input
                value={state.dashboardCreationValue}
                onChange={e =>
                  dispatch({
                    type: 'changeInputValue',
                    key: 'dashboardCreationValue',
                    value: e.target.value
                  })
                }
                placeholder={intl.formatMessage({
                  id: 'dbManagement.enterDashboardName'
                })}
              />
              <div
                className="create-button"
                onClick={async () => {
                  await createDashboard();
                  dispatch({
                    type: 'changeInputValue',
                    key: 'dashboardCreationValue',
                    value: ''
                  });
                }}
              >
                {intl.formatMessage({ id: 'dbManagement.add' })}
              </div>
            </>
          ) : null}
          <div
            className="add-button"
            onClick={() =>
              dispatch({
                type: 'toggleAddInput',
                key: 'dashboardCreationShown'
              })
            }
          >
            +
          </div>
        </div>
      </div>
      <span>Show</span>
      <div className="filters-wrapper">
        <div
          className="checkbox-wrapper"
          onClick={() =>
            dispatch({ type: 'toggleFoldersFilter', key: 'userFolders' })
          }
        >
          <Checkbox checked={state.shownFolders === 'userFolders'} />
          <span>{intl.formatMessage({ id: 'dbManagement.myFolders' })}</span>
        </div>
        <div
          className="checkbox-wrapper"
          onClick={() =>
            dispatch({
              type: 'toggleFoldersFilter',
              key: 'sharedFolders'
            })
          }
        >
          <Checkbox checked={state.shownFolders === 'sharedFolders'} />
          <span>{intl.formatMessage({ id: 'dbManagement.sharedWithMe' })}</span>
        </div>
        <div
          className="checkbox-wrapper"
          onClick={() =>
            dispatch({
              type: 'toggleFoldersFilter',
              key: 'templates'
            })
          }
        >
          <Checkbox checked={state.shownFolders === 'templates'} />
          <span>{intl.formatMessage({ id: 'dbManagement.templates' })}</span>
        </div>
      </div>
      <div className="lists-wrapper">
        <div className="folders-list-wrapper">
          <div className="field-wrapper">
            <Input
              value={state.folderSearchValue}
              onChange={e =>
                dispatch({
                  type: 'changeInputValue',
                  key: 'folderSearchValue',
                  value: e.target.value
                })
              }
              placeholder={intl.formatMessage({
                id: 'dbManagement.searchForFolders'
              })}
            />
            <Icon name="search" />
          </div>
          <div className="list">{folderItems()}</div>
        </div>
        <div className="dashboards-list-wrapper">
          <div className="field-wrapper">
            <Input
              value={state.dashboardSearchValue}
              onChange={e =>
                dispatch({
                  type: 'changeInputValue',
                  key: 'dashboardSearchValue',
                  value: e.target.value
                })
              }
              placeholder={intl.formatMessage({
                id: 'dbManagement.searchForDashboards'
              })}
            />
            <Icon name="search" />
          </div>
          <div className="list">
            {data && data.getDashboardByFolderId ? (
              data.getDashboardByFolderId.length ? (
                dashboardItems()
              ) : (
                <div className="empty">Empty folder</div>
              )
            ) : (
              <div className="empty">Select folder</div>
            )}
          </div>
        </div>
      </div>
    </C.Wrapper>
  );
};

export default injectIntl(DBManagement);
