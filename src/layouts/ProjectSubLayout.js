import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, Link, useParams, useRouteMatch } from 'react-router-dom'
import ProjectContext from '../utils/ProjectContext'
import ProjectSidebar from '../ui/ProjectSidebar'
import Overview from '../projects/Overview'
import { getProject } from '../utils/api'
import AuthenticationLayout from '../projects/authentication/AuthenticationLayout'
import DatabaseHome from '../projects/database/DatabaseHome'
import DatabaseLayout from '../projects/database/DatabaseLayout'

const ProjectSubLayout = () => {
  const [project, setProject] = useState(false)
  const match = useRouteMatch()
  const { projectId } = useParams()

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
          <nav className="project-nav horizontal-spacing" style={{ color: 'white' }}>
            <span className="text-light-tint">{project.name}</span>
            <span> : </span>
            <Link
              to={{ pathname: '/projects/add', state: { cancelPathname: location.pathname } }}
              className="text-light-tint">
              Add Project
            </Link>
          </nav>
          <main>
            <Switch>
              <Route path={`${match.path}/overview`}>
                <Overview />
              </Route>
              <Route path={`${match.path}/authentication`}>
                <AuthenticationLayout />
              </Route>
              <Route path={`${match.path}/database`} exact>
                <DatabaseHome />
              </Route>
              <Route path={`${match.path}/database/:databaseType`}>
                <DatabaseLayout />
              </Route>
              <Redirect to={`${match.path}/overview`} />
            </Switch>
          </main>
        </div>
      </div>
    </ProjectContext.Provider>
  )
}

export default ProjectSubLayout
