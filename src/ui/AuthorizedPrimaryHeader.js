import React from 'react'
import { Route, Link } from 'react-router-dom'
import classnames from 'classnames'
import { useAuthUser } from '../utils/AuthUser'

const AuthorizedPrimaryHeader = () => {
  const { setLogged } = useAuthUser()

  return (
    <header className="authorized-primary-header">
      <Route
        path="/projects"
        exact
        children={({ match }) => (
          <Link to="/projects" className={classnames('logo', { 'logo-light': !match })}>
            <img src="/static/firebase.svg" alt="Firebase Logo" />
            <span>Firebase</span>
          </Link>
        )}
      />
      <nav className="primary-nav">
        <button onClick={() => setLogged(false)} className="logout text-light-tint">
          Logout
        </button>
        <div className="avatar" />
      </nav>
    </header>
  )
}

export default AuthorizedPrimaryHeader
