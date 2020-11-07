import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import { loginRequest } from '../../store/actions';
import './LoginPage.scss';

const LoginPage = () => {
  const { register, handleSubmit, watch, errors, control } = useForm();

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
              window.$('.acceptContainer').transition({ height: '500px' });
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

  const submitLogin = (data) => {
    dispatch(loginRequest({ ...data, network: data.network.value }));
  };

  watch("network", "user", "password");
  console.log({ errors });
  return (
    <div className="container">

      <div id="containerLogin">
        <div id="inviteContainer">
          <div className="logoContainer">
            <img className="logo" src={require('../../assets/images/block.svg')} />
            <img className="text" src={require('../../assets/images/Blockchain.svg')} />
          </div>
          <div className="acceptContainer">
            <form onSubmit={handleSubmit(submitLogin)}>
              <div className="formContainer">

                <div className="formDiv" style={{ transitionDelay: '0.2s' }}>
                  <p style={{ marginBottom: '10px' }}>NETWORK</p>
                  <Controller
                    name="network"
                    control={control}
                    defaultValue={false}
                    rules={{ required: true }}
                    render={props =>
                      <Select
                        options={[
                          { value: 'network1', label: 'network1' },
                          { value: 'network3', label: 'network3' },
                          { value: 'network2', label: 'network2' }
                        ]}
                        onChange={value => props.onChange(value)}
                      />
                    }
                  />
                  {errors.network && <p className="error">Network is required</p>}
                </div>

                <div className="formDiv" style={{ transitionDelay: '0.4s' }}>
                  <p>USERNAME</p>
                  <input
                    name="user"
                    type="text"
                    autoComplete="off"
                    ref={register({ required: true })}
                  />
                  {errors.user && <p className="error">Username is required</p>}
                </div>

                <div className="formDiv" style={{ transitionDelay: '0.6s' }}>
                  <p>PASSWORD</p>
                  <input
                    name="password"
                    type="password"
                    autoComplete="off"
                    ref={register({ required: true })}
                  />
                  {errors.password && <p className="error">Password is required</p>}
                </div>

                <div className="formDiv" style={{ transitionDelay: '0.8s' }}>
                  <button className="acceptBtn" type="submit">Login</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
