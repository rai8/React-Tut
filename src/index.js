import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const root = document.getElementById('root')
const BookLIst = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article class='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => {
  return <img src='https://images-na.ssl-images-amazon.com/images/I/51HU5AkfapL._AC_SX184_.jpg' alt='' />
}
const Title = () => {
  return <h1>Spooky Pookie (Little Pookie)</h1>
}
const Author = () => <small style={{ color: '#617d9b', fontWeight: 700, marginTop: '0.5rem' }}>Sandra Boynton </small>

ReactDOM.render(<BookLIst />, root)
