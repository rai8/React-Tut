import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const root = document.getElementById('root')

const titleBook = 'Spooky Pookie (Little Pookie)'
const author = 'Sandra Boynton '
const img = 'https://images-na.ssl-images-amazon.com/images/I/51HU5AkfapL._AC_SX184_.jpg'
const BookLIst = () => {
  return (
    <section className='booklist'>
      <Book title='Comic cone' randomNUmber={22} job='developer' />
      <Book title='Dungeons & Dragons' randomNUmber={18} job='actuarist' />
    </section>
  )
}
const Book = ({ title, job, randomNUmber }) => {
  return (
    <article class='book'>
      <>
        <img src={img} alt='' />
        <h1>{titleBook}</h1>
        <small>{author.toUpperCase()}</small>
        <p>{title}</p>
        <p>{randomNUmber}</p>
        <p>{job}</p>
      </>
    </article>
  )
}

ReactDOM.render(<BookLIst />, root)
