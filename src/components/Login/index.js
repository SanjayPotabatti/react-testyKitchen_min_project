import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/login" />
    }

    return (
      <div className="mobile-login-container">
        <img
          src="https://res.cloudinary.com/tastykitchen/image/upload/v1634639792/Rectangle_1456login2_gkbq6l.png"
          alt="website login"
          className="login-website-landing"
        />
        <p className="mobile-login-heading">Login</p>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="login-website-logo-heading-container">
            <img
              src="https://res.cloudinary.com/dlhxfaljh/image/upload/v1642240090/testyKitchen/Group_7420_2_x9ybhz.png"
              alt="website logo"
              className="login-website-logo"
            />
            <h1 className="login-website-heading">Tasty Kitchens</h1>
            <h1 className="login-website-login-heading">Login</h1>
          </div>
          <div className="input-label-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              className="input"
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="password-label-container">
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          {showErrorMsg && <p className="error-message">*{errorMsg}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default Login
