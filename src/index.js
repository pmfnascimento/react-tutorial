import React from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'
const firstBook = {
  author: 'Hardcover – May 26, 2020',
  title: 'Breath: The New Science of a Lost Art',
  img:
    'https://images-na.ssl-images-amazon.com/images/I/41o5B3nR1gL._SX329_BO1,204,203,200_.jpg',
}

const secoundBook = {
  author: 'Hardcover – October 20, 2020',
  title: 'The Wim Hof Method: Activate Your Full Human Potential',
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51ADdE1GjZL._SX329_BO1,204,203,200_.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secoundBook.title}
        author={secoundBook.author}
        img={secoundBook.img}
      >
        <p>
          "I invite you to witness your own being blossoming, to push past your
          conditioning. This method is accessible to all."
        </p>
      </Book>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className='book'>
      <img src={img} alt='' height={300} />
      {children}
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'))
