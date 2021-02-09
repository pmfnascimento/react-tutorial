import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'
// Books
import { books } from './books'

import Book from './Book'
import { greeting } from './testing/testing'

function BookList() {
    console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
