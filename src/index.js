import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => {
  return <h2>john doe</h2>
}
const Message = () => {
  return <p>This is my message</p>
}
ReactDOM.render(<Greeting />, document.getElementById('root'))
