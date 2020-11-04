import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './FullScreenMenu.scss';
import { logoutRequest } from '../../store/actions';

// Originally by -https://codepen.io/RSH87/pen/rmgYbo
const FullScreenMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  // const app = () => {
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

  useEffect(() => {
    init();
  }, []);

  const onLogoutClick = () => {
    // body = document.querySelector('body');
    // toggleClass(body, 'nav-active');
    dispatch(logoutRequest());
    localStorage.clear();
  }

  const handleMenuClick = (route = '') => {
    body = document.querySelector('body');
    history.push(`/${route}`);
    toggleClass(body, 'nav-active');
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
            <li className="nav__list-item" onClick={() => handleMenuClick()}> Dashboard </li>
            <li className="nav__list-item" onClick={() => handleMenuClick('networks')}>Network</li>
            <li className="nav__list-item" onClick={() => handleMenuClick('block')}>Blocks</li>
            <li className="nav__list-item" onClick={() => handleMenuClick('transactions')}>Transactions</li>
            <li className="nav__list-item" onClick={() => handleMenuClick('channels')}>Channel</li>
            <li className="nav__list-item" onClick={onLogoutClick}>Logout</li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default FullScreenMenu;