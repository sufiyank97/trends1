import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import ReactModal from 'react-modal';

import ShareModalContent from 'components/ShareModal';
import * as C from './style';
import { useMutation } from '@apollo/client';
import { DELETE_FOLDER } from 'apollo/remote/mutations';
import { GET_FOLDERS } from 'apollo/remote/queries';

const FolderMenu = ({ folder, userId }) => {
  const { formatMessage } = useIntl();
  const [modalOpen, setModalOpen] = useState(false);

  const [deleteFolder] = useMutation(DELETE_FOLDER, {
    update: (cache, { data: { deletedFolder } }) => {
      const { getFolderByUserId } = cache.readQuery({
        query: GET_FOLDERS,
        variables: { userId }
      });
      cache.writeQuery({
        query: GET_FOLDERS,
        variables: { userId },
        data: {
          getFolderByUserId: getFolderByUserId.filter(
            item => item.id !== deletedFolder.id
          )
        }
      });
    }
  });

  return (
    <>
      <C.ListWrapper>
        <C.ListItem
          onClick={e => {
            e.stopPropagation();

            setModalOpen(true);
          }}
        >
          {formatMessage({ id: 'folder.share' })}
        </C.ListItem>
        <C.ListItem
          onClick={e => {
            e.stopPropagation();

            deleteFolder({ variables: { id: folder.id } });
          }}
        >
          {formatMessage({ id: 'folder.delete' })}
        </C.ListItem>
      </C.ListWrapper>
      <ReactModal
        isOpen={modalOpen}
        style={{
          overlay: {
            zIndex: 20
          },
          content: {
            padding: 0,
            maxWidth: 900,
            maxHeight: 700,
            marginRight: 'auto',
            marginLeft: 'auto'
          }
        }}
      >
        <ShareModalContent setModalOpen={setModalOpen} />
      </ReactModal>
    </>
  );
};

export default FolderMenu;
