import React, { useState } from 'react';
import { Button, FormLayout, TextField } from '@shopify/polaris';

const LoginPage = () => {
  const [values, setValues] = useState({ username: '', password: '' });

  const submitLogin = data => {
    console.log(data);
  };

  return (
    <div class="container">
      <h1>Login</h1>

      <FormLayout>
        <TextField
          name="username"
          label="username"
          value={values?.username}
          onChange={value => setValues({ ...values, username: value })}
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
