import React from 'react'
// We're using flv to get download the video resource and convert it to a format that can be read by the native HTML5 video player
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamShow extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchStream(id)
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return
    }

    const { id } = this.props.match.params
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render() {
    const { stream } = this.props
    if (!stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: '100%' }}
          controls
        />
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow)
