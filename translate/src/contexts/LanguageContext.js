// An example of how we might go about replacing Redux with the Context system for global state management including actions that would change the global state.
// This is not advisable, for many reasons:
//  - You need to spend some additional time to build stores and to hook them up
//  - You'd need to create a store for each type of resource in your application
//  - Sharing data between the stores will be challenging
//  - Redux already has well-written documentation, whilst when creating a store with Context you need to create the documentation yourself
//  - This will also make it more difficult for future developers to figure out how the app works
//  - Redux uses well-known design patterns
//  - There are lots of open-source libraries specifically made to help you work with Redux



import React from 'react'

// Create a context with a default value ('english')
const Context = React.createContext('english')

// This is a named export
export class LanguageStore extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

// We're also adding a default export
export default Context
