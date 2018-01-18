require('dotenv').config({ path: './.env.development' })

module.exports = {
  siteMetadata: {
    title: `Mmanges Arts`,
    byline: `Art speaks where words can't`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
