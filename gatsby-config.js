module.exports = {
  siteMetadata: {
    title: `Jiwoo Kang`,
    description: `blog based on gatsby`,
    author: `constmoon`,
    name: `강지우, Jiwoo Kang`,
    mail: `jiiw.kang@gmail.com`,
    siteUrl: `https://constmoon.github.io`,
    social: {
      github: `https://github.com/constmoon`,
      twitter: `https://twitter.com/constmoon`,
      facebook: `https://www.facebook.com/profile.php?id=1262115677`,
    },
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
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              maxWidth: 768,
              height: 432,
              related: false,
              noIframeBorder: true
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              wrapperStyle: `margin-top: 1rem;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `width: 100%; height: 100%; margin-bottom: 1.6rem;`,
            },
          },
        ],
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
    `gatsby-plugin-sass`,
  ],
}
