import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
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
  return <h4>Hardcover – May 26, 2020</h4>
}

const Title = () => {
  return <h1>Breath: The New Science of a Lost Art</h1>
}

ReactDOM.render(<BookList />, document.getElementById('root'))
