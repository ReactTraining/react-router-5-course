import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Users from './Users'
import SigninMethods from './SignInMethods'
import Templates from './Templates'

const AuthenticationLayout = ({ match }) => {
  return (
    <Fragment>
      <PageHeader title="Authentication" useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab to={`${match.url}/users`}>Users</Tab>
          <Tab to={`${match.url}/signin-method`}>Sign-in method</Tab>
          <Tab to={`${match.url}/templates`}>Templates</Tab>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <Switch>
          <Route path={`${match.path}/users`} component={Users} />
          <Route path={`${match.path}/signin-method`} component={SigninMethods} />
          <Route path={`${match.path}/templates`} component={Templates} />
          <Redirect to={`${match.url}/users`} />
        </Switch>
      </Panel>
    </Fragment>
  )
}

export default AuthenticationLayout
