import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


export const resultsQuery = graphql`
  query resultsQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(Primavera2020)/"  }}
      sort: { order: ASC, fields: [frontmatter___day]}
    ) {
      edges {
        node {
          frontmatter {
            day
            matches
          }
        }
      }
    }
  }
`

const Results = (props) => {
  console.log(props.data.allMarkdownRemark)
  const days = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Risultati" />
      <h1>Risultati Partite</h1>
      <p>Work in progress</p>
      {days.edges.map(({ node }, i) => (
        <section key={i}>
          <h3>Giornata {node.frontmatter.day}</h3>
          {node.frontmatter.matches.map((value, i) => (
            <div key={i}>
              {value.map((value, i) => (<span key={i}>{value} :</span>))}
            </div>
          ))}
          <hr/>
          <br />
        </section>
      ))}
    </Layout>
  );
}

export default Results
