import openSocket from 'socket.io-client'

const socket = openSocket('http://your-backend-url')

const subscribeToChat = callback => {
  socket.on('message', message => {
    callback(message)
  })
}

const sendMessage = message => {
  socket.emit('sendMessage', message)
}

export {subscribeToChat, sendMessage}
