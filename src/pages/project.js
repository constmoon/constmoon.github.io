import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"

const ProjectPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id} className="project-list">
          <Link to={post.node.frontmatter.path} >
            <h2>{post.node.frontmatter.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query ProjectIndex {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}, 
        filter: {frontmatter: {category: {eq: "project"}}}
    )
    {
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