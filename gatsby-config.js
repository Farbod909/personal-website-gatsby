module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/blog_posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
