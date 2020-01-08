import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../logo.png';

const TopNavigation = ({ isAuthenticated, logout, isAdmin }) => (
  <>
    <div className='menu__image-container'>
      <img className='ui centered medium image' src={logo} alt='Logo' />
    </div>
    <div className='ui stackable olive secondary pointing menu'>
      <NavLink exact to='/' className='item nav__item'>
        <i className='large home icon'></i>
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
            <i className='large user times icon nav__icon'></i>
          </div>
        </div>
      ) : (
        <div className='right menu'>
          <NavLink to='/signup' className='item nav__item'>
            <i className='large user plus icon nav__icon'></i>
          </NavLink>
          <NavLink to='/login' className='item nav__item'>
            <i className='large user outline icon nav__icon'></i>
          </NavLink>
        </div>
      )}
    </div>
  </>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default TopNavigation;
