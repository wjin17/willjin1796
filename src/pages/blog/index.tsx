import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/layout"

const PostLink = ({ post }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 rounded-md bg-gray-300 bg-opacity-30">
      <Link to={post.frontmatter.slug}>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.frontmatter.date}</p>
        <p className="mt-3">{post.excerpt}</p>
      </Link>
    </div>
  )
}

const BlogList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <div className="min-h-screen px-10 pt-20 sm:pt-32 pb-20 sm:px-14">
        {Posts}
      </div>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
