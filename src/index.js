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
]

const names = ['John', 'Bruce', 'Wayn'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
});
function BookList() {
  return <section className='booklist'>{newNames}</section>
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' height={300} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'))
