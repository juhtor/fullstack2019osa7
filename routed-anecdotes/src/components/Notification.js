import React from 'react'

const Notification = ({ message }) => {
  console.log(message)
  if (message.length > 0)
    return (
      <div>{message}</div>
    )
  return null
}

export default Notification;