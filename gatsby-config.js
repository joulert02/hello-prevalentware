module.exports = {
  siteMetadata: {
    title: "hello-prevalentware",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Hello Prevalentware`,
        short_name: `Hello Prevalentware`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        display: `standalone`,
        theme_color: `#a2466c`,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'modal-root',
        id: 'modal-root',
      },
    },
  ],
};
