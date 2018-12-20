// We are creating this file so we can manage the browser router history object ourselves. This will make is much easier to manipulate from anywhere within our app.
// If we didn't do this, the history object would only be available to us in components that are assigned to Routes (as props).

// The history package is installed automatically with react-router-dom
import createHistory from 'history/createBrowserHistory'

export default createHistory()
