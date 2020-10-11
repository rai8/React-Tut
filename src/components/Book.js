import React from 'react'

const Book = ({ img, titleBook, author }) => {
  const handleClick = () => {
    alert('Hello there')
  }
  //console.log(props)

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(titleBook)}>{titleBook}</h1>
      <small>{author.toUpperCase()}</small>
      <p>
        <button onClick={handleClick} className='btn'>
          Greetings
        </button>
      </p>
    </article>
  )
}
export default Book
