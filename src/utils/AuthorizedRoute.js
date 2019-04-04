import React, { useContext } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { AuthUserContext } from './AuthUser'

const AuthorizedRoute = ({ component, history, ...rest }) => {
  const { logged } = useContext(AuthUserContext)

  if (logged === null) return <div>Loading...</div>
  if (logged !== true) {
    history.push('/auth')
    return null
  }
  return <Route component={component} {...rest} />
}

export default withRouter(AuthorizedRoute)
