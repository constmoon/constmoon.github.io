import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import "@styles/project.scss"
import { groupBy, orderBy } from "es-toolkit/array"

const ProjectPage = ({ data }) => {
  const edges = data?.allMarkdownRemark?.edges ?? []

  const groups = groupBy(edges, (post) => {
    const rawDate = post?.node?.frontmatter?.date
    const year = rawDate ? new Date(rawDate).getFullYear() : NaN
    return Number.isFinite(year) ? String(year) : "Unknown"
  })

  const yearGroups = orderBy(
    Object.entries(groups),
    [([year]) => (year === "Unknown" ? -Infinity : Number(year))],
    ["desc"]
  )

  return (
    <Layout>
      <SEO title="Project" />
      <div className="notice">(업데이트 예정)</div>
      <div className="project-index">
        {yearGroups.map(([year, posts]) => (
          <section key={year} className="project-year-group">
            <h2 className="project-year">{year}</h2>
            <ul className="project-year-list">
              {posts.map((post) => (
                <li key={post.node.id} className="project-year-item">
                  <Link to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
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
