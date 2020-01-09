module.exports = {
  siteMetadata: {
    title: `jiwoo`,
    description: `blog based on gatsby`,
    author: `constmoon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jiwoo`,
        short_name: `jiwoo`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@assets": "src/assets",
          "@components": "src/components",
          "@layouts": "src/components/layouts",
          "@templates": "src/components/templates",
          "@pages": "src/pages",
          "@posts": "src/posts",
          "@styles": "src/styles",
        },
        extensions: [
          "js",
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
