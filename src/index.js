import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component
// always return JSX

function Greeting() {
  return <h1>Hello World</h1>
}

// const Greeting = () => {
//  return React.createElement('h1',{},'hello wold')
// }

ReactDom.render(<Greeting />, document.getElementById('root'))
