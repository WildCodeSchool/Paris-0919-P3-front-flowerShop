import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../logo.png';

<<<<<<< HEAD
const TopNavigation = ({ isAuthenticated, logout, isAdmin }) => (
  <div className='ui stackable pink secondary pointing menu'>
    <NavLink exact to='/' className='item nav__item'>
      <div className='ui medium image'>
        <img src={logo} alt='Logo' />
      </div>
    </NavLink>
    <NavLink exact to='/products' className='item nav__item'>
      FLOWER SHOP
    </NavLink>
    {isAdmin && (
      <NavLink exact to='/products/new' className='item nav__item'>
        <i className='icon plus nav__icon' />
        Ajouter un nouveau produit
      </NavLink>
    )}

    {isAuthenticated ? (
      <div className='right menu'>
        <div onClick={logout} className='item nav__item'>
          <i className='big user times icon nav__icon'></i>
        </div>
      </div>
    ) : (
      <div className='right menu'>
        <NavLink to='/signup' className='item nav__item'>
          <i className='big user plus icon nav__icon'></i>
        </NavLink>
        <NavLink to='/login' className='item nav__item'>
          <i className='big user outline icon nav__icon'></i>
        </NavLink>
      </div>
    )}
=======
const handleClick = () => {
  const menu = document.getElementById('menu');
  const menuBarsBtn = document.getElementById('menuBarsBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  menu.classList.toggle('invisible');
  menuBarsBtn.classList.toggle('invisible');
  menuCloseBtn.classList.toggle('invisible');
};

const TopNavigation = ({ isAuthenticated, logout, isAdmin }) => (
  <div id='navbar'>
    <div className='menu__image-container'>
      <img className='ui centered small image' src={logo} alt='Logo' />
      <button
        className='green circular ui icon button menu__burger-btn'
        onClick={handleClick}
      >
        <i id='menuBarsBtn' className='teal bars icon'></i>
        <i id='menuCloseBtn' className='teal close icon invisible'></i>
      </button>
    </div>
    <div
      id='menu'
      className='invisible ui stackable green inverted labeled icon menu'
    >
      <NavLink exact to='/' className='item nav__item' onClick={handleClick}>
        <i className='large home icon'></i>
        Accueil
      </NavLink>
      <NavLink
        exact
        to='/products'
        className='item nav__item'
        onClick={handleClick}
      >
        <i className='shopping basket icon'></i>
        Flower Shop
      </NavLink>
      <NavLink
        exact
        to='/weddings'
        className='item nav__item'
        onClick={handleClick}
      >
        <i className='genderless big icon'></i>
        Mariages
      </NavLink>
      <NavLink exact to='/pro' className='item nav__item' onClick={handleClick}>
        <i className='briefcase icon'></i>
        Professionnels
      </NavLink>
      <NavLink exact to='/diy' className='item nav__item' onClick={handleClick}>
        <i className='paint brush icon'></i>
        Ateliers DIY
      </NavLink>
      {isAdmin && (
        <NavLink
          exact
          to='/products/new'
          className='item nav__item'
          onClick={handleClick}
        >
          <i className='icon plus nav__icon' />
          Ajouter un nouveau produit
        </NavLink>
      )}

      {isAuthenticated ? (
        <div className='right menu'>
          <div onClick={logout} className='item nav__item'>
            <i className='large user times icon nav__icon'></i>
            Déconnexion
          </div>
        </div>
      ) : (
        <div className='right menu'>
          <NavLink
            to='/signup'
            className='item nav__item'
            onClick={handleClick}
          >
            <i className='large user plus icon nav__icon'></i>
            Créer un compte
          </NavLink>
          <NavLink to='/login' className='item nav__item' onClick={handleClick}>
            <i className='large user outline icon nav__icon'></i>
            Se connecter
          </NavLink>
        </div>
      )}
    </div>
>>>>>>> dev
  </div>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default TopNavigation;
