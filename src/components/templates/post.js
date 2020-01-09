import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from '@components/Layout'
import "@styles/post.scss"

export default function Template({ data }) {
  const { markdownRemark: post } = data
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`