import React from 'react'

const ChatWindow = ({messages}) => (
  <div className="chat-window">
    {messages.map(message => (
      <div key={message.id} className="message">
        {message.text}
      </div>
    ))}
  </div>
)

export default ChatWindow
