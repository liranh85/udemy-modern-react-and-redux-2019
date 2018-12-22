import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../actions'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderActions() {
    const { id } = this.props.match.params
    return (
      // <React.Fragment>...</React.Fragment> can also be shortened to <>...</>
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}
        >Delete</button>
        <Link
          className="ui button"
          to="/"
        >
          Cancel
        </Link>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.props.stream && `Are you sure you want to delete "${this.props.stream.title}"?`}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)
