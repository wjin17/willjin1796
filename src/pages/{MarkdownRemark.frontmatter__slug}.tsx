import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.excerpt} />
      <div className="min-h-screen px-10 pt-20 sm:pt-40 pb-20 sm:px-14 flex">
        <div className="w-full max-w-xl mx-auto">
          <div className="blog">
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.date}</h3>
            <div
              className="blog-post mt-6"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 100)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
