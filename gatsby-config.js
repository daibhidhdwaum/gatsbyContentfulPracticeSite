/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "David Downie | Web Developer",
    author: "David Downie",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    /* This loads raw files from the filesystem */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "source",
        path: `${__dirname}/src/`,
      },
    },
    // There are 3 plugins required to display images
    // gatsby-plugin-sharp
    // gatsby-transformer-remark
    // gatsby-remark-relative-images
    "gatsby-plugin-sharp",
    {
      // This allows us to display the raw files as html
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
