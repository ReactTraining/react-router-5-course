import React, { Fragment } from 'react'
import Tiles from '../ui/Tiles'
import Card from '../ui/Card'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects, history }) => {
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
                <Card className="card-recent-project spacing-small" style={{ height: '14em', cursor: 'pointer' }}>
                  <h1 className="heading-3">{project.name}</h1>
                  <div>{project.id}</div>
                </Card>
              </div>
            ))}
        </Tiles>
      </div>
    </Fragment>
  )
}

export default ProjectList
