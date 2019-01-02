import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  render() {
    // This is another way of getting access to a context (the other way is shown in `Field.js`).
    // We pass SomeContext.Consumer a function as child (when you think about it, it's like passing a Stateless Functional Component), which will then be called with the value of the context, making it available for us to use.
    // We use this approach when we want to get information from multiple context objects.
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    )
  }
}

export default Button
