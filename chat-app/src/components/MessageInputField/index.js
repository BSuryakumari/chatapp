import React, {useState} from 'react'

const MessageInputField = ({sendMessage}) => {
  const [message, setMessage] = useState('')

  const handleInputChange = e => {
    setMessage(e.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(message)
    setMessage('')
  }

  return (
    <div className="message-input-field">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default MessageInputField
