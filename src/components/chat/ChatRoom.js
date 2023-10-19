import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') {
      setError('Message cannot be empty.');
      return;
    }

    const message = {
      content: newMessage,
    };

    axios
      .post('https://chat-app-myways.onrender.com/chat/send', message)
      .then((response) => {
        setNewMessage('');
      })
      .catch((error) => {
        setError('Failed to send the message.');
      });
  };

  const fetchMessages = () => {
    axios
      .get('https://chat-app-myways.onrender.com/api/chat/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        setError('Failed to retrieve chat messages.');
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.content}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default ChatRoom;
