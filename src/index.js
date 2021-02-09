import React from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/41o5B3nR1gL._SX329_BO1,204,203,200_.jpg'
      alt=''
    />
  )
}

const Author = () => {
  return (
    <h4
      style={{ color: '#617d98w', fontSize: '0.75rem', marginTop: '0.25rem' }}
    >
      Hardcover – May 26, 2020
    </h4>
  )
}

const Title = () => {
  return <h1>Breath: The New Science of a Lost Art</h1>
}

ReactDOM.render(<BookList />, document.getElementById('root'))
