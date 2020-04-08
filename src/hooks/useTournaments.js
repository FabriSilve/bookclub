import { useStaticQuery, graphql } from "gatsby"


const useTournaments = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query tournamentsQuery {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(tournaments)/"}},
        sort: {order: ASC, fields: [frontmatter___date]}
      ) {
        edges {
          node {
            frontmatter {
              name
              date
              days
            }
          }
        }
      }
    }
    `
  )
  return allMarkdownRemark.edges
}

export default useTournaments;
