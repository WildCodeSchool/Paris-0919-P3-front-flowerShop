import React from 'react';

const requireAuth = Component => {
  return props => {
    if (!localStorage.getItem('bgshopToken')) {
      props.history.push('/login');
    }
    return <Component {...props} />;
  };
};

export default requireAuth;
