import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Data from './Data'
import Rules from './Rules'
import DataIndexes from './DataIndexes'

const DatabaseLayout = ({ match, location }) => {
  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/data`} />}
      <PageHeader title="Database" useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab to={`${match.url}/data`}>Data</Tab>
          <Tab to={`${match.url}/rules`}>Rules</Tab>
          <Tab to={`${match.url}/indexes`}>Indexes</Tab>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <TransitionGroup className="animated-cards">
          <CSSTransition key={location.key} timeout={600} classNames="animated-card">
            <Switch>
              <Route path={`${match.path}/data`} component={Data} />
              <Route path={`${match.path}/rules`} component={Rules} />
              <Route path={`${match.path}/indexes`} component={DataIndexes} />
              <Route component={() => null} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Panel>
    </Fragment>
  )
}

export default DatabaseLayout
