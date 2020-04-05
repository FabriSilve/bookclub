import { useStaticQuery, graphql } from "gatsby"


const useMatches = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query matchesQuery {
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
    `
  )
  return allMarkdownRemark.edges
}

export default useMatches;