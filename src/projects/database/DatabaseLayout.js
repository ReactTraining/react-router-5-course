import React, { Fragment } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
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
          <NavLink activeClassName="active" to={`${match.url}/data`}>
            Data
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/rules`}>
            Rules
          </NavLink>
          <NavLink activeClassName="active" to={`${match.url}/indexes`}>
            Indexes
          </NavLink>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <Switch>
          <Route path={`${match.path}/data`} component={Data} />
          <Route path={`${match.path}/rules`} component={Rules} />
          <Route path={`${match.path}/indexes`} component={DataIndexes} />
          <Redirect to={`${match.path}/data`} />
        </Switch>
      </Panel>
    </Fragment>
  )
}

export default DatabaseLayout
