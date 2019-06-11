import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const ProjectSidebar = ({ match }) => (
  <aside className="project-sidebar">
    <nav className="overview">
      <Link to={`${match.url}/overview`} className="heading-4">
        Project Overview
      </Link>
    </nav>
    <nav className="open spacing">
      <h1 className="heading-4">Develop</h1>
      <div className="spacing-medium">
        <Link to={`${match.url}/authentication`}>Authentication</Link>
        <Link to={`${match.url}/database`}>Database</Link>
        <Link to={`${match.url}/storage`}>Storage</Link>
        <Link to={`${match.url}/hosting`}>Hosting</Link>
        <Link to={`${match.url}/functions`}>Functions</Link>
        <Link to={`${match.url}/ml-kit`}>ML Kit</Link>
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

export default withRouter(ProjectSidebar)
