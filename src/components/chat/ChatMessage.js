import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className="chat-message">
      <div className="message-content">{message.content}</div>
      <div className="message-sender">{message.sender}</div>
      <div className="message-timestamp">{message.timestamp}</div>
    </div>
  );
}

export default ChatMessage;
