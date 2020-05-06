const path = require('path')
const fs = require('fs')

exports.onPreInit = () => {
  if (process.argv[2] === 'build') {
    fs.rmdirSync(path.join(__dirname, 'docs'), { recursive: true })
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'))
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// © 2020 GitHub, Inc.
