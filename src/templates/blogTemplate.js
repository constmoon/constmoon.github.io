import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import "@styles/blog.scss"

export default function blogTemplate({ data }) {
  const post = data?.markdownRemark

  return (
    post && (
      <Layout>
        <SEO title={`jiwoo - ${post.frontmatter.title}`} />
        <div className="post-container">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    )
  )
}
export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`
