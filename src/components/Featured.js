import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <span>
    {featured ? (
      <div
        onClick={() => toggleFeatured(gameId)}
        className="ui yellow corner label"
      >
        <i className="star icon"></i>
      </div>
    ) : (
      <div
        onClick={() => toggleFeatured(gameId)}
        className="empty ui corner label"
      >
        <i className="star icon"></i>
      </div>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.string.isRequired
};

export default Featured;
