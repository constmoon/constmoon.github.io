import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import "@styles/blog.scss"

export default function blogTemplate({ data }) {
  const post = data?.markdownRemark

  return (
    <Layout>
      <SEO
        title={`jiwoo - ${post.frontmatter.title}`}
        description={post.excerpt}
      />
      <div className="container">
        <div className="blog-header">
          <h1 className="blog-title">{post.frontmatter.title}</h1>
          <div className="blog-date">{post.frontmatter.date}</div>
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
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
      excerpt(pruneLength: 200)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`
