import React from 'react';

const requireNotAuth = Component => {
  return props => {
    if (localStorage.getItem('bgshopToken')) {
      props.history.push('/');
    }
    return <Component {...props} />;
  };
};

export default requireNotAuth;
