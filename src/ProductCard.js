import React from 'react';
import 'semantic-ui-less/semantic.less';

const ProductCard = () =>
  <div className="ui card">
    <div className="image">
      <span className="ui yellow ribbon label">$32.99</span>
      <img
        src="https://i2.wp.com/gusandco.net/wp-content/uploads/2016/03/quadropolis.jpg?resize=640%2C640&ssl=1"
        alt="Game cover"
      />
    </div>
    <div className="content">
      <div className="header">Quadropolis</div>
      <div className="meta">
        <i className="icon users" /> 2-4
        <i className="icon wait" /> 60min.
      </div>
    </div>
  </div>;

export default ProductCard;
