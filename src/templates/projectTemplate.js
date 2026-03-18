import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import "@styles/project.scss"

export default function projectTemplate({ data }) {
  const post = data?.markdownRemark

  return (
    post && (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="project-container">
          <h1 className="project-title">{post.frontmatter.title}</h1>
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    )
  )
}
export const query = graphql`
  query ProjectPostBySlug($slug: String!) {
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
      excerpt(pruneLength: 200)
    }
  }
`
