import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import "@styles/blog.scss"

export default function blogTemplate({ data }) {
  const { markdownRemark: post } = data
  const tags = post.frontmatter.tags || []
  return (
    <Layout>
      <Helmet title={`jiwoo - ${post.frontmatter.title}`} />
      <div className="post-container">
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`