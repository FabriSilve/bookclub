import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from '../components/layouts/Section';


export const leaguesQuery = graphql`
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

const IndexPage = (props) => {
  const leagues = props.data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      {leagues.edges.map(({ node }) => (
        <Section key="node.frontmatter.tournament">
          <h1>{node.frontmatter.tournament}</h1>
          <h2>{node.frontmatter.dateStart}</h2>
          <ul>
            {node.frontmatter.teams.map((value) => (
              <li key={value}>{`${value}`.toUpperCase()}</li>
            ))}
          </ul>
        </Section>
      ))}
    </Layout>
  );
};

export default IndexPage
