import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../logo.png';
import MessageWithType from './MessageWithType';

const handleClick = () => {
  if (window.innerWidth <= 767) {
    const menu = document.getElementById('menu');
    const menuBarsBtn = document.getElementById('menuBarsBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    menu.classList.toggle('invisible');
    menuBarsBtn.classList.toggle('invisible');
    menuCloseBtn.classList.toggle('invisible');
  }
};

const TopNavigation = ({ isAuthenticated, logout, isAdmin, message }) => (
  <div className='navbar'>
    <div className='navbar__container'>
      <div className='menu__logo-container'>
        <img className='ui centered small image logo' src={logo} alt='Logo' />
        <button
          className='green circular ui icon button menu__burger-btn'
          onClick={handleClick}
        >
          <i id='menuBarsBtn' className='teal bars icon'></i>
          <i id='menuCloseBtn' className='teal close icon invisible'></i>
        </button>
      </div>
      <div id='menu' className='ui stackable green inverted small menu'>
        <NavLink exact to='/' className='item' onClick={handleClick}>
          {/* <i className='large home icon nav__icon'></i> */}
          ACCUEIL
        </NavLink>
        <NavLink exact to='/products' className='item' onClick={handleClick}>
          {/* <i className='shopping basket icon nav__icon'></i> */}
          FLOWER SHOP
        </NavLink>
        <NavLink exact to='/wedding' className='item' onClick={handleClick}>
          {/* <i className='genderless big icon nav__icon'></i> */}
          MARIAGES
        </NavLink>
        <NavLink exact to='/pro' className='item' onClick={handleClick}>
          {/* <i className='briefcase icon nav__icon'></i> */}
          ENTREPRISES
        </NavLink>
        <NavLink exact to='/diy' className='item' onClick={handleClick}>
          {/* <i className='paint brush icon nav__icon'></i> */}
          ATELIERS DIY
        </NavLink>
        {isAdmin && (
          <NavLink
            exact
            to='/products/new'
            className='item'
            onClick={handleClick}
          >
            <i className='icon plus nav__icon' />
            Nouveau produit
          </NavLink>
        )}

        {isAuthenticated ? (
          <div className='right menu'>
            <NavLink to='/cart' className='item' onClick={handleClick}>
              <i className='large shopping basket icon'></i>
              PANIER
            </NavLink>
            <NavLink to='/' className='item' onClick={logout}>
              <i className='large user times icon nav__icon'></i>
              DECONNEXION
            </NavLink>
          </div>
        ) : (
          <div className='right menu'>
            <NavLink to='/signup' className='item' onClick={handleClick}>
              <i className='large user plus icon nav__icon'></i>
              CREER UN COMPTE
            </NavLink>
            <NavLink to='/login' className='item' onClick={handleClick}>
              <i className='large user outline icon nav__icon'></i>
              CONNEXION
            </NavLink>
          </div>
        )}
      </div>
      {message.text && <MessageWithType message={message} />}
    </div>
  </div>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default TopNavigation;
