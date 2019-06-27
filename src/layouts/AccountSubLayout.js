import React, { useEffect, useState, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import Panel from '../ui/Panel'
import Tiles from '../ui/Tiles'
import Card from '../ui/Card'
import AddProject from '../projects/AddProject'
import { getProjects } from '../utils/api'

const AccountSubLayout = ({ match, history }) => {
  const [projects, setProjects] = useState(false)

  useEffect(() => {
    let isCurrent = true
    getProjects().then(projects => {
      if (isCurrent) {
        setProjects(projects)
      }
    })
    return () => (isCurrent = false)
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
        <Route path="/projects/add" component={AddProject} />
        <Route
          path="/projects"
          exact
          render={() => {
            return (
              <Fragment>
                <p>Recent projects</p>
                <div>
                  <Tiles>
                    <Card className="card-recent-project center-blocks" style={{ height: '14em', cursor: 'pointer' }}>
                      <Link className="block" to="/projects/add">
                        Add Project
                      </Link>
                    </Card>
                    {Array.isArray(projects) &&
                      projects.map(project => (
                        <div role="link" key={project.id} onClick={() => history.push(`/projects/${project.id}`)}>
                          <Card
                            className="card-recent-project spacing-small"
                            style={{ height: '14em', cursor: 'pointer' }}>
                            <h1 className="heading-3">{project.name}</h1>
                            <div>{project.id}</div>
                          </Card>
                        </div>
                      ))}
                  </Tiles>
                </div>
              </Fragment>
            )
          }}
        />
      </Panel>
    </div>
  )
}

export default AccountSubLayout
