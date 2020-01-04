import React from 'react';
import PropTypes from 'prop-types';

const FormInlineMessage = ({ content, type }) => (
  <span style={{ color: type === 'error' ? '#9F3A38' : '#6597A7' }}>
    {content}
  </span>
);

FormInlineMessage.defaultProps = {
  content: PropTypes.string,
  type: PropTypes.oneOf(['error', 'info']).isRequired
};

FormInlineMessage.defaultProps = {
  content: ''
};

export default FormInlineMessage;
