import React from 'react';

const LoadingMsg = () => {
  return (
    <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">Wait a second</div>
        <p>Loading game collection...</p>
      </div>
    </div>
  );
};

export default LoadingMsg;
