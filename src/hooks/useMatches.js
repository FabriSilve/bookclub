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
    `
  )
  return allMarkdownRemark.edges
}

export default useMatches;