import { useStaticQuery, graphql } from "gatsby"


const useLeagues = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query leaguesQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: {regex: "/(teams)/"  }}
          sort: { order: ASC, fields: [frontmatter___dateStart]}
        ) {
          edges {
            node {
              frontmatter {
                tournament
                teams
                dateStart
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

export default useLeagues;