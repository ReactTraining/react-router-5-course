import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Panel from '../ui/Panel'
import Tiles from '../ui/Tiles'
import Card from '../ui/Card'
import { getProjects } from '../utils/api'

const AccountSubLayout = ({ history }) => {
  const [projects, setProjects] = useState(false)

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <div className="account-sub-layout">
      <Panel className="panel-welcome-to-firebase">
        <h1 className="heading-1">Almost Firebase!</h1>
        <p>
          Tools from Google for developing great apps, engaging with
          <br />
          your users, and earning more through mobile ads.
        </p>
        <p className="horizontal-spacing">
          <a href="#">Learn More</a>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </p>
      </Panel>
      <Panel className="panel-recent-projects">
        <p>Recent projects</p>
        <div>
          <Tiles>
            <Card
              className="card-recent-project center-blocks"
              style={{ height: '14em', cursor: 'pointer' }}
              role="link"
              onClick={() => history.push('')}>
              <Link className="block" to="#">
                Add Project
              </Link>
            </Card>
            {Array.isArray(projects) &&
              projects.map(project => (
                <Card
                  key={project.id}
                  className="card-recent-project spacing-small"
                  style={{ height: '14em', cursor: 'pointer' }}
                  role="link"
                  onClick={() => history.push(`/projects/${project.id}`)}>
                  <h1 className="heading-3">{project.name}</h1>
                  <div>{project.id}</div>
                </Card>
              ))}
          </Tiles>
        </div>
      </Panel>
    </div>
  )
}

export default AccountSubLayout
