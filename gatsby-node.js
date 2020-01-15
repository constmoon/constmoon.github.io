const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path,
              category
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if(node.frontmatter.category === 'project') {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        context: {},
      })
    }
    else {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {},
      })
    }
  })
}