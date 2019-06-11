import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const ProjectSidebar = () => {
  return (
    <aside className="project-sidebar">
      <nav className="overview">
        <Link to="/projects/:projectId/overview" className="heading-4">
          Project Overview
        </Link>
      </nav>
      <nav className="open spacing">
        <h1 className="heading-4">Develop</h1>
        <div className="spacing-medium">
          <Link to="/projects/:projectId/authentication">Authentication</Link>
          <Link to="/projects/:projectId/database">Database</Link>
          <Link to="/projects/:projectId/storage">Storage</Link>
          <Link to="/projects/:projectId/hosting">Hosting</Link>
          <Link to="/projects/:projectId/functions">Functions</Link>
          <Link to="/projects/:projectId/ml-kit">ML Kit</Link>
        </div>
      </nav>
      <nav className="spacing-small">
        <h1 className="heading-4">Quality</h1>
        <p>Crashlytics, Performance, Test Lab</p>
      </nav>
      <nav className="spacing-small">
        <h1 className="heading-4">Analytics</h1>
        <p>Dashboard, Events, Conversions, Audiences</p>
      </nav>
      <nav className="spacing-small">
        <h1 className="heading-4">Grow</h1>
        <p>Predictions, A/B Testing, Cloud Messaging</p>
      </nav>
    </aside>
  )
}

export default withRouter(ProjectSidebar)
