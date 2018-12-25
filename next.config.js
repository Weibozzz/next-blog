/* eslint-disable */
const withLess = require('@zeit/next-less')

module.exports =   withLess(
  {
    lessLoaderOptions: {
      javascriptEnabled: true,
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",

    },
    distDir: 'lwbBlogBuild'
  }
)
