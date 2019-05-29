import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthUserContext } from './AuthUser'

const AuthorizedRoute = ({ component, history, ...rest }) => {
  const { logged } = useContext(AuthUserContext)

  if (logged === null) return <div>Loading...</div>
  if (logged !== true) return <Redirect push to="/auth" />
  return <Route component={component} {...rest} />
}

export default AuthorizedRoute
