import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const onSubmitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}

    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })

    const data = await response.json()
    if (response.ok === true) {
      history.replace('/')
    } else {
      setError(data.error_msg)
    }
  }

  return (
    <div className="login-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        alt="website login"
        className="login-img"
      />
      <form className="login-form" onSubmit={onSubmitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
