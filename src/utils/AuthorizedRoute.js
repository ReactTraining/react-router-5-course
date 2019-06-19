import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthUser } from './AuthUser'

const AuthorizedRoute = ({ component, ...rest }) => {
  const { logged } = useAuthUser()

  if (logged === null) return <div>Loading...</div>
  if (logged !== true) return <Redirect push to="/auth" />
  return <Route component={component} {...rest} />
}

export default AuthorizedRoute
