import React, { useState } from 'react';
import { Button, FormLayout, TextField } from '@shopify/polaris';
import { useDispatch } from 'react-redux';

import { loginRequest } from '../../store/actions';

const LoginPage = () => {
  const [values, setValues] = useState({
    network: '',
    user: '',
    password: '',
  });

  const dispatch = useDispatch();

  const submitLogin = data => {
    console.log(data);
    dispatch(loginRequest(data));
  };

  return (
    <div class="container">
      <h1>Login</h1>

      <FormLayout>
        <TextField
          name="network"
          label="Network"
          value={values?.network}
          onChange={value => setValues({ ...values, network: value })}
        />
        <TextField
          name="user"
          label="User"
          value={values?.user}
          onChange={value => setValues({ ...values, user: value })}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          value={values?.password}
          onChange={value => setValues({ ...values, password: value })}
        />
        <Button onClick={() => submitLogin(values)}>Login</Button>
      </FormLayout>
    </div>
  );
};

export default LoginPage;
