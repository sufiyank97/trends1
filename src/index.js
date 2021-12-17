import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { CookiesProvider } from 'react-cookie';
import store from './redux/store';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';

import client from './apollo/client';

ReactDOM.render(
  <CookiesProvider>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
