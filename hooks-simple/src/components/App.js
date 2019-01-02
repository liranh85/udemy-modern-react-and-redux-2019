import React, { useState } from 'react'

const App = () => {
  // `useState` takes the initial state and returns an array with the current value (which we called `resource` and is analagous to this.state) and a method to change it (which we called `setResource` and is analagous to this.setState)
  // Calling the method we named `setResource` causes the component to re-render, like setState
  // Array destructuring
  const [resource, setResource] = useState('posts')
  // The above is basically:
  // const [currentValue, setCurrentValue] = useState(initialValue)

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  )
}

export default App
