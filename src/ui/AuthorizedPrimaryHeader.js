import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import classnames from 'classnames'
import { AuthUserContext } from '../utils/AuthUser'

const AuthorizedPrimaryHeader = () => {
  const { logout } = useContext(AuthUserContext)
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
        <button className="logout text-light-tint" onClick={logout}>
          Logout
        </button>
        <div className="avatar" />
      </nav>
    </header>
  )
}

export default AuthorizedPrimaryHeader
