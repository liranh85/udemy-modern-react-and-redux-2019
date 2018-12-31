import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
  // This is one of two ways of hooking up a context object into a class component
  // Note: `contextType` is a special property name, so we must use exactly that
  static contextType = LanguageContext

  render() {
    // After assigning the context object (`LanguageContext` in our case) to the `contextType` class property, the context is available to us on `this.context`
    const text = this.context === 'english' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field
