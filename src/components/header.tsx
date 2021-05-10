import React from "react"
import { Link } from "gatsby"

import { SunIcon, MoonIcon, GithubIcon, LinkedInIcon } from "./icons"
//import Me from "../images/Me.png"

import { useTheme } from "../hooks/useTheme"

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  return (
    <header className="fixed top-0 bg-white dark:bg-gray-900 w-full border-b-0 border-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex flex-1 py-3 items-center justify-start">
            <div className="h-12 w-12">
              <Link to="/">
                <img src={"/me.png"} alt="cartoon me" />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 py-3 items-center justify-end">
            <a
              className="h-8 w-8 sm:h-8 mx-3"
              href="https://github.com/wjin17"
              target="_blank"
              rel="noopener"
            >
              <GithubIcon darkMode={darkMode} />
            </a>
            <a
              className="h-8 w-8 sm:h-8 mx-3"
              href="https://www.linkedin.com/in/willjin1796/"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon darkMode={darkMode} />
            </a>
            <a
              href="/Willie.Jin.Resume.April.2021.pdf"
              target="_blank"
              rel="noopener"
            >
              <p className="text-black dark:text-white mx-3">Resume</p>
            </a>
            <Link to="/blog">
              <p className="text-black dark:text-white mx-3 hover:underline">
                Blog
              </p>
            </Link>
            <div className="h-8 w-8 sm:h-10 mx-3 flex">
              <button
                className="mx-auto my-auto outline-none transition-opacity"
                onClick={() => toggleDarkMode(!darkMode)}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
