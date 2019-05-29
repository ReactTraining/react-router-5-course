import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProjectContext from '../utils/ProjectContext'
import ProjectSidebar from '../ui/ProjectSidebar'
import Overview from '../projects/Overview'
import { getProject } from '../utils/api'
import AuthenticationLayout from '../projects/authentication/AuthenticationLayout'
import DatabaseHome from '../projects/database/DatabaseHome'
import DatabaseLayout from '../projects/database/DatabaseLayout'

const ProjectSubLayout = ({ match }) => {
  const [project, setProject] = useState(false)
  const { projectId } = match.params

  useEffect(() => {
    let isCurrent = true
    getProject(projectId).then(project => {
      if (isCurrent) {
        setProject(project)
      }
    })
    return () => (isCurrent = false)
  }, [projectId])

  return (
    <ProjectContext.Provider value={project}>
      <div className="project-sub-layout">
        <ProjectSidebar />
        <div className="project-primary-content">
          <nav className="project-nav">
            <span className="text-light-tint">{project.name}</span>
          </nav>
          <main>
            <Switch>
              <Route path={`${match.url}/overview`} component={Overview} />
              <Route path={`${match.url}/authentication`} component={AuthenticationLayout} />
              <Route path={`${match.url}/database`} exact component={DatabaseHome} />
              <Route path={`${match.url}/database/:databaseType`} component={DatabaseLayout} />
              <Redirect to={`${match.url}/overview`} />
            </Switch>
          </main>
        </div>
      </div>
    </ProjectContext.Provider>
  )
}

export default ProjectSubLayout
