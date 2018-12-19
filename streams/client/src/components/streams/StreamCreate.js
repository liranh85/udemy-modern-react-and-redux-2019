import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div class="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  render() {
    return (
      <form className="ui form">
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
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate)
