import React, { Fragment } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Data from './Data'
import Rules from './Rules'
import DataIndexes from './DataIndexes'

const DatabaseLayout = ({ match }) => {
  return (
    <Fragment>
      <PageHeader title="Database" useMaxWidth={false}>
        <PageHeaderTabs>
          <Link to={`${match.url}/data`}>Data</Link>
          <Link to={`${match.url}/rules`}>Rules</Link>
          <Link to={`${match.url}/indexes`}>Indexes</Link>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <Switch>
          <Route path="/projects/:projectId/database/:databaseType/data" component={Data} />
          <Route path="/projects/:projectId/database/:databaseType/rules" component={Rules} />
          <Route path="/projects/:projectId/database/:databaseType/indexes" component={DataIndexes} />
          <Redirect to={`${match.url}/data`} />
        </Switch>
      </Panel>
    </Fragment>
  )
}

export default DatabaseLayout
