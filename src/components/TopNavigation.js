import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../logo.png';

const TopNavigation = ({ isAuthenticated, logout, isAdmin }) => (
  <div className='ui stackable purple secondary pointing menu'>
    <NavLink exact to='/' className='item'>
      <div className='ui medium image'>
        <img src={logo} alt='Logo' />
      </div>
    </NavLink>
    <NavLink exact to='/games' className='item'>
      Bouquets
    </NavLink>
    {isAdmin && (
      <NavLink exact to='/games/new' className='item'>
        <i className='icon plus' />
        Ajouter un nouveau produit
      </NavLink>
    )}

    {isAuthenticated ? (
      <div className='right menu'>
        <div onClick={logout} className='item'>
          <i className='big user times icon'></i>
        </div>
      </div>
    ) : (
      <div className='right menu'>
        <NavLink to='/signup' className='item'>
          <i className='big user plus icon'></i>
        </NavLink>
        <NavLink to='/login' className='item'>
          <i className='big user outline icon'></i>
        </NavLink>
      </div>
    )}
  </div>
);

TopNavigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

export default TopNavigation;
