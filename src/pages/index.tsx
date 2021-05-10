import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GithubIcon, LinkedInIcon } from "../components/icons"

import { useTheme } from "../hooks/useTheme"

const IndexPage = () => {
  const { darkMode } = useTheme()
  return (
    <Layout>
      <Seo title="Willie Jin" />
      <section className="sm:min-h-hero px-10 pt-40 pb-30 sm:px-14 flex">
        <div className="w-full max-w-6xl my-auto mx-auto">
          <div className="max-w-sm mx-auto">
            <h1 className="font-bold">Hi</h1>
            <p>
              My name is Willie Jin and I am a computer science master's student
              at NYU in the MS-CEI program.
            </p>
            <div className="mt-8 flex sm:flex-row justify-between align-middle">
              <Link
                className="px-8 py-2 border-2 border-black dark:border-white rounded-sm hover:bg-gray-400 hover:bg-opacity-20"
                to="/#background"
              >
                <p>Background</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="background" className="flex px-10 sm:px-14 pt-40 pb-56">
        <div className="w-full max-w-6xl my-auto mx-auto">
          <div className="max-w-lg mx-auto">
            <h1 className="font-bold">Background</h1>
            <p className="mt-6">
              I started out as an eletrical engineer and while it was fun to
              design digital logic with FPGAs, it just wasn't for me. I wanted
              to work on projects that have a direct impact on people's lives
              and help make their lives better. A friend introduced me to web
              development while working at Cisco and I've been hooked ever
              since.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
