import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ user, render, ...rest }) => (
  <>
    <Route
      {...rest}
      render={props =>
        user.token && user.role === 'admin' ? (
          render(props)
        ) : (
          <Redirect to='/products' />
        )
      }
    />
    {/* <Route
      {...rest}
      render={props =>
        user.token && user.role === 'admin' ? (
          render(props)
        ) : (
          <Redirect to='/articles' />
        )
      }
    /> */}
  </>
);

export default AdminRoute;
