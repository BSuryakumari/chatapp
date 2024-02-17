import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInputField from './components/MessageInputField';
import UserList from './components/UserList';
import { subscribeToChat, sendMessage } from './services/chatService';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    subscribeToChat((message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const handleSendMessage = (message) => {
    sendMessage({ text: message, user: 'current-user' });
  };

  return (
    <div className="app">
      <UserList users={users} />
      <ChatWindow messages={messages} />
      <MessageInputField sendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
