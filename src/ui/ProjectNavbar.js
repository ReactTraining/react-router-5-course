import React from 'react'
import { Link } from 'react-router-dom'

const ProjectNavbar = ({ projectName }) => {
  const linkTo = { pathname: '/projects/add', state: { cancelPathname: location.pathname } }

  return (
    <nav className="project-nav horizontal-spacing" style={{ color: 'white' }}>
      <span className="text-light-tint">{projectName}</span>
      <span> : </span>
      <Link to={linkTo} className="text-light-tint">
        Add Project
      </Link>
    </nav>
  )
}

export default ProjectNavbar
