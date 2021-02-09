import React from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'
const author = 'Hardcover – May 26, 2020'
const title = 'Breath: The New Science of a Lost Art'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/41o5B3nR1gL._SX329_BO1,204,203,200_.jpg'
function BookList() {
  return (
    <section className='booklist'>
      <Book title={title} author={author} img={img} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
      {/* <p>{ let x = 6 }</p> */}
      <p>{6 + 6} </p>
    </article>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'))
