import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const ProjectSidebar = ({ match }) => (
  <aside className="project-sidebar">
    <nav className="overview">
      <NavLink activeClassName="active" to={`${match.url}/overview`} className="heading-4">
        Project Overview
      </NavLink>
    </nav>
    <nav className="open spacing">
      <h1 className="heading-4">Develop</h1>
      <div className="spacing-medium">
        <NavLink activeClassName="active" to={`${match.url}/authentication`}>
          Authentication
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/database`}>
          Database
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/storage`}>
          Storage
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/hosting`}>
          Hosting
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/functions`}>
          Functions
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/ml-kit`}>
          ML Kit
        </NavLink>
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
