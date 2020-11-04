import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './FullScreenMenu.scss';
import { logoutRequest, resetApp } from '../../store/actions';

// Originally by -https://codepen.io/RSH87/pen/rmgYbo
const FullScreenMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  // const app = () => {
  let body;
  let menu;
  let menuItems;
  let navContents;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    navContents = document.querySelector('.nav__content');
    applyListeners();
  }

  const applyListeners = () => {
    menu?.addEventListener('click', () => {
      toggleClass(body, 'nav-active');
      // toggleClass(navContents, 'hide-nav-content');
    });
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
    handleDomManuplation();
    dispatch(logoutRequest());
    dispatch(resetApp());
    localStorage.clear();
  }

  const handleDomManuplation = () => {
    body = document.querySelector('body');
    // navContents = document.querySelector('.nav__content');
    toggleClass(body, 'nav-active');
    // toggleClass(navContents, 'hide-nav-content');
  }

  const handleMenuClick = (route = '') => {
    handleDomManuplation();
    history.push(`/${route}`);
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
            <li className="nav__list-item" onClick={() => onLogoutClick()}>Logout</li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default FullScreenMenu;