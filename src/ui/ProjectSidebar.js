import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import SidebarNavItem from './SidebarNavItem'

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
    <SidebarNavItem title="Quality" description="Crashlytics, Performance, Test Lab"></SidebarNavItem>
    <SidebarNavItem title="Analytics" description="Dashboard, Events, Conversions, Audiences"></SidebarNavItem>
    <SidebarNavItem title="Grow" description="Predictions, A/B Testing, Cloud Messaging"></SidebarNavItem>
  </aside>
)

export default withRouter(ProjectSidebar)
