import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './FullScreenMenu.scss';
import { logoutRequest } from '../../store/actions';

// Originally by -https://codepen.io/RSH87/pen/rmgYbo
const FullScreenMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const app = (() => {
      let body;
      let menu;
      let menuItems;

      const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
        applyListeners();
      }

      const applyListeners = () => {
        menu?.addEventListener('click', () => toggleClass(body, 'nav-active'));
      }

      const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
          element.classList.remove(stringClass);
        else
          element.classList.add(stringClass);
      }

      init();
    })();
  }, []);

  const onLogoutClick = () => {
    dispatch(logoutRequest());
    localStorage.clear();
  }

  return (
    <>
      <div className="menu-icon">
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item" onClick={() => history.push('/')}>Dashboard</li>
            <li className="nav__list-item" onClick={() => history.push('/networks')}>Network</li>
            <li className="nav__list-item" onClick={() => history.push('/block')}>Blocks</li>
            <li className="nav__list-item" onClick={() => history.push('/transactions')}>Transactions</li>
            <li className="nav__list-item" onClick={() => history.push('/channels')}>Channel</li>
            <li className="nav__list-item" onClick={onLogoutClick}>Logout</li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default FullScreenMenu;