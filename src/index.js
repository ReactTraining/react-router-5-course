import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Router from './utils/Router'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import { AuthUserProvider, useAuthUser } from './utils/AuthUser'
import './styles/main.scss'

const AuthorizedRoute = ({ component, ...rest }) => {
  const { logged } = useAuthUser()

  if (logged === null) {
    return <div>Loading...</div>
  } else if (logged === false) {
    return <Redirect to="/auth" push />
  }

  return <Route component={component} {...rest} />
}

const App = () => {
  return (
    <Router>
      <AuthUserProvider>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/projects" component={AuthorizedLayout} />
          <Redirect to="/projects" />
        </Switch>
      </AuthUserProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
