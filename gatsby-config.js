module.exports = {
  siteMetadata: {
    title: `jiwoo`,
    description: `blog based on gatsby`,
    author: `constmoon`,
    name: `강지우, Jiwoo Kang`,
    siteUrl: `https://constmoon.github.io`,
    social: {
      github: `https://github.com/constmoon`,
      twitter: `https://twitter.com/constmoon`,
      facebook: `https://www.facebook.com/profile.php?id=1262115677`,
    },
    navigation: [
      {
        title: `About`,
        slug: `/about`,
      },
      {
        title: `Works`,
        slug: `/work`,
      },
      {
        title: `Posts`,
        slug: `/post`,
      },
      {
        title: `Tags`,
        slug: `/tag`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
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
          "@pages": "src/pages",
          "@content": "src/content",
          "@styles": "src/styles",
          "@templates": "src/templates",
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
