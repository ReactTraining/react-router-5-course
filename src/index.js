import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import './styles/main.scss'

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <Route
        render={({ location: { pathname, search, hash } }) => {
          const hasSlash = pathname.slice(-1) === '/' && pathname !== '/'
          return hasSlash ? <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} /> : children
        }}
      />
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={UnauthorizedLayout} />
        <Route path="/projects" component={AuthorizedLayout} />
        <Redirect to="/projects" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
