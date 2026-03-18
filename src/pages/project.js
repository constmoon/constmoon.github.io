import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"

const ProjectPage = ({ data }) => {
  const edges = data?.allMarkdownRemark?.edges ?? []
  return (
    <Layout>
      <SEO title="Project" />
      <ul>
        {edges.map((post) => (
          <li key={post.node.id} className="project-list">
            <Link to={post.node.frontmatter.path}>
              <h2>{post.node.frontmatter.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectIndex {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            date
            tags
          }
        }
      }
    }
  }
`

export default ProjectPage
