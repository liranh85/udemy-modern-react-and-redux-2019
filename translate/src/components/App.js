import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        {/* Wrapping a component with `SomeContext.Provider` (which has to be defined of course, see LanguageContext.js for an example), will allow the component and any of its descendants to make use of a context provided by this component (App) via the Provider property (which is automatically added to context objects (those created by `React.createContext()`) */}
        {/* The `value` is a special prop which defines the value of the context that will be available to descendant components */}
        {/* Descentant components can still access any context even without being wrapped by the `Provider`, but in that case they will only get the default value set in the context object (again, see LanguageContext.js for an example of a context object) */}
        {/* Each use of SomeContext.Provider creates a new, separate "pipe" of information */}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App
