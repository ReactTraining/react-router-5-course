import React, { useState } from 'react'
import Cookies from 'js-cookie'

export const AuthUserContext = React.createContext()

// So we don't conflict with your localhost
const cookieName = 'RR5CourseLogged'

export const AuthUserProvider = ({ children }) => {
  const cookieLogged = Cookies.getJSON(cookieName)
  const [logged, setLogged] = useState(cookieLogged ? cookieLogged.logged : false)

  function login() {
    Cookies.set(cookieName, { logged: true })
    setLogged(true)
  }

  function logout() {
    Cookies.remove(cookieName)
    setLogged(false)
  }

  return <AuthUserContext.Provider value={{ logged, login, logout }}>{children}</AuthUserContext.Provider>
}
