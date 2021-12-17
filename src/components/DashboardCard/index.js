import React, { useState } from 'react';
import ReactModal from 'react-modal';

import * as C from './style';
import { DangerButton } from 'components/shared/Button';
import Icon from 'assets/icons';
import AlertModalContent from 'components/AlertModal';

const DashboardCard = ({ name, deleteDashboard, id }) => {
  const [active, setActive] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  console.log(id, 'dashboard ID');

  return (
    <>
      <C.Wrapper className={active ? 'active' : ''}>
        <div className="heading" onClick={() => setActive(!active)}>
          <span>{name}</span>
          <DangerButton
            style={{ marginLeft: 'auto' }}
            onClick={() => {
              console.log('Delete dashboard');
              deleteDashboard({ variables: { id } });
            }}
          >
            Delete
          </DangerButton>
          <C.IconWrapper
            onClick={e => {
              e.stopPropagation();
              setModalOpen(true);
            }}
          >
            <Icon name="alarm" />
          </C.IconWrapper>
          <span>1920 products</span>
        </div>
        <div className="content">
          <div className="inner-wrapper">
            <div className="chart-wrapper">Chart placeholder</div>
            <div className="images-wrapper">
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
              <div className="image" />
            </div>
          </div>
        </div>
      </C.Wrapper>

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
        <AlertModalContent setModalOpen={setModalOpen} />
      </ReactModal>
    </>
  );
};

export default DashboardCard;
