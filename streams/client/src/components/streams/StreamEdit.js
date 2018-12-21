import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          // initialValues is an optional prop (of type object, e.g. { someFieldName: 'Some title', ... }) expected by ReduxForm, which allows us to set the initial values for any of our ReduxForm fields. Since StreamForm is wrapped by ReduxForm, we are essentially passing this prop (initialValues) to the ReduxForm component
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
