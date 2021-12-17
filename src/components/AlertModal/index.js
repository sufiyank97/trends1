import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import Input from 'components/shared/Input';
import * as C from './style';
import Icon from 'assets/icons';
import { Button } from 'components/shared/Button';
import CustomSelect from 'components/shared/Select';
import { validateEmail } from 'utils/validation';

const ShareModal = ({ setModalOpen }) => {
  // Localization
  const intl = useIntl();

  // Local state
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    if (inputValue && !validateEmail(inputValue)) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  }, [inputValue]);

  return (
    <C.Wrapper>
      <C.ModalHeading>Subscribe Email Alert</C.ModalHeading>

      <C.FieldsWrapper>
        <C.FieldWrapper>
          <span>Email Address</span>
          <Input
            placeholder="Email"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          {validationError && (
            <span className="error-message">Email has incorrect format.</span>
          )}
        </C.FieldWrapper>

        <C.FieldWrapper>
          <span>How often?</span>
          <CustomSelect
            options={[
              {
                value: 'never',
                label: 'Never'
              },
              {
                value: 'daily',
                label: 'Daily'
              },
              {
                value: 'weekly',
                label: 'Weekly'
              },
              {
                value: 'monthly',
                label: 'Monthly'
              }
            ]}
          />
        </C.FieldWrapper>
      </C.FieldsWrapper>

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
