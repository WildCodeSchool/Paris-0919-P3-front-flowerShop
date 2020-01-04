import React from 'react';

const LoadingMsg = () => {
  return (
    <div className='ui icon message'>
      <i className='notched circle loading icon'></i>
      <div className='content'>
        <div className='header'>Patientez quelques instants</div>
        <p>Chargement des bouquets...</p>
      </div>
    </div>
  );
};

export default LoadingMsg;
