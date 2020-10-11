import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
const Greeting = () => {
  return (
    <>
      <Person />
      <Message />
    </>
  )
}

const Person = () => {
  return <h1>Hello there</h1>
}
const Message = () => {
  return <p>This is a message from John Doe</p>
}

ReactDOM.render(<Greeting />, root)
