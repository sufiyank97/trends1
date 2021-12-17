import React, { useState } from 'react';
import { ApolloConsumer } from '@apollo/client';

import * as C from './Auth.style';
import { LOGIN } from '../../apollo/remote/queries';
import { currentUser } from 'apollo/client';

const Auth = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  return (
    <ApolloConsumer>
      {client => (
        <C.Wrapper>
          <C.LoginWrapper>
            <C.Heading>LOGIN</C.Heading>

            <C.InputsWrapper>
              <input
                placeholder="Email"
                value={values.email}
                onChange={e => setValues({ ...values, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={e =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </C.InputsWrapper>

            <C.Button
              onClick={async () => {
                const { email, password } = values;
                const { data } = await client.query({
                  query: LOGIN,
                  variables: { email, password }
                });

                console.log(data.login, 'LOGIN DATA');

                currentUser(data.login);

                // client.writeData({
                //   data: {
                //     currentUser: { ...data.login, __typename: 'currentUser' }
                //   }
                // });
              }}
            >
              Login
            </C.Button>
          </C.LoginWrapper>
        </C.Wrapper>
      )}
    </ApolloConsumer>
  );
};

export default Auth;
