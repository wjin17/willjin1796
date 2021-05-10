import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import { SunIcon, MoonIcon, GithubIcon, LinkedInIcon } from "./icons"

import Me from "../../static/Me.png"
import Resume from "../../static/Willie.Jin.Resume.April.2021.pdf"

import { useTheme } from "../hooks/useTheme"

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  return (
    <Popover className="fixed top-0 bg-white dark:bg-gray-900 w-full border-b-0 border-gray-500">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <div className="h-12 w-12">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img src={Me} alt="cartoon me" />
                  </Link>
                </div>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  className="h-8 w-8 sm:h-8 mx-3"
                  href="https://github.com/wjin17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon darkMode={darkMode} />
                </a>
                <a
                  className="h-8 w-8 sm:h-8 mx-3"
                  href="https://www.linkedin.com/in/willjin1796/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon darkMode={darkMode} />
                </a>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
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

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 shadow-2xl">
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12">
                      <Link to="/">
                        <span className="sr-only">Workflow</span>
                        <img src={Me} alt="cartoon me" />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-3 px-5 space-y-6">
                  <div>
                    <div className="mb-6 text-right">
                      <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="mx-3 font-bold">Resume</h3>
                      </a>
                    </div>
                    <div className="mb-6 text-right">
                      <Link to="/blog">
                        <h3 className="mx-3 hover:underline font-bold">Blog</h3>
                      </Link>
                    </div>
                    <div className="h-8 w-8 ml-auto mr-3 mb-6">
                      <a
                        href="https://github.com/wjin17"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon darkMode={darkMode} />
                      </a>
                    </div>
                    <div className="h-8 w-8 ml-auto mr-3 mb-6">
                      <a
                        href="https://www.linkedin.com/in/willjin1796/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon darkMode={darkMode} />
                      </a>
                    </div>
                    <div className="h-10 w-10 ml-auto mr-3 mb-6">
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
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Header
