import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Users from './Users'
import SigninMethods from './SigninMethods'
import Templates from './Templates'

const AuthenticationLayout = ({ match, location }) => {
  return (
    <Fragment>
      {/*
        In the video, I somewhat glossed over why these are only the same value before
        the redirect and then they are different. The reason is because `match.url` only
        has what the URL value is up to the route that matched this component. So in
        other words, the route that matched for `AuthenticationLayout` is
        `/projects/react-training/authentication`. The `match.url` here will only be
        that value even if the patch is much longer. The `location.pathname` is the
        true representation of the full path in the browser. Therefore, if they are the
        same, that indicates we are at `/projects/react-training/authentication` and
        need to do a redirect.
      */}
      {match.url === location.pathname && <Redirect to={`${match.url}/users`} />}

      <PageHeader title="Authentication" useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab to={`${match.url}/users`}>Users</Tab>
          <Tab to={`${match.url}/signin-method`}>Sign-in method</Tab>
          <Tab to={`${match.url}/templates`}>Templates</Tab>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <TransitionGroup className="animated-cards">
          <CSSTransition key={location.key} timeout={600} classNames="animated-card">
            <Switch location={location}>
              <Route path={`${match.path}/users`} component={Users} />
              <Route path={`${match.path}/signin-method`} component={SigninMethods} />
              <Route path={`${match.path}/templates`} component={Templates} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Panel>
    </Fragment>
  )
}

export default AuthenticationLayout
