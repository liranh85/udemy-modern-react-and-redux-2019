// NOTE: I did not watch the lectures where Stephen build this app
// I copied it verbatim for Section 26 ("More Fun with Hooks")

import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

const App = () => {
  const [lat, errorMessage] = useLocation()

  let content
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message="Please accept location request" />
  }

  return <div className="border red">{content}</div>
}

ReactDOM.render(<App />, document.querySelector('#root'))
