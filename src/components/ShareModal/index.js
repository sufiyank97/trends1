import React from 'react';
import { useIntl } from 'react-intl';

import Input from 'components/shared/Input';
import * as C from './style';
import Icon from 'assets/icons';
import avatarPlaceholder from 'assets/images/avatar-placeholder.png';
import { Button } from 'components/shared/Button';

// TODO: replace later with real data from API
const ADDED_DATA = [
  {
    id: 'aadqdwdq',
    name: 'John Roberts'
  },
  {
    id: 'hfbhbfwewefb',
    name: 'Diego Rodrigezz'
  }
];

const UNADDED_DATA = [
  {
    id: 'dbhjvbsd',
    name: 'Miranda Murey'
  },
  {
    id: 'dbhsddjvbsd',
    name: 'Emma Wellfried'
  },
  {
    id: 'ddssddsbhjvbsd',
    name: 'Ostin Dolbart'
  }
];

const ShareModal = ({ setModalOpen }) => {
  // Localization
  const intl = useIntl();

  return (
    <C.Wrapper>
      <C.ModalHeading>Share Folders</C.ModalHeading>
      <C.FieldWrapper>
        <Input
          placeholder={intl.formatMessage({
            id: 'dbManagement.searchForTeamMembers'
          })}
        />
        <Icon name="search" />
      </C.FieldWrapper>

      <C.SectionsWrapper>
        <C.NonAddedSection>
          {UNADDED_DATA.map(item => (
            <C.NonAddedItem>
              <C.ItemImage>
                <img src={avatarPlaceholder} alt="" />
              </C.ItemImage>
              <C.ItemInfo>
                <div className="name">{item.name}</div>
              </C.ItemInfo>
            </C.NonAddedItem>
          ))}
        </C.NonAddedSection>

        <C.AddedSection>
          {ADDED_DATA.map(item => (
            <C.AddedItem>
              <C.ItemImage>
                <img src={avatarPlaceholder} alt="" />
              </C.ItemImage>
              <C.ItemInfo>
                <div className="name">{item.name}</div>
              </C.ItemInfo>
            </C.AddedItem>
          ))}
        </C.AddedSection>
      </C.SectionsWrapper>

      <C.ButtonsWrapper>
        <Button onClick={() => setModalOpen(false)}>
          {intl.formatMessage({ id: 'profile.save' })}
        </Button>
        <Button onClick={() => setModalOpen(false)}>
          {intl.formatMessage({ id: 'profile.cancel' })}
        </Button>
      </C.ButtonsWrapper>

      <C.CloseButton onClick={() => setModalOpen(false)}>
        <Icon name="close" />
      </C.CloseButton>
    </C.Wrapper>
  );
};

export default ShareModal;
