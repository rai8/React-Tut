import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const root = document.getElementById('root')

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51HU5AkfapL._AC_SX184_.jpg',
  author: 'Sandra Boynton ',
  titleBook: 'Spooky Pookie (Little Pookie)',
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._AC_SX184_.jpg',
  author: 'Stephenie Meyer Stephenie Meyer  ',
  titleBook: 'Midnight Sun ',
}

const BookLIst = () => {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} titleBook={firstBook.titleBook} author={firstBook.author}>
        <p>
          It’s Halloween! What will little Pookie decide to be this year? Pookie tries on costumes one by one, but
          somehow can’t find just the right thing. The resolution to Pookie’s dilemma will delight toddlers and their
          caregivers alike
        </p>
      </Book>

      <Book img={secondBook.img} titleBook={secondBook.titleBook} author={secondBook.author} />
    </section>
  )
}
const Book = ({ img, titleBook, author, children }) => {
  return (
    <article class='book'>
      <>
        <img src={img} alt='' />
        <h1>{titleBook}</h1>
        <small>{author.toUpperCase()}</small>
        {children}
      </>
    </article>
  )
}

ReactDOM.render(<BookLIst />, root)
