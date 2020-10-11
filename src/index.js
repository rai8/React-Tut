import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { books } from './books'
import Book from './components/Book'

const root = document.getElementById('root')

const BookLIst = () => {
  return (
    <section className='booklist'>
      {/* mapping over the books array */}
      {books.map(book => {
        //console.log(book)
        // const { img, titleBook, author } = book
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDOM.render(<BookLIst />, root)
