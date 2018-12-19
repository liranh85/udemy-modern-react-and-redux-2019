import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

// Encompassing all OAuth logic in the component level is not the best practice Redux-wise, but was done intentionally so we can refer to this more easily in the future

class GoogleAuth extends React.Component {
  componentDidMount() {
    // The gapi object is added to the window by the https://apis.google.com/js/api.js script we added to the index.html
    // It has only one method: `load`, which allows us to load Google libraries
    window.gapi.load('client:auth2', () => {
      // Initialise our client (app)
      window.gapi.client.init({
        clientId: '167257872562-aqqq7atitdkf4vjp505qlqihng4fmplu.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onClickSignIn = () => {
    this.auth.signIn()
  }

  onClickSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    }
    if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={this.onClickSignOut}
        >
          <i className="google icon" />
          Sign Out
        </button>
      )
    }
    return (
      <button
        className="ui red google button"
        onClick={this.onClickSignIn}
      >
        <i className="google icon" />
        Sign In with Google
      </button>
    )
  }

  render() {
    return this.renderAuthButton()
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)
