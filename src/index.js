import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import './styles/main.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/auth" component={UnauthorizedLayout} />
      <Route path="/projects">
        {({ match, ...rest }) => {
          if (match) {
            return <AuthorizedLayout match={match} {...rest} />
          } else {
            return null
          }
        }}
      </Route>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
