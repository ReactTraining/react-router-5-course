import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Router from './utils/Router'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import { AuthUserProvider } from './utils/AuthUser'
import AuthorizedRoute from './utils/AuthorizedRoute'
import './styles/main.scss'

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
