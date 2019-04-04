import React, { useState, useContext } from 'react'
import Panel from '../ui/Panel'
import Card from '../ui/Card'
import { AuthUserContext } from '../utils/AuthUser'

const Login = ({ history }) => {
  const { login } = useContext(AuthUserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    if (username === 'react' && password === 'react') {
      login()
      history.push('/projects')
    } else {
      setErrorMessage('Invalid')
    }
  }

  return (
    <Panel>
      <Card style={{ minHeight: '10em' }}>
        <h1 className="heading-2">Welcome to Firebase, almost...</h1>
        <p>
          This mock application will demonstrate React Router with nested layouts and a strategy for authenticated
          (protected) routes.
        </p>
        <p>
          The username is <strong>react</strong> and the password is <strong>react</strong>
        </p>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="spacing">
          <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </Card>
    </Panel>
  )
}

export default Login
