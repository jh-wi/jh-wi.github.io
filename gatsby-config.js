module.exports = {
  siteMetadata: {
    siteUrl: "https://henrywilliams.dev/",
    title: "Henry's Dev Site",
	image: "../../assets/site-logo.png"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
