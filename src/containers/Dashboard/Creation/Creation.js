import React, { useReducer } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import { injectIntl } from 'react-intl';

import * as C from './Creation.style';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';
import {
  GET_CURRENT_USER,
  GET_SELECTED_FOLDER
} from '../../../apollo/local/queries';
import {
  GET_FOLDERS,
  GET_DASHBOARDS_BY_FOLDER_ID
} from '../../../apollo/remote/queries';
import { CREATE_FOLDER } from '../../../apollo/remote/mutations';

const DBManagement = ({ intl }) => {
  // Hooks
  const initialState = {
    folderCreationShown: false,
    dashboardCreationShown: false,
    myFoldersShown: false,
    sharedWithMeShown: false,
    folderCreationValue: '',
    dashboardCreationValue: '',
    folderSearchValue: '',
    dashboardSearchValue: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'toggleAddInput':
        return { ...state, [action.key]: !state[action.key] };
      case 'toggleFoldersFilter':
        return { ...state, [action.key]: !state[action.key] };
      case 'changeInputValue':
        return { ...state, [action.key]: action.value };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Apollo
  const client = useApolloClient();

  const {
    data: { currentUser }
  } = useQuery(GET_CURRENT_USER);

  const {
    data: { getFolderByUserId },
    foldersLoading,
    foldersError
  } = useQuery(GET_FOLDERS, {
    variables: {
      userId: currentUser.id
    }
  });

  const {
    data: { selectedFolder }
  } = useQuery(GET_SELECTED_FOLDER);

  const { data } = useQuery(GET_DASHBOARDS_BY_FOLDER_ID, {
    variables: {
      folderId: selectedFolder ? selectedFolder.id : null
    },
    skip: !selectedFolder
  });

  const [createFolder] = useMutation(CREATE_FOLDER, {
    variables: {
      userid: currentUser.id,
      folderDesc: state.folderCreationValue,
      folderName: state.folderCreationValue
    },
    update: (cache, { data: { createFolder } }) => {
      const { getFolderByUserId } = cache.readQuery({
        query: GET_FOLDERS,
        variables: { userId: currentUser.id }
      });
      cache.writeQuery({
        query: GET_FOLDERS,
        variables: { userId: currentUser.id },
        data: {
          getFolderByUserId: getFolderByUserId.concat(createFolder)
        }
      });
    }
  });

  // Variables
  const selectFolder = folder => {
    client.writeData({
      data: {
        selectedFolder: folder
      }
    });
  };

  const folderItems = () => {
    if (foldersLoading) return <div>Loading</div>;
    if (foldersError) return <div>Error</div>;

    if (getFolderByUserId) {
      // Filtering logic
      if (state.folderSearchValue) {
        return getFolderByUserId
          .filter(item =>
            item.folderName
              .toLowerCase()
              .trim()
              .includes(state.folderSearchValue.toLowerCase().trim())
          )
          .map(folder => (
            <div
              key={folder.id}
              className={`list-item ${
                selectedFolder && selectedFolder.id === folder.id
                  ? 'active'
                  : null
              }`}
              onClick={() => selectFolder(folder)}
            >
              <p>{folder.folderName}</p>
              <p>{folder.folderDesc}</p>
            </div>
          ));
      }
      return getFolderByUserId.map(folder => (
        <div
          key={folder.id}
          className={`list-item ${
            selectedFolder && selectedFolder.id === folder.id ? 'active' : null
          }`}
          onClick={() => selectFolder(folder)}
        >
          <p>{folder.folderName}</p>
          <p>{folder.folderDesc}</p>
        </div>
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
              <input
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
              <input
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
              <div className="create-button">
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
      <div className="filters-wrapper">
        <div
          className="checkbox-wrapper"
          onClick={() =>
            dispatch({ type: 'toggleFoldersFilter', key: 'myFoldersShown' })
          }
        >
          <Checkbox checked={state.myFoldersShown} />
          <span>{intl.formatMessage({ id: 'dbManagement.myFolders' })}</span>
        </div>
        <div
          className="checkbox-wrapper"
          onClick={() =>
            dispatch({
              type: 'toggleFoldersFilter',
              key: 'sharedWithMeShown'
            })
          }
        >
          <Checkbox checked={state.sharedWithMeShown} />
          <span>{intl.formatMessage({ id: 'dbManagement.sharedWithMe' })}</span>
        </div>
      </div>
      <div className="lists-wrapper">
        <div className="folders-list-wrapper">
          <input
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
          <div className="list">{folderItems()}</div>
        </div>
        <div className="dashboards-list-wrapper">
          <input
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
          <div className="list">
            {data && data.getDashboardByFolderId ? (
              data.getDashboardByFolderId.length ? (
                data.getDashboardByFolderId.map(dashboard => (
                  <div key={dashboard.id} className="list-item">
                    {dashboard.dashboard_name}
                  </div>
                ))
              ) : (
                <div className="empty">Empty folder</div>
              )
            ) : (
              <div className="empty">Selected folder</div>
            )}
          </div>
        </div>
      </div>
    </C.Wrapper>
  );
};

export default injectIntl(DBManagement);
