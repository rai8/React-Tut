import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setText] = useState('Random title')

  const handleClick = () => {
    text === 'Random title' ? setText('Hello World') : setText('Random title')
  }
  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
