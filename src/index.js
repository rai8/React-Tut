import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const root = document.getElementById('root')
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51HU5AkfapL._AC_SX184_.jpg',
    author: 'Sandra Boynton ',
    titleBook: 'Spooky Pookie (Little Pookie)',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41dd3tjpdUL._AC_SX184_.jpg',
    author: 'Stephenie Meyer Stephenie Meyer  ',
    titleBook: 'Midnight Sun ',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/417qEFl5D8L._SX437_BO1,204,203,200_.jpg',
    author: 'Sandra Boynton  ',
    titleBook: 'Eek! Halloween!  ',
  },
]

const BookLIst = () => {
  return (
    <section className='booklist'>
      {/* mapping over the books array */}
      {books.map(book => {
        //console.log(book)
        // const { img, titleBook, author } = book
        return <Book key={book.id} book={book} />
      })}
    </section>
  )
}
const Book = props => {
  //console.log(props)
  const { img, titleBook, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{titleBook}</h1>
      <small>{author.toUpperCase()}</small>
    </article>
  )
}

ReactDOM.render(<BookLIst />, root)
