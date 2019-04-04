import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Columns, Column } from 'react-flex-columns'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import Card from '../../ui/Card'

const DatabaseHome = ({ match }) => {
  return (
    <Fragment>
      <PageHeader title="Database" useMaxWidth={false} />
      <Panel>
        <Columns gutterSize={0.8}>
          <Column flex>
            <Card className="spacing">
              <h1 className="heading-3">Cloud Firestore</h1>
              <div>
                <Link to={`${match.url}/firestore`}>View</Link>
              </div>
            </Card>
          </Column>
          <Column flex>
            <Card className="spacing">
              <h1 className="heading-3">Realtime Database</h1>
              <div>
                <Link to={`${match.url}/realtime`}>View</Link>
              </div>
            </Card>
          </Column>
        </Columns>
      </Panel>
    </Fragment>
  )
}

export default DatabaseHome
