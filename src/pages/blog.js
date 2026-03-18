import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { groupBy, orderBy } from "es-toolkit/array"

const BlogPage = ({ data }) => {
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
      <SEO title="Blog" />
      <div className="blog-list">
        {yearGroups.map(([year, posts]) => (
          <section key={year} className="year-group">
            <h2 className="year">{year}</h2>
            <ul className="year-list">
              {posts.map(({ node }) => (
                <li key={node.id} className="year-item">
                  <Link to={node.frontmatter.path}>
                    {node.frontmatter.title}
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
  query BlogIndex {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
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

export default BlogPage
