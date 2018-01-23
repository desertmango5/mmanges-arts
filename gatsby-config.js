require('dotenv').config({ path: './.env.development' })
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: `Mmanges Arts`,
    byline: `Art speaks where words can't`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
};
