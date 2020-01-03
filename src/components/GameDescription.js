import React from 'react';

const GameDescription = ({ described, toggleDescription, gameId }) => {
  return (
    <span>
      {!described ? (
        <button
          onClick={() => toggleDescription(gameId)}
          className='text__icon'
        >
          <i className='ui pink icon eye' />
        </button>
      ) : (
        <button
          onClick={() => toggleDescription(gameId)}
          className='text__icon'
        >
          <i className='ui green icon eye' />
        </button>
      )}
    </span>
  );
};

export default GameDescription;
