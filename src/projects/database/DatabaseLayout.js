import React, { Fragment } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Data from './Data'
import Rules from './Rules'
import DataIndexes from './DataIndexes'

const DatabaseLayout = () => {
  return (
    <Fragment>
      <PageHeader title="Database" useMaxWidth={false}>
        <PageHeaderTabs>
          <Link to="/projects/:projectId/database/data">Data</Link>
          <Link to="/projects/:projectId/database/rules">Rules</Link>
          <Link to="/projects/:projectId/database/indexes">Indexes</Link>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <Switch>
          <Route path="/projects/:projectId/database/data" component={Data} />
          <Route path="/projects/:projectId/database/rules" component={Rules} />
          <Route path="/projects/:projectId/database/indexes" component={DataIndexes} />
          <Redirect to="/projects/:projectId/database/data" />
        </Switch>
      </Panel>
    </Fragment>
  )
}

export default DatabaseLayout
