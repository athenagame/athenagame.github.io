const languages = require('./src/data/languages.js');

module.exports = {
  siteMetadata: {
    title: `Athena Game Show`,
    titleTemplate: '%s · Athena Game Show',
    url: 'https://www.athenagameshow.com',
    description: languages.headline.en,
    twitterUsername: '@athenagameshow',
    image: '/static/logo.svg',
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
