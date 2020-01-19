import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageWithType = ({ message }) => {
  console.log(message);
  return (
    <Message
      positive={message.isPositive}
      negative={!message.isPositive}
      visible={message.visible}
      size='large'
    >
      <p>{message.text}</p>
    </Message>
  );
};

export default MessageWithType;
