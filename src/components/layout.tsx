/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"

import { useTheme } from "../hooks/useTheme"

const Layout = ({ children }) => {
  const { darkMode } = useTheme()
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="bg-white dark:bg-gray-900">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
