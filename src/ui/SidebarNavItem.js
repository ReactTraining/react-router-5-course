import React from 'react'

const SidebarNavItem = ({ title, description }) => (
  <nav className="spacing-small">
    <h1 className="heading-4">{title}</h1>
    <p>{description}</p>
  </nav>
)

export default SidebarNavItem
