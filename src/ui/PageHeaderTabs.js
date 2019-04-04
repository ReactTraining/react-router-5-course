import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageHeaderTabs = ({ children }) => <div className="page-header-tabs">{children}</div>

// Just a wrapper around NavLink
export const Tab = ({ ...rest }) => <NavLink activeClassName="active" {...rest} />
