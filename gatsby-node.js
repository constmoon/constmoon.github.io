const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            html
            excerpt(pruneLength: 200)
            frontmatter {
              path
              category
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const edges = result?.data?.allMarkdownRemark?.edges ?? []
  edges.forEach(({ node }) => {
    if (!node?.frontmatter?.path) return
    if (node.frontmatter.category === "project") {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        context: { slug: node.frontmatter.path },
      })
    } else {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: { slug: node.frontmatter.path },
      })
    }
  })
}
