const path = require("path")

// const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(matches)/"}},
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              date
              home {
                team
                goals
              }
              visitor {
                team
                goals
              }
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        return reject(result.errors)
      }

      const matchTemplate = path.resolve(`src/templates/match.js`);

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `match/${node.frontmatter.home.team}-vs-${node.frontmatter.visitor.team}`,
          component: matchTemplate,
          context: { ...node.frontmatter },
        })
      })
      return
    })
    )
  })
}