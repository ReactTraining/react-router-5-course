import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      <Route
        render={({ location: { pathname, search, hash } }) =>
          pathname.slice(-1) === '/' && pathname !== '/' ? (
            <Redirect to={`${pathname.slice(0, -1)}${search}${hash}`} />
          ) : (
            children
          )
        }
      />
    </BrowserRouter>
  )
}

export default Router
