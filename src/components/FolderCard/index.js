import React, { useState } from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import * as C from './style';
import Icon from 'assets/icons';
import FolderMenu from 'components/FolderMenu';
import Input from 'components/shared/Input';
import { useMutation } from '@apollo/client';
import { UPDATE_FOLDER } from 'apollo/remote/mutations';

const FolderItem = ({
  folder,
  selectFolder,
  selectedFolder,
  showFolderOptions,
  folderOptionsShown,
  userId,
}) => {
  // Local state
  const [editMode, setEditMode] = useState(false);
  const [folderNameValue, setFolderNameValue] = useState(folder.folderName);

  const showOptionsHandler = (e, folderId) => {
    e.stopPropagation();
    if (folderOptionsShown === folderId) {
      showFolderOptions('');
    } else {
      showFolderOptions(folderId);
    }
  };

  const [updateFolder] = useMutation(UPDATE_FOLDER);

  return (
    <C.Wrapper
      className={folder.id === selectedFolder?.id ? 'active' : ''}
      onClick={() => selectFolder(folder)}
    >
      {editMode ? (
        <Input
          value={folderNameValue}
          onChange={e => setFolderNameValue(e.target.value)}
        />
      ) : (
        <span>{folder.folderName}</span>
      )}
      {editMode ? (
        <Icon
          style={{ marginLeft: 'auto', marginRight: 10 }}
          name="correct-symbol"
          onClick={e => {
            e.stopPropagation();
            updateFolder({
              variables: {
                id: folder.id,
                folderName: folderNameValue,
                folderDesc: folder.folderDesc
              }
            });
            setEditMode(!editMode);
          }}
        />
      ) : (
        <Icon
          style={{ marginLeft: 'auto', marginRight: 10 }}
          name="edit"
          onClick={e => {
            e.stopPropagation();
            setEditMode(!editMode);
          }}
        />
      )}
      <Manager>
        <Reference>
          {({ ref }) => (
            <div ref={ref} onClick={e => showOptionsHandler(e, folder.id)}>
              <Icon name="settings" />
            </div>
          )}
        </Reference>
        {folderOptionsShown === folder.id && (
          <Popper>
            {({ ref, style, placement, arrowProps }) => (
              <div
                ref={ref}
                style={style}
                data-placement={placement}
                onMouseLeave={e => showOptionsHandler(e, folder.id)}
              >
                <FolderMenu folder={folder} userId={userId} />
                <div ref={arrowProps.ref} style={arrowProps.style} />
              </div>
            )}
          </Popper>
        )}
      </Manager>
    </C.Wrapper>
  );
};

export default FolderItem;
