import React from 'react';

const Message = ({ content, header }) => (
  <>
    <div className="ui green icon message">
      <i className="icon thumbs up"></i>
      <div className={content}>
        <div className={header}>There are no game in your store !</div>
        <p>You should add some, don't you think?</p>
      </div>
    </div>
  </>
);

export default Message;
