const path = require("path")


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const matchTemplate = path.resolve(`src/templates/match.js`);
  const matchResult = await graphql(`
    query {
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
                possession
                shots
                shotsIn
                faults
                offsides
                corners
                penalties
                passages
                passagesSucceded
                cross
                passagesIntercepted
                tackels
                saves
                scoorers
              }
              visitor {
                team
                goals
                possession
                shots
                shotsIn
                faults
                offsides
                corners
                penalties
                passages
                passagesSucceded
                cross
                passagesIntercepted
                tackels
                saves
                scoorers
              }
            }
          }
        }
      }
    }
  `);
  matchResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `match/${node.frontmatter.home.team}-vs-${node.frontmatter.visitor.team}`,
      component: matchTemplate,
      context: { ...node.frontmatter },
    })
  })
}