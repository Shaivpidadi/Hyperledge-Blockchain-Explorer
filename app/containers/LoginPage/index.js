import React, { useState, useEffect } from 'react';
import { FormLayout } from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import { loginRequest } from '../../store/actions';
import './LoginPage.scss';

const LoginPage = () => {
  const [values, setValues] = useState({
    network: '',
    user: '',
    password: '',
  });

  useEffect(() => {
    window.$(function () {
      window.$('#container').append('<style>#container, .acceptContainer:before, #logoContainer:before { center fixed }');

      setTimeout(function () {
        window.$('.logoContainer').transition({ scale: 1 }, 700, 'ease');
        setTimeout(function () {
          window.$('.logoContainer .logo').addClass('loadIn');
          setTimeout(function () {
            window.$('.logoContainer .text').addClass('loadIn');
            setTimeout(function () {
              window.$('.acceptContainer').transition({ height: '431.5px' });
              setTimeout(function () {
                window.$('.acceptContainer').addClass('loadIn');
                setTimeout(function () {
                  window.$('.formDiv, form h1').addClass('loadIn');
                }, 500)
              }, 500)
            }, 500)
          }, 500)
        }, 1000)
      }, 10)
    });
  })
  const dispatch = useDispatch();

  const submitLogin = data => {
    dispatch(loginRequest(data));
  };

  return (
    <div className="container">

      <div id="containerLogin">
        <div id="inviteContainer">
          <div className="logoContainer">
            <img className="logo" src={require('../../assets/images/block.svg')} />
            <img className="text" src={require('../../assets/images/Blockchain.svg')} />
          </div>
          <div className="acceptContainer">
            <FormLayout>
              <div className="formContainer">

                <div className="formDiv" style={{ transitionDelay: '0.2s' }}>
                  <p>NETWORK</p>
                  <input
                    type="text"
                    autoComplete="off"
                    value={values?.network}
                    onChange={(e) => setValues({ ...values, network: e.target.value })}
                  />
                </div>

                <div className="formDiv" style={{ transitionDelay: '0.4s' }}>
                  <p>USER</p>
                  <input
                    type="email"
                    autoComplete="off"
                    value={values?.user}
                    onChange={e => setValues({ ...values, user: e.target.value })}
                  />
                </div>

                <div className="formDiv" style={{ transitionDelay: '0.6s' }}>
                  <p>PASSWORD</p>
                  <input
                    type="password"
                    autoComplete="off"
                    value={values?.password}
                    onChange={e => setValues({ ...values, password: e.target.value })}
                  />
                </div>

                <div className="formDiv" style={{ transitionDelay: '0.8s' }}>
                  <button className="acceptBtn" type="submit" onClick={() => submitLogin(values)}>Login</button>
                </div>

              </div>
            </FormLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
