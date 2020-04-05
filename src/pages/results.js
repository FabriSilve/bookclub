import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from '../components/layouts/Section'


export const resultsQuery = graphql`
  query tournamentsQuery {
    allMarkdownRemark(
    	filter: {fileAbsolutePath: {regex: "/(tournaments)/"}},
    	sort: {order: ASC, fields: [frontmatter___date]}) {
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

const Results = (props) => {
  console.log(props.data.allMarkdownRemark)
  const tournaments = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Risultati" />
      {tournaments.edges.map(({ node }) => (
        <Section key={node.frontmatter.name}>
          <h1>{node.frontmatter.name}</h1>
          <h2>{node.frontmatter.date}</h2>
          {node.frontmatter.days.map((matches, i) => (
            <table key={i} style={{ width: '100%', margin: '1rem'}}>
              <thead>
                <tr>
                  <th>casa</th>
                  <th>trasferta</th>
                  <th>andata</th>
                  <th>ritorno</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((teams, i) => (
                  <tr key={i}>
                    <td>{teams[0]}</td>
                    <td>{teams[1]}</td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </Section>
      ))}
    </Layout>
  );
}

export default Results
