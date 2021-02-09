import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href=''>hello world</a>
        </li>
      </ul>
    </div>
  )
}

// const Greeting = () => {
//  return React.createElement('h1',{},'hello wold')
// }

ReactDOM.render(<Greeting />, document.getElementById('root'))
