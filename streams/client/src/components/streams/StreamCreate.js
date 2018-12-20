import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
        <label>{label}</label>
        {/* Switching off autocomplete just for this exercise, so we can see the error better */}
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log('formValues', formValues)
  }

  render() {
    return (
      // We need to add the className `error` to the form, because otherwise semantic-ui hides elements with the className `error message`
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          // custom prop, so will be just passed as argument to our component
          label="Enter title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

// Returns an errors object with the error message for any form fields that didn't pass validation
// When passed to ReduxForm, this function will be called:
//  - When the form is initially rendered
//  - Any time the user interacts with it
const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)
