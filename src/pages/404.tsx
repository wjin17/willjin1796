import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="min-h-screen px-10 pt-40 pb-30 sm:px-14">
      <div className="w-full max-w-6xl mx-auto sm:flex">
        <div className="mt-20 sm:mt-40 mb-20">
          <h1>404: Not Found</h1>
          <p>This route doesn't exist</p>
        </div>
        <div className="mx-auto my-auto">
          <img className="sm:max-w-xs max-h-1/4" src={"/me.png"} />
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
