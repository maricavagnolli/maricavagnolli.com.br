module.exports = {
  siteMetadata: {
    title: "Nutricionista Mariana Cavagnolli",
    titleTemplate: "%s · Nutricionista Mariana Cavagnolli",
    description: "Cure e previna doenças com a nutrição.",
    url: "https://www.maricavagnolli.com.br",
    author: "Nutricionista Mariana Cavagnolli",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-9BZW49FP6H",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-remark-images",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `./posts/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve("./src/templates/Post.tsx"),
        },
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 800,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans`, `roboto\:100,200,300,400,500`, `sacramento`],
        display: "swap",
      },
    },
  ],
};
