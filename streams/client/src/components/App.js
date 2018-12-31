import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import history from '../history'
import Header from './Header'

const App = () => {
  return (
    <div className="ui container">
      {/* Because we're creating the history object ourselves, we have to use a plain Router rather than a BrowserRouter */}
      <Router history={history}>
      {/* We're wrapping all the children in a div, because `Router` expects exactly one child */}
        <div>
          <Header />
          {/* Switch is a helper from react-router-dom that makes sure that only the first matching route gets rendered, rather than all matching routes. It helps overcome issues like when for a path like `/foo/5` - `/food/bar` is matched as well, rather than just the expected `/foo/:variable` */}
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
