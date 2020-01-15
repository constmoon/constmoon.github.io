import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import "@styles/project.scss"

export default function projectTemplate({ data }) {
  const { markdownRemark: post } = data
  const tags = post.frontmatter.tags || []
  return (
    <Layout>
      <Helmet title={`jiwoo - ${post.frontmatter.title}`} />
      <div className="project-container">
        <h1 className="project-title">{post.frontmatter.title}</h1>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ProjectPostByPath($path: String!) {
        site {
        siteMetadata {
        title
        author
    }
  }
    markdownRemark(frontmatter: {path: {eq: $path } }) {
        html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
      path
      title
    }
  }
}
`