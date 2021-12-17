import React from 'react';
import ReactDOM from 'react-dom';

import * as C from './Notification.style';

const Notification = ({ currentUser, setCookie }) =>
  ReactDOM.createPortal(
    <C.Wrapper>
      <span>
        We are using cookies in order to improve your experience visiting this
        website. Accept or follow the link for more information.
      </span>
      <button
        onClick={() =>
          setCookie('user', JSON.stringify(currentUser), { path: '/' })
        }
      >
        Accept
      </button>
      <button>Information</button>
    </C.Wrapper>,
    document.getElementById('root')
  );

export default Notification;
