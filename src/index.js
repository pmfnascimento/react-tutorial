import React from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'
const books = [
  {
    author: 'Hardcover – May 26, 2020',
    title: 'Breath: The New Science of a Lost Art',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41o5B3nR1gL._SX329_BO1,204,203,200_.jpg',
  },
  {
    author: 'Hardcover – October 20, 2020',
    title: 'The Wim Hof Method: Activate Your Full Human Potential',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51ADdE1GjZL._SX329_BO1,204,203,200_.jpg',
  },
  {
    author: 'Wim Hof (Foreword)',
    title: "What Doesn't Kill Us",
    img:
      'https://images-na.ssl-images-amazon.com/images/I/519GjbqPb7L._SX331_BO1,204,203,200_.jpg',
  },
]


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' height={300} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'))
