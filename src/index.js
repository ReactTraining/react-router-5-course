import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import './styles/main.scss'
import App from './wireframe/App'

// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/auth" component={UnauthorizedLayout} />
//       <Route path="/projects" component={AuthorizedLayout} />
//       <Redirect to="/projects" />
//     </Switch>
//   </BrowserRouter>
// )

ReactDOM.render(<App />, document.getElementById('root'))
