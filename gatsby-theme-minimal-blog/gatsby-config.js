const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `bla` } = options

  return {
    siteMetadata: {
      siteTitle: `Lupin`,
      siteTitleAlt: `Image machine`,
      siteHeadline: `ba`,
      siteUrl: `https://minimal-blog.lekoarts.de`,
      siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `@lekoarts_de`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}