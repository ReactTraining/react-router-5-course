import React, { Fragment, useContext } from 'react'
import { Columns, Column } from 'react-flex-columns'
import ProjectContext from '../utils/ProjectContext'
import Panel from '../ui/Panel'
import Card from '../ui/Card'
import PageHeader from '../ui/PageHeader'

const Overview = () => {
  const projectContext = useContext(ProjectContext)

  return (
    <Fragment>
      <PageHeader style={{ height: '25em' }}>
        <h1 className="heading-2 horizontal-spacing">
          <span>{projectContext.name}</span>
          <span className="plan">Blaze plan</span>
        </h1>
        <div>
          <span className="add-app text-light-tint">Add app</span>
        </div>
      </PageHeader>
      {/* The extra height of the header and the negative margin of this div
          pulls the panel up into the blue area of the header
      */}
      <div style={{ marginTop: '-18em' }}>
        <Panel>
          <h2 className="heading-3 text-light-tint">Develop</h2>
          <Columns gutterSize={0.8}>
            <Column flex>
              <Card style={{ height: '20em' }}>Hosting</Card>
            </Column>
            <Column flex>
              <Card style={{ height: '20em' }}>Realtime Database</Card>
            </Column>
          </Columns>
        </Panel>
      </div>
    </Fragment>
  )
}

export default Overview
