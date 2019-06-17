import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthorizedPrimaryHeader from '../ui/AuthorizedPrimaryHeader'
import AccountSubLayout from './AccountSubLayout'
import ProjectSubLayout from './ProjectSubLayout'

const AuthorizedLayout = ({ match }) => (
  <div className="app authorized-layout">
    <AuthorizedPrimaryHeader />
    <Switch>
      <Route path={match.path} exact component={AccountSubLayout} />
      <Route path={`${match.path}/:projectId`} component={ProjectSubLayout} />
    </Switch>
  </div>
)

export default AuthorizedLayout
