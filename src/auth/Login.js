import React from 'react'
import Panel from '../ui/Panel'
import Card from '../ui/Card'

const Login = ({ history }) => {
  const handleSubmit = event => {
    event.preventDefault()
    history.push('/projects')
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
        <form className="spacing" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </Card>
    </Panel>
  )
}

export default Login
