const languages = require('./src/data/languages.js');

module.exports = {
  siteMetadata: {
    title: `Athena Game Show`,
    languages
  },
  plugins: [
    `gatsby-plugin-jss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
