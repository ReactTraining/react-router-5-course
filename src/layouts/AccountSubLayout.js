import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Panel from '../ui/Panel'
import AddProject from '../projects/AddProject'
import { getProjects } from '../utils/api'
import ProjectList from '../projects/ProjectList'
import FirebaseInfo from '../projects/FirebaseInfo'

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

  const renderProjectList = () => <ProjectList projects={projects} history={history} />

  return (
    <div className="account-sub-layout">
      <Panel className="panel-welcome-to-firebase">
        <FirebaseInfo />
      </Panel>
      <Panel className="panel-recent-projects">
        <Route path="/projects" exact render={renderProjectList} />
        <Route path="/projects/add" component={AddProject} />
      </Panel>
    </div>
  )
}

export default AccountSubLayout
